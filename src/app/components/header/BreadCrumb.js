"use client"

import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import InvertColorsOffIcon from '@mui/icons-material/InvertColorsOff'
import AnalyticsIcon from '@mui/icons-material/Analytics';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import theme from "../../assets/theme"
import { usePathname } from 'next/navigation'


export default function BreadCrumb() {

    const pathname = usePathname()

    const stackSx = {
        alignItems: "center",
        width: "150px",
        height: "250px"
    }

    const category = {
        color: theme.palette.primary.dark,
        fontWeight: "bold",
        "&:hover" : {
            color: theme.palette.secondary.dark
        }
    }

    const resume = {
        color: theme.palette.primary.dark,
        textAlign: "center"
    }
    

    const iconDry = {
        color: theme.palette.primary.dark,
        fontSize: 80,
        color :
            pathname === "/secheresse" ?
                theme.palette.secondary.dark :
                theme.palette.primary.dark,
    }

    const iconPezio = {
        color: theme.palette.primary.dark,
        fontSize: 80,
        color :
            pathname === "/peziometrie" ?
                theme.palette.secondary.dark :
                theme.palette.primary.dark,
    }

    const iconHydro = {
        color: theme.palette.primary.dark,
        fontSize: 80,
        color :
            pathname === "/hydrometrie" ?
                theme.palette.secondary.dark :
                theme.palette.primary.dark,
    }
    

    return (
        <Stack
            direction="row"
            flexWrap="wrap"
            padding={2}
            sx={{
                justifyContent: "space-around",
                width: "100%",
                height: 250,
                backgroundColor: "#FFFFFF",
            }}>
            <Link underline='hover' color='inherit' href="/secheresse" style={{textDecoration: "none"}}>
                <Stack sx={stackSx} justifyContent="center" direction="column">
                    <InvertColorsOffIcon sx={iconDry} />
                    <Typography variant='h5' sx={category}>SECHERESSE</Typography>
                    <Typography variant='body1' sx={resume}>Les arrêtés préfectoraux en France en temps réèl</Typography>
                </Stack>
            </Link>
            <Link underline='hover' color='inherit' href="/peziometrie" style={{textDecoration: "none"}}>
                <Stack sx={stackSx} justifyContent="center" direction="column">
                    <AnalyticsIcon sx={iconPezio}/>
                    <Typography variant='h5' sx={category}>PEZIOMETRIE</Typography>
                    <Typography variant='body1' sx={resume}>Le niveau des nappes phréatiques en France en temps réèl</Typography>
                </Stack>
            </Link>
            <Link underline='hover' color='inherit' href="/hydrometrie" style={{textDecoration: "none"}}>
                <Stack sx={stackSx} justifyContent="center" direction="column">
                    <WaterDropIcon sx={iconHydro}/>
                    <Typography variant='h5' sx={category}>HYDROMETRIE</Typography>
                    <Typography variant='body1' sx={resume}>Le niveau des cours d'eau en France en temps réèl</Typography>
                </Stack>
            </Link>
        </Stack>
    )
}