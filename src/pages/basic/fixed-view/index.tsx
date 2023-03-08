import { FixedView } from "@vnmfify/core"
import Page from "../../../components/page"

import "./index.scss"

export default function FixedViewDemo() {
  return (
    <Page title="FixedView" className="fixed-view-demo">
      <FixedView position="bottom">Fixed at the bottom</FixedView>
    </Page>
  )
}