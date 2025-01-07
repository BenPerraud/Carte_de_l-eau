'use client'

import { Stack, Divider } from "@mui/material"
import theme from "../../assets/theme"
import article from "../../assets/articles/articles_secheresse.json"
import ArticleContent from "../../components/articles/ArticleContent"
import ArticleContentBarChart from "@/app/components/articles/ArticleContentBarChart"
import ArticleSynthesis from "../../components/articles/ArticleSynthesis"
import ArticleIntroduction from "../../components/articles/ArticleIntroduction"
import ArticleRelatives from "../../components/articles/ArticleRelatives"
import image from "../../../../public/secheresse_3.webp"


export default function Home() {
  const currentArticle = article[2]

  return (
    <Stack
      direction="column"
      spacing={6}
      sx={{padding: 3, backgroundColor: theme.palette.primary.dark}}
      divider={<Divider sx={{backgroundColor: "#FFFFFF"}} orientation="horizontal" flexItem/>}
    >
      <ArticleIntroduction definition={currentArticle.definition} title={currentArticle.title} resume={currentArticle.resume} image={image}/>
      <ArticleContent content={currentArticle.content1} />
      <ArticleContentBarChart content={currentArticle.content2} />
      <ArticleContentBarChart content={currentArticle.content3} />
      <ArticleSynthesis content={currentArticle.synthesis} />
      <ArticleRelatives filter="Sécheresse"/>
    </Stack>
  )
}