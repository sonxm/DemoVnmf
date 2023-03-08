import { SafeArea } from "@vnmfify/core"
import { View } from "@vnxjs/components"
import Page from "../../../components/page"
import lorem from "../../../utils/lorem"

import "./index.scss"

export default function SafeAreaDemo() {
  return (
    <Page title="SafeArea" className="safe-area-demo">
      <SafeArea position="top" />
      <View>{lorem.generateParagraphs(10)}</View>
      <SafeArea position="bottom" />
    </Page>
  )
}
