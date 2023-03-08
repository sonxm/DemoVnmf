import { Cell, Tag } from "@vnmfify/core"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function CloseTag() {
  const [visible, setVisible] = useState(true)
  return (
    <>
      {visible && (
        <Tag color="primary" size="medium" closeable onClose={() => setVisible(false)}>
          Label
        </Tag>
      )}
    </>
  )
}

export default function TagDemo() {
  return (
    <Page title="Tag" className="tag-demo">
      <Block variant="card" title="Basic usage">
        <Cell title="color default">
          <Tag>tag</Tag>
        </Cell>
        <Cell title="color primary">
          <Tag color="primary">Tag</Tag>
        </Cell>
        <Cell title="color info">
          <Tag color="info">Tag</Tag>
        </Cell>
        <Cell title="color success">
          <Tag color="success">Tag</Tag>
        </Cell>
        <Cell title="color warning">
          <Tag color="warning">Tag</Tag>
        </Cell>
        <Cell title="color danger">
          <Tag color="danger">Tag</Tag>
        </Cell>
      </Block>
      <Block variant="card" title="style style">
        <Cell title="Hollow style">
          <Tag color="primary" variant="outlined" children="Tag" />
        </Cell>
        <Cell title="Rounded corner style">
          <Tag color="primary" shape="round" children="tag" />
        </Cell>
        <Cell title="Right rounded corner style">
          <Tag color="primary" shape="roundRight" children="Tag" />
        </Cell>
        <Cell title="Left rounded corner style">
          <Tag color="primary" shape="roundLeft" children="Tag" />
        </Cell>
        <Cell title="Closable tab">
          <CloseTag />
        </Cell>
      </Block>
      <Block variant="card" title="label size">
        <Cell title="Small tab">
          <Tag color="primary" children="tag" />
        </Cell>
        <Cell title="Medium Label">
          <Tag color="primary" size="medium" children="Tag" />
        </Cell>
        <Cell title="Large tab">
          <Tag color="primary" size="large" children="Tag" />
        </Cell>
      </Block>
      <Block variant="card" title="custom color">
        <Cell title="background color">
          <Tag style={{ backgroundColor: "#7232dd" }} children="Tag" />
        </Cell>
        <Cell title="text color">
          <Tag style={{ backgroundColor: "#ffe1e1", color: "#ad0000" }} children="tag" />
        </Cell>
        <Cell title="Hollow Color">
          <Tag style={{ color: "#7232dd" }} variant="outlined" children="Tag" />
        </Cell>
      </Block>
    </Page>
  )
}