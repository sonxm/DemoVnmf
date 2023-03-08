import { Cascader, Field, Input, Popup } from "@vnmfify/core"
import { useCascader } from "@vnmfify/hooks"
import { ArrowRight } from "@vnmfify/icons"
import * as _ from "lodash"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import area from "./area"
import "./index.scss"

function BasicCascader() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<string[]>([])
  const [fieldValue, setFieldValue] = useState("")
  const { columns } = useCascader({ value, depth: 3, options: area })
  return (
    <>
      <Field label="option value" rightIcon={<ArrowRight />} onClick={() => setOpen(true)}>
        <Input readonly placeholder="Please select a region" value={fieldValue} />
      </Field>
      <Popup open={open} rounded placement="bottom" onClose={setOpen}>
        <Popup.Close />
        <Cascader
          value={value}
          onSelect={setValue}
          onChange={(_values_, options) => {
            setOpen(false)
            setFieldValue(
              _.join(
                _.map(options, ({ children }) => children),
                "/",
              ),
            )
          }}
        >
          <Cascader.Header>Please select your region</Cascader.Header>
          {
            //
            _.map(columns, (options, index) => (
              <Cascader.Tab key={index}>
                {
                  //
                  _.map(options, (option) => (
                    <Cascader.Option key={option.value} value={option.value}>
                      {option.label}
                    </Cascader.Option>
                  ))
                }
              </Cascader.Tab>
            ))
          }
        </Cascader>
      </Popup>
    </>
  )
}

function CustomColorCascader() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<string[]>([])
  const [fieldValue, setFieldValue] = useState("")
  const { columns } = useCascader({ value, depth: 3, options: area })
  return (
    <>
      <Field label="option value" rightIcon={<ArrowRight />} onClick={() => setOpen(true)}>
        <Input readonly placeholder="Please select a region" value={fieldValue} />
      </Field>
      <Popup open={open} rounded placement="bottom" onClose={setOpen}>
        <Popup.Close />
        <Cascader
          className="custom-color"
          swipeable
          value={value}
          onSelect={setValue}
          onChange={(_values_, options) => {
            setOpen(false)
            setFieldValue(
              _.join(
                _.map(options, ({ children }) => children),
                "/",
              ),
            )
          }}
        >
          <Cascader.Header>Please select your region</Cascader.Header>
          {
            //
            _.map(columns, (options, index) => (
              <Cascader.Tab key={index}>
                {
                  //
                  _.map(options, (option) => (
                    <Cascader.Option key={option.value} value={option.value}>
                      {option.label}
                    </Cascader.Option>
                  ))
                }
              </Cascader.Tab>
            ))
          }
        </Cascader>
      </Popup>
    </>
  )
}

export default function CascaderDemo() {
  return (
    <Page title="Cascader" className="cascader-demo">
      <Block variant="card" title="Basic usage">
        <BasicCascader />
      </Block>
      <Block variant="card" title="custom color">
        <CustomColorCascader />
      </Block>
    </Page>
  )
}