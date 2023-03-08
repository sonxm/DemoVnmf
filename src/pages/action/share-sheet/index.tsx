import { Cell, Image, ShareSheet } from "@vnmfify/core"
import { ArrowRight } from "@vnmfify/icons"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function BasicShareSheet() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Cell
        clickable
        title="Show Sharing Panel"
        rightIcon={<ArrowRight />}
        onClick={() => setOpen(true)}
      />
      <ShareSheet
        open={open}
        onSelect={() => setOpen(false)}
        onClose={setOpen}
        onCancel={() => {
          setOpen(false)
        }}
      >
        <ShareSheet.Backdrop />
        <ShareSheet.Header title="Share with friends now" />
        <ShareSheet.Options>
          <ShareSheet.Option icon="wechat" name="微信" openType="share" />
          <ShareSheet.Option icon="wechat-moments" name="Moments" />
          <ShareSheet.Option icon="weibo" name="微博" />
          <ShareSheet.Option icon="qq" name="QQ" />
        </ShareSheet.Options>
        <ShareSheet.Button type="cancel">取消</ShareSheet.Button>
      </ShareSheet>
    </>
  )
}

function MultilineShareSheet() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Cell
        clickable
        title="Show Sharing Panel"
        rightIcon={<ArrowRight />}
        onClick={() => setOpen(true)}
      />
      <ShareSheet open={open} onSelect={() => setOpen(false)} onClose={setOpen}>
        <ShareSheet.Header title="Share with friends now" />
        <ShareSheet.Options>
          <ShareSheet.Option icon="wechat" name="微信" />
          <ShareSheet.Option icon="wechat-moments" name="Moments" />
          <ShareSheet.Option icon="weibo" name="微博" />
          <ShareSheet.Option icon="qq" name="QQ" />
        </ShareSheet.Options>
        <ShareSheet.Options>
          <ShareSheet.Option icon="link" name="Copy link" />
          <ShareSheet.Option icon="poster" name="Share Poster" />
          <ShareSheet.Option icon="qrcode" name="QR code" />
          <ShareSheet.Option icon="weapp-qrcode" name="Mini Program Code" />
        </ShareSheet.Options>
        <ShareSheet.Button type="cancel">取消</ShareSheet.Button>
      </ShareSheet>
    </>
  )
}

function CustomShareSheet() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Cell
        clickable
        title="Show Sharing Panel"
        rightIcon={<ArrowRight />}
        onClick={() => setOpen(true)}
      />
      <ShareSheet open={open} onSelect={() => setOpen(false)} onClose={setOpen}>
        <ShareSheet.Options>
          <ShareSheet.Option
            icon={<Image src="https://img.yzcdn.cn/vant/custom-icon-fire.png" />}
            name="name"
          />
          <ShareSheet.Option
            icon={<Image src="https://img.yzcdn.cn/vant/custom-icon-light.png" />}
            name="name"
          />
          <ShareSheet.Option
            icon={<Image src="https://img.yzcdn.cn/vant/custom-icon-water.png" />}
            name="name"
          />
        </ShareSheet.Options>
        <ShareSheet.Button type="cancel">取消</ShareSheet.Button>
      </ShareSheet>
    </>
  )
}

function ShareSheetWithDescription() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Cell
        clickable
        title="Show Sharing Panel"
        rightIcon={<ArrowRight />}
        onClick={() => setOpen(true)}
      />
      <ShareSheet open={open} onSelect={() => setOpen(false)} onClose={setOpen}>
        <ShareSheet.Header title="Share with friends now">Description</ShareSheet.Header>
        <ShareSheet.Options>
          <ShareSheet.Option icon="wechat" name="微信" />
          <ShareSheet.Option icon="weibo" name="微博" />
          <ShareSheet.Option icon="link" name="Copy link" description="Description" />
          <ShareSheet.Option icon="poster" name="Share Poster" />
          <ShareSheet.Option icon="qrcode" name="QR code" />
        </ShareSheet.Options>
        <ShareSheet.Button type="cancel">取消</ShareSheet.Button>
      </ShareSheet>
    </>
  )
}

export default function ShareSheetDemo() {
  return (
    <Page title="ShareSheet share panel" className="share-sheet-demo">
      <Block variant="card" title="Basic usage">
        <BasicShareSheet />
      </Block>
      <Block variant="card" title="Show multi-line option">
        <MultilineShareSheet />
      </Block>
      <Block variant="card" title="Custom Icon">
        <CustomShareSheet />
      </Block>
      <Block variant="card" title="Show description information">
        <ShareSheetWithDescription />
      </Block>
    </Page>
  )
}