import { Button, Cell, Dialog } from "@vnmfify/core"
import { ArrowRight } from "@vnmfify/icons"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function BasicDialog() {
  return (
    <>
      <Dialog id="dialog" />
      <Cell
        title="Prompt popup"
        clickable
        bordered
        rightIcon={<ArrowRight />}
        onClick={() => Dialog.alert("Prompt")}
      />
    </>
  )
}

function NoTitleDialog() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Cell
        title="Prompt popup (without title)"
        clickable
        bordered
        rightIcon={<ArrowRight />}
        onClick={() => setOpen(true)}
      />
      <Dialog open={open} onClose={setOpen}>
        <Dialog.Content>The code is written for people to see, with the ability to run on the machine</Dialog.Content>
        <Dialog.Actions>
          <Button onClick={() => setOpen(false)}>确认</Button>
        </Dialog.Actions>
      </Dialog>
    </>
  )
}

function ConfirmDialog() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Cell
        title="Confirmation popup"
        clickable
        bordered
        rightIcon={<ArrowRight />}
        onClick={() => setOpen(true)}
      />
      <Dialog open={open} onClose={setOpen}>
        <Dialog.Header>Header</Dialog.Header>
        <Dialog.Content>The code is written for people to see, with the ability to run on the machine</Dialog.Content>
        <Dialog.Actions>
          <Button onClick={() => setOpen(false)}>取消</Button>
          <Button onClick={() => setOpen(false)}>确认</Button>
        </Dialog.Actions>
      </Dialog>
    </>
  )
}

function RoundedDialog() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Cell
        title="Prompt popup"
        clickable
        bordered
        rightIcon={<ArrowRight />}
        onClick={() => setOpen(true)}
      />
      <Dialog open={open} onClose={setOpen}>
        <Dialog.Header>Header</Dialog.Header>
        <Dialog.Content>The code is written for people to see, with the ability to run on the machine</Dialog.Content>
        <Dialog.Actions variant="rounded">
          <Button onClick={() => setOpen(false)}>取消</Button>
          <Button onClick={() => setOpen(false)}>确认</Button>
        </Dialog.Actions>
      </Dialog>
    </>
  )
}

function RoundedNoTitleDialog() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Cell
        title="Prompt popup (without title)"
        clickable
        bordered
        rightIcon={<ArrowRight />}
        onClick={() => setOpen(true)}
      />
      <Dialog open={open} onClose={setOpen}>
        <Dialog.Content>The code is written for people to see, with the ability to run on the machine</Dialog.Content>
        <Dialog.Actions variant="rounded">
          <Button onClick={() => setOpen(false)}>确认</Button>
        </Dialog.Actions>
      </Dialog>
    </>
  )
}

export default function DialogDemo() {
  return (
    <Page title="Dialog popup" className="dialog-demo">
      <Block variant="card" title="Basic usage">
        <BasicDialog />
        <NoTitleDialog />
        <ConfirmDialog />
      </Block>
      <Block variant="card" title="Rounded button style">
        <RoundedDialog />
        <RoundedNoTitleDialog />
      </Block>
    </Page>
  )
}