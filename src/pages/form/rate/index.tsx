import { Rate } from "@vnmfify/core"
import { Like, LikeOutlined, Star } from "@vnmfify/icons"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

export default function RateDemo() {
  return (
    <Page title="Rate" className="rate-demo">
      <Block title="Basic Usage">
        <Rate defaultValue={3} />
      </Block>
      <Block title="Custom Icon">
        <Rate defaultValue={3} icon={<Like />} emptyIcon={<LikeOutlined />} />
      </Block>
      <Block title="Custom Style">
        <Rate className="custom-color" defaultValue={3} allowHalf size={25} emptyIcon={<Star />} />
      </Block>
      <Block title="Half star">
        <Rate defaultValue={3} allowHalf />
      </Block>
      <Block title="Custom Quantity">
        <Rate defaultValue={3} count={6} />
      </Block>
      <Block title="disabled state">
        <Rate defaultValue={3} disabled />
      </Block>
      <Block title="Read-only status">
        <Rate defaultValue={3} readonly />
      </Block>
      <Block title="Display decimals for read-only status">
        <Rate defaultValue={3.3} readonly allowHalf />
      </Block>
    </Page>
  )
}