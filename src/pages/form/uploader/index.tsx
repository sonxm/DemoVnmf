import { Button, Uploader } from "@vnmfify/core"
import { Plus } from "@vnmfify/icons"
import { View } from "@vnxjs/components"
import { chooseImage } from "@vnxjs/vnmf"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function BasicUploader() {
  const [file, setFile] = useState<Uploader.File>()

  function onUpload() {
    chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
    }).then(({ tempFiles }) => {
      setFile({
        url: tempFiles[0].path,
        type: tempFiles[0].type,
        name: tempFiles[0].originalFileObj?.name,
      })
    })
  }

  return <Uploader value={file} onUpload={onUpload} onChange={setFile} />
}

function PreviewUploader() {
  const [files, setFiles] = useState<Uploader.File[]>([
    {
      url: "https://img01.yzcdn.cn/vant/leaf.jpg",
    },
    {
      url: "https://img.yzcdn.cn/vant/tree.jpg",
    },
  ])

  function onUpload() {
    chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
    }).then(({ tempFiles }) => {
      setFiles([
        ...files,
        ...tempFiles.map(({ path, type, originalFileObj }) => ({
          type,
          url: path,
          name: originalFileObj?.name,
        })),
      ])
    })
  }

  return <Uploader value={files} multiple onUpload={onUpload} onChange={setFiles} />
}

function UploaderWithStatus() {
  const [files, setFiles] = useState<Uploader.File[]>([
    {
      url: "https://img01.yzcdn.cn/vant/leaf.jpg",
      status: "uploading",
      message: "Uploading...",
    },
    {
      url: "https://img01.yzcdn.cn/vant/tree.jpg",
      status: "failed",
      message: "Upload failed",
    },
  ])

  function onUpload() {
    chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
    }).then(({ tempFiles }) => {
      setFiles([
        ...files,
        ...tempFiles.map(({ path, type, originalFileObj }) => ({
          type,
          url: path,
          name: originalFileObj?.name,
        })),
      ])
    })
  }

  return <Uploader value={files} multiple onUpload={onUpload} onChange={setFiles} />
}

function MaxFilesUploader() {
  const [files, setFiles] = useState<Uploader.File[]>([])

  function onUpload() {
    chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
    }).then(({ tempFiles }) => {
      setFiles([
        ...files,
        ...tempFiles.map(({ path, type, originalFileObj }) => ({
          type,
          url: path,
          name: originalFileObj?.name,
        })),
      ])
    })
  }

  return <Uploader value={files} multiple maxFiles={2} onUpload={onUpload} onChange={setFiles} />
}

function CustomUploader() {
  return (
    <Uploader>
      <Button icon={<Plus />} color="primary">
        upload files
      </Button>
    </Uploader>
  )
}

function CustomPreviewUploader() {
  const [files, setFiles] = useState<Uploader.File[]>([
    {
      url: "https://img01.yzcdn.cn/vant/leaf.jpg",
    },
  ])

  function onUpload() {
    chooseImage({
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
    }).then(({ tempFiles }) => {
      setFiles([
        ...files,
        ...tempFiles.map(({ path, type, originalFileObj }) => ({
          type,
          url: path,
          name: originalFileObj?.name,
        })),
      ])
    })
  }

  return (
    <Uploader value={files} multiple onUpload={onUpload} onChange={setFiles}>
      {files.map((image) => (
        <Uploader.Image
          key={image.url}
          url={image.url}
          name={image.name}
          type={image.type}
          onRemove={() => setFiles(files.filter((item) => item !== image))}
        >
          <View className="preview-cover vnmfify-ellipsis">image name</View>
        </Uploader.Image>
      ))}
      <Uploader.Upload />
    </Uploader>
  )
}

function DisabledUploader() {
  return <Uploader disabled />
}

export default function UploaderDemo() {
  return (
    <Page title="Uploader" className="uploader-demo">
      <Block title="Basic Usage">
        <BasicUploader />
      </Block>
      <Block title="File Preview">
        <PreviewUploader />
      </Block>
      <Block title="Upload Status">
        <UploaderWithStatus />
      </Block>
      <Block title="Limit number of uploads">
        <MaxFilesUploader />
      </Block>
      <Block title="Custom upload style">
        <CustomUploader />
      </Block>
      <Block title="Custom Preview Style">
        <CustomPreviewUploader />
      </Block>
      <Block title="Disable file uploading">
        <DisabledUploader />
      </Block>
    </Page>
  )
}