import { ActionSheet, Cell } from "@vnmfify/core"
import { ArrowRight } from "@vnmfify/icons"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function BasicActionSheet() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Cell clickable title="Basic usage" rightIcon={<ArrowRight />} onClick={() => setOpen(true)} />
      <ActionSheet open={open} onSelect={() => setOpen(false)} onClose={setOpen}>
        <ActionSheet.Action value="1" name="Option 1" />
        <ActionSheet.Action value="2" name="Option 2" />
        <ActionSheet.Action value="3" name="option three" />
      </ActionSheet>
    </>
  )
}

function ActionSheetWithCancel() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Cell
        clickable
        title="Show cancel button"
        rightIcon={<ArrowRight />}
        onClick={() => setOpen(true)}
      />
      <ActionSheet
        open={open}
        onSelect={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        onClose={setOpen}
      >
        <ActionSheet.Action value="1" name="Option 1" />
        <ActionSheet.Action value="2" name="Option 2" />
        <ActionSheet.Action value="3" name="option three" />
        <ActionSheet.Button type="cancel">取消</ActionSheet.Button>
      </ActionSheet>
    </>
  )
}

function ActionSheetWithDescription() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Cell
        clickable
        title="Show description information"
        rightIcon={<ArrowRight />}
        onClick={() => setOpen(true)}
      />
      <ActionSheet
        open={open}
        onSelect={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        onClose={setOpen}
      >
        <ActionSheet.Header>This is a description information</ActionSheet.Header>
        <ActionSheet.Action value="1" name="Option 1" />
        <ActionSheet.Action value="2" name="Option 2" />
        <ActionSheet.Action value="3" name="option three" />
        <ActionSheet.Button type="cancel">取消</ActionSheet.Button>
      </ActionSheet>
    </>
  )
}

function ActionSheetWithStatuses() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Cell clickable title="Option status" rightIcon={<ArrowRight />} onClick={() => setOpen(true)} />
      <ActionSheet
        open={open}
        onSelect={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        onClose={setOpen}
      >
        <ActionSheet.Action value="1" style={{ color: "#ee0a24" }} name="Coloring options" />
        <ActionSheet.Action value="2" disabled name="Disabled option" />
        <ActionSheet.Action value="3" loading name="Option 3" />
        <ActionSheet.Button type="cancel">取消</ActionSheet.Button>
      </ActionSheet>
    </>
  )
}

export default function ActionSheetDemo() {
  return (
    <Page title="ActionSheet Action Sheet" className="action-sheet-demo">
      <Block variant="card" title="Basic usage">
        <BasicActionSheet />
        <ActionSheetWithCancel />
        <ActionSheetWithDescription />
      </Block>
      <Block variant="card" title="option status">
        <ActionSheetWithStatuses />
      </Block>
    </Page>
  )
}