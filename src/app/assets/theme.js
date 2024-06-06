"use client"

import { createTheme } from '@mui/material/styles'

let theme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        }
    },
    palette: {
        primary: {
    	    main: `#336E6D`,
            light: `#95b1af`,
            dark: `#324b4a`
        },
        secondary: {
            main: `#b88f7d`,
            dark: `#815c4c`,
            light: `#fff6f0`
        } 
    },
    typography: {
        fontFamily: [`Inter`, `sans-serif`].join(",")
    }
})


export default theme
