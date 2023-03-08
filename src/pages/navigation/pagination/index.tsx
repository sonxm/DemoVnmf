import { Pagination } from "@vnmfify/core"
import { ArrowLeft, ArrowRight } from "@vnmfify/icons"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function BasicPagination() {
  const [current, setCurrent] = useState<number>(1)
  return (
    <Block title="Basic Usage">
      <Pagination current={current} count={10} onChange={(page) => setCurrent(page)} />
    </Block>
  )
}

function PaginationWithEllipses() {
  const [current, setCurrent] = useState<number>(1)
  return (
    <Block title="Show ellipsis">
      <Pagination
        current={current}
        siblingCount={1}
        count={13}
        onChange={(page) => setCurrent(page)}
      >
        <Pagination.Item type="start-ellipsis" />
        <Pagination.Item type="end-ellipsis" />
      </Pagination>
    </Block>
  )
}

function PaginationWithCustomButton() {
  const [current, setCurrent] = useState<number>(1)
  return (
    <Block title="Custom Button">
      <Pagination current={current} count={6} onChange={(page) => setCurrent(page)}>
        <Pagination.Item type="previous">
          <ArrowLeft />
        </Pagination.Item>
        <Pagination.Item type="next">
          <ArrowRight />
        </Pagination.Item>
      </Pagination>
    </Block>
  )
}

export default function PaginationDemo() {
  return (
    <Page title="Pagination" className="pagination-demo">
      <BasicPagination />
      <PaginationWithEllipses />
      <PaginationWithCustomButton />
    </Page>
  )
}