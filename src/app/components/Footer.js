"use client"

import { AppBar, Toolbar, Box, Typography, Stack, Divider } from "@mui/material"
import theme from "../assets/theme"
import logo from "../assets/image/favicon.ico"
import Link from 'next/link'
import Image from "next/image"
import nomenclature from "../assets/nomenclature.json"

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
    pb: 2
  }

  const boxLogo = {
    width: 110,
    height: 'auto',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }

    return (
      <AppBar position="static">
        <Toolbar sx={appbar}>
          <Stack 
            sx={boxGen}
            direction="row"
            spacing={2}
            useFlexGap
            justifyContent="space-between" 
            divider={<Divider orientation="vertical" flexItem aria-hidden="true" sx={{bgcolor: "#FFFFFF"}}   
          />}>
            <Box sx={boxLogo}>
              <Link href="/">  
                <Image src={logo} alt="logo" width={500} height={156} layout="responsive" ></Image>
              </Link>
            </Box>
            <Stack direction="row" spacing={6}>
              {nomenclature[4].data.map((data) => (
                <Stack
                  key={data.title}
                  spacing={1}>
                  <Typography variant="h6" sx={{color: theme.palette.secondary.main, textTransform: "uppercase"}}>{data.title}</Typography>
                  <Stack >
                      {data.pages.map((page) => (
                        <Link href={page.link} target={page.target} style={{textDecoration: "none"}} key={page.link}>
                          <Typography variant="subtitle1" color="#FFFFFF">{page.content}</Typography>
                        </Link>
                    ))}
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    )
  }