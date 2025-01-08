'use client'

import {Stack } from '@mui/material'
import ListArticles from "../app/components/home/ListArticles"
import ArticleToRead from './components/home/ArticleToRead'


export default function Home () {
   
    return (
       <Stack 
            direction="column"
            spacing={5}
        >
            <ArticleToRead />
            <ListArticles />
       </Stack>
    )
}