import { Grid, Sidebar, Toast } from "@vnmfify/core"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function EventSidebar() {
  return (
    <>
      <Toast id="toast" />
      <Sidebar onChange={(_, { children }: Sidebar.TabObject) => Toast.open(children)}>
        <Sidebar.Tab>Tab Name 1</Sidebar.Tab>
        <Sidebar.Tab>Tab Name 2</Sidebar.Tab>
        <Sidebar.Tab>Tab Name 3</Sidebar.Tab>
      </Sidebar>
    </>
  )
}

export default function SidebarDemo() {
  return (
    <Page title="Sidebar" className="sidebar-demo">
      <Grid columns={2} centered bordered={false}>
        <Grid.Item>
          <Block title="Basic Usage">
            <Sidebar>
              <Sidebar.Tab>Tab name</Sidebar.Tab>
              <Sidebar.Tab>Tab name</Sidebar.Tab>
              <Sidebar.Tab>Tab name</Sidebar.Tab>
            </Sidebar>
          </Block>
        </Grid.Item>
        <Grid.Item>
          <Block title="logo tip">
            <Sidebar>
              <Sidebar.Tab badge>Tab name</Sidebar.Tab>
              <Sidebar.Tab badge="5">tab name</Sidebar.Tab>
              <Sidebar.Tab badge="20">tab name</Sidebar.Tab>
            </Sidebar>
          </Block>
        </Grid.Item>
        <Grid.Item>
          <Block title="Disable option">
            <Sidebar>
              <Sidebar.Tab>Tab name</Sidebar.Tab>
              <Sidebar.Tab disabled>Tab name</Sidebar.Tab>
              <Sidebar.Tab>Tab name</Sidebar.Tab>
            </Sidebar>
          </Block>
        </Grid.Item>
        <Grid.Item>
          <Block title="Listen to switch events">
            <EventSidebar />
          </Block>
        </Grid.Item>
      </Grid>
    </Page>
  )
}