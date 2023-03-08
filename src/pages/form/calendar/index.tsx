import { Calendar, Cell, Popup } from "@vnmfify/core"
import { ArrowRight } from "@vnmfify/icons"
import { useState } from "react"
import Block from "../../../components/block"
import CustomWrapper from "../../../components/custom-wrapper"
import Page from "../../../components/page"
import "./index.scss"

const formatDate = (date: Date) => {
  if (date) {
    return `${date.getMonth() + 1}/${date.getDate()}`
  }
}

const formatFullDate = (date: Date) => {
  if (date) {
    return `${date.getFullYear()}/${formatDate(date)}`
  }
}

const formatMultiple = (dates: Date[]) => {
  if (dates.length) {
    return `${dates.length} dates selected`
  }
}

const formatRange = (dateRange: Date[]) => {
  if (dateRange.length) {
    const [start, end] = dateRange
    return `${formatDate(start)} - ${formatDate(end)}`
  }
}

const dayFormatter = (day: Calendar.DayObject) => {
  if (!day.value) {
    return day
  }

  const month = day.value.getMonth() + 1
  const date = day.value.getDate()

  if (month === 5) {
    if (date === 1) {
      day.top = "Labor Day"
    } else if (date === 4) {
      day.top = "Youth Day"
    } else if (date === 11) {
      day.children = "Today"
    }
  }

  if (day.type === "start") {
    day.bottom = "Enter"
  } else if (day.type === "end") {
    day.bottom = "Check out"
  } else if (day.type === "active") {
    day.bottom = "In/Out"
  }

  return day
}

function SingleCalendar() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<Date>()
  const [formatValue, setFormatValue] = useState<string>()

  return (
    <>
      <Cell
        title="Select a single date"
        clickable
        rightIcon={<ArrowRight />}
        children={formatValue}
        onClick={() => setOpen(true)}
      />
      <Popup
        style={{ height: "80%" }}
        open={open}
        mountOnEnter={false}
        rounded
        placement="bottom"
        onClose={setOpen}
      >
        <Calendar
          type="single"
          value={value}
          onChange={setValue}
          onConfirm={(newValue) => {
            setFormatValue(formatFullDate(newValue))
            setOpen(false)
          }}
        >
          <Calendar.Footer>
            <Calendar.Button type="confirm">确定</Calendar.Button>
          </Calendar.Footer>
        </Calendar>
      </Popup>
    </>
  )
}

function MultipleCalendar() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<Date[]>([])
  const [formatValue, setFormatValue] = useState<string>()

  return (
    <>
      <Cell
        title="Select multiple dates"
        clickable
        rightIcon={<ArrowRight />}
        children={formatValue}
        onClick={() => setOpen(true)}
      />
      <Popup
        style={{ height: "80%" }}
        open={open}
        mountOnEnter={false}
        rounded
        placement="bottom"
        onClose={setOpen}
      >
        <Calendar
          type="multiple"
          value={value}
          onChange={setValue}
          onConfirm={(newValue) => {
            setFormatValue(formatMultiple(newValue))
            setOpen(false)
          }}
        >
          <Calendar.Footer>
            <Calendar.Button type="confirm">确定</Calendar.Button>
          </Calendar.Footer>
        </Calendar>
      </Popup>
    </>
  )
}

function RangeCalendar() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<Date[]>([])
  const [formatValue, setFormatValue] = useState<string>()

  return (
    <>
      <Cell
        title="Select date range"
        clickable
        rightIcon={<ArrowRight />}
        children={formatValue}
        onClick={() => setOpen(true)}
      />
      <Popup
        style={{ height: "80%" }}
        open={open}
        mountOnEnter={false}
        rounded
        placement="bottom"
        onClose={setOpen}
      >
        <Calendar
          type="range"
          value={value}
          onChange={setValue}
          onConfirm={(newValue) => {
            setFormatValue(formatRange(newValue))
            setOpen(false)
          }}
        >
          <Calendar.Footer>
            <Calendar.Button type="confirm">确定</Calendar.Button>
          </Calendar.Footer>
        </Calendar>
      </Popup>
    </>
  )
}

