'use client'

import { Typography, Stack} from "@mui/material"
import theme from "../../assets/theme.js"

export default function ArticleSynthesis({content}) {

    const title = {
        color: theme.palette.secondary.main,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase"
      }

    return (
      <Stack
      direction="column"
      spacing={2}
      sx={{padding: 3}}>
        <Typography variant="h5" sx={title}>POUR SYNTHÉTISER</Typography>
          {content.map((content) => (
        <Stack
          direction="column"
          spacing={1}
          key={content.id}>
          <Typography variant="body1" sx={{textAlign: "center", color: "#FFFFFF"}}>{content.content}</Typography>
        </Stack>
      ))}
    </Stack>
    )
}