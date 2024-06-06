'use client'

import { Typography, Stack, Box, Divider } from "@mui/material"
import theme from "../theme"
import IconsBox from "../homepageComponents/IconsBox"
import ImagesList from "../homepageComponents/ImagesList"
import OyasArgument from "../homepageComponents/OyasArguments"
import AdvisesUses from "../homepageComponents/AdvisesUses"


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