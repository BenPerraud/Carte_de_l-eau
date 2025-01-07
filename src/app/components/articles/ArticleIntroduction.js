'use client'

import { Typography, Stack} from "@mui/material"
import theme from "../../assets/theme.js"
import Image from "next/image.js"

export default function ArticleIntroduction({title, resume, definition, image}) {

    const titlesx = {
        color: theme.palette.secondary.main,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase"
      }

    return (
      <Stack
        direction="column"
        spacing={6}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography variant="h4" sx={titlesx}>{title}</Typography>
        <Image
          src={image}
          width={500}
          height={500}
          alt="Picture de l'article"
        />
        <Typography variant="h6" sx={{ color: "#FFFFFF", textAlign: "center"}}>{resume}</Typography>
        {definition.content.map((content) => (
          <Typography variant="subtitle1" key={content.id} sx={{color: "#FFFFFF"}}>{content.content}</Typography>
        ))}
      </Stack>
    )
}