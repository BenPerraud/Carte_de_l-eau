import { Typography } from "@mui/material"
import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import("./indexSecheresse"), {
    loading: () => 
        <Typography
            variant="subtitle1"
            sx={
                {color: "#FFFFFF",
                textAlign: "center",
                fontStyle: "italic"}
            }
        >
            Chargement de la carte...
        </Typography>,
        ssr: false
})

export default DynamicMap