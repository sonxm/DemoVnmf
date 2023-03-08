import { Cell, Image, Radio } from "@vnmfify/core"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function CustomIconRadio() {
  const [value, setValue] = useState("1")
  return (
    <Radio.Group value={value} onChange={setValue}>
      <Radio
        name="1"
        icon={
          <Image
            src={`https://img.yzcdn.cn/vant/user-${value === "1" ? "active" : "inactive"}.png`}
            style={{
              width: "25px",
              height: "20px",
            }}
          />
        }
      >
        radio button 1
      </Radio>
      <Radio
        name="2"
        icon={
          <Image
            src={`https://img.yzcdn.cn/vant/user-${value === "2" ? "active" : "inactive"}.png`}
            style={{
              width: "25px",
              height: "20px",
            }}
          />
        }
      >
        radio button 1
      </Radio>
    </Radio.Group>
  )
}

export default function RadioDemo() {
  return (
    <Page title="Radio" className="radio-demo">
      <Block title="Basic Usage">
        <Radio.Group defaultValue="1">
          <Radio name="1">Radio 1</Radio>
          <Radio name="2">Radio 2</Radio>
        </Radio.Group>
      </Block>
      <Block title="Horizontal Arrangement">
        <Radio.Group defaultValue="1" direction="horizontal">
          <Radio name="1">Radio 1</Radio>
          <Radio name="2">Radio 2</Radio>
        </Radio.Group>
      </Block>
      <Block title="disabled state">
        <Radio.Group defaultValue="1" disabled>
          <Radio name="1">Radio 1</Radio>
          <Radio name="2">Radio 2</Radio>
        </Radio.Group>
      </Block>
      <Block title="Custom Shape">
        <Radio.Group defaultValue="1">
          <Radio name="1" shape="square">
            radio button 1
          </Radio>
          <Radio name="2" shape="square">
            radio button 2
          </Radio>
        </Radio.Group>
      </Block>
      <Block title="custom color">
        <Radio.Group className="custom-color" defaultValue="1">
          <Radio name="1">Radio 1</Radio>
          <Radio name="2">Radio 2</Radio>
        </Radio.Group>
      </Block>
      <Block title="Custom Size">
        <Radio.Group defaultValue="1" size={24}>
          <Radio name="1">Radio 1</Radio>
          <Radio name="2">Radio 2</Radio>
        </Radio.Group>
      </Block>
      <Block title="Custom Icon">
        <CustomIconRadio />
      </Block>
      <Block title="Use with Cell component" className="radio-cell-group">
        <Radio.Group defaultValue="1">
          <Cell.Group clickable>
            <Cell title="Radio Button 1">
              <Radio name="1" />
            </Cell>
            <Cell title="Radio Button 2">
              <Radio name="2" />
            </Cell>
          </Cell.Group>
        </Radio.Group>
      </Block>
    </Page>
  )
}