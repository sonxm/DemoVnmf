import { ActionBar } from "@vnmfify/commerce"
import { CartOutlined, ChatOutlined, ShopOutlined, Star } from "@vnmfify/icons"
import { Text } from "@vnxjs/components"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function BasicActionBar() {
  return (
    <ActionBar>
      <ActionBar.IconButton>
        <ChatOutlined />
        <Text>Customer Service</Text>
      </ActionBar.IconButton>
      <ActionBar.IconButton>
        <CartOutlined />
        <Text>Shopping Cart</Text>
      </ActionBar.IconButton>
      <ActionBar.IconButton>
        <ShopOutlined />
        <Text>Store</Text>
      </ActionBar.IconButton>
      <ActionBar.Button>Buy Now</ActionBar.Button>
    </ActionBar>
  )
}

function ActionBarWithBadges() {
  return (
    <ActionBar>
      <ActionBar.IconButton badge>
        <ChatOutlined />
        <Text>Customer Service</Text>
      </ActionBar.IconButton>
      <ActionBar.IconButton badge="5">
        <CartOutlined />
        <Text>Shopping Cart</Text>
      </ActionBar.IconButton>
      <ActionBar.IconButton badge="12">
        <ShopOutlined />
        <Text>Store</Text>
      </ActionBar.IconButton>
      <ActionBar.ButtonGroup>
        <ActionBar.Button color="warning">Add to Cart</ActionBar.Button>
        <ActionBar.Button color="danger">Buy Now</ActionBar.Button>
      </ActionBar.ButtonGroup>
    </ActionBar>
  )
}

function ActionBarWithCustomIconButton() {
  return (
    <ActionBar>
      <ActionBar.IconButton>
        <ChatOutlined color="#ee0a24" />
        <Text>Customer Service</Text>
      </ActionBar.IconButton>
      <ActionBar.IconButton>
        <CartOutlined />
        <Text>Shopping Cart</Text>
      </ActionBar.IconButton>
      <ActionBar.IconButton>
        <Star color="#ff5000" />
        <Text>Favorites</Text>
      </ActionBar.IconButton>
      <ActionBar.ButtonGroup>
        <ActionBar.Button color="danger">Add to Cart</ActionBar.Button>
        <ActionBar.Button color="warning">Buy Now</ActionBar.Button>
      </ActionBar.ButtonGroup>
    </ActionBar>
  )
}

function ActionBarWithCustomButton() {
  return (
    <ActionBar>
      <ActionBar.IconButton>
        <ChatOutlined />
        <Text>Customer Service</Text>
      </ActionBar.IconButton>
      <ActionBar.IconButton>
        <CartOutlined />
        <Text>Shopping Cart</Text>
      </ActionBar.IconButton>
      <ActionBar.ButtonGroup>
        <ActionBar.Button style={{ background: "#be99ff" }}>Add to cart</ActionBar.Button>
        <ActionBar.Button style={{ background: "#7232dd" }}>Buy Now</ActionBar.Button>
      </ActionBar.ButtonGroup>
    </ActionBar>
  )
}

export default function ActionBarDemo() {
  return (
    <Page title="ActionBar" className="action-bar-demo">
      <Block title="Basic Usage">
        <BasicActionBar />
      </Block>
      <Block title="logo tip">
        <ActionBarWithBadges />
      </Block>
      <Block title="Custom icon button color">
        <ActionBarWithCustomIconButton />
      </Block>
      <Block title="Custom button color">
        <ActionBarWithCustomButton />
      </Block>
    </Page>
  )
}