import { Button, Steps } from "@vnmfify/core"
import { ArrowRight } from "@vnmfify/icons"
import { View } from "@vnxjs/components"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

interface ActiveStepsProps {
  activeStep: number
}

function BasicSteps(props: ActiveStepsProps) {
  return (
    <Block title="Basic Usage">
      <Steps value={props.activeStep}>
        <Steps.Step>Buyer places order</Steps.Step>
        <Steps.Step>Merchants take orders</Steps.Step>
        <Steps.Step>Buyer picks up</Steps.Step>
        <Steps.Step>Transaction completed</Steps.Step>
      </Steps>
    </Block>
  )
}

function AlternativeLabelSteps(props: ActiveStepsProps) {
  return (
    <Block title="Below Tab">
      <Steps value={props.activeStep} alternativeLabel>
        <Steps.Step>Buyer places order</Steps.Step>
        <Steps.Step>Merchants take orders</Steps.Step>
        <Steps.Step>Buyer picks up</Steps.Step>
        <Steps.Step>Transaction completed</Steps.Step>
      </Steps>
    </Block>
  )
}

function StepsWithCustomStyle(props: ActiveStepsProps) {
  return (
    <Block title="Custom Style">
      <Steps className="custom-color" value={props.activeStep}>
        <Steps.Step icon={<ArrowRight />}>Buyer places order</Steps.Step>
        <Steps.Step icon={<ArrowRight />}>Merchant's order</Steps.Step>
        <Steps.Step icon={<ArrowRight />}>Buyer picks up</Steps.Step>
        <Steps.Step icon={<ArrowRight />}>Transaction completed</Steps.Step>
      </Steps>
    </Block>
  )
}

function VerticalSteps(props: ActiveStepsProps) {
  return (
    <Block title="Vertical Step Bar">
      <Steps value={props.activeStep} direction="vertical">
        <Steps.Step>
          <View>[City] Logistics Status 2</View>
          <View>2016-07-12 12:40</View>
        </Steps.Step>
        <Steps.Step>
          <View>[City] Logistics Status 1</View>
          <View>2016-07-11 10:00</View>
        </Steps.Step>
        <Steps.Step>
          <View>[City] Logistics Status</View>
          <View>2016-07-10 12:00</View>
        </Steps.Step>
        <Steps.Step>
          <View>Shipment has been shipped</View>
          <View>2016-07-10 09:30</View>
        </Steps.Step>
      </Steps>
    </Block>
  )
}

export default function StepsDemo() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <Page title="Steps" className="steps-demo">
      <BasicSteps activeStep={activeStep} />
      <Block className="steps-demo__next-block">
        <Button onClick={() => setActiveStep(activeStep + 1 > 3 ? 0 : activeStep + 1)}>
          Next step
        </Button>
      </Block>
      <AlternativeLabelSteps activeStep={activeStep} />
      <StepsWithCustomStyle activeStep={activeStep} />
      <VerticalSteps activeStep={activeStep} />
    </Page>
  )
}