'use client'

import {Stack, Typography, Container, Divider, Button } from '@mui/material'
import theme from "../../assets/theme"
import nomenclature from "../../assets/nomenclature.json"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function ArticleToRead() {
    const [currentArticle, setCurrentArticle] = useState(0)

    const currentNom = nomenclature[3].data

    const button = {
        width: "40%",
        backgroundColor: theme.palette.primary.dark,
        "&:hover": {
            backgroundColor: theme.palette.secondary.main
        }
    }

    useEffect(() => {
        const random = Math.floor(Math.random() * currentNom.length)
        setCurrentArticle(random)
    })
    

    return (
        <Stack sx={{backgroundColor: theme.palette.secondary.light, alignItems: "center"}}>
            <Stack
                direction= "row"
                width={1000}
                height={300}
                padding={1}
                sx={{
                    justifyContent: "space-between"
                }}
                spacing={2}>
                <div sx={{width: "100%", height: "auto"}}>
                    <Image
                        src={currentNom[currentArticle].img}
                        alt={currentNom[currentArticle].title}
                        width={500}
                        height={300}
                        sizes='(max-width: 500px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        />
                </div>
                <Stack sx={{maxWidth: 500}} padding={2} spacing={2}>
                    <Stack 
                        divider={<Divider sx={{width:"20%"}}/>}
                        spacing={1}
                    >
                        <Typography variant='h6' sx={{fontWeight: "bold", color: theme.palette.primary.dark}}>{currentNom[currentArticle].title}</Typography>
                        <Typography variant='body1'>{currentNom[currentArticle].resume}</Typography>
                    </Stack>
                    <Link href={currentNom[currentArticle].link}>
                        <Button variant='contained' sx={button}>LIRE PLUS</Button>
                    </Link>
                </Stack>
            </Stack>   
       </Stack>
    )
}