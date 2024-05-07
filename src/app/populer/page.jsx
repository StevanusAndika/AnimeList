"use client"

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilites/HeaderMenu";
import AnimeList from "@/components/AnimeList";
import Pagination from "@/components/Utilites/Pagination";
import { getAnimeResponse } from "@/libs/api-libs";
import Navbar from "@/components/Navbar";


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
    <Navbar/>
    <HeaderMenu title={`Popular Anime  #${page}`} className="text-dark" />

    <AnimeList api={topAnime}/>
    <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} style={{ color: "black" }} />

    </>
  );
};

export default Page;