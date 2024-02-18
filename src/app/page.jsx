import AnimeList from "@/components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";
import '@/app/globals.css';
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
  // Mengambil data anime dari API
  const topAnime = await getAnimeResponse("top/anime","limit=8");
 let recommendedAnime = await getNestedAnimeResponse("recommendations/anime","entry")
  recommendedAnime = reproduce(recommendedAnime,8)

  //console.log(recommendedAnime)

//flst mapping

  // Mencetak data anime ke konsol (opsional)
  
  
  return (
    <>
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
