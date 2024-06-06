"use client"

import { AppBar, Toolbar, Box, Typography } from "@mui/material"
import logo from "../assets/image/favicon.ico"
import Image from "next/image"
import Link from 'next/link'
import theme from "../theme"

export default function Header() {
  
  const appbar = {
    backgroundColor : theme.palette.primary.dark,
    display: "flex",
    justifyContent: "center",
    paddingTop: 3
  }

  const box = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }

  const boxLogo = {
    width: 150,
    height: 'auto',
    justifyContent: "space-between",
  }

  const title = {
    color: "#ffffff",
    textAlign: "center",
  }

  const link = {
    color: theme.palette.secondary.main
  }

  return (
    <AppBar position="static">
      <Toolbar sx={appbar}>
        <Box sx={box}>
          <Box sx={boxLogo}>
            <Link href="/">  
              <Image src={logo} alt="logo" width={500} height={156} layout="responsive"></Image>
            </Link>
          </Box>
          <Typography variant="h6" sx={title}>TERRA OYA, entreprise de fabrication d'oyas d'arrosage, vous propose des informations en temps réèl sur la situation de l'eau en France.</Typography>
          <Typography variant="subtitle1" sx={title}>Retrouvez nos oyas sur notre site dédié <Link
              href="https://terraoya.fr/"
              style={{color: theme.palette.secondary.main, textDecoration: "none"}}
              target="_blank">
              TERRA OYA
            </Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}