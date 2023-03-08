import { Skeleton, WhiteSpace } from "@vnmfify/core"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function BasicSkeleton() {
  return (
    <Block title="Basic Usage">
      <Skeleton variant="circle" />
      <WhiteSpace />
      <Skeleton style={{ width: "40%" }} />
      <WhiteSpace size="20px" />
      <Skeleton />
      <WhiteSpace />
      <Skeleton />
      <WhiteSpace />
      <Skeleton style={{ width: "60%" }} />
    </Block>
  )
}

function AnimateSkeleton() {
  return (
    <Block title="Animation effect">
      <Skeleton />
      <WhiteSpace />
      <Skeleton animation={false} />
      <WhiteSpace />
      <Skeleton animation="wave" />
    </Block>
  )
}

export default function SkeletonDemo() {
  return (
    <Page title="Skeleton" className="skeleton-demo">
      <BasicSkeleton />
      <AnimateSkeleton />
    </Page>
  )
}