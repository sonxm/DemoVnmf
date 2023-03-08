import { Image, Swiper, Toast } from "@vnmfify/core"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function BasicSwiper() {
  return (
    <Swiper className="basic-swiper" autoplay={4000}>
      <Swiper.Indicator />
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  )
}

function ImageSwiper() {
  return (
    <Swiper className="image-swiper" lazyRender autoplay={4000}>
      <Swiper.Indicator />
      <Swiper.Item>
        <Image className="image" src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
      </Swiper.Item>
      <Swiper.Item>
        <Image className="image" src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
      </Swiper.Item>
      <Swiper.Item>
        <Image className="image" src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
      </Swiper.Item>
      <Swiper.Item>
        <Image className="image" src="https://img01.yzcdn.cn/vant/apple-4.jpg" />
      </Swiper.Item>
    </Swiper>
  )
}

function SwiperWithOnChange() {
  return (
    <>
      <Toast id="toast" />
      <Swiper
        className="onchange-swiper"
        onChange={(value) => Toast.open(`Current Swipe index: ${value}`)}
      >
        <Swiper.Indicator />
        <Swiper.Item>1</Swiper.Item>
        <Swiper.Item>2</Swiper.Item>
        <Swiper.Item>3</Swiper.Item>
        <Swiper.Item>4</Swiper.Item>
      </Swiper>
    </>
  )
}

function SwiperWithCustomWidth() {
  return (
    <Swiper className="basic-swiper" loop={false} width={300}>
      <Swiper.Indicator />
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  )
}

function VerticalSwiper() {
  return (
    <Swiper className="vertical-swiper" direction="vertical" autoplay={4000}>
      <Swiper.Indicator />
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  )
}

function SwiperWithCustomIndicator() {
  const [value, setValue] = useState(0)

  return (
    <Swiper className="basic-swiper" onChange={setValue}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
      <Swiper.Indicator className="custom-indicator">{value + 1}/4</Swiper.Indicator>
    </Swiper>
  )
}

export default function SwiperDemo() {
  return (
    <Page title="Swiper" className="swiper-demo">
      <Block title="Basic Usage">
        <BasicSwiper />
      </Block>
      <Block title="Lazy Loading">
        <ImageSwiper />
      </Block>
      <Block title="Listen to change event">
        <SwiperWithOnChange />
      </Block>
      <Block title="Vertical scrolling">
        <VerticalSwiper />
      </Block>
      <Block title="Custom slider size">
        <SwiperWithCustomWidth />
      </Block>
      <Block title="Custom Indicator">
        <SwiperWithCustomIndicator />
      </Block>
    </Page>
  )
}