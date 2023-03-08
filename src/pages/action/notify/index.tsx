import { Cell, Notify } from "@vnmfify/core"
import { ArrowRight } from "@vnmfify/icons"
import { ReactNode, useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function BasicNotify() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Cell title="Basic usage" clickable rightIcon={<ArrowRight />} onClick={() => setOpen(true)} />
      <Notify open={open} onClose={setOpen} children="notification content" />
    </>
  )
}

function CustomNotify() {
  const [options, setOptions] = useState<{
    open?: boolean
    duration?: number
    children?: ReactNode
  }>({})

  return (
    <>
      <Cell
        title="custom color"
        clickable
        rightIcon={<ArrowRight />}
        onClick={() => {
          setOptions({
            open: true,
            children: "custom color",
          })
        }}
      />
      <Cell
        title="Custom duration"
        clickable
        rightIcon={<ArrowRight />}
        onClick={() =>
          setOptions({
            open: true,
            duration: 1000,
            children: "custom duration",
          })
        }
      />
      <Notify
        open={options.open}
        style={{
          color: "#ad0000",
          background: "#ffe1e1",
        }}
        duration={options.duration}
        children={options.children}
        onClose={() => setOptions({ open: false })}
      />
    </>
  )
}

function NotifyWithPresetColors() {
  return (
    <>
      <Notify id="notify" />
      <Cell
        title="Main Notice"
        clickable
        rightIcon={<ArrowRight />}
        onClick={() => Notify.open({ color: "primary", message: "Notification content" })}
      />
      <Cell
        title="Success notification"
        clickable
        rightIcon={<ArrowRight />}
        onClick={() => Notify.open({ color: "success", message: "Notify content" })}
      />
      <Cell
        title="Danger Notice"
        clickable
        rightIcon={<ArrowRight />}
        onClick={() => Notify.open({ color: "danger", message: "Notification content" })}
      />
      <Cell
        title="Warning Notice"
        clickable
        rightIcon={<ArrowRight />}
        onClick={() => Notify.open({ color: "warning", message: "Notification content" })}
      />
    </>
  )
}

export default function NotifyDemo() {
  return (
    <Page title="Notify message prompt" className="notify-demo">
      <Block variant="card" title="Basic usage">
        <BasicNotify />
      </Block>
      <Block variant="card" title="Notification color">
        <NotifyWithPresetColors />
      </Block>
      <Block variant="card" title="Custom configuration">
        <CustomNotify />
      </Block>
    </Page>
  )
}