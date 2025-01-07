'use client'

import { Typography, Stack} from "@mui/material"
import theme from "../../assets/theme.js"
import Link from "next/link.js"

export default function ArticleContent({content}) {

    const title = {
      color: theme.palette.secondary.main,
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "uppercase"
    }

    const subtitle = {
      color: theme.palette.secondary.main,
    }

    const sxSource = {
      color: "#FFFFFF",
      "&:hover" : {
        color: theme.palette.secondary.main,
      },
      fontStyle: "italic"
    }

    return (
        <Stack
        direction="column"
        spacing={2}
        sx={{padding: 3}}>
        <Typography variant="h5" sx={title}>{content.title}</Typography>
        {content.content.map((content) => (
          <Stack
            direction="column"
            spacing={1}
            key={content.subtitle}>
            <Typography variant="h6" sx={subtitle}>{content.subtitle}</Typography>
            <Typography variant="subtitle1" sx={{ color : "#FFFFFF"}}>{content.content}</Typography>
            <Link href={content.source} target="_blank" style={{textDecoration: "none"}}>
              <Typography variant="body1" sx={sxSource}>Pour aller plus loin ...</Typography>
            </Link>
          </Stack>
        ))}
      </Stack>
    )
}