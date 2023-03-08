import {
  Button,
  Calendar,
  Cell,
  Checkbox,
  DatetimePicker,
  Form,
  Input,
  Picker,
  Popup,
  Radio,
  Rate,
  Slider,
  Stepper,
  Switch,
  Toast,
  Uploader,
} from "@vnmfify/core"
import { FormItemInstance, FormValidError } from "@vnmfify/core/form"
import { ArrowRight } from "@vnmfify/icons"
import { View } from "@vnxjs/components"
import { BaseEventOrig } from "@vnxjs/components/types/common"
import { FormProps } from "@vnxjs/components/types/Form"
import { chooseImage } from "@vnxjs/vnmf"
import * as _ from "lodash"
import { useRef, useState } from "react"
import Block from "../../../components/block"
import CustomWrapper from "../../../components/custom-wrapper"
import Page from "../../../components/page"
import "./index.scss"

function BasicForm() {
  const onSubmit = (event: BaseEventOrig<FormProps.onSubmitEventDetail>) => {
    Toast.open(JSON.stringify(event.detail.value))
  }

  return (
    <Form onSubmit={onSubmit}>
      <Toast id="toast" />
      <Cell.Group inset>
        <Form.Item name="username" rules={[{ required: true, message: "Please fill in the username" }]}>
          <Form.Label>Username</Form.Label>
          <Form.Control>
            <Input placeholder="username" />
          </Form.Control>
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "Please fill in the password" }]}>
          <Form.Label>Password</Form.Label>
          <Form.Control>
            <Input password placeholder="password" />
          </Form.Control>
        </Form.Item>
      </Cell.Group>
      <View style={{ margin: "16px" }}>
        <Button shape="round" block color="primary" formType="submit">
          submit
        </Button>
      </View>
    </Form>
  )
}

function FormWithRules() {
  const asyncValidator = (val: any) =>
    new Promise<boolean>((resolve) => {
      Toast.loading("Verifying...")

      setTimeout(() => {
        Toast.close("toast")
        resolve(/\d{6}/.test(val))
      }, 1000)
    })

  function onValidate(errors: FormValidError[]) {
    Toast.open({
      style: {
        textAlign: "left",
      },
      message: JSON.stringify(errors, undefined, 2),
    })
  }

  return (
    <Form defaultValues={{ validatorMessage: "abc" }} onValidate={onValidate}>
      <Toast id="toast" />
      <Cell.Group inset>
        <Form.Item name="pattern" rules={[{ pattern: /\d{6}/, message: "Please enter the correct content" }]}>
          <Form.Label>Text</Form.Label>
          <Form.Control>
            <Input placeholder="Regular check" />
          </Form.Control>
        </Form.Item>
        <Form.Item
          name="validator"
          rules={[{ validator: (val) => /1\d{10}/.test(val), message: "Please enter the correct content" }]}
        >
          <Form.Label>Text</Form.Label>
          <Form.Control>
            <Input placeholder="Function Check" />
          </Form.Control>
        </Form.Item>
        <Form.Item
          name="validatorMessage"
          rules={[{ validator: (val) => `${val ?? ""} is invalid, please re-enter ` }]}
        >
          <Form.Label>Text</Form.Label>
          <Form.Control>
            <Input placeholder="The verification function returns an error message" />
          </Form.Control>
        </Form.Item>
        <Form.Item
          name="asyncValidator"
          rules={[{ validator: asyncValidator, message: "Please enter correct content" }]}
        >
          <Form.Label>Text</Form.Label>
          <Form.Control>
            <Input placeholder="Async function validation" />
          </Form.Control>
        </Form.Item>
      </Cell.Group>
      <View style={{ margin: "16px" }}>
        <Button shape="round" block color="primary" formType="submit">
          submit
        </Button>
      </View>
    </Form>
  )
}

function UploaderField() {
  const itemRef = useRef<FormItemInstance>()

  function onUpload() {
    chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
    }).then(({ tempFiles }) => {
      itemRef.current?.setValue([
        ...(itemRef.current?.getValue() ? [...itemRef.current?.getValue()] : []),
        {
          url: tempFiles[0].path,
          type: tempFiles[0].type,
          name: tempFiles[0].originalFileObj?.name,
        },
      ])
    })
  }

  return (
    <Form.Item ref={itemRef} name="uploader">
      <Form.Label>File upload</Form.Label>
      <Form.Control>
        <Uploader multiple maxFiles={2} onUpload={onUpload} />
      </Form.Control>
    </Form.Item>
  )
}

function PickerField() {
  const itemRef = useRef<FormItemInstance>()
  const [open, setOpen] = useState(false)

  return (
    <>
      <Form.Item ref={itemRef} name="picker" clickable rightIcon={<ArrowRight />}>
        <Form.Label>Selector</Form.Label>
        <Form.Control>
          <Input readonly placeholder="Click to select city" onClick={() => setOpen(true)} />
        </Form.Control>
      </Form.Item>
      <Popup mountOnEnter={false} open={open} rounded placement="bottom" onClose={setOpen}>
        <Picker
          onCancel={() => setOpen(false)}
          onConfirm={(newValue) => {
            itemRef.current?.setValue(newValue)
            setOpen(false)
          }}
        >
          <Picker.Toolbar>
            <Picker.Button>Cancel</Picker.Button>
            <Picker.Button>Confirm</Picker.Button>
          </Picker.Toolbar>
          <Picker.Column>
            <Picker.Option>Hangzhou</Picker.Option>
            <Picker.Option>Ningbo</Picker.Option>
            <Picker.Option>Wenzhou</Picker.Option>
            <Picker.Option>Jiaxing</Picker.Option>
            <Picker.Option>Huzhou</Picker.Option>
          </Picker.Column>
        </Picker>
      </Popup>
    </>
  )
}

