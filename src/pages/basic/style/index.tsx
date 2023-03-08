import { Cell, Transition } from "@vnmfify/core"
import { TransitionName } from "@vnmfify/core/transition"
import ArrowRight from "@vnmfify/icons/ArrowRight"
import { View } from "@vnxjs/components"
import classNames from "classnames"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

export default function TransitionDemo() {
  const [name, setName] = useState<TransitionName>(TransitionName.Fade)
  const [state, setState] = useState(false)

  function toggleTransition(newName: TransitionName) {
    setName(newName)
    setState(!state)
  }

  return (
    <Page title="Built-in style" className="style-demo">
      <Block variant="card" title="Text omitted">
        <View className={classNames("vnmfify-ellipsis", "ellipsis-text")}>
          This is a paragraph of text that displays at most one line, and the following content will be omitted.
        </View>
        <View className={classNames("vnmfify-ellipsis--l2", "ellipsis-text")}>
          This is a paragraph of text that displays up to two lines, and the following content will be omitted. This is a paragraph of text that displays up to two lines, and the following content will be omitted. This is a paragraph of text that displays up to two lines, and the following content will be omitted.
        </View>
      </Block>
      <Block variant="card" title="1px border">
        <View className={classNames("vnmfify-hairline--top", "hairline-line")} />
      </Block>
      <Block variant="card" title="animation">
        <Cell
          clickable
          title="Fade"
          rightIcon={<ArrowRight />}
          onClick={() => toggleTransition(TransitionName.Fade)}
        />
        <Cell
          clickable
          title="Slide Up"
          rightIcon={<ArrowRight />}
          onClick={() => toggleTransition(TransitionName.SlideUp)}
        />
        <Cell
          clickable
          title="Slide Down"
          rightIcon={<ArrowRight />}
          onClick={() => toggleTransition(TransitionName.SlideDown)}
        />
        <Cell
          clickable
          title="Slide Left"
          rightIcon={<ArrowRight />}
          onClick={() => toggleTransition(TransitionName.SlideLeft)}
        />
        <Cell
          clickable
          title="Slide Right"
          rightIcon={<ArrowRight />}
          onClick={() => toggleTransition(TransitionName.SlideRight)}
        />
        <Transition in={state} name={name} onEntered={() => setState(false)}>
          <View className="animate-block" />
        </Transition>
      </Block>
    </Page>
  )
}