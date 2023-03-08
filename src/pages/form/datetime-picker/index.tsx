import { DatetimePicker } from "@vnmfify/core"
import { useState } from "react"
import Block from "../../../components/block"
import CustomWrapper from "../../../components/custom-wrapper"
import Page from "../../../components/page"
import "./index.scss"

function DatePicker() {
  const [minDate] = useState(new Date(2019, 0, 1))
  const [maxDate] = useState(new Date(2023, 11, 12))
  const [defaultValue] = useState(new Date(2021, 12, 14))
  const [value, setValue] = useState(new Date(2022, 10, 14))
  return (
    <DatetimePicker
      type="date"
      min={minDate}
      max={maxDate}
      defaultValue={defaultValue}
      value={value}
      onChange={setValue}
    >
      <DatetimePicker.Toolbar>
        <DatetimePicker.Button>Cancel</DatetimePicker.Button>
        <DatetimePicker.Title>Select year month day</DatetimePicker.Title>
        <DatetimePicker.Button>Confirm</DatetimePicker.Button>
      </DatetimePicker.Toolbar>
    </DatetimePicker>
  )
}

function YearMonthPicker() {
  const [minDate] = useState(new Date(2020, 0, 1))
  const [maxDate] = useState(new Date(2025, 10, 1))
  const [defaultValue] = useState(new Date(2021, 0, 17))

  return (
    <DatetimePicker
      type="year-month"
      min={minDate}
      max={maxDate}
      defaultValue={defaultValue}
      formatter={(type, val) => {
        if (type === "year") {
          return `${val}year`
        }
        if (type === "month") {
          return `${val}month`
        }
        return val
      }}
    >
      <DatetimePicker.Toolbar>
        <DatetimePicker.Button>Cancel</DatetimePicker.Button>
        <DatetimePicker.Title>Select year and month</DatetimePicker.Title>
        <DatetimePicker.Button>Confirm</DatetimePicker.Button>
      </DatetimePicker.Toolbar>
    </DatetimePicker>
  )
}

function MonthDayPicker() {
  const [minDate] = useState(new Date(2020, 0, 1))
  const [maxDate] = useState(new Date(2025, 10, 1))
  const [defaultValue] = useState(new Date(2021, 0, 17))

  return (
    <DatetimePicker
      type="month-day"
      min={minDate}
      max={maxDate}
      defaultValue={defaultValue}
      formatter={(type, val) => {
        if (type === "month") {
          return `${val}month`
        }
        if (type === "day") {
          return `${val} days`
        }
        return val
      }}
    >
      <DatetimePicker.Toolbar>
        <DatetimePicker.Button>Cancel</DatetimePicker.Button>
        <DatetimePicker.Title>Select year and month</DatetimePicker.Title>
        <DatetimePicker.Button>Confirm</DatetimePicker.Button>
      </DatetimePicker.Toolbar>
    </DatetimePicker>
  )
}

function TimePicker() {
  const [minDate] = useState(new Date(2020, 0, 1, 10, 0, 0))
  const [maxDate] = useState(new Date(2020, 0, 1, 20, 59, 59))
  const [defaultValue] = useState(new Date(2020, 0, 1, 12, 0, 0))

  return (
    <DatetimePicker type="time" min={minDate} max={maxDate} defaultValue={defaultValue}>
      <DatetimePicker.Toolbar>
        <DatetimePicker.Button>Cancel</DatetimePicker.Button>
        <DatetimePicker.Title>Select time</DatetimePicker.Title>
        <DatetimePicker.Button>Confirm</DatetimePicker.Button>
      </DatetimePicker.Toolbar>
    </DatetimePicker>
  )
}

function DateTimePicker() {
  const [minDate] = useState(new Date(2020, 0, 1, 10, 0, 0))
  const [maxDate] = useState(new Date(2025, 10, 1, 20, 59, 59))
  const [defaultValue] = useState(new Date(2021, 2, 3, 12, 12, 12))

  return (
    <DatetimePicker type="datetime" min={minDate} max={maxDate} defaultValue={defaultValue}>
      <DatetimePicker.Toolbar>
        <DatetimePicker.Button>Cancel</DatetimePicker.Button>
        <DatetimePicker.Title>Select full time</DatetimePicker.Title>
        <DatetimePicker.Button>Confirm</DatetimePicker.Button>
      </DatetimePicker.Toolbar>
    </DatetimePicker>
  )
}

