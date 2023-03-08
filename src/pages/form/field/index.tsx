import { Button, Cell, Field, Input, Textarea } from "@vnmfify/core"
import { MusicOutlined, SmileOutlined, WarningOutlined } from "@vnmfify/icons"
import { useState } from "react"
import Block from "../../../components/block"
import CustomWrapper from "../../../components/custom-wrapper"
import Page from "../../../components/page"
import "./index.scss"

function BasicField() {
  const [value, setValue] = useState("")
  return (
    <Cell.Group inset>
      <Field label="text">
        <Input placeholder="Please enter text" value={value} onChange={(e) => setValue(e.detail.value)} />
      </Field>
    </Cell.Group>
  )
}

function CustomField() {
  const [text, setText] = useState("")
  const [idcard, setIdcard] = useState("")
  const [number, setNumber] = useState("")
  const [digit, setDigit] = useState("")
  const [password, setPassword] = useState("")
  return (
    <Cell.Group inset>
      <Field label="text">
        <Input placeholder="Please enter text" value={text} onChange={(e) => setText(e.detail.value)} />
      </Field>
      <Field label="ID number">
        <Input
          type="idcard"
          placeholder="Please enter your phone number"
          value={idcard}
          onChange={(e) => setIdcard(e.detail.value)}
        />
      </Field>
      <Field label="integer">
        <Input
          type="number"
          placeholder="Please enter an integer"
          value={number}
          onChange={(e) => setNumber(e.detail.value)}
        />
      </Field>
      <Field label="number">
        <Input
          type="digit"
          placeholder="Please enter a number (support decimals)"
          value={digit}
          onChange={(e) => setDigit(e.detail.value)}
        />
      </Field>
      <Field label="password">
        <Input
          password
          placeholder="Please enter password"
          value={password}
          onChange={(e) => setPassword(e.detail.value)}
        />
      </Field>
    </Cell.Group>
  )
}

function DisabledField() {
  return (
    <Cell.Group inset>
      <Field label="text">
        <Input placeholder="input box read only" readonly />
      </Field>
      <Field label="text">
        <Input placeholder="The input box is disabled" disabled />
      </Field>
    </Cell.Group>
  )
}

function IconField() {
  return (
    <Cell.Group inset>
      <Field label="文本" icon={<SmileOutlined />} rightIcon={<WarningOutlined />}>
        <Input placeholder="Show Icon" />
      </Field>
      <Field label="文本" icon={<MusicOutlined />}>
        <Input placeholder="Show clear icon" clearable />
      </Field>
    </Cell.Group>
  )
}

function ErrorField() {
  return (
    <Cell.Group inset>
      <Field label="username" required>
        <Input placeholder="Please enter username" color="danger" />
      </Field>
      <Field
        required
        label="Mobile phone number"
        feedback={<Field.Feedback status="invalid">Incorrect phone number format</Field.Feedback>}
      >
        <Input placeholder="Please enter your phone number" />
      </Field>
    </Cell.Group>
  )
}

function ButtonField() {
  return (
    <Cell.Group inset>
      <Field align="center" label="SMS verification code">
        <Input placeholder="Please enter the SMS verification code" />
        <Button size="small" color="primary">
          Send the verification code
        </Button>
      </Field>
    </Cell.Group>
  )
}

function FieldWithInputAlign() {
  return (
    <Cell.Group inset>
      <Field label="text">
        <Input align="left" placeholder="The content of the input box is left aligned" />
      </Field>
      <Field label="text">
        <Input align="center" placeholder="The content of the input box is centered" />
      </Field>
      <Field label="text">
        <Input align="right" placeholder="The content of the input box is right-aligned" />
      </Field>
    </Cell.Group>
  )
}

function TextareaWithAutoHeight() {
  return (
    <Cell.Group inset>
      <Field align="start" label="Message">
        <Textarea autoHeight placeholder="Please enter a message" />
      </Field>
    </Cell.Group>
  )
}

function TextareaWithLimit() {
  return (
    <Cell.Group inset>
      <Field align="start" label="Message">
        <Textarea style={{ height: "48px" }} limit={50} placeholder="Please enter a message" />
      </Field>
    </Cell.Group>
  )
}

export default function FieldDemo() {
  return (
    <Page title="Field" className="field-demo">
      <Block title="Basic Usage">
        <BasicField />
      </Block>
      <Block title="Custom Type">
        <CustomField />
      </Block>
      <Block title="Disable input box">
        <DisabledField />
      </Block>
      <Block title="Show Icon">
        <IconField />
      </Block>
      <Block title="Error message">
        <ErrorField />
      </Block>
      <Block title="Insert button">
        <ButtonField />
      </Block>
      <Block title="Highly Responsive">
        <CustomWrapper>
          <TextareaWithAutoHeight />
        </CustomWrapper>
      </Block>
      <Block title="Show word count">
        <CustomWrapper>
          <TextareaWithLimit />
        </CustomWrapper>
      </Block>
      <Block title="Input box content alignment">
        <CustomWrapper>
          <FieldWithInputAlign />
        </CustomWrapper>
      </Block>
    </Page>
  )
}