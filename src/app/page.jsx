import AnimeList from "@/components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";
import '@/app/globals.css';
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  // Mengambil data anime dari API
  const topAnime = await getAnimeResponse("top/anime","limit=8");
  
  // Mencetak data anime ke konsol (opsional)
  
  
  return (
    <>
      <section>
        <Header title="Most Popular" linkTitle="See More" linkHref="/populer"/>
        <AnimeList api={topAnime} />
      </section>
     
    </>
  )
}



    
export default Page;
