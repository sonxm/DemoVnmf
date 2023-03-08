import { AreaPicker, Toast } from "@vnmfify/core"
import { PickerOptionObject } from "@vnmfify/core/picker"
import { areaList } from "@vant/area-data"
import * as _ from "lodash"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function toastOptions(options?: PickerOptionObject[]) {
  const labels = _.map(options, ({ label }) => label)
  Toast.open(JSON.stringify(labels))
}

function BasicAreaPicker() {
  return (
    <AreaPicker onConfirm={(_values_, options) => toastOptions(options)}>
      <AreaPicker.Toolbar>
        <AreaPicker.Button>Cancel</AreaPicker.Button>
        <AreaPicker.Title>Title</AreaPicker.Title>
        <AreaPicker.Button>Confirm</AreaPicker.Button>
      </AreaPicker.Toolbar>
      <AreaPicker.Columns children={areaList} />
    </AreaPicker>
  )
}

function AreaPickerWithValue() {
  return (
    <AreaPicker
      value={["330000", "330300"]} //
      onConfirm={(_values_, options) => toastOptions(options)}
    >
      <AreaPicker.Toolbar>
        <AreaPicker.Button>Cancel</AreaPicker.Button>
        <AreaPicker.Title>Title</AreaPicker.Title>
        <AreaPicker.Button>Confirm</AreaPicker.Button>
      </AreaPicker.Toolbar>
      <AreaPicker.Columns children={areaList} />
    </AreaPicker>
  )
}

function AreaPickerWithColumns2() {
  return (
    <AreaPicker depth={2} onConfirm={(_values_, options) => toastOptions(options)}>
      <AreaPicker.Toolbar>
        <AreaPicker.Button>Cancel</AreaPicker.Button>
        <AreaPicker.Title>Title</AreaPicker.Title>
        <AreaPicker.Button>Confirm</AreaPicker.Button>
      </AreaPicker.Toolbar>
      <AreaPicker.Columns children={areaList} />
    </AreaPicker>
  )
}

export default function AreaPickerDemo() {
  return (
    <Page title="AreaPicker" className="area-picker-demo">
      <Toast id="toast" />
      <Block variant="card" title="Basic usage">
        <BasicAreaPicker />
      </Block>
      <Block variant="card" title="Select the province and city">
        <AreaPickerWithValue />
      </Block>
      <Block variant="card" title="Configure Display Columns">
        <AreaPickerWithColumns2 />
      </Block>
    </Page>
  )
}