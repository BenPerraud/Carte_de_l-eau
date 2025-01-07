'use client'

import { MapContainer, TileLayer, GeoJSON, Tooltip } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { Stack, Typography } from '@mui/material'
import { useState, useEffect } from 'react'



export default function MapComponent({filter}) {
    const [hover, setHover] = useState("")
    const [idFeature, setIdFeature] = useState(0)
    const [data, setData] = useState({})
    const dataGouvAPI = 'https://www.data.gouv.fr/api/1/datasets/r/3ab674ef-ec02-44d7-a5f7-3002f5053d1e'
    const dataDate = "Carte des arrêtés préfectoraux de restriction d'eau en date du "+data.date

    const decompress = async (url) => {
        const ds = new DecompressionStream('gzip')
        const response = await fetch(url)
        const blob_in = await response.blob()
        const stream_in = blob_in.stream().pipeThrough(ds)
        const blob_out = await new Response(stream_in).blob()
        return JSON.parse(await blob_out.text())
    }

    function filterData (x, filter) {
        const str = x.name.substring(x.name.length - 8)
        const date_data = [str.substring(6,8), str.substring(4,6), str.substring(0,4)].join("-") 
        const features = x.features
        const result = features.filter((feature) => 
            feature.properties.statut_arrete === "Publié" &&
            feature.properties.type_zone === filter)
        const resultFiltered = {
            name: x.name,
            features: result,
            dataType: filter,
            date: date_data
        }
        setData(resultFiltered)
    }

    useEffect(() => {
        fetch(
            dataGouvAPI,
            {
                headers: {
                    "accept": "application/JSON"
                    }
            }
        )    
        .then(res => decompress(res.url))
        .then(res => filterData(res, filter))
    }, [filter])

    const colorAlert = [
        {level: "Vigilance", color: "#FFEDA0"},
        {level: "Alerte", color: "#FEB24C"},
        {level: "Alerte renforcée", color: "#FC4E2A"},
        {level: "Crise", color: "#B10026"}
    ]

    const style = (x) => {
        const property = x.properties.nom_niveau
        const colorAlertObject = colorAlert.find(item => item.level === property)
        const result = colorAlertObject.color

        if (idFeature === x.properties.id_zone) {
            const mapStyle = {
                color: result,
                weight: 0,
                fillOpacity: 0.5
            }
            return mapStyle
        } else {
            const mapStyle = {
                color: result,
                weight: 0,
                fillOpacity: 0.9
            }
            return mapStyle
        }
    }

    const hoverFeature = (e) => {
        let layer = e.target
        let result = {
            zone: layer.feature.properties.nom_zone,
            level: layer.feature.properties.nom_niveau,
            date: layer.feature.properties.debut_validite_arrete,
            id: layer.feature.properties.id_arrete
        }
        setHover(result)
        setIdFeature(layer.feature.properties.id_zone)
    }

    const resetHover = (e) => {
        setHover("")
        setIdFeature(0)
    }

    const onEachFeature = (features, layer) => {
        layer.on({
            mouseover: hoverFeature,
            mouseout: resetHover
        })
    }

    return (
        <MapContainer
            center={[47, 2.5]}
            zoom={6}
            scrollWheelZoom={true}
            style={{height: "100%", width: "100%"}}>
            <GeoJSON
                attribution={dataDate}
                data={data.features}
                key={data.dataType}
                style={style}
                onEachFeature={onEachFeature}
            >
                <Tooltip direction='top' offset={[0, -10]}>
                    <Stack direction="column" spacing={0}>
                        <Typography variant='subtitle1' sx={{textDecoration: "underline"}}>{hover.level}</Typography>
                        <Typography variant='subtitle2'>Date d'arrêté : {hover.date}</Typography>
                        <Typography sx={{fontSize: "10px"}}>{hover.zone}</Typography>
                        <Typography sx={{fontSize: "10px"}}>Numéro de l'arrêté : {hover.id}</Typography>
                    </Stack>
                </Tooltip>
            </GeoJSON>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

