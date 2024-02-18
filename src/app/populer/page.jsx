"use client"

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilites/HeaderMenu";
import AnimeList from "@/components/AnimeList";
import Pagination from "@/components/Utilites/Pagination";
import { getAnimeResponse } from "../libs/api-libs";


const Page = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async() => {
    const populerAnime = await getAnimeResponse("top/anime",`page=${page}`)
    
    setTopAnime(populerAnime)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <>
    <HeaderMenu title={`Popular Anime  #${page}`}/>
    <AnimeList api={topAnime}/>
    <Pagination page={page}lastPage={topAnime.pagination?.last_visible_page}setPage={setPage}/>
    </>
  );
};

export default Page;