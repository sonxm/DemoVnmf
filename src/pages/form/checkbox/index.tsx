import { Cell, Checkbox, Image, Space } from "@vnmfify/core"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function CheckboxWithCustomIcon() {
  const [value, setValue] = useState(false)

  return (
    <Checkbox
      icon={
        <Image
          src={`https://img.yzcdn.cn/vant/user-${value ? "active" : "inactive"}.png`}
          style={{
            width: "25px",
            height: "20px",
          }}
        />
      }
      checked={value}
      onChange={setValue}
    >
      custom icon
    </Checkbox>
  )
}

export default function CheckboxDemo() {
  return (
    <Page title="Checkbox" className="checkbox-demo">
      <Block title="Basic Usage">
        <Checkbox defaultChecked>Checkbox</Checkbox>
      </Block>
      <Block title="disabled state">
        <Space direction="vertical">
          <Checkbox disabled checked={false}>
            checkbox
          </Checkbox>
          <Checkbox disabled checked>
            checkbox
          </Checkbox>
        </Space>
      </Block>
      <Block title="Custom Shape">
        <Checkbox shape="square">Custom shape</Checkbox>
      </Block>
      <Block title="custom color">
        <Checkbox className="custom-color">Custom Color</Checkbox>
      </Block>
      <Block title="Custom Size">
        <Checkbox size={24}>Custom size</Checkbox>
      </Block>
      <Block title="Custom Icon">
        <CheckboxWithCustomIcon />
      </Block>
      <Block title="Checkbox Group">
        <Checkbox.Group>
          <Checkbox name="a">Checkbox a</Checkbox>
          <Checkbox name="b">Checkbox b</Checkbox>
        </Checkbox.Group>
      </Block>
      <Block title="Horizontal Arrangement">
        <Checkbox.Group direction="horizontal">
          <Checkbox name="a">Checkbox a</Checkbox>
          <Checkbox name="b">Checkbox b</Checkbox>
        </Checkbox.Group>
      </Block>
      <Block title="Limit maximum number of options available">
        <Checkbox.Group max={4}>
          <Checkbox name="a">Checkbox a</Checkbox>
          <Checkbox name="b">Checkbox b</Checkbox>
          <Checkbox name="c">Checkbox c</Checkbox>
          <Checkbox name="d">Checkbox d</Checkbox>
          <Checkbox name="e">Checkboxe</Checkbox>
          <Checkbox name="f">Checkboxf</Checkbox>
          <Checkbox name="g">Checkboxg</Checkbox>
        </Checkbox.Group>
      </Block>
      <Block title="Use with cell component" className="checkbox-cell-group">
        <Checkbox.Group max={2}>
          <Cell.Group clickable>
            <Cell title="checkbox a">
              <Checkbox name="a" />
            </Cell>
            <Cell title="checkbox b">
              <Checkbox name="b" />
            </Cell>
          </Cell.Group>
        </Checkbox.Group>
      </Block>
    </Page>
  )
}