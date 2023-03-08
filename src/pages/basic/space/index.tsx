import { Button, Space } from "@vnmfify/core"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

export default function SpaceDemo() {
  return (
    <Page title="Space" className="space-demo">
      <Block title="Basic Usage">
        <Space>
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
        </Space>
      </Block>
      <Block title="vertical">
        <Space direction="vertical">
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
        </Space>
      </Block>
      <Block title="gap">
        <Space size="mini">
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
        </Space>
        <Space size="small">
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
        </Space>
        <Space size="medium">
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
        </Space>
        <Space size="large">
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
        </Space>
      </Block>
      <Block title="right">
        <Space justify="space-around">
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
        </Space>
      </Block>
      <Block title="Center">
        <Space justify="center">
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
        </Space>
      </Block>
      <Block title="surround">
        <Space justify="space-around">
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
        </Space>
      </Block>
      <Block title="justify">
        <Space justify="space-between">
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
        </Space>
      </Block>
      <Block title="No line break">
        <Space wrap="nowrap">
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
          <Button color="primary">Primary button</Button>
        </Space>
      </Block>
    </Page>
  )
}