import { Backdrop, Button } from "@vnmfify/core"
import { View } from "@vnxjs/components"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"

import "./index.scss"

export default function BackdropDemo() {
  const [open, setOpen] = useState(false)
  const [opened2, setOpened2] = useState(false)

  return (
    <Page title="Backdrop" className="backdrop-demo">
      <Block title="Basic Usage">
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          display background panel
        </Button>
        <Backdrop open={open} closeable onClose={() => setOpen(false)} />
      </Block>
      <Block title="Embed Content">
        <Button variant="contained" color="primary" onClick={() => setOpened2(true)}>
          Embedded content
        </Button>
        <Backdrop open={opened2} closeable onClose={() => setOpened2(false)}>
          <View className="content-wrapper">
            <View className="content-block" />
          </View>
        </Backdrop>
      </Block>
    </Page>
  )
}