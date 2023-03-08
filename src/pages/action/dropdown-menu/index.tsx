import { Button, Cell, DropdownMenu, Switch } from "@vnmfify/core"
import { View } from "@vnxjs/components"
import { Key, useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"

import "./index.scss"

function BasicDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenu.Item>
        <DropdownMenu.Option value={0}>All Products</DropdownMenu.Option>
        <DropdownMenu.Option value={1}>New products</DropdownMenu.Option>
        <DropdownMenu.Option value={2}>Event Items</DropdownMenu.Option>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <DropdownMenu.Option value={0}>Default order</DropdownMenu.Option>
        <DropdownMenu.Option value={1}>Praise order</DropdownMenu.Option>
        <DropdownMenu.Option value={2}>Sales sorting</DropdownMenu.Option>
      </DropdownMenu.Item>
    </DropdownMenu>
  )
}

function DropdownMenuWithCustomContent() {
  const [value, setValue] = useState<Key | false>()
  const [option1, setOption1] = useState()
  const [switch1, setSwitch1] = useState(true)
  const [switch2, setSwitch2] = useState(false)
  return (
    <DropdownMenu value={value} onChange={setValue}>
      <DropdownMenu.Item value={option1} onChange={setOption1}>
        <DropdownMenu.Option value={0}>All Products</DropdownMenu.Option>
        <DropdownMenu.Option value={1}>New products</DropdownMenu.Option>
        <DropdownMenu.Option value={2}>Event Items</DropdownMenu.Option>
      </DropdownMenu.Item>
      <DropdownMenu.Item title="Filtering">
        <Cell title="包邮" align="center">
          <Switch size="24" checked={switch1} onChange={setSwitch1} />
        </Cell>
        <Cell title="团购" align="center">
          <Switch size="24" checked={switch2} onChange={setSwitch2} />
        </Cell>
        <View style="padding: 5px 16px;">
          <Button color="danger" block shape="round" onClick={() => setValue(false)}>
            confirm
          </Button>
        </View>
      </DropdownMenu.Item>
    </DropdownMenu>
  )
}

function DropdownMenuWithCustomColor() {
  return (
    <DropdownMenu className="custom-color">
      <DropdownMenu.Item>
        <DropdownMenu.Option value={0}>All Products</DropdownMenu.Option>
        <DropdownMenu.Option value={1}>New products</DropdownMenu.Option>
        <DropdownMenu.Option value={2}>Event Items</DropdownMenu.Option>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <DropdownMenu.Option value={0}>Default order</DropdownMenu.Option>
        <DropdownMenu.Option value={1}>Praise order</DropdownMenu.Option>
        <DropdownMenu.Option value={2}>Sales sorting</DropdownMenu.Option>
      </DropdownMenu.Item>
    </DropdownMenu>
  )
}

function UpDropdownMenu() {
  return (
    <DropdownMenu direction="up">
      <DropdownMenu.Item>
        <DropdownMenu.Option value={0}>All Products</DropdownMenu.Option>
        <DropdownMenu.Option value={1}>New products</DropdownMenu.Option>
        <DropdownMenu.Option value={2}>Event Items</DropdownMenu.Option>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <DropdownMenu.Option value={0}>Default order</DropdownMenu.Option>
        <DropdownMenu.Option value={1}>Praise order</DropdownMenu.Option>
        <DropdownMenu.Option value={2}>Sales sorting</DropdownMenu.Option>
      </DropdownMenu.Item>
    </DropdownMenu>
  )
}

function DisabledDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenu.Item disabled>
        <DropdownMenu.Option value={0}>All Products</DropdownMenu.Option>
        <DropdownMenu.Option value={1}>New products</DropdownMenu.Option>
        <DropdownMenu.Option value={2}>Event Items</DropdownMenu.Option>
      </DropdownMenu.Item>
      <DropdownMenu.Item disabled>
        <DropdownMenu.Option value={0}>Default order</DropdownMenu.Option>
        <DropdownMenu.Option value={1}>Praise order</DropdownMenu.Option>
        <DropdownMenu.Option value={2}>Sales sorting</DropdownMenu.Option>
      </DropdownMenu.Item>
    </DropdownMenu>
  )
}

export default function DropdownMenuDemo() {
  return (
    <Page className="dropdown-menu-demo" title="DropdownMenu dropdown menu">
      <Block title="Basic Usage">
        <BasicDropdownMenu />
      </Block>
      <Block title="Customize menu content">
        <DropdownMenuWithCustomContent />
      </Block>
      <Block title="Custom selected state color">
        <DropdownMenuWithCustomColor />
      </Block>
      <Block title="Expand up">
        <UpDropdownMenu />
      </Block>
      <Block title="Disable Menu">
        <DisabledDropdownMenu />
      </Block>
    </Page>
  )
}