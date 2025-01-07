'use client'

import { Typography, Stack} from "@mui/material"
import theme from "../../assets/theme.js"
import { ResponsiveContainer, Treemap, Tooltip } from "recharts"
import Link from "next/link.js"

export default function ArticleContentTreeMapChart({content}) {

    const title = {
        color: theme.palette.secondary.main,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase"
      }

      const subtitle = {
        color: theme.palette.secondary.main,
      }

      const getMore = {
        color: "#FFFFFF",
        "&:hover": {
          color: theme.palette.secondary.main
        }
      }

      const sxSource = {
        color: "#FFFFFF",
        "&:hover" : {
          color: theme.palette.secondary.main,
        },
        fontStyle: "italic"
      }

    return (
      <Stack
      direction="column"
      spacing={2}
      sx={{padding: 3}}
      >
        <Typography variant="h5" sx={title}>{content.title}</Typography>
        {content.content.map((content) => (
          <Stack
            direction="column"
            spacing={1}
            key={content.subtitle}>
            <Typography variant="h6" sx={subtitle}>{content.subtitle}</Typography>
            <Typography variant="subtitle1" sx={{ color : "#FFFFFF"}}>{content.content}</Typography>
            <Link href={content.source} target="_blank" style={{textDecoration: "none"}}>
              <Typography variant="body1" sx={sxSource}>Pour aller plus loin ...</Typography>
            </Link>
          </Stack>
        ))}
        <Stack
          heigh={600}
          spacing={2}
          padding={2}
          border={1}
          borderColor="#FFFFFF">
          <Stack
          textAlign="center">
            <Typography variant="h6" sx={title}>{content.chart.title}</Typography>
            <Typography variant="subtitle1" sx={{ color : "#FFFFFF"}}>{content.chart.subtitle}</Typography>
          </Stack>
          <ResponsiveContainer height={600} width="100%">
            <Treemap 
              width="auto"
              height="auto"
              data={content.chart.data}
              dataKey="size"
              stroke="#FFFFFF"
              fill={theme.palette.secondary.main}
              ratio={4/3}
            />
            <Tooltip />
          </ResponsiveContainer>
          <Stack>
            <Typography variant="subtitle1" sx={{ color : "#FFFFFF"}}>Source : {content.chart.source}</Typography>
            <Link href={content.chart.getMore} target="_blank" style={{textDecoration : "none"}}>
              <Typography variant="subtitle1" sx={getMore}>POUR ALLER PLUS LOIN</Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    )
}