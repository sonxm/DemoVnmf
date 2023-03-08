import { Cell, Stepper } from "@vnmfify/core"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

export default function StepperDemo() {
  return (
    <Page title="Stepper" className="stepper-demo">
      <Block variant="card">
        <Cell title="Basic Usage">
          <Stepper />
        </Cell>
        <Cell title="Step setting">
          <Stepper step={2} />
        </Cell>
        <Cell title="limit input range">
          <Stepper min={5} max={8} />
        </Cell>
        <Cell title="disabled state">
          <Stepper disabled />
        </Cell>
        <Cell title="Disable input box">
          <Stepper>
            <Stepper.Button />
            <Stepper.Input disabled />
            <Stepper.Button />
          </Stepper>
        </Cell>
        <Cell title="Fixed decimal places">
          <Stepper precision={2} />
        </Cell>
        <Cell align="center" title="custom size">
          <Stepper size="32">
            <Stepper.Button />
            <Stepper.Input disabled width="40" />
            <Stepper.Button />
          </Stepper>
        </Cell>
        <Cell title="Rounded corner style">
          <Stepper shape="circular" size="22" />
        </Cell>
      </Block>
    </Page>
  )
}