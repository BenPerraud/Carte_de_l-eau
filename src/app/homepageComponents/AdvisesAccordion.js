'use client'

import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material"
import theme from "../theme"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from "react"

export default function AdvisesAccordion({title, description}) {
    const [open, setOpen] = useState(false)

    function handleClick () {
        setOpen(!open)
    }

    const accordionSummary = {
        backgroundColor: 
            open === false ? 
            "#ffffff" :
            theme.palette.secondary.main,
    }

    const styleSummary = {
        color: theme.palette.primary.dark, 
        fontWeight: "bold"
    }

    const styleDetails = {
        color: theme.palette.primary.dark,
    }

    return (
        <Accordion onChange={handleClick} sx={{border: "1px solid", borderColor: theme.palette.secondary.main}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon fontSize="large" sx={{color: theme.palette.primary.dark }}/>}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={accordionSummary}
            >
                <Typography variant="h6" sx={styleSummary}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Stack direction="column" spacing={2}>
                    {description.map((item) => (
                        <Typography variant="body1" sx={styleDetails} key={item}>{item}</Typography>
                    ))}
                </Stack>
            </AccordionDetails>
        </Accordion>
    )
}