function SingleQuicklyCalendar() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<Date>()
  const [formatValue, setFormatValue] = useState<string>()

  return (
    <>
      <Cell
        title="Select a single date"
        clickable
        rightIcon={<ArrowRight />}
        children={formatValue}
        onClick={() => setOpen(true)}
      />
      <Popup style={{ height: "80%" }} open={open} rounded placement="bottom" onClose={setOpen}>
        <Calendar
          type="single"
          value={value}
          onChange={setValue}
          onConfirm={(newValue) => {
            setFormatValue(formatFullDate(newValue))
            setOpen(false)
          }}
        />
      </Popup>
    </>
  )
}

function RangeQuicklyCalendar() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<[]>([])
  const [formatValue, setFormatValue] = useState<string>()

  return (
    <>
      <Cell
        title="Select date range"
        clickable
        rightIcon={<ArrowRight />}
        children={formatValue}
        onClick={() => setOpen(true)}
      />
      <Popup style={{ height: "80%" }} open={open} rounded placement="bottom" onClose={setOpen}>
        <Calendar
          type="single"
          value={value}
          onChange={setValue}
          onConfirm={(newValue) => {
            setFormatValue(formatRange(newValue))
            setOpen(false)
          }}
        />
      </Popup>
    </>
  )
}

function CustomColorCalendar() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<[]>([])
  const [formatValue, setFormatValue] = useState<string>()

  return (
    <>
      <Cell
        title="custom color"
        clickable
        rightIcon={<ArrowRight />}
        children={formatValue}
        onClick={() => setOpen(true)}
      />
      <Popup style={{ height: "80%" }} open={open} rounded placement="bottom" onClose={setOpen}>
        <Calendar
          style={{
            // @ts-ignore
            "--calendar-active-color": "#1989fa",
          }}
          type="single"
          value={value}
          onChange={setValue}
          onConfirm={(newValue) => {
            setFormatValue(formatRange(newValue))
            setOpen(false)
          }}
        />
      </Popup>
    </>
  )
}

function CustomRangeCalendar() {
  const [minDate] = useState(new Date(2010, 0, 1))
  const [maxDate] = useState(new Date(2010, 0, 31))
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<Date[]>([])
  const [formatValue, setFormatValue] = useState<string>()

  return (
    <>
      <Cell
        title="Custom date range"
        clickable
        rightIcon={<ArrowRight />}
        children={formatValue}
        onClick={() => setOpen(true)}
      />
      <Popup style={{ height: "80%" }} open={open} rounded placement="bottom" onClose={setOpen}>
        <Calendar
          type="range"
          min={minDate}
          max={maxDate}
          value={value}
          onChange={setValue}
          onConfirm={(newValue) => {
            setFormatValue(formatRange(newValue))
            setOpen(false)
          }}
        >
          <Calendar.Footer>
            <Calendar.Button type="confirm">确定</Calendar.Button>
          </Calendar.Footer>
        </Calendar>
      </Popup>
    </>
  )
}

function CustomConfirmCalendar() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<Date[]>([])
  const [confirm, setConfirm] = useState("Please select the end time")
  const [formatValue, setFormatValue] = useState<string>()

  return (
    <>
      <Cell
        title="Custom Button"
        clickable
        rightIcon={<ArrowRight />}
        children={formatValue}
        onClick={() => setOpen(true)}
      />
      <Popup style={{ height: "80%" }} rounded placement="bottom" open={open} onClose={setOpen}>
        <Popup.Close />
        <Calendar
          type="range"
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
            setConfirm(newValue.length === 2 ? "Complete" : "Please select the end time")
          }}
          onConfirm={(newValue) => {
            setFormatValue(formatRange(newValue))
            setOpen(false)
          }}
        >
          <Calendar.Footer>
            <Calendar.Button type="confirm">{confirm}</Calendar.Button>
          </Calendar.Footer>
        </Calendar>
      </Popup>
    </>
  )
}

