import { Navbar } from "@vnmfify/core"
import { Search } from "@vnmfify/icons"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

export default function NavbarDemo() {
  return (
    <Page title="Navbar" className="navbar-demo">
      <Block title="Basic Usage">
        <Navbar title="title">
          <Navbar.NavLeft>Back</Navbar.NavLeft>
          <Navbar.NavRight>Button</Navbar.NavRight>
        </Navbar>
      </Block>
      <Block title="Using NavLeft and NavRight">
        <Navbar>
          <Navbar.NavLeft>Back</Navbar.NavLeft>
          <Navbar.Title>Title</Navbar.Title>
          <Navbar.NavRight icon={<Search />} />
        </Navbar>
      </Block>
    </Page>
  )
}