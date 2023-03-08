import { Cell, Image, Loading, Toast } from "@vnmfify/core"
import { ArrowRight, LikeOutlined } from "@vnmfify/icons"
import Block from "../../../components/block"
import Page from "../../../components/page"

import "./index.scss"

export default function ToastDemo() {
  return (
    <Page title="Toast" className="toast-demo">
      <Block variant="card" title="Basic usage">
        <Toast id="toast" />
        <Cell
          clickable
          title="Text prompt"
          rightIcon={<ArrowRight />}
          onClick={() => Toast.open({ type: "text", message: "Text prompt" })}
        />
        <Cell
          clickable
          title="Loading Tips"
          rightIcon={<ArrowRight />}
          onClick={() => Toast.open({ type: "loading", message: "Loading..." })}
        />
        <Cell
          clickable
          title="Success Tips"
          rightIcon={<ArrowRight />}
          onClick={() => Toast.open({ type: "success", message: "Success Copy" })}
        />
        <Cell
          clickable
          title="Failure message"
          rightIcon={<ArrowRight />}
          onClick={() => Toast.open({ type: "fail", message: "Failed copy" })}
        />
      </Block>
      <Block variant="card" title="Custom Icon">
        <Cell
          clickable
          title="Custom Icon"
          rightIcon={<ArrowRight />}
          onClick={() => Toast.open({ message: "Custom Icon", icon: <LikeOutlined /> })}
        />
        <Cell
          clickable
          title="Custom Image"
          rightIcon={<ArrowRight />}
          onClick={() =>
            Toast.open({
              message: "Custom Image",
              icon: (
                <Image
                  style={{
                    width: "1em",
                    height: "1em",
                  }}
                  src="https://img01.yzcdn.cn/vant/logo.png"
                />
              ),
            })
          }
        />
        <Cell
          clickable
          title="Custom loading icon"
          rightIcon={<ArrowRight />}
          onClick={() => Toast.open({ message: "Loading...", icon: <Loading type="spinner" /> })}
        />
      </Block>
      <Block variant="card" title="Custom location">
        <Cell
          clickable
          title="Top Display"
          rightIcon={<ArrowRight />}
          onClick={() =>
            Toast.open({
              position: "top",
              message: "Top display",
            })
          }
        />
        <Cell
          clickable
          title="Bottom Display"
          rightIcon={<ArrowRight />}
          onClick={() =>
            Toast.open({
              position: "bottom",
              message: "Bottom display",
            })
          }
        />
      </Block>
    </Page>
  )
}