import { Button, Circle, Space } from "@vnmfify/core"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

interface PercentProps {
  percent?: number
}

function BasicCircle({ percent }: PercentProps) {
  const [currentPercent, setCurrentPercent] = useState(0)

  return (
    <Circle percent={percent} onChange={setCurrentPercent}>
      {currentPercent.toFixed(0)}%
    </Circle>
  )
}

function CustomCircle({ percent }: PercentProps) {
  return (
    <Space>
      <Circle percent={percent} strokeWidth={60}>
        Width customization
      </Circle>
      <Circle percent={percent} color="#ee0a24" layerColor="#ebedf0">
        Color customization
      </Circle>
      <Circle
        percent={percent}
        color={{
          "0%": "#3fecff",
          "100%": "#6149f6",
        }}
      >
        Gradient
      </Circle>
      <Circle percent={percent} clockwise={false} color="#07c160">
        counterclockwise
      </Circle>
      <Circle percent={percent} size={120} color="#7232dd">
        Size customization
      </Circle>
    </Space>
  )
}

export default function CircleDemo() {
  const [percent, setPercent] = useState(70)

  return (
    <Page title="Circle" className="circle-demo">
      <Block title="Basic Usage">
        <BasicCircle percent={percent} />
      </Block>
      <Block title="Style customization">
        <CustomCircle percent={percent} />
      </Block>
      <Block>
        <Space>
          <Button
            color="primary"
            size="small"
            onClick={() => setPercent((prevPercent) => Math.min(prevPercent + 20, 100))}
          >
            Increase
          </Button>
          <Button
            color="danger"
            size="small"
            onClick={() => setPercent((prevPercent) => Math.max(prevPercent - 20, 0))}
          >
            reduce
          </Button>
        </Space>
      </Block>
    </Page>
  )
}