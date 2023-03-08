import { Button, Cell, Image, SwipeCell } from "@vnmfify/core"
import { View } from "@vnxjs/components"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function BasicSwipeCell() {
  return (
    <SwipeCell>
      <SwipeCell.Actions side="left">
        <Button variant="contained" shape="square" color="primary">
          choose
        </Button>
      </SwipeCell.Actions>
      <Cell bordered={false} title="Cell">
        content
      </Cell>
      <SwipeCell.Actions side="right">
        <Button variant="contained" shape="square" color="danger">
          delete
        </Button>
        <Button variant="contained" shape="square" color="primary">
          collect
        </Button>
      </SwipeCell.Actions>
    </SwipeCell>
  )
}

function SwipeCellWithCustomContent() {
  return (
    <SwipeCell className="custom-swipe-cell">
      <View className="custom-card">
        <Image className="custom-card__thumb" src="https://img01.yzcdn.cn/vant/ipad.jpeg" />
        <View className="custom-card__content">
          <View className="custom-card__title">Item title</View>
        </View>
      </View>
      <SwipeCell.Actions side="right">
        <Button variant="contained" shape="square" color="danger">
          delete
        </Button>
        <Button variant="contained" shape="square" color="primary">
          collect
        </Button>
      </SwipeCell.Actions>
    </SwipeCell>
  )
}

export default function SwipeCellDemo() {
  return (
    <Page title="SwipeCell sliding cell" className="swipe-cell-demo">
      <Block title="Basic Usage">
        <BasicSwipeCell />
      </Block>
      <Block title="Custom Content">
        <SwipeCellWithCustomContent />
      </Block>
    </Page>
  )
}