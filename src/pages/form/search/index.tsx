import { Search, Toast } from "@vnmfify/core"
import { View } from "@vnxjs/components"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function BasicSearch() {
  const [value, setValue] = useState("")
  return (
    <Search
      value={value}
      placeholder="Please enter search keywords"
      onChange={(e) => setValue(e.detail.value)}
    />
  )
}

function SearchWithEvents() {
  const [value, setValue] = useState("")
  const [open, setOpen] = useState(false)

  return (
    <>
      <Toast open={open} onClose={() => setOpen(false)}>
        Cancel
      </Toast>
      <Search
        value={value}
        placeholder="Please enter search keywords"
        action
        onChange={(e) => setValue(e.detail.value)}
        onCancel={() => setOpen(true)}
      />
    </>
  )
}

function InputCenterSearch() {
  const [value, setValue] = useState("")
  return (
    <Search
      value={value}
      placeholder="Please enter search keywords"
      inputAlign="center"
      onChange={(e) => setValue(e.detail.value)}
    />
  )
}

function DisabledSearch() {
  return <Search disabled placeholder="Please enter search keywords" />
}

function BackgroundSearch() {
  return <Search className="background" shape="rounded" placeholder="Please enter search keywords" />
}

function CustomSearch() {
  const [value, setValue] = useState("")
  const [open, setOpen] = useState(false)
  return (
    <>
      <Toast open={open} onClose={() => setOpen(false)}>
        search
      </Toast>
      <Search
        value={value}
        label="address"
        placeholder="Please enter search keywords"
        action={<View onClick={() => setOpen(true)}>Search</View>}
        onChange={(e) => setValue(e.detail.value)}
      />
    </>
  )
}

export default function SearchDemo() {
  return (
    <Page title="Search" className="search-demo">
      <Block title="Basic Usage">
        <BasicSearch />
      </Block>
      <Block title="Event listener">
        <SearchWithEvents />
      </Block>
      <Block title="Search box content alignment">
        <InputCenterSearch />
      </Block>
      <Block title="Disable search box">
        <DisabledSearch />
      </Block>
      <Block title="custom background color">
        <BackgroundSearch />
      </Block>
      <Block title="Custom Button">
        <CustomSearch />
      </Block>
    </Page>
  )
}