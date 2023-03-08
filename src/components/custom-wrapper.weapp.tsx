import { CustomWrapper as VnmfCustomWrapper } from "@vnxjs/components"
import { ReactNode } from "react"

interface CustomWrapperProps {
  children?: ReactNode
}

function CustomWrapper(props: CustomWrapperProps) {
  return <VnmfCustomWrapper {...props} />
}

export default CustomWrapper
