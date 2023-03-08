import { Field, Input, Picker, Popup, Toast } from "@vnmfify/core"
import { ArrowRight } from "@vnmfify/icons"
import * as _ from "lodash"
import { useState } from "react"
import Block from "../../../components/block"
import CustomWrapper from "../../../components/custom-wrapper"
import Page from "../../../components/page"
import "./index.scss"

function BasicPicker() {
  return (
    <>
      <Toast id="toast" />
      <Picker onChange={(value) => Toast.open(`Current value: ${value}`)}>
        <Picker.Toolbar>
          <Picker.Button>Cancel</Picker.Button>
          <Picker.Title>Title</Picker.Title>
          <Picker.Button>Confirm</Picker.Button>
        </Picker.Toolbar>
        <Picker.Column>
          <Picker.Option>Hangzhou</Picker.Option>
          <Picker.Option>Ningbo</Picker.Option>
          <Picker.Option>Wenzhou</Picker.Option>
          <Picker.Option>Shaoxing</Picker.Option>
          <Picker.Option>Huzhou</Picker.Option>
          <Picker.Option>Jiaxing</Picker.Option>
          <Picker.Option>Jinhua</Picker.Option>
        </Picker.Column>
      </Picker>
    </>
  )
}

function DefaultPicker() {
  return (
    <>
      <Toast id="toast" />
      <Picker defaultValue="Wenzhou" onChange={(value) => Toast.open(`Current value: ${value}`)}>
        <Picker.Toolbar>
          <Picker.Button>Cancel</Picker.Button>
          <Picker.Title>Title</Picker.Title>
          <Picker.Button>Confirm</Picker.Button>
        </Picker.Toolbar>
        <Picker.Column>
          <Picker.Option>Hangzhou</Picker.Option>
          <Picker.Option>Ningbo</Picker.Option>
          <Picker.Option>Wenzhou</Picker.Option>
          <Picker.Option>Shaoxing</Picker.Option>
          <Picker.Option>Huzhou</Picker.Option>
          <Picker.Option>Jiaxing</Picker.Option>
          <Picker.Option>Jinhua</Picker.Option>
        </Picker.Column>
      </Picker>
    </>
  )
}

function PickerWithMultiColumns() {
  return (
    <>
      <Toast id="toast" />
      <Picker onConfirm={(values) => Toast.open(`Current value: ${_.join(values, ",")}`)}>
        <Picker.Toolbar>
          <Picker.Button>Cancel</Picker.Button>
          <Picker.Title>Title</Picker.Title>
          <Picker.Button>Confirm</Picker.Button>
        </Picker.Toolbar>
        <Picker.Column>
          <Picker.Option>Monday</Picker.Option>
          <Picker.Option>Tuesday</Picker.Option>
          <Picker.Option>Wednesday</Picker.Option>
          <Picker.Option>Thursday</Picker.Option>
          <Picker.Option>Friday</Picker.Option>
        </Picker.Column>
        <Picker.Column>
          <Picker.Option>AM</Picker.Option>
          <Picker.Option>PM</Picker.Option>
          <Picker.Option>Night</Picker.Option>
        </Picker.Column>
      </Picker>
    </>
  )
}

function DisabledPicker() {
  return (
    <Picker>
      <Picker.Toolbar>
        <Picker.Button>Cancel</Picker.Button>
        <Picker.Title>Title</Picker.Title>
        <Picker.Button>Confirm</Picker.Button>
      </Picker.Toolbar>
      <Picker.Column>
        <Picker.Option disabled>Hangzhou</Picker.Option>
        <Picker.Option>Ningbo</Picker.Option>
        <Picker.Option>Wenzhou</Picker.Option>
      </Picker.Column>
    </Picker>
  )
}

function LoadingPicker() {
  return (
    <Picker loading>
      <Picker.Toolbar>
        <Picker.Button>Cancel</Picker.Button>
        <Picker.Title>Title</Picker.Title>
        <Picker.Button>Confirm</Picker.Button>
      </Picker.Toolbar>
      <Picker.Column>
        <Picker.Option>Zhejiang</Picker.Option>
        <Picker.Option>Fujian</Picker.Option>
      </Picker.Column>
      <Picker.Column>
        <Picker.Option>Hangzhou</Picker.Option>
        <Picker.Option>Ningbo</Picker.Option>
        <Picker.Option>Wenzhou</Picker.Option>
        <Picker.Option>Jiaxing</Picker.Option>
        <Picker.Option>Huzhou</Picker.Option>
      </Picker.Column>
    </Picker>
  )
}

function PickerPopup() {
  const [value, setValue] = useState("")
  const [openPicker, setOpenPicker] = useState(false)

  return (
    <>
      <Field label="City" rightIcon={<ArrowRight />} onClick={() => setOpenPicker(true)}>
        <Input readonly placeholder="Choose city" value={value} />
      </Field>
      <Popup open={openPicker} rounded placement="bottom" onClose={setOpenPicker}>
        <Popup.Backdrop />
        <Picker
          onCancel={() => setOpenPicker(false)}
          onConfirm={(values) => {
            setValue(values)
            setOpenPicker(false)
          }}
        >
          <Picker.Toolbar>
            <Picker.Button>Cancel</Picker.Button>
            <Picker.Title>Title</Picker.Title>
            <Picker.Button>Confirm</Picker.Button>
          </Picker.Toolbar>
          <Picker.Column>
            <Picker.Option>Hangzhou</Picker.Option>
            <Picker.Option>Ningbo</Picker.Option>
            <Picker.Option>Wenzhou</Picker.Option>
            <Picker.Option>Shaoxing</Picker.Option>
            <Picker.Option>Huzhou</Picker.Option>
            <Picker.Option>Jiaxing</Picker.Option>
            <Picker.Option>Jinhua</Picker.Option>
          </Picker.Column>
        </Picker>
      </Popup>
    </>
  )
}

export default function PickerDemo() {
  return (
    <Page title="Picker" className="picker-demo">
      <Block variant="card" title="basic usage">
        <CustomWrapper>
          <BasicPicker />
        </CustomWrapper>
      </Block>
      <Block variant="card" title="Default selection">
        <CustomWrapper>
          <DefaultPicker />
        </CustomWrapper>
      </Block>
      <Block variant="card" title="Multi-column selection">
        <CustomWrapper>
          <PickerWithMultiColumns />
        </CustomWrapper>
      </Block>
      <Block variant="card" title="Disabled option">
        <CustomWrapper>
          <DisabledPicker />
        </CustomWrapper>
      </Block>
      <Block variant="card" title="Loading Status">
        <CustomWrapper>
          <LoadingPicker />
        </CustomWrapper>
      </Block>
      <Block variant="card" title="Use with popup layer">
        <CustomWrapper>
          <PickerPopup />
        </CustomWrapper>
      </Block>
    </Page>
  )
}