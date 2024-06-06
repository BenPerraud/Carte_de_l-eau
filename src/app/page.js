'use client'

import { Stack, Typography, Divider, Button, Box } from '@mui/material'
import DynamicMap from "./components/map/MapComponent"
import theme from "./assets/theme"
import { useState } from 'react'
import Alert from "./components/Alert"
import alertContents from "./assets/texts/cardAlertContent.json"


export default function Carte () {
    const [filter, setFilter] = useState("SUP")
    const width = "80%"
    

    const title = {
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase"
    }

    const h6 = {
        color: "#FFFFFF",
        textAlign: "center",
        width: width
    }
    

    const btnChooseSup = {
        backgroundColor:
            filter === "SUP" ?
            theme.palette.primary.dark :
            "#FFFFFF",
        color: 
            filter === "SUP" ?
            "#FFFFFF" :
            theme.palette.primary.dark,
        fontWeight: "bold",
        width: "150px",
        height: "50px",
        "&:hover": {
            backgroundColor: 
                filter === "SUP" ?
                "#FFFFFF":
                theme.palette.primary.dark,
            color: 
                filter === "SUP" ?
                theme.palette.primary.dark:
                "#FFFFFF"
        }
    }

    const btnChooseSou = {
        backgroundColor:
            filter === "SOU" ?
            theme.palette.primary.dark :
            "#FFFFFF",
        color: 
            filter === "SOU" ?
            "#FFFFFF" :
            theme.palette.primary.dark,
        fontWeight: "bold",
        width: "150px",
        height: "50px",
        "&:hover": {
            backgroundColor: 
                filter === "SOU" ?
                "#FFFFFF":
                theme.palette.primary.dark,
            color: 
                filter === "SOU" ?
                theme.palette.primary.dark:
                "#FFFFFF"
        }
    }



    function passToSup () {
        setFilter("SUP")
    }

    function passToSou () {
        setFilter("SOU")
    }

    return (
        <Stack
            direction="column"
            spacing={6}
            sx={{padding: 3, backgroundColor: theme.palette.primary.dark}}
            divider={<Divider sx={{backgroundColor: "#FFFFFF"}}/>}
            >
            <Box></Box>
            <Typography variant='h4' sx={title}>La situation de la sécheresse en France</Typography>
            <Stack direction="column" spacing={6} justifyContent="center" alignItems="center">
                <Typography variant='h6' sx={h6}>Les restrictions de prélèvements d'eau peuvent s'appliquer aussi bien sur les eaux de surface que les eaux souterraines, à destination des particuliers comme de l'agriculture, des entreprises ou des collectivités. Quatre niveaux d'alerte peuvent être déployés par les préfectures.</Typography>
                <Stack direction="row" useFlexGap flexWrap="wrap" spacing={12}>
                    {alertContents.map((item) =>
                        <Alert
                            key={item.level}
                            level={item.level}
                            content={item.content}
                            color={item.color}
                            sumup={item.sumup}    
                        />
                    )}
                </Stack>
                <Typography variant='h6' sx={h6}>La carte de l'eau recense tous les arrêtés préfectoraux de restriction d'eau en cours sur le territoire métropolitain. Les données sont disponibles depuis le site VigiEau (source gouvernementale) et distinguées entre les restrictions de préléments sur les eaux de surface et les restrictions de préléments sur les eaux souterraines</Typography>
                <Stack direction="row" spacing={6} useFlexGap flexWrap="wrap">
                    <Button variant='contained' size='small' onClick={passToSup} sx={btnChooseSup}>Eaux de surface</Button>
                    <Button variant='contained' size='small' onClick={passToSou} sx={btnChooseSou}>Nappes phréatiques</Button>
                </Stack>
            </Stack>
            <Box sx={{height: 700}}>
                <DynamicMap filter={filter}/>
            </Box>
        </Stack>
    )
}