function DatetimePickerField() {
  const itemRef = useRef<FormItemInstance>()
  const [open, setOpen] = useState(false)

  const formatDate = (date: any) => {
    if (date) {
      const hours = _.padStart(_.toString(date?.getHours()), 2, "0")
      const minutes = _.padStart(_.toString(date?.getMinutes()), 2, "0")
      return `${hours}:${minutes}`
    }
  }

  return (
    <>
      <Form.Item ref={itemRef} name="datetimePicker" clickable rightIcon={<ArrowRight />}>
        <Form.Label>Time Selection</Form.Label>
        <Form.Control>
          {(controller) => (
            <Input
              value={formatDate(controller.value)}
              readonly
              placeholder="Click to select time"
              onClick={() => setOpen(true)}
            />
          )}
        </Form.Control>
      </Form.Item>
      <Popup mountOnEnter={false} open={open} rounded placement="bottom" onClose={setOpen}>
        <DatetimePicker
          type="hour-minute"
          onCancel={() => setOpen(false)}
          onConfirm={(newValue) => {
            itemRef.current?.setValue(newValue)
            setOpen(false)
          }}
        >
          <Picker.Toolbar>
            <Picker.Button>Cancel</Picker.Button>
            <Picker.Button>Confirm</Picker.Button>
          </Picker.Toolbar>
        </DatetimePicker>
      </Popup>
    </>
  )
}

function CalendarField() {
  const itemRef = useRef<FormItemInstance>()
  const [open, setOpen] = useState(false)

  const formatDate = (date: any) => {
    if (date) {
      const months = _.padStart(_.toString(date?.getMonth() + 1), 2, "0")
      const days = _.padStart(_.toString(date?.getDate()), 2, "0")
      return `${months}-${days}`
    }
  }

  return (
    <>
      <Form.Item ref={itemRef} name="calendar" clickable rightIcon={<ArrowRight />}>
        <Form.Label>Calendar</Form.Label>
        <Form.Control>
          {(controller) => (
            <Input
              value={formatDate(controller.value)}
              readonly
              placeholder="Click to select a date"
              onClick={() => setOpen(true)}
            />
          )}
        </Form.Control>
      </Form.Item>
      <Popup
        mountOnEnter={false}
        style={{ height: "80%" }}
        open={open}
        rounded
        placement="bottom"
        onClose={setOpen}
      >
        <Popup.Close />
        <Calendar
          type="single"
          onConfirm={(newValue) => {
            itemRef.current?.setValue(newValue)
            setOpen(false)
          }}
        >
          <Calendar.Footer>
            <Calendar.Button type="confirm">OK</Calendar.Button>
          </Calendar.Footer>
        </Calendar>
      </Popup>
    </>
  )
}

function FormWithFields() {
  return (
    <Form onSubmit={(e) => Toast.open(JSON.stringify(e.detail.value, undefined, 2))}>
      <Cell.Group inset>
        <Form.Item name="switch">
          <Form.Label>Switch</Form.Label>
          <Form.Control>
            <Switch size={20} />
          </Form.Control>
        </Form.Item>
        <Form.Item name="checkbox">
          <Form.Label>Checkbox</Form.Label>
          <Form.Control>
            <Checkbox shape="square" />
          </Form.Control>
        </Form.Item>
        <Form.Item name="checkboxGroup">
          <Form.Label>Checkbox</Form.Label>
          <Form.Control>
            <Checkbox.Group direction="horizontal">
              <Checkbox name="1" shape="square">
                Checkbox 1
              </Checkbox>
              <Checkbox name="2" shape="square">
                Checkbox 2
              </Checkbox>
            </Checkbox.Group>
          </Form.Control>
        </Form.Item>
        <Form.Item name="radio">
          <Form.Label>Radio box</Form.Label>
          <Form.Control>
            <Radio.Group direction="horizontal">
              <Radio name="1">Radio 1</Radio>
              <Radio name="2">Radio 2</Radio>
            </Radio.Group>
          </Form.Control>
        </Form.Item>
        <Form.Item name="stepper">
          <Form.Label>Stepper</Form.Label>
          <Form.Control>
            <Stepper />
          </Form.Control>
        </Form.Item>
        <Form.Item name="rate">
          <Form.Label>Rating</Form.Label>
          <Form.Control>
            <Rate />
          </Form.Control>
        </Form.Item>
        <Form.Item name="slider">
          <Form.Label>Slider</Form.Label>
          <Form.Control>
            <Slider />
          </Form.Control>
        </Form.Item>
        <CustomWrapper>
          <UploaderField />
        </CustomWrapper>
        <CustomWrapper>
          <PickerField />
        </CustomWrapper>
        <CustomWrapper>
          <DatetimePickerField />
        </CustomWrapper>
        <CustomWrapper>
          <CalendarField />
        </CustomWrapper>
      </Cell.Group>
      <View style={{ margin: "16px" }}>
        <Button shape="round" block color="primary" formType="submit">
          submit
        </Button>
        <Button style={{ marginTop: "16px" }} shape="round" block color="warning" formType="reset">
          reset
        </Button>
      </View>
    </Form>
  )
}

export default function FormDemo() {
  return (
    <Page title="Form" className="form-demo">
      <Block title="Basic Usage">
        <BasicForm />
      </Block>
      <Block title="Validation rules">
        <FormWithRules />
      </Block>
      <Block title="Form item type">
        <CustomWrapper>
          <FormWithFields />
        </CustomWrapper>
      </Block>
    </Page>
  )
}