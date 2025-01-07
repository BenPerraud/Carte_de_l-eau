'use client'

import { Stack, Typography } from "@mui/material"
import theme from "../../assets/theme"
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ForestIcon from '@mui/icons-material/Forest'
import image1 from "../../assets/image/image1.jpg"
import image2 from "../../assets/image/image2.jpg"
import image3 from "../../assets/image/image3.jpg"
import Image from "next/image"

export default function OyasArgument () {

    const styleH = {
        color: "#ffffff",
        fontWeight: "bold",
        textAlign: "center"
    }

    const iconStyle = {
        color: theme.palette.secondary.main,
        fontSize: "65px"
    }

    const styleBody = {
        color: "#ffffff",
        textAlign: "center",
        maxWidth: "300px"
    }

    const imageListSx = {
        width: 120,
        height: "100%",
        margin: 0,
    }

    const stack = {
        width: "300px",
        border: "solid 1px",
        borderColor: theme.palette.secondary.main,
        padding: 2
    }

    const image = {
        borderRadius: 1
    }

    const title = {
        color: "#FFFFFF",
        fontWeight: "bold",

    }

    return (
        <Stack direction="column" spacing={5}>
            <Typography variant="h4" sx={styleH}>L'oya pour économiser l'eau et gagner du temps</Typography>
            <Stack direction="row" spacing={10} useFlexGap flexWrap="wrap" justifyContent="space-around">
                <Stack direction="column" alignItems="center" spacing={2} sx={stack}>
                    <Typography variant="h5" sx={title}>Économie d'eau</Typography>
                    <Image src={image1} alt="Oya" layout="responsive" style={image}/>
                    <WaterDropIcon sx={iconStyle}/>
                    <Typography variant="h6" sx={styleBody}>Une fois rempli, l'oya va libérer l'eau lentement durant 5 à 7 jours, permettant une économie d'eau considérable comparé à un arrosage en surface classique</Typography>
                </Stack>
                <Stack direction="column" alignItems="center" spacing={2} sx={stack}>
                    <Typography variant="h5" sx={title}>Gain de temps</Typography>
                    <Image src={image2} alt="Oya" layout="responsive"/>
                    <AccessTimeIcon sx={iconStyle}/>
                    <Typography variant="h6" sx={styleBody}>Terminé les heures d'arrosage, remplissez les oyas une fois pour la semaine à venir et absentez-vous l'esprit léger !</Typography>
                </Stack>
                <Stack direction="column" alignItems="center" spacing={2} sx={stack}>
                    <Typography variant="h5" sx={title}>Arrosage efficace</Typography>
                    <Image src={image3} alt="Oya" layout="responsive"/>
                    <ForestIcon sx={iconStyle}/>
                    <Typography variant="h6" sx={styleBody}>L'eau est libérée en profondeur, là où sont les racines de vos plantes ! Un arrosage en continu pour éviter le stress hydrique !</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}