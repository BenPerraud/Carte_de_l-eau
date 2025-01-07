"use client"

import { ResponsiveContainer, Line, Area, XAxis, LineChart, Tooltip, YAxis, CartesianGrid, linearGradient, AreaChart } from "recharts"
import { Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import theme from "@/app/assets/theme"
import Link from "next/link"

export default function ChartHydrometrie ({data}) {
    const [initialStation, setInitialStation] = useState([])

    const urlHubeau = "https://hubeau.eaufrance.fr/api/v2/hydrometrie/observations_tr?code_entite="+data.code_station+"&grandeur_hydro=H&timestep=60&code_statut=4"
    const urlHydroEauFrance = "https://hydro.eaufrance.fr/stationhydro/"+data.code_station+"/fiche"

    useEffect(() => {
        fetch (
           urlHubeau,
           {
            headers: {
                accept: "application/json"
            }
           } 
        )
        .then(res => res.json())
        .then(res => getDatatUsefull(res.data))
    })

    function getDatatUsefull (x) {
        if (x.length > 0 ) {
            const result = []
            for (let i of x) {
                const date = i.date_obs.slice(0, -1)
                const date_obs_formatted = new Date(date)
                const date_month = date.substr(5, 2)
                const date_day = date.substr(8, 2)
                const date_hour = date.substr(14, 5) 
                const date_year = date.substr(0, 4)
                const object = {
                    code_station : i.code_station,
                    date_obs : date_obs_formatted,
                    date_axis : date_day+"-"+date_month,
                    date_year: date_year,
                    date_hour: date_hour,
                    resultat_obs : i.resultat_obs
                }
                result.push(object)
            }
            result.sort((a, b) => a.date_obs - b.date_obs)
            setInitialStation(result)
        }
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <Stack
                padding={1}
                sx={{
                    border: 1,
                    borderColor: theme.palette.primary.main,
                    backgroundColor: "#FFFFFF"
                }}>
                <Typography variant="body2">Le {payload[0].payload.date_axis} {payload[0].payload.date_year} à {payload[0].payload.date_hour} : {payload[0].payload.resultat_obs} mm</Typography>
            </Stack>
          )
        }
    }
    
    
    if (initialStation.length > 0) {
        return (
            <Stack
                direction="column"
                width={1200}
                spacing={2}
                padding={2}
                sx={{
                    backgroundColor: "#FFFFFF"
                }}
                justifyContent="space-between"
            >
                <Stack alignItems="center" spacing={1} sx={{color: theme.palette.primary.dark, textAlign: "center"}}>
                    <Typography variant="h5" sx={{textDecoration: "underline"}}>Le niveau hydrométrique de {data.libelle_station}</Typography>
                    <Typography variant="h6"></Typography>
                    <Typography variant="subtitle1">{data.commentaire_station} </Typography>
                </Stack>
                <ResponsiveContainer width="100%" height={500}>
                        <AreaChart data={initialStation}>
                            <defs>
                                <linearGradient id="colorLevelNappes" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={theme.palette.primary.dark} stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor={theme.palette.primary.dark} stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" />
                            <Area type="monotone" dataKey="resultat_obs" stroke={theme.palette.primary.dark} fillOpacity={1} fill="url(#colorLevelNappes)"/>
                            <XAxis dataKey="date_axis" />
                            <YAxis dataKey="resultat_obs" domain={['auto', 'auto']}/>
                            <Tooltip content={<CustomTooltip />}/>
                        </AreaChart>
                </ResponsiveContainer>
                <Typography variant="subtitle1" textAlign="center">
                        <Link href={urlHydroEauFrance} target="_blank">Retrouvez plus d'informations sur la station</Link>
                </Typography>
            </Stack>
        )
    } else {
        return (
            <Stack width="100%" height={500} textAlign="center" color="#FFFFFF">
                <Typography variant="h5">Sélectionner une station hydrométrique pour afficher le détail</Typography>
            </Stack>
        )
    }
}