'use client'

import { ImageList, ImageListItem, ImageListItemBar, Box, Typography, Stack } from "@mui/material"
import Link from 'next/link'
import Image from "next/image"
import image1 from "../../assets/image/image1.jpg"
import image2 from "../../assets/image/image2.jpg"
import image3 from "../../assets/image/image3.jpg"
import theme from "../../assets/theme"

export default function ImagesList () {

    const datasList = [
        {
            img: image1, 
            title: "Plantes en pot",
            subtitle: "Idéal pour l'arrosage des aromates et des plantes en pot",
            link: "https://terraoya.fr/10-pour-les-plantes-en-pot" 
        },
        {
            img: image2, 
            title: "Plantes en pleine terre",
            subtitle: "A enterrer dans les massifs ou le potager",
            link: "https://terraoya.fr/11-pour-l-exterieur" 
        },
        {
            img: image3, 
            title: "Nos packs d'oyas",
            subtitle: "La solution économique optimisée pour la livraison",
            link: "https://terraoya.fr/12-nos-packs-d-oyas" 
        }
    ]

    const imageListSx = {
        width: "90%",
        maxWidth: "1200px",
        height: "100%",
        margin: 0,
    }

    const imageListItemSx = {
        borderRadius: "15px"
    }

    const imageListItemBarSx = {
        borderRadius: "15px"
    }

    const styleH = {
        color: "#ffffff",
        fontWeight: "bold",
        textAlign: "center"
    }

    return (
        <Stack direction="column" spacing={5}>
            <Typography variant="h4" sx={styleH}>Retrouvez nos oyas à la vente sur notre site internet dédié <Link
              href="https://terraoya.fr/"
              style={{color: theme.palette.secondary.main, textDecoration: "none"}}
              target="_blank">
              TERRA OYA
            </Link></Typography>
            <Box sx={{display: "flex", justifyContent: "center", maxHeight: "400px" }}>
                <ImageList sx={imageListSx} cols={3} gap={25}>
                    {datasList.map((item) => (
                        <Link key={item.title} href={item.link} target="_blank">
                            <ImageListItem >
                                <Image src={item.img} alt={item.title} layout="responsive" style={imageListItemSx}/>
                                <ImageListItemBar title={item.title} subtitle={item.subtitle} sx={imageListItemBarSx}/>
                            </ImageListItem>
                        </Link>
                    ))}
                </ImageList>
            </Box>
        </Stack>
    )
}