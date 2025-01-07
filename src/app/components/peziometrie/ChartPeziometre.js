"use client"

import { Stack, Typography, Slider, colors } from "@mui/material"
import { ResponsiveContainer, Area, XAxis, YAxis, CartesianGrid, AreaChart, Label } from "recharts"
import { useEffect, useState } from "react"
import theme from "@/app/assets/theme"

export default function ChartPeziometre ({data}) {
    const [initialPezio, setInitialPezio] = useState([])
    const [currentPezio, setCurrentPezio] = useState([])
    const [minSlider, setMinSlider] = useState()
    const [maxSlider, setMaxSlider] = useState()
    const [currentSlider, setCurrentSlider] = useState([])

    useEffect (() => (
        getChroniquesFromOnePezio(data)
    ), [data])

    function getChroniquesFromOnePezio (x) {
        if (Object.keys(x).length > 0 && x.constructor === Object ) {
            const urlHubeau = "https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/chroniques?code_bss="+x.code_bss+"&sort=desc"
            fetch (
                urlHubeau,
                {
                    headers : 
                        {
                            "Accept": "application/json",
                        }
                }
            )
            .then(res => res.json())
            .then(res => getDataUsefull(res.data))
        }
    }

    function getDataUsefull (x) {
        const result = x.reverse()
        const clearedResult = clearDate(result)
        setInitialPezio(clearedResult)
        setCurrentPezio(clearedResult)
        setMinSlider(parseInt(clearedResult[0].year))
        setMaxSlider(parseInt(clearedResult[clearedResult.length-1].year))
        setCurrentSlider([parseInt(clearedResult[0].year), parseInt(clearedResult[clearedResult.length-1].year)])
     }

    function clearDate (x) {
        for (let i of x) {
            i.date_mesure_cleared = i.date_mesure.substr(8, 2)+"-"+i.date_mesure.substr(5, 2)
            i.year = i.date_mesure.substr(0, 4)
        }
        return x
    }

    function handleSlider (e, newValue) {
        setCurrentSlider(newValue)
        const filteredPezio = []
        for (let i of initialPezio) {
            if (parseInt(i.year) >= newValue[0] && parseInt(i.year) <= newValue[1]) {
                filteredPezio.push(i)
            }
        }
        setCurrentPezio(filteredPezio)
    }

    const sliderCSS = {
        color: theme.palette.primary.dark
    }

    if (currentPezio.length > 0) {
        return (
            <Stack
                width="100%"
                height="auto"
                spacing={2}
                direction="column"
                alignItems="center"
                padding={1}
                sx={{
                    backgroundColor: "#FFFFFF",
                }}
            >
                <Stack textAlign="center" sx={{color: theme.palette.primary.dark}}>
                    <Typography variant="h5" sx={{textDecoration: "underline"}}>Péziomètre de la commune de {data.nom_commune}</Typography>
                    <Typography variant="subtitle1">Dernière mesure disponible le {data.date_fin_mesure}</Typography>
                    <Typography variant="body1">Données exprimées en profondeur par mètre du point d'eau étudié</Typography>
                </Stack>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={500}
                        data={currentPezio}
                    >
                        <defs>
                            <linearGradient id="colorLevelNappes" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={theme.palette.primary.dark} stopOpacity={0.8}/>
                                <stop offset="95%" stopColor={theme.palette.primary.dark} stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date_mesure_cleared" xAxisId={0}/>
                        <XAxis dataKey="year" xAxisId={1}/>
                        <YAxis />
                        <Area type="monotone" dataKey="profondeur_nappe" stroke={theme.palette.primary.dark} fillOpacity={1} fill="url(#colorLevelNappes)"/>
                    </AreaChart>
                </ResponsiveContainer>
                <Stack
                    width={400}
                    padding={2}
                    border="1px solid #324b4a">
                    <Slider 
                        min={minSlider}
                        max={maxSlider}
                        valueLabelDisplay="on"
                        value={currentSlider}
                        onChange={handleSlider}
                        sx={sliderCSS}
                        
                    />
                </Stack>
            </Stack>
        )
    } else {
        return (
            <Stack width="100%" height={500} textAlign="center" color="#FFFFFF">
                <Typography variant="h5">Sélectionner un péziomètre pour afficher le détail</Typography>
            </Stack>
        )
    }
}