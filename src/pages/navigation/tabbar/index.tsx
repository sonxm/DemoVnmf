import { Badge, Tabbar, Toast } from "@vnmfify/core"
import { FriendsOutlined, HomeOutlined, Search, SettingOutlined } from "@vnmfify/icons"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function BasicTabbar() {
  return (
    <Tabbar>
      <Tabbar.TabItem icon={<HomeOutlined />}>Tab</Tabbar.TabItem>
      <Tabbar.TabItem icon={<Search />}>Tab</Tabbar.TabItem>
      <Tabbar.TabItem icon={<FriendsOutlined />}>Tab</Tabbar.TabItem>
      <Tabbar.TabItem icon={<SettingOutlined />}>Tab</Tabbar.TabItem>
    </Tabbar>
  )
}

function KeyTabbar() {
  return (
    <Tabbar defaultValue="1">
      <Tabbar.TabItem value="1" icon={<HomeOutlined />}>
        Label
      </Tabbar.TabItem>
      <Tabbar.TabItem value="2" icon={<Search />}>
        Label
      </Tabbar.TabItem>
      <Tabbar.TabItem value="3" icon={<FriendsOutlined />}>
        Label
      </Tabbar.TabItem>
      <Tabbar.TabItem value="4" icon={<SettingOutlined />}>
        Label
      </Tabbar.TabItem>
    </Tabbar>
  )
}

function BadgeTabbar() {
  return (
    <Tabbar>
      <Tabbar.TabItem icon={<HomeOutlined />}>Tab</Tabbar.TabItem>
      <Tabbar.TabItem badge icon={<Search />}>
        Label
      </Tabbar.TabItem>
      <Tabbar.TabItem badge="5" icon={<FriendsOutlined />}>
        Label
      </Tabbar.TabItem>
      <Tabbar.TabItem badge={<Badge content={100} max={99} />} icon={<SettingOutlined />}>
        Label
      </Tabbar.TabItem>
    </Tabbar>
  )
}

function TabbarWithCustomColor() {
  return (
    <Tabbar className="custom-color">
      <Tabbar.TabItem icon={<HomeOutlined />}>Tab</Tabbar.TabItem>
      <Tabbar.TabItem icon={<Search />}>Tab</Tabbar.TabItem>
      <Tabbar.TabItem icon={<FriendsOutlined />}>Tab</Tabbar.TabItem>
      <Tabbar.TabItem icon={<SettingOutlined />}>Tab</Tabbar.TabItem>
    </Tabbar>
  )
}

function EventTabbar() {
  return (
    <>
      <Toast id="toast" />
      <Tabbar onChange={(value) => Toast.open(`tab ${Number(value) + 1}`)}>
        <Tabbar.TabItem icon={<HomeOutlined />}>Tab</Tabbar.TabItem>
        <Tabbar.TabItem icon={<Search />}>Tab</Tabbar.TabItem>
        <Tabbar.TabItem icon={<FriendsOutlined />}>Tab</Tabbar.TabItem>
        <Tabbar.TabItem icon={<SettingOutlined />}>Tab</Tabbar.TabItem>
      </Tabbar>
    </>
  )
}

export default function TabbarDemo() {
  return (
    <Page title="Tabbar" className="tabbar-demo">
      <Block title="Basic Usage">
        <BasicTabbar />
      </Block>
      <Block title="match by value">
        <KeyTabbar />
      </Block>
      <Block title="logo tip">
        <BadgeTabbar />
      </Block>
      <Block title="custom color">
        <TabbarWithCustomColor />
      </Block>
      <Block title="Listen to switch events">
        <EventTabbar />
      </Block>
    </Page>
  )
}