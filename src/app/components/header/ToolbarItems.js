"use client"

import { Stack, Button, FormControl, InputLabel, Select, colors } from "@mui/material"
import Link from 'next/link'
import Image from "next/image"
import theme from "../../assets/theme"
import logo from "../../assets/image/favicon.ico"
import nomenclature from "../../assets/nomenclature.json"
import { useRouter } from "next/navigation"

export default function ToolbalItems() {
  const router = useRouter()

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
    }
}

const sxLabel = {
    color : "#FFFFFF",
    "&.Mui-focused" : {
        color: theme.palette.secondary.dark
    }
}

    
    return (
        <Stack direction="row" spacing={2} width="100%" justifyContent="space-between" alignItems="center">
          <Link href="/">
            <Image src={logo} alt="Logo CARTE DE L'EAU" objectFit='contain' width={100} style={{paddingLeft: "20px"}}/>
          </Link>
          <Stack sx={{paddingRight: "20px"}} direction="column" spacing={1}>
            <FormControl sx={{maxWidth: "300px"}}>
              <InputLabel htmlFor="articles_par_catégories" sx={sxLabel}>Articles</InputLabel>
              <Select
                native
                defaultValue=""
                id="articles_par_catégories"
                label="Articles"
                sx={sxInputBase}
                >
                <option aria-label="None" value="" />
                {nomenclature[2].data.map((item) => (
                  <optgroup label={item.category} key={item.category}>
                    {item.list.map((article) => (
                      <option key={article.title} onClick={() => router.push(article.link)} id={article.link}>{article.title}</option>
                    ))}
                  </optgroup>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Stack>
    )
}