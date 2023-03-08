import { Countdown, Grid, Toast } from "@vnmfify/core"
import { CountdownInstance } from "@vnmfify/core/countdown"
import { PauseCircleOutlined, PlayCircleOutlined, Replay } from "@vnmfify/icons"
import { View } from "@vnxjs/components"
import { useRef } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function CountdownWithManualControl() {
  const countRef = useRef<CountdownInstance>(null)
  return (
    <>
      <Toast id="toast" />
      <Countdown
        className="manual-control"
        ref={countRef}
        value={30 * 1000}
        interval={1}
        format="ss:SSS"
        onComplete={() => Toast.open("Countdown is over")}
      />
      <Grid columns={3} clickable>
        <Grid.Item
          icon={<PlayCircleOutlined />}
          text="start"
          onClick={() => countRef.current?.start()}
        />
        <Grid.Item
          icon={<PauseCircleOutlined />}
          text="pause"
          onClick={() => countRef.current?.pause()}
        />
        <Grid.Item icon={<Replay />} text="Reset" onClick={() => countRef.current?.reset()} />
      </Grid>
    </>
  )
}

export default function CountDownDemo() {
  return (
    <Page title="CountDown" className="count-down-demo">
      <Block title="Basic Usage">
        <Countdown value={30 * 60 * 60 * 1000} />
      </Block>
      <Block title="Custom Format">
        <Countdown value={30 * 60 * 60 * 1000} format="DD days HH hours mm minutes ss seconds" />
      </Block>
      <Block title="Millisecond rendering">
        <Countdown interval={1} value={30 * 60 * 60 * 1000} format="HH:mm:ss:SS" />
      </Block>
      <Block title="Custom Style">
        <Countdown value={30 * 60 * 60 * 1000}>
          {(current) => (
            <>
              <View className="block">{current.hours}</View>
              <View className="colon">:</View>
              <View className="block">{current.minutes}</View>
              <View className="colon">:</View>
              <View className="block">{current.seconds}</View>
            </>
          )}
        </Countdown>
      </Block>
      <Block className="manual-control-block" title="Manual control">
        <CountdownWithManualControl />
      </Block>
    </Page>
  )
}