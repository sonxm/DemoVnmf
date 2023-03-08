import { Cell, Popup } from "@vnmfify/core"
import { PopupPlacement } from "@vnmfify/core/popup"
import { ArrowRight } from "@vnmfify/icons"
import { CSSProperties, useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function BasicPopup() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Cell clickable title="Show overlay" rightIcon={<ArrowRight />} onClick={() => setOpen(true)} />
      <Popup
        open={open}
        style={{
          padding: "30px 50px",
        }}
        onClose={setOpen}
      >
        content
      </Popup>
    </>
  )
}

interface OpenOptions {
  open?: boolean
  closeable?: boolean
  style?: CSSProperties
  placement?: PopupPlacement
  rounded?: boolean
}

export default function PopupDemo() {
  const [options, setOptions] = useState<OpenOptions>({})

  function handleOpen({ placement, rounded, closeable }: OpenOptions) {
    const openOptions: OpenOptions = {
      open: true,
      placement,
      rounded,
      closeable,
    }
    if (placement === "left" || placement === "right") {
      openOptions.style = {
        height: "20%",
        width: "100%",
      }
    } else if (placement) {
      openOptions.style = { height: "30%" }
    }
    setOptions({
      ...options,
      ...openOptions,
    })
  }

  return (
    <Page title="Popup" className="popup-demo">
      <Block variant="card" title="Basic usage">
        <BasicPopup />
      </Block>
      <Block variant="card" title="Popup position">
        <Cell
          clickable
          title="top popup"
          rightIcon={<ArrowRight />}
          onClick={() => handleOpen({ placement: "top" })}
        />
        <Cell
          clickable
          title="bottom popup"
          rightIcon={<ArrowRight />}
          onClick={() => handleOpen({ placement: "bottom" })}
        />
        <Cell
          clickable
          title="Left popup"
          rightIcon={<ArrowRight />}
          onClick={() => handleOpen({ placement: "left" })}
        />
        <Cell
          clickable
          title="Popup right"
          rightIcon={<ArrowRight />}
          onClick={() => handleOpen({ placement: "right" })}
        />
      </Block>
      <Block variant="card" title="Close button">
        <Cell
          clickable
          title="top popup"
          rightIcon={<ArrowRight />}
          onClick={() => handleOpen({ placement: "top", closeable: true })}
        />
        <Cell
          clickable
          title="bottom popup"
          rightIcon={<ArrowRight />}
          onClick={() => handleOpen({ placement: "bottom", closeable: true })}
        />
        <Cell
          clickable
          title="Left popup"
          rightIcon={<ArrowRight />}
          onClick={() => handleOpen({ placement: "left", closeable: true })}
        />
        <Cell
          clickable
          title="Popup right"
          rightIcon={<ArrowRight />}
          onClick={() => handleOpen({ placement: "right", closeable: true })}
        />
      </Block>
      <Block variant="card" title="Rounded popup">
        <Cell
          clickable
          title="Round Corner Popup"
          rightIcon={<ArrowRight />}
          onClick={() => handleOpen({ placement: "bottom", rounded: true })}
        />
      </Block>
      <Popup
        open={options.open}
        placement={options.placement}
        rounded={options.rounded}
        style={options.style}
        onClose={() =>
          setOptions({
            ...options,
            open: false,
          })
        }
      >
        <Popup.Backdrop />
        {options.closeable && <Popup.Close />}
      </Popup>
    </Page>
  )
}