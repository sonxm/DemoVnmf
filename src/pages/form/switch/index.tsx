import { Cell, Switch } from "@vnmfify/core"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

interface SwitchListProps {
  checked?: boolean

  onChange?(checked: boolean): void
}

function BasicSwitch({ checked, onChange }: SwitchListProps) {
  return <Switch checked={checked} onChange={onChange} />
}

function DisabledSwitch({ checked }: SwitchListProps) {
  return <Switch checked={checked} disabled />
}

function LoadingSwitch({ checked }: SwitchListProps) {
  return <Switch checked={checked} loading />
}

function SwitchList() {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <Block title="Basic Usage">
        <BasicSwitch checked={checked} onChange={setChecked} />
      </Block>
      <Block title="disabled state">
        <DisabledSwitch checked={checked} />
      </Block>
      <Block title="Loading Status">
        <LoadingSwitch checked={checked} />
      </Block>
    </>
  )
}

export default function SwitchDemo() {
  return (
    <Page title="Switch" className="switch-demo">
      <SwitchList />
      <Block title="Custom Size">
        <Switch size="24" />
      </Block>
      <Block title="custom color">
        <Switch className="custom-color" defaultChecked />
      </Block>
      <Block title="Use with cells" className="switch-with-cell">
        <Cell align="center" title="title" rightIcon={<Switch size="24" />} />
      </Block>
    </Page>
  )
}