"use client"

import { AppBar, Toolbar} from "@mui/material"
import BreadCrumb from "./header/BreadCrumb"
import ToolbalItems from "./header/ToolbarItems"
import ToolbalTitles from "./header/ToolbarTitles"
import theme from "../assets/theme"


export default function Header() {

  return (
    <AppBar position="static" sx={{backgroundColor: theme.palette.primary.dark}}>
        <Toolbar disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingTop: "20px",
          }}
        >
          <ToolbalItems />
          <ToolbalTitles />
          <BreadCrumb />              
        </Toolbar>
    </AppBar>
  )
}