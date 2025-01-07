'use client'

import {Stack, Typography, Card, CardContent, CardMedia, CardActionArea, IconButton, Divider } from '@mui/material'
import theme from "../../assets/theme"
import Link from 'next/link'
import nomenclature from "../../assets/nomenclature.json"
import { useState } from 'react'
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff'
import InvertColorsOffIcon from '@mui/icons-material/InvertColorsOff'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import WaterDropIcon from '@mui/icons-material/WaterDrop'

export default function ListArticles () {
    const [result, setResult] = useState(nomenclature[3].data)
    const [currentFilter, setCurrentFilter] = useState("-")

    function handleChange (e, x) {
        e.preventDefault()
        if (x === "-") {
            setResult(nomenclature[3].data)
            setCurrentFilter(x)
        } else {
            const filtered = nomenclature[3].data.filter(item => item.category === x)
            setResult(filtered)
            setCurrentFilter(x)
        }
    }

    const statusColor1 = {
        fontSize: 35,
        color: "#FFFFFF",
        ...(currentFilter === "-" && {
            color: theme.palette.secondary.main,
        })
    }

    const statusColor2 = {
        fontSize: 35,
        color: "#FFFFFF",
        ...(currentFilter === "Sécheresse" && {
            color: theme.palette.secondary.main,
        })
    }
    
    const statusColor3 = {
        fontSize: 35,
        color: "#FFFFFF",
        ...(currentFilter === "Péziométrie" && {
            color: theme.palette.secondary.main,
        })
    }

    const statusColor4 = {
        fontSize: 35,
        color: "#FFFFFF",
        ...(currentFilter === "Hydrométrie" && {
            color: theme.palette.secondary.main,
        })
    }

   

    return (
        <Stack
            direction="column"
            spacing={3}
            padding={3}
            sx={{backgroundColor: theme.palette.primary.dark }}>
            <Typography variant="h4" sx={{ mb: 2, textAlign: "center", color: "#FFFFFF", textDecoration: "underline"}}>Retrouvez tous nos articles disponibles sur le sujet de l'eau</Typography>
            <Stack
                direction="row"
                alignItems="center"
                paddingLeft={4}
                spacing={4}
            >
                <Stack
                    spacing={1}
                    width={120}
                    divider={<Divider sx={{backgroundColor: "#FFFFFF"}} />}
                >
                    <Typography variant="h4" sx={{color: "#FFFFFF"}}>Filtres</Typography>
                    <Typography variant="subtitle1" sx={{color: theme.palette.secondary.main, fontWeight: "bold"}}>{currentFilter}</Typography>
                </Stack>
                <Stack
                    direction="row"
                    spacing={2}>
                    <IconButton aria-label="test" id='test' onClick={(e) => handleChange(e, "-")}>
                        <FilterAltOffIcon sx={statusColor1}/>
                    </IconButton>
                    <IconButton aria-label="test2" id='test2' onClick={(e) => handleChange(e, "Sécheresse")}>
                        <InvertColorsOffIcon sx={statusColor2}/>
                    </IconButton>
                    <IconButton aria-label="test2" id='test2' onClick={(e) => handleChange(e, "Péziométrie")}>
                        <AnalyticsIcon sx={statusColor3}/>
                    </IconButton>
                    <IconButton aria-label="test2" id='test2' onClick={(e) => handleChange(e, "Hydrométrie")}>
                        <WaterDropIcon sx={statusColor4}/>
                    </IconButton>
                </Stack>
            </Stack>
            <Stack
                direction="row"
                spacing={5}
                flexWrap="wrap"
                useFlexGap
                padding={3}
                justifyContent= "space-around"
                >
                {result.map((article) => (
                    <Card 
                        sx={{
                            maxWidth: 380,
                            height: 400,
                            backgroundColor: theme.palette.primary.dark,
                            borderBottom: 1,
                            borderColor: "#FFFFFF",
                            "&:hover" : {
                                backgroundColor : theme.palette.primary.main
                            }
                        }}
                        key={article.title}
                        >
                        <Link href={article.link} style={{textDecoration: "none"}}>
                            <CardActionArea
                                sx={{height: 150}}>
                                <CardMedia
                                    component="img"
                                    height= "250"
                                    image={article.img}
                                    alt='e'
                                />
                                <CardContent>
                                    <Stack
                                        spacing={1}
                                        justifyContent="space-between">
                                        <Stack maxHeight={150}>
                                            <Typography variant='h6' sx={{color: theme.palette.secondary.main}}>{article.title}</Typography>
                                            <Typography noWrap variant='subtitle1' sx={{color: "#FFFFFF"}}>{article.resume}</Typography>
                                        </Stack>
                                        <Stack
                                            backgroundColor= "#FFFFFF"
                                            width={100}
                                            borderRadius={1}
                                            textAlign={"center"}
                                            sx={{flexShrink:3}}>
                                            <Typography variant='subtitle2' sx={{color: theme.palette.secondary.main}}>{article.category}</Typography>
                                        </Stack>
                                    </Stack>
                                </CardContent> 
                            </CardActionArea>
                        </Link>
                    </Card>
                ))}
            </Stack>
        </Stack>
    )
}