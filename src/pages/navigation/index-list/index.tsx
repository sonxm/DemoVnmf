import { Cell, IndexList, Tabs } from "@vnmfify/core"
import * as _ from "lodash"
import { Fragment, useState } from "react"
import Page from "../../../components/page"
import "./index.scss"

function BasicIndexBar() {
  const indexList: string[] = []
  const charCodeOfA = "A".charCodeAt(0)

  for (let i = 0; i < 26; i++) {
    indexList.push(String.fromCharCode(charCodeOfA + i))
  }

  return (
    <IndexList>
      {_.map(indexList, (index) => {
        return (
          <Fragment key={index}>
            <IndexList.Anchor index={index} />
            <Cell title="text" />
            <Cell title="text" />
            <Cell title="text" />
          </Fragment>
        )
      })}
    </IndexList>
  )
}

function CustomIndexBar() {
  const customIndexList = [1, 2, 3, 4, 5, 6, 8, 9, 10]

  return (
    <IndexList>
      {_.map(customIndexList, (index) => {
        return (
          <Fragment key={index}>
            <IndexList.Anchor index={index}>title{index}</IndexList.Anchor>
            <Cell title="text" />
            <Cell title="text" />
            <Cell title="text" />
          </Fragment>
        )
      })}
    </IndexList>
  )
}

export default function IndexBarDemo() {
  const [tab, setTab] = useState(0)
  return (
    <Page title="IndexList" className="index-list-demo">
      <Tabs value={tab} onChange={setTab}>
        <Tabs.TabPane title="Basic Usage">
          <BasicIndexBar />
        </Tabs.TabPane>
        <Tabs.TabPane title="Custom Index List">
          <CustomIndexBar />
        </Tabs.TabPane>
      </Tabs>
    </Page>
  )
}