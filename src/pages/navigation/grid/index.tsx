import { Grid, Image } from "@vnmfify/core"
import { HomeOutlined, PhotoOutlined, Search } from "@vnmfify/icons"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

export default function GridDemo() {
  return (
    <Page title="Grid" className="grid-demo">
      <Block title="Basic Usage">
        <Grid columns={4}>
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
        </Grid>
      </Block>
      <Block title="Custom number of columns">
        <Grid columns={3}>
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
        </Grid>
      </Block>
      <Block title="Custom Content">
        <Grid columns={3} bordered={false}>
          <Grid.Item>
            <Image className="grid-image" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
          </Grid.Item>
          <Grid.Item>
            <Image className="grid-image" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          </Grid.Item>
          <Grid.Item>
            <Image className="grid-image" src="https://img.yzcdn.cn/vant/apple-3.jpg" />
          </Grid.Item>
        </Grid>
      </Block>
      <Block title="square grid">
        <Grid columns={4} square>
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
        </Grid>
      </Block>
      <Block title="Grid spacing">
        <Grid columns={4} gutter={10}>
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
        </Grid>
      </Block>
      <Block title="Content horizontally">
        <Grid columns={3} direction="horizontal">
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
          <Grid.Item icon={<PhotoOutlined />} text="text" />
        </Grid>
      </Block>
      <Block title="logo tip">
        <Grid columns={2}>
          <Grid.Item icon={<HomeOutlined />} badge text="text" />
          <Grid.Item icon={<Search />} badge="99+" text="text" />
        </Grid>
      </Block>
    </Page>
  )
}