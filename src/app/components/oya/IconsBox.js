'use client'

import { Typography, Stack, Box, Divider } from "@mui/material"
import theme from "../../assets/theme"
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import CreditScoreIcon from '@mui/icons-material/CreditScore'
import YardIcon from '@mui/icons-material/Yard';

export default function IconsBox () {

    const iconStyle = {
        color: theme.palette.secondary.main,
        fontSize: "65px"
    }

    const textStyle = {
        color: "#ffffff"
    }

    return (
        <Stack direction="row" justifyContent="space-around">
            <Stack direction="column" spacing={1} alignItems="center">
                <LocalShippingIcon sx={iconStyle} />
                <Typography variant="h5" sx={textStyle}>Livraison à domicile</Typography>
                <Typography variant="body1" sx={textStyle}>Sous 3 à 5 jours</Typography>
            </Stack>
            <Stack direction="column" spacing={1} alignItems="center">
                <CreditScoreIcon sx={iconStyle} />
                <Typography variant="h5" sx={textStyle}>Paiement sécurisé</Typography>
                <Typography variant="body1" sx={textStyle}>Carte bancaire</Typography>
            </Stack>
            <Stack direction="column" spacing={1} alignItems="center">
                <YardIcon sx={iconStyle} />
                <Typography variant="h5" sx={textStyle}>Fabrication française</Typography>
                <Typography variant="body1" sx={textStyle}>respectueuse de l'environnement</Typography>
            </Stack>
        </Stack>
    )
}