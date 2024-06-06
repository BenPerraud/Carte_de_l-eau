import { Card, Typography, CardContent } from "@mui/material"
import theme from "./theme"

export default function Alert ({level, content, color, sumup}) {

    const card = {
        width: 250,
        display: "flex",
        flexDirection: "column",
        borderBottom: "solid 0.5px #FFFFFF",
    }

    const alert = {
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "bold",
        color: 
            color === "#FFEDA0" ? theme.palette.primary.dark : "#FFFFFF"
    }

    const cardContentSumUp = {
        backgroundColor: theme.palette.primary.dark,
        flexGrow: 5,
    }

    const cardContentContent = {
        backgroundColor: theme.palette.primary.dark,
        pb: 0,
        pl: 1,
        pr: 1,
        pt: 0
    }

    const text = {
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "bold"
    }

    const textContent = {
        textAlign: "center",
        color: "#FFFFFF",
        borderTop: "solid 1px #FFFFFF",
        pt: 1
    }

    return (
        <Card sx={card}>
            <CardContent sx={{backgroundColor: color}}>
                <Typography variant="subtitle2" sx={alert}>{level}</Typography>
            </CardContent>
            <CardContent sx={cardContentSumUp}>
                <Typography variant="subtitle2" sx={text}>{sumup}</Typography>
            </CardContent>
            <CardContent sx={cardContentContent}>
                    <Typography variant="subtitle2" sx={textContent}>{content}</Typography>
                </CardContent>
        </Card>
    )
}