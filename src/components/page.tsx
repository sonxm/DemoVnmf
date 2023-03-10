import ArrowLeft from "@vnmfify/icons/ArrowLeft"
import { View } from "@vnxjs/components"
import { navigateBack } from "@vnxjs/vnmf"
import classNames from "classnames"
import { ReactNode } from "react"
import { demoPrefixClassname } from "../styles/prefix"
import "./page.scss"
import Target from "./target"
import { SafeArea,FixedView } from "@vnmfify/core"

interface PageProps {
  className?: string
  title?: string
  children: ReactNode
}

export default function Page(props: PageProps) {
  const { className, title, children } = props

  return (
    <View className={classNames(demoPrefixClassname("page"), className)}>
      <SafeArea position="top"/>
      <Target type="h5">
        <View className={demoPrefixClassname("page__nav")}>
          <ArrowLeft
            className={demoPrefixClassname("page__nav__back")}
            onClick={() => navigateBack()}
          />
          <View className={demoPrefixClassname("page__nav__title")}>{title} </View>
        </View>
      </Target>
      <View className={demoPrefixClassname("page__content")}>{children}</View>
      <SafeArea position="bottom"/>
    </View>
  )
}
