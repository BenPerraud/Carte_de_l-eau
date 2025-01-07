"use client"

import { Stack, InputLabel, Select, FormControl, MenuItem } from "@mui/material"
import { useState } from "react"
import DynamicMap from "../map/MapPeziometrie"
import listDepartments from "../../assets/departments.json"
import dptTemplate from "../general/dptTemplate"
import ChartPeziometre from "./ChartPeziometre"
import { BorderColor } from "@mui/icons-material"
import theme from "@/app/assets/theme"

export default function GetYourPeziometre () {
    const [currentPosition, setCurrentPosition ] = useState([])
    const [currentDpt, setCurrentDpt] = useState("")
    const [selectedMarker, setSelectedMarker] = useState({})

    function getInput (e) {
        setCurrentDpt(e.target.value)
        const dptNumber = e.target.value.substring(0,2)
        getAllPezioFromDptNumber(dptNumber)
    }

    function getAllPezioFromDptNumber (x) {
        const urlHubeau = "https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/stations?code_departement="+x+"&format=json&pretty"
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
        .then(res => setCurrentPosition(res.data))
    }
    

    const sxInputBase = {
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FFFFFF"
        },
        "&:hover:not(.Mui-focused)": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.secondary.dark,
            },
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.secondary.dark,
        },
        '.MuiSvgIcon-root ': {
            color: "#FFFFFF"
        },
        color: "#FFFFFF"
    }

    const sxLabel = {
        color : "#FFFFFF",
        "&.Mui-focused" : {
            color: theme.palette.secondary.dark
        }
    }

    return (
        <Stack
            padding={3}
            spacing={4}
            direction="row">
            <Stack
                spacing={2}>
                <Stack>
                    <FormControl>
                        <InputLabel id="Sélection département label" sx={sxLabel}>Votre département</InputLabel>
                        <Select
                            labelId="Sélection département"
                            id="Sélection département"
                            label="Votre département"
                            value={currentDpt}
                            onChange={getInput}
                            sx={sxInputBase}
                        >
                            {dptTemplate(listDepartments).map((dpt) => (
                                <MenuItem key={dpt} value={dpt}>{dpt}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>
                <Stack height={500} width={500}>
                    <DynamicMap arrayPosition={currentPosition} selectedMarker={selectedMarker} setSelectedMarker={setSelectedMarker}/>
                </Stack>
            </Stack>
            <ChartPeziometre data={selectedMarker}/>
        </Stack>
    )
}
