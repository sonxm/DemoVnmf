import { Cell } from "@vnmfify/core"
import { ArrowDown, ArrowRight, LocationOutlined } from "@vnmfify/icons"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

export default function CellDemo() {
  return (
    <Page title="Cell" className="cell-demo">
      <Block title="Basic Usage">
        <Cell title="Cell">Content</Cell>
        <Cell title="Cell" brief="Description" children="Content" />
      </Block>
      <Block title="cell size">
        <Cell title="Cell">Content</Cell>
        <Cell title="Cell" brief="Description" size="large" children="Content" />
      </Block>
      <Block title="Show Icon">
        <Cell icon={<LocationOutlined />} title="Cell" children="Content" />
      </Block>
      <Block title="Only set value">
        <Cell>Content</Cell>
      </Block>
      <Block title="Show Arrow">
        <Cell title="Cell" rightIcon={<ArrowRight />} clickable />
        <Cell title="Cell" rightIcon={<ArrowRight />} clickable children="Content" />
        <Cell title="Cell" rightIcon={<ArrowDown />} clickable children="Content" />
      </Block>
      <Block title="Group title">
        <Cell.Group title="Group 1">
          <Cell title="Cell">Content</Cell>
        </Cell.Group>
        <Cell.Group title="Group 2">
          <Cell title="Cell">Content</Cell>
        </Cell.Group>
      </Block>
      <Block title="Alignment">
        <Cell title="Cell" brief="align start" size="large" align="start" children="content" />
        <Cell title="Cell" brief="align center" size="large" align="center" children="content" />
        <Cell title="Cell" brief="align end" size="large" align="end" children="content" />
      </Block>
    </Page>
  )
}