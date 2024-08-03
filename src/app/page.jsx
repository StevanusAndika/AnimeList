import AnimeList from "@/components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";
import '@/app/globals.css';
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from "@/components/Navbar";

const Page = async () => {
  // Mengambil data anime dari API
  const topAnime = await getAnimeResponse("top/anime","limit=12");
 let recommendedAnime = await getNestedAnimeResponse("recommendations/anime","entry")
  recommendedAnime = reproduce(recommendedAnime,12)

  //console.log(recommendedAnime)

//flst mapping

  // Mencetak data anime ke konsol (opsional)
  
  
  return (
    <>
    <Navbar/>
      <section>
        <Header title="Most Popular" linkTitle="See More" linkHref="/populer"/>
        <AnimeList api={topAnime} />
      </section>

      <section>
        <Header title="Recommended"/>
        <AnimeList api={recommendedAnime} />
      </section>
     
    </>
  )
}



    
export default Page;