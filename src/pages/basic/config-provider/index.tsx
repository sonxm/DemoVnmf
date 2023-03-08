import { Button, ConfigProvider, Field, Rate, Slider } from "@vnmfify/core"
import { View } from "@vnxjs/components"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

export default function ConfigProviderDemo() {
  const [rate, setRate] = useState(4)
  const [slider, setSlider] = useState(50)

  return (
    <Page className="config-provider-demo" title="ConfigProvider">
      <Block title="default theme">
        <Field label="Rating">
          <Rate allowHalf value={rate} onChange={setRate} />
        </Field>
        <Field label="slider">
          <Slider value={slider} onChange={setSlider} />
        </Field>
        <View style={{ margin: "16px" }}>
          <Button shape="round" block color="primary">
            submit
          </Button>
        </View>
      </Block>
      <Block title="Custom Theme">
        <ConfigProvider
          theme={{
            rateIconFullColor: "#07c160",
            sliderTrackHeight: "4px",
            sliderButtonWidth: "20px",
            sliderButtonHeight: "20px",
            sliderActiveBackgroundColor: "#07c160",
            buttonPrimaryBorderColor: "#07c160",
            buttonPrimaryBackgroundColor: "#07c160",
          }}
        >
          <Field label="Rating">
            <Rate allowHalf value={rate} onChange={setRate} />
          </Field>
          <Field label="slider">
            <Slider value={slider} onChange={setSlider} />
          </Field>
          <View style={{ margin: "16px" }}>
            <Button shape="round" block color="primary">
              submit
            </Button>
          </View>
        </ConfigProvider>
      </Block>
    </Page>
  )
}