function CustomDayCalendar() {
  const [open, setOpen] = useState(false)
  const [minDate] = useState(new Date(2010, 4, 1))
  const [maxDate] = useState(new Date(2010, 4, 31))
  const [value, setValue] = useState<Date[]>([])
  const [formatValue, setFormatValue] = useState<string>()

  return (
    <>
      <Cell
        title="Custom Date Copy"
        clickable
        rightIcon={<ArrowRight />}
        children={formatValue}
        onClick={() => setOpen(true)}
      />
      <Popup style={{ height: "80%" }} rounded placement="bottom" open={open} onClose={setOpen}>
        <Popup.Close />
        <Calendar
          type="range"
          min={minDate}
          max={maxDate}
          formatter={dayFormatter}
          value={value}
          onChange={setValue}
          onConfirm={(newValue) => {
            setFormatValue(formatRange(newValue))
            setOpen(false)
          }}
        >
          <Calendar.Footer>
            <Calendar.Button type="confirm">确定</Calendar.Button>
          </Calendar.Footer>
        </Calendar>
      </Popup>
    </>
  )
}

function CustomPositionCalendar() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<Date>()
  const [formatValue, setFormatValue] = useState<string>()

  return (
    <>
      <Cell
        title="Custom popup position"
        clickable
        rightIcon={<ArrowRight />}
        children={formatValue}
        onClick={() => setOpen(true)}
      />
      <Popup style={{ height: "100%" }} placement="right" open={open} onClose={setOpen}>
        <Popup.Close />
        <Calendar
          type="single"
          value={value}
          onChange={setValue}
          onConfirm={(newValue) => {
            setFormatValue(formatFullDate(newValue))
            setOpen(false)
          }}
        >
          <Calendar.Footer>
            <Calendar.Button type="confirm">确定</Calendar.Button>
          </Calendar.Footer>
        </Calendar>
      </Popup>
    </>
  )
}

function CustomFirstDayOfWeekCalendar() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<Date>()
  const [formatValue, setFormatValue] = useState<string>()

  return (
    <>
      <Cell
        title="Custom Week Start"
        clickable
        rightIcon={<ArrowRight />}
        children={formatValue}
        onClick={() => setOpen(true)}
      />
      <Popup style={{ height: "80%" }} open={open} rounded placement="bottom" onClose={setOpen}>
        <Calendar
          type="single"
          value={value}
          onChange={setValue}
          onConfirm={(newValue) => {
            setFormatValue(formatFullDate(newValue))
            setOpen(false)
          }}
        >
          <Calendar.Footer>
            <Calendar.Button type="confirm">确定</Calendar.Button>
          </Calendar.Footer>
        </Calendar>
      </Popup>
    </>
  )
}

function TiledCalendar() {
  const [minDate] = useState(new Date(2012, 1, 10))
  const [maxDate] = useState(new Date(2012, 10, 20))
  const [value, setValue] = useState<Date>(minDate)
  return (
    <Calendar
      style={{ height: "500px" }}
      title="Calendar"
      min={minDate}
      max={maxDate}
      value={value}
      onChange={setValue}
    />
  )
}

export default function CalendarDemo() {
  return (
    <Page title="Calendar" className="calendar-demo">
      <Block title="Basic Usage">
        <Cell.Group clickable inset>
          <CustomWrapper>
            <SingleCalendar />
          </CustomWrapper>
          <CustomWrapper>
            <MultipleCalendar />
          </CustomWrapper>
          <CustomWrapper>
            <RangeCalendar />
          </CustomWrapper>
        </Cell.Group>
      </Block>
      <Block title="Quick Selection">
        <Cell.Group clickable inset>
          <CustomWrapper>
            <SingleQuicklyCalendar />
          </CustomWrapper>
          <CustomWrapper>
            <RangeQuicklyCalendar />
          </CustomWrapper>
        </Cell.Group>
      </Block>
      <Block title="Custom Calendar">
        <Cell.Group clickable inset>
          <CustomWrapper>
            <CustomColorCalendar />
          </CustomWrapper>
          <CustomWrapper>
            <CustomRangeCalendar />
          </CustomWrapper>
          <CustomWrapper>
            <CustomConfirmCalendar />
          </CustomWrapper>
          <CustomWrapper>
            <CustomDayCalendar />
          </CustomWrapper>
          <CustomWrapper>
            <CustomPositionCalendar />
          </CustomWrapper>
          <CustomWrapper>
            <CustomFirstDayOfWeekCalendar />
          </CustomWrapper>
        </Cell.Group>
      </Block>
      <Block variant="card" title="tile display">
        <TiledCalendar />
      </Block>
    </Page>
  )
}