import { Loading, Space } from "@vnmfify/core"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

export default function LoadingDemo() {
  return (
    <Page title="Loading 加载" className="loading-demo">
      <Block title="Load Type">
        <Space>
          <Loading />
          <Loading type="spinner" />
        </Space>
      </Block>
      <Block title="custom color">
        <Space>
          <Loading className="custom-color" />
          <Loading className="custom-color" type="spinner" />
        </Space>
      </Block>
      <Block title="Custom Size">
        <Space>
          <Loading size="24" />
          <Loading type="spinner" size="24" />
        </Space>
      </Block>
      <Block title="Load Copy">
        <Loading size="24">Loading...</Loading>
      </Block>
      <Block title="Vertical Arrangement">
        <Loading direction="vertical" size="24">
          Loading...
        </Loading>
      </Block>
      <Block title="Vertical Arrangement">
        <Space size="large">
          <Loading className="custom-color" direction="vertical">
            Loading...
          </Loading>
          <Loading className="custom-text-color" direction="vertical">
            Loading...
          </Loading>
        </Space>
      </Block>
    </Page>
  )
}