import { Badge } from "@vnmfify/core"
import { Cross, Down, Success } from "@vnmfify/icons"
import { View } from "@vnxjs/components"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

export default function BadgeDemo() {
  return (
    <Page title="Badge" className="badge-demo">
      <Block title="Basic Usage">
        <Badge content={5}>
          <View className="badge-block" />
        </Badge>
        <Badge content="10">
          <View className="badge-block" />
        </Badge>
        <Badge content="Hot">
          <View className="badge-block" />
        </Badge>
        <Badge dot>
          <View className="badge-block" />
        </Badge>
      </Block>
      <Block title="Maximum value">
        <Badge content={10} max={9}>
          <View className="badge-block" />
        </Badge>
        <Badge content={21} max={20}>
          <View className="badge-block" />
        </Badge>
        <Badge content={100} max={99}>
          <View className="badge-block" />
        </Badge>
      </Block>
      <Block title="custom color">
        <Badge className="custom-color" content={5}>
          <View className="badge-block" />
        </Badge>
        <Badge className="custom-color" content={10}>
          <View className="badge-block" />
        </Badge>
        <Badge className="custom-color" content="Hot">
          <View className="badge-block" />
        </Badge>
        <Badge className="custom-color" dot>
          <View className="badge-block" />
        </Badge>
      </Block>
      <Block title="Custom Logo Content">
        <Badge content={<Success className="badge-icon" />}>
          <View className="badge-block" />
        </Badge>
        <Badge content={<Cross className="badge-icon" />}>
          <View className="badge-block" />
        </Badge>
        <Badge content={<Down className="badge-icon" />}>
          <View className="badge-block" />
        </Badge>
      </Block>
      <Block title="Custom Logo Position">
        <Badge content={10} position="top-left">
          <View className="badge-block" />
        </Badge>
        <Badge content={10} position="top-right">
          <View className="badge-block" />
        </Badge>
        <Badge content={10} position="bottom-left">
          <View className="badge-block" />
        </Badge>
        <Badge content={10} position="bottom-right">
          <View className="badge-block" />
        </Badge>
      </Block>
      <Block title="Independent Display" className="independent-badges">
        <Badge content="20" />
        <Badge content={100} max={99} />
      </Block>
    </Page>
  )
}