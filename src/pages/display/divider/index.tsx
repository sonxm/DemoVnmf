import { Divider } from "@vnmfify/core"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

export default function DividerDemo() {
  return (
    <Page title="Divider" className="divider-demo">
      <Block title="Basic Usage">
        <Divider />
      </Block>
      <Block title="Display text">
        <Divider>Text</Divider>
      </Block>
      <Block title="Content Location">
        <Divider>
          <Divider.Text orientation="left">Text</Divider.Text>
        </Divider>
        <Divider>
          <Divider.Text orientation="right">Text</Divider.Text>
        </Divider>
      </Block>
      <Block title="dotted line">
        <Divider dashed>Text</Divider>
      </Block>
      <Block title="Custom Style">
        <Divider style={{ color: "#1989fa", borderColor: "#1989fa", padding: "0 16px" }}>
          text
        </Divider>
      </Block>
    </Page>
  )
}