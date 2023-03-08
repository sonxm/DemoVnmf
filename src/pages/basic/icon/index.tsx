import { Badge, Flex, Notify, Tabs } from "@vnmfify/core"
import { inBrowser } from "@vnmfify/core/utils/base"
import * as icons from "@vnmfify/icons"
import { CartOutlined, ChatOutlined, FireOutlined } from "@vnmfify/icons"
import names from "@vnmfify/icons/van/names"
import { View } from "@vnxjs/components"
import * as _ from "lodash"
import { createElement, useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

// from https://30secondsofcode.org
function copyToClipboard(str: string) {
  const el = document.createElement("textarea")
  el.value = str
  el.setAttribute("readonly", "")
  el.style.position = "absolute"
  el.style.left = "-9999px"
  document.body.appendChild(el)

  const selection = document.getSelection()

  if (!selection) {
    return
  }

  const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false

  el.select()
  document.execCommand("copy")
  document.body.removeChild(el)

  if (selected) {
    selection.removeAllRanges()
    selection.addRange(selected)
  }
}

function convertIconComponentName(name: string) {
  const isOutline = _.endsWith(name, "-o")
  name = isOutline ? name.substring(0, _.size(name) - 2) + "-outlined" : name
  return _.upperFirst(_.camelCase(name))
}

interface VanIconProps {
  name: string

  onClick?(name: string): void
}

function VanIcon(props: VanIconProps) {
  const { name, onClick } = props
  const iconName = convertIconComponentName(name)
  return (
    <Flex.Item span={6} onClick={() => onClick?.(iconName)}>
      {
        // @ts-ignore
        createElement(icons[iconName])
      }
      <View className="icon-name">{iconName}</View>
    </Flex.Item>
  )
}

export default function IconDemo() {
  const [tab, setTab] = useState(0)
  const [open, setOpen] = useState(false)
  const [notify, setNotify] = useState("")

  function copyIcon(name: string) {
    if (inBrowser) {
      copyToClipboard(`<${name} />`)
      setNotify(`Copy successfully: <${name}/>`)
      setOpen(true)
    }
  }

  return (
    <Page title="Icon" className="icon-demo">
      <Notify
        className="icon-demo-notify"
        duration={1500}
        color="success"
        open={open}
        onClose={setOpen}
      >
        {notify}
      </Notify>
      <Tabs value={tab} lazyRender={false} onChange={setTab}>
        <Tabs.TabPane title="Example of usage">
          <Block title="Basic Usage">
            <Flex>
              <Flex.Item span={6}>
                <ChatOutlined />
              </Flex.Item>
              <Flex.Item span={6}>{createElement(icons.ChatOutlined)}</Flex.Item>
            </Flex>
          </Block>
          <Block title="logo tip">
            <Flex>
              <Flex.Item span={6}>
                <Badge dot>
                  <ChatOutlined />
                </Badge>
              </Flex.Item>
              <Flex.Item span={6}>
                <Badge content="9">
                  <ChatOutlined />
                </Badge>
              </Flex.Item>
              <Flex.Item span={6}>
                <Badge content="99+">
                  <ChatOutlined />
                </Badge>
              </Flex.Item>
            </Flex>
          </Block>
          <Block title="icon color">
            <Flex>
              <Flex.Item span={6}>
                <CartOutlined style={{ color: "#1989fa" }} />
              </Flex.Item>
              <Flex.Item span={6}>
                <FireOutlined style={{ color: "#ee0a24" }} />
              </Flex.Item>
            </Flex>
          </Block>
          <Block title="icon size">
            <Flex>
              <Flex.Item span={6}>
                <ChatOutlined size="40" />
              </Flex.Item>
              <Flex.Item span={6}>
                <ChatOutlined size="2rem" />
              </Flex.Item>
            </Flex>
          </Block>
        </Tabs.TabPane>
        <Tabs.TabPane title="Basic Icon">
          <Flex wrap="wrap">
            {
              //
              _.map(names.basic, (name) => (
                <VanIcon key={name} name={name} onClick={copyIcon} />
              ))
            }
          </Flex>
        </Tabs.TabPane>
        <Tabs.TabPane title="Wireframe style">
          <Flex wrap="wrap">
            {
              //
              _.map(names.outlined, (name) => (
                <VanIcon key={name} name={name} onClick={copyIcon} />
              ))
            }
          </Flex>
        </Tabs.TabPane>
        <Tabs.TabPane title="Solid style">
          <Flex wrap="wrap">
            {
              //
              _.map(names.filled, (name) => (
                <VanIcon key={name} name={name} onClick={copyIcon} />
              ))
            }
          </Flex>
        </Tabs.TabPane>
      </Tabs>
    </Page>
  )
}