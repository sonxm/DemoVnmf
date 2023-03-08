import { Button, Sticky } from "@vnmfify/core"
import { View } from "@vnxjs/components"
import { useRef } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function BasicSticky() {
  return (
    <Block title="Basic Usage">
      <Sticky>
        <Button color="primary">Basic usage</Button>
      </Sticky>
    </Block>
  )
}

function OffsetSticky() {
  return (
    <Block title="Ceiling distance" className="sticky-demo__offset-sticky">
      <Sticky offsetTop={50}>
        <Button color="primary">Ceiling distance</Button>
      </Sticky>
    </Block>
  )
}

function StickyWithContainer() {
  const container = useRef()
  return (
    <Block title="Specify container">
      <View className="sticky-demo__container-sticky" ref={container}>
        <Sticky container={container}>
          <Button color="warning">Specify container</Button>
        </Sticky>
      </View>
    </Block>
  )
}

function BottomSticky() {
  return (
    <Block title="Suction bottom distance" className="sticky-demo__bottom-sticky">
      <View className="sticky-demo__bottom-sticky__padding" />
      <Sticky position="bottom" offsetBottom={50}>
        <Button color="primary">Suction distance</Button>
      </Sticky>
      <View className="sticky-demo__bottom-sticky__padding" />
    </Block>
  )
}

export default function StickyDemo() {
  return (
    <Page title="Sticky" className="sticky-demo">
      <BasicSticky />
      <OffsetSticky />
      <StickyWithContainer />
      <BottomSticky />
    </Page>
  )
}