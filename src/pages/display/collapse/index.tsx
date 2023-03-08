import { Collapse } from "@vnmfify/core"
import { QuestionOutlined, ShopOutlined } from "@vnmfify/icons"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function BasicCollapse() {
  const [value, setValue] = useState([0])
  return (
    <Collapse value={value} onChange={setValue}>
      <Collapse.Item title="Title 1">The code is written for people to see, with the addition of running on the machine</Collapse.Item>
      <Collapse.Item title="title 2">The code is written for people to see, with the addition of running on the machine</Collapse.Item>
      <Collapse.Item title="title 3">The code is written for people to see, with the addition of running on the machine</Collapse.Item>
    </Collapse>
  )
}

function AccordionCollapse() {
  return (
    <Collapse accordion defaultValue={0}>
      <Collapse.Item title="Title 1">The code is written for people to see, with the addition of running on the machine</Collapse.Item>
      <Collapse.Item title="title 2">The code is written for people to see, with the addition of running on the machine</Collapse.Item>
      <Collapse.Item title="title 3">The code is written for people to see, with the addition of running on the machine</Collapse.Item>
    </Collapse>
  )
}

function CollapseWithDisabledWithReadonly() {
  return (
    <Collapse defaultValue={[0]}>
      <Collapse.Item title="Normal state">The code is written for people to see, with the addition of running on the machine</Collapse.Item>
      <Collapse.Item title="Read-only" clickable={false}>
        The code is written for people to see, with the addition of running on the machine
      </Collapse.Item>
      <Collapse.Item title="disabled state" disabled>
        The code is written for people to see, with the addition of running on the machine
      </Collapse.Item>
    </Collapse>
  )
}

function CustomCollapse() {
  return (
    <Collapse defaultValue={[0]}>
      <Collapse.Item
        className="custom-collapse-item1"
        title={
          <>
            Title 1
            <QuestionOutlined />
          </>
        }
      >
        The code is written for people to see, with the addition of running on the machine
      </Collapse.Item>
      <Collapse.Item icon={<ShopOutlined />} title="Title 2" extra="Content" clickable={false}>
        The code is written for people to see, with the addition of running on the machine
      </Collapse.Item>
    </Collapse>
  )
}

export default function CollapseDemo() {
  return (
    <Page title="Collapse" className="collapse-demo">
      <Block title="Basic usage">
        <BasicCollapse />
      </Block>
      <Block title="Accordion">
        <AccordionCollapse />
      </Block>
      <Block title="Read-only state and disabled state">
        <CollapseWithDisabledWithReadonly />
      </Block>
      <Block title="Custom header content">
        <CustomCollapse />
      </Block>
    </Page>
  )
}
