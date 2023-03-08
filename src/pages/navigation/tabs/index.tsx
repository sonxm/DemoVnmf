import { Tabs, Toast } from "@vnmfify/core"
import { MoreOutlined } from "@vnmfify/icons"
import Block from "../../../components/block"
import CustomWrapper from "../../../components/custom-wrapper"
import Page from "../../../components/page"
import "./index.scss"

function BasicTabs() {
  return (
    <Tabs>
      <Tabs.TabPane title="Tab 1">Content 1</Tabs.TabPane>
      <Tabs.TabPane title="Tab 2">Content 2</Tabs.TabPane>
      <Tabs.TabPane title="Tab 3">Content 3</Tabs.TabPane>
      <Tabs.TabPane title="Tab 4">Content 4</Tabs.TabPane>
    </Tabs>
  )
}

function KeyedTabs() {
  return (
    <Tabs defaultValue="a">
      <Tabs.TabPane value="a" title="Tab 1">
        Content 1
      </Tabs.TabPane>
      <Tabs.TabPane value="b" title="Tab 2">
        Content 2
      </Tabs.TabPane>
      <Tabs.TabPane value="c" title="Tab 3">
        Content 3
      </Tabs.TabPane>
      <Tabs.TabPane value="d" title="Tab 4">
        Content 4
      </Tabs.TabPane>
    </Tabs>
  )
}

function ScrollTabs() {
  return (
    <Tabs>
      <Tabs.TabPane title="Tab 1">Content 1</Tabs.TabPane>
      <Tabs.TabPane title="Tab 2">Content 2</Tabs.TabPane>
      <Tabs.TabPane title="Tab 3">Content 3</Tabs.TabPane>
      <Tabs.TabPane title="Tab 4">Content 4</Tabs.TabPane>
      <Tabs.TabPane title="Tab 5">Content 5</Tabs.TabPane>
      <Tabs.TabPane title="Tab 6">Content 6</Tabs.TabPane>
      <Tabs.TabPane title="Tab 7">Content 7</Tabs.TabPane>
    </Tabs>
  )
}

function DisableTabs() {
  return (
    <Tabs>
      <Tabs.TabPane title="Tab 1">Content 1</Tabs.TabPane>
      <Tabs.TabPane title="Tabs 2" disabled>
        Content 2
      </Tabs.TabPane>
      <Tabs.TabPane title="Tab 3">Content 3</Tabs.TabPane>
    </Tabs>
  )
}

function CardTabs() {
  return (
    <Tabs theme="card">
      <Tabs.TabPane title="Tab 1">Content 1</Tabs.TabPane>
      <Tabs.TabPane title="Tab 2">Content 2</Tabs.TabPane>
      <Tabs.TabPane title="Tab 3">Content 3</Tabs.TabPane>
    </Tabs>
  )
}

function TabsWithTabClick() {
  return (
    <>
      <Toast id="toast" />
      <Tabs onTabClick={({ title }) => Toast.open(title)}>
        <Tabs.TabPane title="Tab 1">Content 1</Tabs.TabPane>
        <Tabs.TabPane title="Tab 2">Content 2</Tabs.TabPane>
        <Tabs.TabPane title="Tab 3">Content 3</Tabs.TabPane>
      </Tabs>
      <Toast id="toast" />
    </>
  )
}

function StickyTabs() {
  return (
    <Tabs sticky>
      <Tabs.TabPane title="Tab 1">Content 1</Tabs.TabPane>
      <Tabs.TabPane title="Tab 2">Content 2</Tabs.TabPane>
      <Tabs.TabPane title="Tab 3">Content 3</Tabs.TabPane>
      <Tabs.TabPane title="Tab 4">Content 4</Tabs.TabPane>
    </Tabs>
  )
}

function TabsWithCustomTitle() {
  return (
    <Tabs>
      <Tabs.TabPane
        title={
          <>
            <MoreOutlined /> tag 1
          </>
        }
      >
        Content 1
      </Tabs.TabPane>
      <Tabs.TabPane
        title={
          <>
            <MoreOutlined /> tag 2
          </>
        }
      >
        Content 2
      </Tabs.TabPane>
      <Tabs.TabPane
        title={
          <>
            <MoreOutlined /> tag 3
          </>
        }
      >
        Content 3
      </Tabs.TabPane>
    </Tabs>
  )
}

function AnimatedTabs() {
  return (
    <Tabs animated>
      <Tabs.TabPane title="Tab 1">Content 1</Tabs.TabPane>
      <Tabs.TabPane title="Tab 2">Content 2</Tabs.TabPane>
      <Tabs.TabPane title="Tab 3">Content 3</Tabs.TabPane>
      <Tabs.TabPane title="Tab 4">Content 4</Tabs.TabPane>
    </Tabs>
  )
}

function SwipeableTabs() {
  return (
    <Tabs animated swipeable>
      <Tabs.TabPane title="Tab 1">Content 1</Tabs.TabPane>
      <Tabs.TabPane title="Tab 2">Content 2</Tabs.TabPane>
      <Tabs.TabPane title="Tab 3">Content 3</Tabs.TabPane>
      <Tabs.TabPane title="Tab 4">Content 4</Tabs.TabPane>
    </Tabs>
  )
}

export default function TabsDemo() {
  return (
    <Page title="Tabs" className="tabs-demo">
      <Block title="Basic Usage">
        <BasicTabs />
      </Block>
      <Block title="Match by ID">
        <KeyedTabs />
      </Block>
      <Block title="Tabbar scrolling">
        <ScrollTabs />
      </Block>
      <Block title="Disable Tab">
        <DisableTabs />
      </Block>
      <Block title="Style Style">
        <CardTabs />
      </Block>
      <Block title="Click event">
        <TabsWithTabClick />
      </Block>
      <Block title="Sticky Layout">
        <StickyTabs />
      </Block>
      <Block title="Custom Label">
        <TabsWithCustomTitle />
      </Block>
      <Block title="Toggle animation">
        <CustomWrapper>
          <AnimatedTabs />
        </CustomWrapper>
      </Block>
      <Block title="Slide to switch">
        <CustomWrapper>
          <SwipeableTabs />
        </CustomWrapper>
      </Block>
    </Page>
  )
}