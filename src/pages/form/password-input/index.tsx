import { NumberKeyboard, PasswordInput } from "@vnmfify/core"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

interface OpenKeyboardProps {
  open?: string

  onOpen?(open: string): void
}

function BasicPasswordInput(props: OpenKeyboardProps) {
  const { open, onOpen } = props
  const [value, setValue] = useState("123")

  return (
    <>
      <PasswordInput focus value={value} onFocus={() => onOpen?.("basic")} />
      <NumberKeyboard
        open={open === "basic"}
        onKeyPress={(key) => setValue(value + key)}
        onBackspace={() => setValue(value.substring(0, value.length - 1))}
        onHide={() => onOpen?.("")}
      />
    </>
  )
}

function CustomLengthPasswordInput(props: OpenKeyboardProps) {
  const { open, onOpen } = props
  const [value, setValue] = useState("123")

  return (
    <>
      <PasswordInput focus length={6} value={value} onFocus={() => onOpen?.("length")} />
      <NumberKeyboard
        open={open === "length"}
        onKeyPress={(key) => setValue(value + key)}
        onBackspace={() => setValue(value.substring(0, value.length - 1))}
        onHide={() => onOpen?.("")}
      />
    </>
  )
}

function GutterPasswordInput(props: OpenKeyboardProps) {
  const { open, onOpen } = props
  const [value, setValue] = useState("123")

  return (
    <>
      <PasswordInput focus gutter={10} value={value} onFocus={() => onOpen?.("gutter")} />
      <NumberKeyboard
        open={open === "gutter"}
        onKeyPress={(key) => setValue(value + key)}
        onBackspace={() => setValue(value.substring(0, value.length - 1))}
        onHide={() => onOpen?.("")}
      />
    </>
  )
}

function NoMaskPasswordInput(props: OpenKeyboardProps) {
  const { open, onOpen } = props
  const [value, setValue] = useState("123")

  return (
    <>
      <PasswordInput focus mask={false} value={value} onFocus={() => onOpen?.("mask")} />
      <NumberKeyboard
        open={open === "mask"}
        onKeyPress={(key) => setValue(value + key)}
        onBackspace={() => setValue(value.substring(0, value.length - 1))}
        onHide={() => onOpen?.("")}
      />
    </>
  )
}

function PasswordInputWithFeedback(props: OpenKeyboardProps) {
  const { open, onOpen } = props
  const [value, setValue] = useState("123")

  return (
    <>
      <PasswordInput
        focus
        feedback="Password is 6 digits"
        value={value}
        onFocus={() => onOpen?.("feedback")}
      />
      <NumberKeyboard
        open={open === "feedback"}
        onKeyPress={(key) => setValue(value + key)}
        onBackspace={() => setValue(value.substring(0, value.length - 1))}
        onHide={() => onOpen?.("")}
      />
    </>
  )
}

export default function PasswordInputDemo() {
  const [open, setOpen] = useState("")
  return (
    <Page title="PasswordInput" className="password-input-demo">
      <Block title="Basic Usage">
        <BasicPasswordInput open={open} onOpen={setOpen} />
      </Block>
      <Block title="custom length">
        <CustomLengthPasswordInput open={open} onOpen={setOpen} />
      </Block>
      <Block title="Grid spacing">
        <GutterPasswordInput open={open} onOpen={setOpen} />
      </Block>
      <Block title="Display in plain text">
        <NoMaskPasswordInput open={open} onOpen={setOpen} />
      </Block>
      <Block title="Information information">
        <PasswordInputWithFeedback open={open} onOpen={setOpen} />
      </Block>
    </Page>
  )
}