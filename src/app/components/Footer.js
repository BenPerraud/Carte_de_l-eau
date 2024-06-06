"use client"

import { AppBar, Toolbar, Box, Typography, Stack, Divider } from "@mui/material"
import theme from "../assets/theme"
import logo from "../assets/image/favicon.ico"
import Link from 'next/link'
import Image from "next/image"

export default function Footer() {

  const appbar = {
    backgroundColor : theme.palette.primary.dark,
    display: "flex",
    justifyContent: "space-between",
    pt: 3,
    pb: 3,
  }

  const boxGen = {
    borderTop: "solid 1px #FFFFFF",
    width: "100%",
    mt: 1,
    ml: 6,
    mr: 6,
    pt: 2,
    justifyContent: "space-between"
  }

  const boxLogo = {
    width: 110,
    height: 'auto',
    display: "flex",
    flexDirection: "column"
  }

  const title = {
    color: "#fff",
    textTransform: "uppercase",
    color: theme.palette.secondary.main
  }

  const link = {
    textDecoration: "none",
    color: "#FFFFFF"
  }

    return (
      <AppBar position="static">
        <Toolbar sx={appbar}>
          <Stack 
            sx={boxGen}
            direction="row"
            spacing={2}
            useFlexGap 
            divider={<Divider orientation="vertical" flexItem aria-hidden="true" sx={{bgcolor: "#FFFFFF"}}   
          />}>
            <Box sx={boxLogo}>
              <Link href="/">  
                <Image src={logo} alt="logo" width={500} height={156} layout="responsive"></Image>
              </Link>
            </Box>
            <Stack direction="row" spacing={6}>
              <Stack direction="column" spacing={1}>
                <Typography variant="subtitle1" sx={title}>Notre engagement</Typography>
                <Link href="/oya" style={link}>Un oya ?</Link>
                <Link href="https://terraoya.fr/" style={link} target="_blank">TERRA OYA</Link>
              </Stack>
              <Stack direction="column" spacing={1}>
                <Typography variant="subtitle1" sx={title}>Informations légales</Typography>
                <Link href="/contactez-nous" style={link}>Contactez-nous !</Link>
                <Link href="/mentions-legales" style={link}>Mentions légales</Link>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    )
  }