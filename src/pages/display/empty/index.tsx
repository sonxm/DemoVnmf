import { Button, Empty, Tabs } from "@vnmfify/core"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function PresetEmpty() {
  const [tab, setTab] = useState(0)
  return (
    <Block title="Picture Type">
      <Tabs value={tab} onChange={setTab}>
        <Tabs.TabPane title="Generic Error">
          <Empty>
            <Empty.Image src="error" />
            <Empty.Description>Description text</Empty.Description>
          </Empty>
        </Tabs.TabPane>
        <Tabs.TabPane title="Network Error">
          <Empty>
            <Empty.Image src="network" />
            <Empty.Description>Description text</Empty.Description>
          </Empty>
        </Tabs.TabPane>
        <Tabs.TabPane title="Search Tips">
          <Empty>
            <Empty.Image src="search" />
            <Empty.Description>Description text</Empty.Description>
          </Empty>
        </Tabs.TabPane>
      </Tabs>
    </Block>
  )
}

export default function EmptyDemo() {
  return (
    <Page title="Empty" className="empty-demo">
      <Block title="Basic Usage">
        <Empty>
          <Empty.Image />
          <Empty.Description>Description text</Empty.Description>
        </Empty>
      </Block>
      <PresetEmpty />
      <Block title="Custom Image">
        <Empty>
          <Empty.Image
            className="custom-empty__image"
            src="https://img.yzcdn.cn/vant/custom-empty-image.png"
          />
          <Empty.Description>Description text</Empty.Description>
        </Empty>
      </Block>
      <Block title="bottom content">
        <Empty>
          <Empty.Image />
          <Empty.Description>Description text</Empty.Description>
          <Button shape="round" color="danger" className="bottom-button">
            button
          </Button>
        </Empty>
      </Block>
    </Page>
  )
}