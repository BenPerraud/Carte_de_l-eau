'use client'

import { Typography, Stack, Box, Divider } from "@mui/material"
import theme from "../assets/theme"
import IconsBox from "../components/IconsBox"
import ImagesList from "../components/ImagesList"
import OyasArgument from "../components/OyasArguments"
import AdvisesUses from "../components/AdvisesUses"


export default function Home() {

  const title = {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase"
  }

  return (
    <Stack
      direction="column"
      spacing={6}
      sx={{padding: 3, backgroundColor: theme.palette.primary.dark}}
      divider={<Divider sx={{backgroundColor: "#FFFFFF"}}/>}
    >
      <Box></Box>
      <OyasArgument />
      <AdvisesUses />
      <ImagesList />
      <IconsBox />
    </Stack>
  )
}