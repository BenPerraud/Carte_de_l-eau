"use client"

import { Typography, Stack } from "@mui/material"
import theme from "../theme"
import texts from "../assets/texts/legals.json"


export default function legals() {

  const stack = {
    padding: 3
  }

  const title = {
    color: theme.palette.primary.dark,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center"
  }

  const textTitle = {
    color: theme.palette.secondary.main
  }

  const textContent = {
    color: theme.palette.primary.dark
  }

  return (
    <Stack direction="column" spacing={3} sx={stack}>
      <Typography variant="h4" sx={title}>Mentions légales</Typography>
      <Typography variant="subtitle1" sx={textContent}>
      Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site : www.terra-oya.com les informations suivantes :
      </Typography>
      {texts.map((text) =>
        <Stack direction="column" spacing={1} key={text.title}>
          <Typography variant="h6" sx={textTitle}>{text.title}</Typography>
          {text.content.map((content) =>
            <Typography variant="subtitle2" sx={textContent} key={content}>{content}</Typography>
          )}
        </Stack>
        )}
    </Stack>
  )
}