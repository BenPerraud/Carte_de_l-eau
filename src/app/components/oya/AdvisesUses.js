'use client'

import { Stack, Typography } from "@mui/material"
import AdvisesAccordion from "./AdvisesAccordion"
import advices from "../../assets/texts/advices.json"

export default function AdvisesUses () {

    const styleH = {
        color: "#ffffff",
        fontWeight: "bold",
        textAlign: "center"
    }

    return (
        <Stack direction="column" spacing={5}>
            <Typography variant="h4" sx={styleH}>Des questions ? Voilà des réponses !</Typography>
            <Stack direction="column" spacing={2}>
                {advices.map((advice) => (
                    <AdvisesAccordion title={advice.title} description={advice.description} key={advice.title}/>
                ))}
            </Stack>
        </Stack>
    )
}