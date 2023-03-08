import { Slider } from "@vnmfify/core"
import { View } from "@vnxjs/components"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function StyledThumbSlider() {
  const [value, setValue] = useState(50)
  return (
    <Slider className="custom-color" value={value} onChange={setValue}>
      <Slider.Thumb>
        <View className="custom-thumb">{value}</View>
      </Slider.Thumb>
    </Slider>
  )
}

export default function SliderDemo() {
  return (
    <Page title="Slider" className="slider-demo">
      <Block title="Basic Usage">
        <Slider defaultValue={50} />
      </Block>
      <Block title="Double Slider">
        <Slider range defaultValue={[20, 60]} />
      </Block>
      <Block title="Specify selection range">
        <Slider min={-50} max={50} defaultValue={0} />
      </Block>
      <Block title="disable">
        <Slider disabled defaultValue={50} />
      </Block>
      <Block title="Specify step size">
        <Slider step={10} defaultValue={50} />
      </Block>
      <Block title="Custom Style">
        <Slider className="custom-color" size={4} defaultValue={50} />
      </Block>
      <Block title="Custom Button">
        <StyledThumbSlider />
      </Block>
      <Block title="custom style" className="vertical-slider">
        <Slider orientation="vertical" defaultValue={50} />
        <Slider
          style={{ marginLeft: "100px" }}
          range
          orientation="vertical"
          defaultValue={[20, 60]}
        />
      </Block>
    </Page>
  )
}