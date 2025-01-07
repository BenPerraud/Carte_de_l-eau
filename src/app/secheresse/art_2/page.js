'use client'

import { Stack, Divider } from "@mui/material"
import theme from "../../assets/theme"
import article from "../../assets/articles/articles_secheresse.json"
import ArticleContent from "../../components/articles/ArticleContent"
import ArticleSynthesis from "../../components/articles/ArticleSynthesis"
import ArticleIntroduction from "../../components/articles/ArticleIntroduction"
import ArticleRelatives from "../../components/articles/ArticleRelatives"
import ArticleContentTreeMapChart from "@/app/components/articles/ArticleContentTreeMapChart"
import image from "../../../../public/secheresse_2.webp"


export default function Home() {
  const currentArticle = article[1]

  return (
    <Stack
      direction="column"
      spacing={6}
      sx={{padding: 3, backgroundColor: theme.palette.primary.dark}}
      divider={<Divider sx={{backgroundColor: "#FFFFFF"}} orientation="horizontal" flexItem/>}
    >
      <ArticleIntroduction definition={currentArticle.definition} title={currentArticle.title} resume={currentArticle.resume} image={image}/>
      <ArticleContentTreeMapChart content={currentArticle.content1} />
      <ArticleContent content={currentArticle.content2} />
      <ArticleContent content={currentArticle.content3} />
      <ArticleSynthesis content={currentArticle.synthesis} />
      <ArticleRelatives filter="Sécheresse"/>
    </Stack>
  )
}