function DateHourPicker() {
  const [minDate] = useState(new Date(2020, 0, 1, 0))
  const [maxDate] = useState(new Date(2025, 10, 1, 23))
  const [defaultValue] = useState(new Date())

  return (
    <DatetimePicker type="date-hour" min={minDate} max={maxDate} defaultValue={defaultValue}>
      <DatetimePicker.Toolbar>
        <DatetimePicker.Button>Cancel</DatetimePicker.Button>
        <DatetimePicker.Title>Select Year Month Day Hour</DatetimePicker.Title>
        <DatetimePicker.Button>Confirm</DatetimePicker.Button>
      </DatetimePicker.Toolbar>
    </DatetimePicker>
  )
}

function TimePickerWithFilter() {
  const [minDate] = useState(new Date(2020, 0, 1, 0, 0, 0))
  const [maxDate] = useState(new Date(2020, 0, 1, 23, 59, 59))
  const [defaultValue] = useState(new Date(2020, 0, 1, 12, 0, 0))

  return (
    <DatetimePicker
      type="time"
      min={minDate}
      max={maxDate}
      defaultValue={defaultValue}
      filter={(type, options) => {
        if (type === "minute") {
          return options.filter((option) => Number(option) % 5 === 0)
        }
        return options
      }}
    >
      <DatetimePicker.Toolbar>
        <DatetimePicker.Button>Cancel</DatetimePicker.Button>
        <DatetimePicker.Title>Option Filter</DatetimePicker.Title>
        <DatetimePicker.Button>Confirm</DatetimePicker.Button>
      </DatetimePicker.Toolbar>
    </DatetimePicker>
  )
}

function DatePickerWithFields() {
  const [minDate] = useState(new Date(2020, 0, 1))
  const [maxDate] = useState(new Date(2025, 10, 1))
  const [defaultValue] = useState(new Date(2021, 0, 17))
  return (
    <DatetimePicker
      type="date"
      fields={["month", "day", "year"]}
      defaultValue={defaultValue}
      min={minDate}
      max={maxDate}
      formatter={(type, val) => {
        if (type === "year") {
          return val + "year"
        }
        if (type === "month") {
          return val + "month"
        }
        if (type === "day") {
          return val + "day"
        }
        return val
      }}
    >
      <DatetimePicker.Toolbar>
        <DatetimePicker.Button>Cancel</DatetimePicker.Button>
        <DatetimePicker.Title>Custom column sorting</DatetimePicker.Title>
        <DatetimePicker.Button>Confirm</DatetimePicker.Button>
      </DatetimePicker.Toolbar>
    </DatetimePicker>
  )
}

export default function PickerDemo() {
  return (
    <Page title="DatetimePicker" className="datetime-picker-demo">
      <Block variant="card" title="Select Year Month Day">
        <CustomWrapper>
          <DatePicker />
        </CustomWrapper>
      </Block>
      <Block variant="card" title="Select year and month">
        <CustomWrapper>
          <YearMonthPicker />
        </CustomWrapper>
      </Block>
      <Block variant="card" title="Select month and day">
        <CustomWrapper>
          <MonthDayPicker />
        </CustomWrapper>
      </Block>
      <Block variant="card" title="Select a time">
        <CustomWrapper>
          <TimePicker />
        </CustomWrapper>
      </Block>
      <Block variant="card" title="Select full time">
        <CustomWrapper>
          <DateTimePicker />
        </CustomWrapper>
      </Block>
      <Block variant="card" title="Option filter">
        <CustomWrapper>
          <TimePickerWithFilter />
        </CustomWrapper>
      </Block>
      <Block variant="card" title="Select Year Month Day Hour">
        <CustomWrapper>
          <DateHourPicker />
        </CustomWrapper>
      </Block>
      <Block variant="card" title="Custom column sorting">
        <CustomWrapper>
          <DatePickerWithFields />
        </CustomWrapper>
      </Block>
    </Page>
  )
}