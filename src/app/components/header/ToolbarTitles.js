"use client"

import { Stack, Typography } from "@mui/material"
import theme from "@/app/assets/theme"

export default function ToolbalTitles() {

    return (
        <Stack sx={{width: "100%"}}>
            <Stack alignItems="center" pb={2}>
                <Typography variant="h6" sx={{fontWeight: "bold"}}>BIENVENUE SUR</Typography>
                <Typography variant="h4" sx={{fontWeight: "bold"}}>LA CARTE DE L'EAU</Typography>
            </Stack>
            <Stack sx={{height: 50, width: "100%", justifyContent: "center", backgroundColor: theme.palette.secondary.main}}>
            <Typography variant="h6" sx={{textAlign: "center"}}>L'EAU EN FRANCE VUE PAR DES CARTES, DES OUTILS ET DES ARTICLES</Typography>
            </Stack>
        </Stack>
    )
}