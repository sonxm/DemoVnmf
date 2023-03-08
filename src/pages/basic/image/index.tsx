import { Flex, Image } from "@vnmfify/core"
import { ImageMode } from "@vnmfify/core/image"
import { Photo, PhotoFail } from "@vnmfify/icons"
import { Text } from "@vnxjs/components"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

export default function ImageDemo() {
  const imageUrl = "https://img01.yzcdn.cn/vant/cat.jpeg"

  const modes: ImageMode[] = [
    "scaleToFill",
    "aspectFit",
    "aspectFill",
    "widthFix",
    "heightFix",
    "top",
    "bottom",
    "center",
    "left",
    "right",
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight",
  ]

  return (
    <Page title="Image" className="image-demo">
      <Block title="Basic Usage">
        <Image className="basic-image" src={imageUrl} />
      </Block>
      <Block title="fill mode">
        <Flex wrap="wrap" gutter={20}>
          {modes.map((mode) => (
            <Flex.Item span={8} key={mode}>
              <Image mode={mode} src={imageUrl} />
              <Text className="text">{mode}</Text>
            </Flex.Item>
          ))}
        </Flex>
      </Block>
      <Block title="Circle image">
        <Flex wrap="wrap" gutter={20}>
          {modes.map((mode) => (
            <Flex.Item span={8} key={mode}>
              <Image mode={mode} src={imageUrl} round />
              <Text className="text">{mode}</Text>
            </Flex.Item>
          ))}
        </Flex>
      </Block>
      <Block title="Loading Tips">
        <Flex wrap="wrap" gutter={20}>
          <Flex.Item span={8}>
            <Image placeholder={<Photo />} />
            <Text className="text">Default prompt</Text>
          </Flex.Item>
          <Flex.Item span={8}>
            <Image placeholder="Loading..." />
            <Text className="text">Custom Prompt</Text>
          </Flex.Item>
        </Flex>
      </Block>
      <Block title="Load failure prompt">
        <Flex wrap="wrap" gutter={20}>
          <Flex.Item span={8}>
            <Image src="error" fallback={<PhotoFail />} />
            <Text className="text">Default prompt</Text>
          </Flex.Item>
          <Flex.Item span={8}>
            <Image src="error" fallback="Load failed" />
            <Text className="text">Custom Prompt</Text>
          </Flex.Item>
        </Flex>
      </Block>
    </Page>
  )
}