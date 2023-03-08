import { Button, Space, WhiteSpace } from "@vnmfify/core"
import { Arrow, ArrowLeft, Replay, ShopOutlined } from "@vnmfify/icons"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

export default function ButtonDemo() {
  return (
    <Page title="Button" className="button-demo">
      <Block title="Button Color">
        <Space>
          <Button variant="contained" color="primary">
            main button
          </Button>
          <Button variant="contained" color="info">
            Information button
          </Button>
          <Button variant="contained" color="success">
            success button
          </Button>
          <Button variant="contained" color="warning">
            Warning button
          </Button>
          <Button variant="contained" color="danger">
            danger button
          </Button>
          <Button variant="contained" color="default">
            Default button
          </Button>
        </Space>
      </Block>
      <Block title="text button">
        <Space>
          <Button variant="text" color="primary">
            main button
          </Button>
          <Button variant="text" color="info">
            Information button
          </Button>
          <Button variant="text" color="success">
            success button
          </Button>
          <Button variant="text" color="warning">
            Warning button
          </Button>
          <Button variant="text" color="danger">
            danger button
          </Button>
          <Button variant="text" color="default">
            Default button
          </Button>
        </Space>
      </Block>
      <Block title="Outline button">
        <Space>
          <Button variant="outlined" color="primary">
            main button
          </Button>
          <Button variant="outlined" color="info">
            Information button
          </Button>
          <Button variant="outlined" color="success">
            success button
          </Button>
          <Button variant="outlined" color="warning">
            Warning button
          </Button>
          <Button variant="outlined" color="danger">
            danger button
          </Button>
          <Button variant="outlined" color="default">
            Default button
          </Button>
        </Space>
      </Block>
      <Block title="Slim Border Button">
        <Space>
          <Button variant="outlined" color="primary" hairline>
            main button
          </Button>
          <Button variant="outlined" color="info" hairline>
            Information button
          </Button>
          <Button variant="outlined" color="success" hairline>
            success button
          </Button>
          <Button variant="outlined" color="warning" hairline>
            Warning button
          </Button>
          <Button variant="outlined" color="danger" hairline>
            danger button
          </Button>
          <Button variant="outlined" color="default" hairline>
            Default button
          </Button>
        </Space>
      </Block>
      <Block title="Prohibited status">
        <Space>
          <Button variant="contained" color="primary" disabled>
            main button
          </Button>
          <Button variant="contained" color="info" disabled>
            Information button
          </Button>
          <Button variant="contained" color="success" disabled>
            success button
          </Button>
          <Button variant="contained" color="warning" disabled>
            Warning button
          </Button>
          <Button variant="contained" color="danger" disabled>
            danger button
          </Button>
          <Button variant="contained" color="default" disabled>
            Default button
          </Button>
        </Space>
      </Block>
      <Block title="Loading Status">
        <Space>
          <Button color="success" loading />
          <Button color="success" loading={{ type: "spinner" }} />
          <Button color="primary" loading>
            Loading...
          </Button>
        </Space>
      </Block>
      <Block title="Button shape">
        <Space>
          <Button variant="contained" color="primary" shape="square">
            square button
          </Button>
          <Button variant="contained" color="primary" shape="round">
            round button
          </Button>
        </Space>
      </Block>
      <Block title="icon button">
        <Space>
          <Button variant="contained" color="primary" icon={<ShopOutlined />} />
          <Button variant="contained" color="primary" icon={<ShopOutlined />}>
            main button
          </Button>
          <Button variant="outlined" color="primary" icon={<ShopOutlined />}>
            Outline button
          </Button>
        </Space>
      </Block>
      <Block title="Button size">
        <Button variant="contained" color="primary" size="large">
          large button
        </Button>
        <WhiteSpace />
        <Space>
          <Button variant="contained" color="primary" size="medium">
            normal button
          </Button>
          <Button variant="contained" color="primary" size="small">
            small button
          </Button>
          <Button variant="contained" color="primary" size="mini">
            mini button
          </Button>
        </Space>
      </Block>
      <Block title="Block button">
        <Button color="primary" block>
          block-level buttons
        </Button>
      </Block>
      <Block title="custom color">
        <Space>
          <Button style={{ backgroundColor: "#7232dd", color: "#fff" }}>Monochrome button</Button>
          <Button style={{ borderColor: "#7232dd", color: "#7232dd" }}>Monochrome button</Button>
          <Button
            style={{
              background: "linear-gradient(to right, #ff6034, #ee0a24)",
              color: "#fff",
            }}
          >
            Gradient button
          </Button>
        </Space>
      </Block>
      <Block title="Button Group">
        <Space direction="vertical">
          <Button.Group variant="contained" shape="round" color="primary">
            <Button>
              <ArrowLeft />
              Previous
            </Button>
            <Button>
              <Replay />
              refresh
            </Button>
            <Button>
              Next step
              <Arrow />
            </Button>
          </Button.Group>
          <Button.Group variant="outlined" shape="round">
            <Button>
              <ArrowLeft /> previous step
            </Button>
            <Button>
              <Replay />
              refresh
            </Button>
            <Button>
              Next step
              <Arrow />
            </Button>
          </Button.Group>
          <Button.Group variant="text" shape="round">
            <Button>
              <ArrowLeft /> previous step
            </Button>
            <Button>
              <Replay />
              refresh
            </Button>
            <Button>
              Next step
              <Arrow />
            </Button>
          </Button.Group>
        </Space>
      </Block>
    </Page>
  )
}