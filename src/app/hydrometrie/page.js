"use client"

import { Stack, Divider, Typography } from "@mui/material"
import DynamicMap from "../components/map/MapHydrometrie"
import ChartHydrometrie from "../components/hydrometrie/ChartHydrometrie"
import { useEffect, useState } from "react"
import ArticleRelatives from "../components/articles/ArticleRelatives"
import theme from "../assets/theme"

export default function Home () {
    const [arrayPosition, setArrayPosition] = useState([])
    const [selectedMarker, setSelectedMarker] = useState({})

    useEffect(() => {
            fetch(
                'https://hubeau.eaufrance.fr/api/v2/hydrometrie/referentiel/stations?en_service=true&format=json&size=5000',
                {
                    headers : {
                        accept: "application/json"
                    }
                }
            )
            .then(res => res.json())
            .then(res => setArrayPosition(res.data))
        }, [])

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
            divider={<Divider sx={{backgroundColor: "#FFFFFF"}}/>}>
            <Typography variant='h4' sx={title}>La situation de l'hydrométrie des cours d'eau en France</Typography>
            <Typography variant='h6' sx={h6}>Une station hydrométrique permet d'observer et de mesurer une grandeur spécifique liée à l'hydrométrie (hauteur et/ou débit). Dans notre cas, l'hydrométrie est présentée en hauteur en millimètre. Choississez sur la carte une station hydrométrique relative à un cours d'eau et observez l'évolution du niveau d'eau sur les derniers jours.</Typography>
            <Stack
                height={800}
                direction="row"
                spacing={3}
                padding={2}
            >
                <DynamicMap arrayPosition={arrayPosition} selectedMarker={selectedMarker} setSelectedMarker={setSelectedMarker}/>
                <ChartHydrometrie data={selectedMarker} />
            </Stack>
            <ArticleRelatives filter="Hydrométrie" />
        </Stack>
    )
}