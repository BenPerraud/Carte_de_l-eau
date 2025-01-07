'use client'

import { Typography, Stack, Card, CardContent, CardActionArea, CardMedia} from "@mui/material"
import theme from "../../assets/theme"
import Link from "next/link.js"
import { useEffect, useState } from "react"
import nomenclature from "../../assets/nomenclature.json"

export default function ArticleRelatives({filter}) {
    const [result, setResult] = useState(nomenclature[3].data)

    useEffect(() => {
        const array = result.filter((a) => a.category === filter)
        setResult(array)
    }, [])
      
    return (
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
                        height: 300,
                        borderBottom: 1,
                        borderColor: "#FFFFFF",
                        backgroundColor: theme.palette.primary.dark,
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
                                height= "150"
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
    )
}

