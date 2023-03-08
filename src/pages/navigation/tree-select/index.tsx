import { Image, TreeSelect } from "@vnmfify/core"
import Block from "../../../components/block"
import Page from "../../../components/page"

import "./index.scss"

function RadioTreeSelect() {
  return (
    <TreeSelect>
      <TreeSelect.Tab title="Zhejiang">
        <TreeSelect.Option value={0}>Hangzhou</TreeSelect.Option>
        <TreeSelect.Option value={1}>Wenzhou</TreeSelect.Option>
        <TreeSelect.Option value={2} disabled>
          Ningbo
        </TreeSelect.Option>
        <TreeSelect.Option value={3}>Yiwu</TreeSelect.Option>
      </TreeSelect.Tab>
      <TreeSelect.Tab title="Jiangsu">
        <TreeSelect.Option value={4}>Nanjing</TreeSelect.Option>
        <TreeSelect.Option value={5}>Wuxi</TreeSelect.Option>
        <TreeSelect.Option value={6}>Xuzhou</TreeSelect.Option>
        <TreeSelect.Option value={7}>Suzhou</TreeSelect.Option>
      </TreeSelect.Tab>
      <TreeSelect.Tab title="Fujian" disabled>
        <TreeSelect.Option value={8}>Quanzhou</TreeSelect.Option>
        <TreeSelect.Option value={9}>Xiamen</TreeSelect.Option>
      </TreeSelect.Tab>
    </TreeSelect>
  )
}

function MultiselectTreeSelect() {
  return (
    <TreeSelect defaultValue={[0, 1]}>
      <TreeSelect.Tab title="Zhejiang">
        <TreeSelect.Option value={0}>Hangzhou</TreeSelect.Option>
        <TreeSelect.Option value={1}>Wenzhou</TreeSelect.Option>
        <TreeSelect.Option value={2} disabled>
          Ningbo
        </TreeSelect.Option>
        <TreeSelect.Option value={3}>Yiwu</TreeSelect.Option>
      </TreeSelect.Tab>
      <TreeSelect.Tab title="Jiangsu">
        <TreeSelect.Option value={4}>Nanjing</TreeSelect.Option>
        <TreeSelect.Option value={5}>Wuxi</TreeSelect.Option>
        <TreeSelect.Option value={6}>Xuzhou</TreeSelect.Option>
        <TreeSelect.Option value={7}>Suzhou</TreeSelect.Option>
      </TreeSelect.Tab>
      <TreeSelect.Tab title="Fujian" disabled>
        <TreeSelect.Option value={8}>Quanzhou</TreeSelect.Option>
        <TreeSelect.Option value={9}>Xiamen</TreeSelect.Option>
      </TreeSelect.Tab>
    </TreeSelect>
  )
}

function TreeSelectWithCustomContent() {
  return (
    <TreeSelect>
      <TreeSelect.Tab title="Group 1">
        <Image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </TreeSelect.Tab>
      <TreeSelect.Tab title="Group 2">
        <Image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </TreeSelect.Tab>
    </TreeSelect>
  )
}

function BadgeTreeSelect() {
  return (
    <TreeSelect>
      <TreeSelect.Tab badge title="Zhejiang">
        <TreeSelect.Option value={0}>Hangzhou</TreeSelect.Option>
        <TreeSelect.Option value={1}>Wenzhou</TreeSelect.Option>
        <TreeSelect.Option value={2} disabled>
          Ningbo
        </TreeSelect.Option>
        <TreeSelect.Option value={3}>Yiwu</TreeSelect.Option>
      </TreeSelect.Tab>
      <TreeSelect.Tab badge="5" title="Jiangsu">
        <TreeSelect.Option value={4}>Nanjing</TreeSelect.Option>
        <TreeSelect.Option value={5}>Wuxi</TreeSelect.Option>
        <TreeSelect.Option value={6}>Xuzhou</TreeSelect.Option>
        <TreeSelect.Option value={7}>Suzhou</TreeSelect.Option>
      </TreeSelect.Tab>
      <TreeSelect.Tab title="Fujian" disabled>
        <TreeSelect.Option value={8}>Quanzhou</TreeSelect.Option>
        <TreeSelect.Option value={9}>Xiamen</TreeSelect.Option>n
      </TreeSelect.Tab>
    </TreeSelect>
  )
}

export default function TreeSelectDemo() {
  return (
    <Page title="TreeSelect" className="tree-select-demo">
      <Block title="Single selection mode">
        <RadioTreeSelect />
      </Block>
      <Block title="Multiple selection mode">
        <MultiselectTreeSelect />
      </Block>
      <Block title="Custom Content">
        <TreeSelectWithCustomContent />
      </Block>
      <Block title="logo tip">
        <BadgeTreeSelect />
      </Block>
    </Page>
  )
}