'use client'

import { Stack, Divider, Typography } from '@mui/material'
import GetYourPeziometre from '../components/peziometrie/GetYourPeziometre'
import ArticleRelatives from '../components/articles/ArticleRelatives'
import theme from '../assets/theme'

export default function Home () {

    const title = {
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
    }

    const h6 = {
        color: "#FFFFFF",
        textAlign: "center",
    }

    return (
        <Stack
            direction="column"
            spacing={6}
            sx={{padding: 3, backgroundColor: theme.palette.primary.dark}}
            divider={<Divider sx={{backgroundColor: "#FFFFFF"}}/>}
            >
            <Typography variant='h4' sx={title}>La situation du niveau des nappes phréatiques en France</Typography>
            <Typography variant='h6' sx={h6}>La piézométrie est une discipline essentielle pour comprendre et gérer les ressources en eau souterraines. Ce domaine de l'hydrogéologie étudie la distribution, le mouvement et la pression de l'eau dans les aquifères. Vous pouvez ici sélectionner la nappe phréatique près de chez vous et regarder l'évolution du niveau d'eau sur plusieurs années. Choissisez un département puis ensuite le péziomètre qui vous intéresse.</Typography>
            <GetYourPeziometre />
            <ArticleRelatives filter="Péziométrie"/>
        </Stack>
    )
}