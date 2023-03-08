import { NoticeBar, Swiper, WhiteSpace } from "@vnmfify/core"
import { ArrowRight, Cross, InfoOutlined, VolumeOutlined } from "@vnmfify/icons"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function BasicNoticeBar() {
  return (
    <NoticeBar scrollable>
      <NoticeBar.Icon>
        <VolumeOutlined />
      </NoticeBar.Icon>
      The frequency with which people swear during code reading is the only measure of code quality.
    </NoticeBar>
  )
}

function ScrollableNoticeBar() {
  return (
    <>
      The <NoticeBar scrollable> technology is the common soul of those who developed it. </NoticeBar>
      <WhiteSpace />
      <NoticeBar scrollable={false}>
        The frequency with which people swear during code reading is the only measure of code quality.
      </NoticeBar>
    </>
  )
}

function WordwrapNoticeBar() {
  return (
    <NoticeBar wordwrap scrollable={false}>
      The frequency with which people swear during code reading is the only measure of code quality.
    </NoticeBar>
  )
}

function ActionNoticeBar() {
  return (
    <>
      <NoticeBar scrollable={false}>
        Technology is the shared soul of those who develop it.
        <NoticeBar.Action>
          <Cross />
        </NoticeBar.Action>
      </NoticeBar>
      <WhiteSpace />
      <NoticeBar scrollable={false}>
        Technology is the shared soul of those who develop it.
        <NoticeBar.Action>
          <ArrowRight />
        </NoticeBar.Action>
      </NoticeBar>
    </>
  )
}

function NoticeBarWithCustomStyle() {
  return (
    <NoticeBar style={{ color: "#1989fa", background: "#ecf9ff" }}>
      <NoticeBar.Icon>
        <InfoOutlined />
      </NoticeBar.Icon>
      Technology is the shared soul of those who develop it.
    </NoticeBar>
  )
}

function NoticeBarWithVerticalScrolling() {
  return (
    <NoticeBar>
      <NoticeBar.Icon>
        <VolumeOutlined />
      </NoticeBar.Icon>
      <Swiper className="notice-swiper" direction="vertical" autoplay={3000}>
        <Swiper.Item> Content 1</Swiper.Item>
        <Swiper.Item> Content 2</Swiper.Item>
        <Swiper.Item> Content 3</Swiper.Item>
      </Swiper>
    </NoticeBar>
  )
}

export default function NoticeBarDemo() {
  return (
    <Page title="NoticeBar" className="notice-bar-demo">
      <Block title="Basic Usage">
        <BasicNoticeBar />
      </Block>
      <Block title="Scroll to Play">
        <ScrollableNoticeBar />
      </Block>
      <Block title="Multi-line display">
        <WordwrapNoticeBar />
      </Block>
      <Block title="Notification bar mode">
        <ActionNoticeBar />
      </Block>
      <Block title="Custom Style">
        <NoticeBarWithCustomStyle />
      </Block>
      <Block title="Custom Style">
        <NoticeBarWithVerticalScrolling />
      </Block>
    </Page>
  )
}