'use client'

import { Stack, Typography, Divider, Button, Box } from '@mui/material'
import DynamicMap from "../components/map/MapSecheresse"
import theme from "./../assets/theme"
import { useState } from 'react'
import Alert from "../components/secheresse/Alert"
import alertContents from "./../assets/texts/cardAlertContent.json"
import ArticleRelatives from "../components/articles/ArticleRelatives"
import article from "../assets/articles/articles_secheresse.json"

export default function Carte () {
    const [filter, setFilter] = useState("SUP")
    

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
    

    const btnChooseSup = {
        backgroundColor:
            filter === "SUP" ?
            theme.palette.secondary.dark :
            theme.palette.primary.dark,
        color: 
            filter === "SUP" ?
            "#FFFFFF" :
            "#FFFFFF",
        fontWeight: "bold",
        width: "150px",
        height: "50px",
        "&:hover": {
            backgroundColor: 
                filter === "SUP" ?
                "#FFFFFF":
                "#FFFFFF",
            color: 
                filter === "SUP" ?
                theme.palette.primary.dark:
                theme.palette.primary.dark
        }
    }

    const btnChooseSou = {
        backgroundColor:
            filter === "SOU" ?
            theme.palette.secondary.dark :
            theme.palette.primary.dark,
        color: 
            filter === "SOU" ?
            "#FFFFFF" :
            "#FFFFFF",
        fontWeight: "bold",
        width: "150px",
        height: "50px",
        "&:hover": {
            backgroundColor: 
                filter === "SOU" ?
                "#FFFFFF":
                "#FFFFFF",
            color: 
                filter === "SOU" ?
                theme.palette.primary.dark:
                theme.palette.primary.dark
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
            <Typography variant='h4' sx={title}>La situation de la sécheresse en France</Typography>
            <Stack
             padding={3}
             spacing={4}>
              <Typography variant='h6' sx={h6}>La carte de l'eau recense tous les arrêtés préfectoraux de restriction d'eau en cours sur le territoire métropolitain. Les données sont disponibles depuis le site VigiEau (source gouvernementale) et distinguées entre les restrictions de préléments sur les eaux de surface et les restrictions de préléments sur les eaux souterraines</Typography>
              <Stack direction="row" spacing={6} useFlexGap flexWrap="wrap" justifyContent="center">
                  <Button variant='contained' size='small' onClick={passToSup} sx={btnChooseSup}>Eaux de surface</Button>
                  <Button variant='contained' size='small' onClick={passToSou} sx={btnChooseSou}>Nappes phréatiques</Button>
              </Stack>
              <Box sx={{height: 700}}>
                <DynamicMap filter={filter}/>
              </Box>
            </Stack>
            <Stack direction="column" spacing={6} justifyContent="center" alignItems="center">
                <Typography variant='h6' sx={h6}>Les restrictions de prélèvements d'eau peuvent s'appliquer aussi bien sur les eaux de surface que les eaux souterraines, à destination des particuliers comme de l'agriculture, des entreprises ou des collectivités. Quatre niveaux d'alerte peuvent être déployés par les préfectures.</Typography>
                <Stack direction="row" useFlexGap flexWrap="wrap" spacing={12} justifyContent="center">
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
              </Stack>
            <ArticleRelatives filter="Sécheresse"/>
        </Stack>
    )
}