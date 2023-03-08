import { Progress } from "@vnmfify/core"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function BasicProgress() {
  return (
    <Block title="Basic Usage">
      <Progress percent={50} />
    </Block>
  )
}

function StripedProgress() {
  return (
    <Block title="Striped Line">
      <Progress percent={50} striped />
    </Block>
  )
}

function AnimatedProgress() {
  return (
    <Block title="Animated Stripes">
      <Progress percent={50} striped animated />
    </Block>
  )
}

function InactiveProgress() {
  return (
    <Block title="gray">
      <Progress percent={50} inactive />
    </Block>
  )
}

function ProgressWithCustomColors() {
  return (
    <Block title="Style customization">
      <Progress className="custom-color1" percent={25} />
      <Progress className="custom-color2" percent={50} />
      <Progress className="custom-color3" percent={75} />
    </Block>
  )
}

export default function ProgressDemo() {
  return (
    <Page title="Progress" className="progress-demo">
      <BasicProgress />
      <StripedProgress />
      <AnimatedProgress />
      <InactiveProgress />
      <ProgressWithCustomColors />
    </Page>
  )
}