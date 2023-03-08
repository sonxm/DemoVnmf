import { Cell, NumberKeyboard, Toast } from "@vnmfify/core"
import { ArrowRight } from "@vnmfify/icons"
import { useState } from "react"
import BlockCard from "../../../components/block-card"
import Page from "../../../components/page"
import "./index.scss"

interface KeyboardProps {
  keyboard?: string

  onKeyboard?(keyboard: string): void

  onKeyPress?(value: string | number, code: string): void
}

function BasicNumberKeyboard(props: KeyboardProps) {
  const { keyboard, onKeyboard, onKeyPress } = props
  return (
    <>
      <Cell
        clickable
        title="Pop up default keyboard"
        rightIcon={<ArrowRight />}
        onClick={() => onKeyboard?.("basic")}
      />
      <NumberKeyboard
        open={keyboard === "basic"}
        onKeyPress={onKeyPress}
        onHide={() => onKeyboard?.("")}
      />
    </>
  )
}

function SidebarNumberKeyboard(props: KeyboardProps) {
  const { keyboard, onKeyboard, onKeyPress } = props
  return (
    <>
      <Cell
        clickable
        title="Popup keyboard with right sidebar"
        rightIcon={<ArrowRight />}
        onClick={() => onKeyboard?.("sidebar")}
      />
      <NumberKeyboard
        open={keyboard === "sidebar"}
        extraKey={[undefined, "."]}
        onKeyPress={onKeyPress}
        onHide={() => onKeyboard?.("")}
      >
        <NumberKeyboard.Sidebar>
          <NumberKeyboard.Key size="large" code="backspace" />
          <NumberKeyboard.Key size="large" code="keyboard-hide" color="blue">
            Finish
          </NumberKeyboard.Key>
        </NumberKeyboard.Sidebar>
      </NumberKeyboard>
    </>
  )
}

function IdCardNumberKeyboard(props: KeyboardProps) {
  const { keyboard, onKeyboard, onKeyPress } = props
  return (
    <>
      <Cell
        clickable
        title="Pop up ID number keyboard"
        rightIcon={<ArrowRight />}
        onClick={() => onKeyboard?.("idCard")}
      />
      <NumberKeyboard
        open={keyboard === "idCard"}
        extraKey="X"
        onKeyPress={onKeyPress}
        onHide={() => onKeyboard?.("")}
      >
        <NumberKeyboard.Header>
          <NumberKeyboard.Button>完成</NumberKeyboard.Button>
        </NumberKeyboard.Header>
      </NumberKeyboard>
    </>
  )
}

function TitleNumberKeyboard(props: KeyboardProps) {
  const { keyboard, onKeyboard, onKeyPress } = props
  return (
    <>
      <Cell
        clickable
        title="Pop up keyboard with title"
        rightIcon={<ArrowRight />}
        onClick={() => onKeyboard?.("title")}
      />
      <NumberKeyboard
        open={keyboard === "title"}
        title="Keyboard title"
        extraKey="."
        onKeyPress={onKeyPress}
        onHide={() => onKeyboard?.("")}
      >
        <NumberKeyboard.Header>
          <NumberKeyboard.Button>完成</NumberKeyboard.Button>
        </NumberKeyboard.Header>
      </NumberKeyboard>
    </>
  )
}

function NumberKeyboardWithKeys(props: KeyboardProps) {
  const { keyboard, onKeyboard, onKeyPress } = props
  return (
    <>
      <Cell
        clickable
        title="Pop up the keyboard with multiple keys"
        rightIcon={<ArrowRight />}
        onClick={() => onKeyboard?.("keys")}
      />
      <NumberKeyboard
        open={keyboard === "keys"}
        extraKey={["00", "."]}
        onKeyPress={onKeyPress}
        onHide={() => onKeyboard?.("")}
      >
        <NumberKeyboard.Sidebar>
          <NumberKeyboard.Key size="large" code="backspace" />
          <NumberKeyboard.Key size="large" code="keyboard-hide" color="blue">
            Finish
          </NumberKeyboard.Key>
        </NumberKeyboard.Sidebar>
      </NumberKeyboard>
    </>
  )
}

function RandomNumberKeyboard(props: KeyboardProps) {
  const { keyboard, onKeyboard, onKeyPress } = props
  return (
    <>
      <Cell
        clickable
        title="Pop up the keyboard with random numbers"
        rightIcon={<ArrowRight />}
        onClick={() => onKeyboard?.("random")}
      />
      <NumberKeyboard
        open={keyboard === "random"}
        random
        onKeyPress={onKeyPress}
        onHide={() => onKeyboard?.("")}
      />
    </>
  )
}

export default function NumberKeyboardDemo() {
  const [keyboard, setKeyboard] = useState("basic")
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<any>()

  const onKeyPress = (aValue: string | number, code: string) => {
    setOpen(code !== "keyboard-hide")
    if (code === "backspace") {
      setValue("backspace")
    } else if (code === "extra") {
      setValue(`input: ${aValue}`)
    }
  }

  return (
    <Page title="NumberKeyboard" className="number-keyboard-demo">
      <BlockCard>
        <BasicNumberKeyboard keyboard={keyboard} onKeyboard={setKeyboard} onKeyPress={onKeyPress} />
        <SidebarNumberKeyboard
          keyboard={keyboard}
          onKeyboard={setKeyboard}
          onKeyPress={onKeyPress}
        />
        <IdCardNumberKeyboard
          keyboard={keyboard}
          onKeyboard={setKeyboard}
          onKeyPress={onKeyPress}
        />
        <TitleNumberKeyboard keyboard={keyboard} onKeyboard={setKeyboard} onKeyPress={onKeyPress} />
        <NumberKeyboardWithKeys
          keyboard={keyboard}
          onKeyboard={setKeyboard}
          onKeyPress={onKeyPress}
        />
        <RandomNumberKeyboard
          keyboard={keyboard}
          onKeyboard={setKeyboard}
          onKeyPress={onKeyPress}
        />
      </BlockCard>
      <Toast open={open} duration={800} onClose={() => setOpen(false)} children={value} />
    </Page>
  )
}