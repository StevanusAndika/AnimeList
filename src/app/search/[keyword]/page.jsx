import AnimeList from "@/components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";
import '@/app/globals.css';
import { getAnimeResponse } from "@/libs/api-libs";
const Page = async ({params}) => {
const{keyword} = params;
const decodedKeyword = decodeURI(keyword);

  // Mengambil data anime dari API
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);
  
  
  
  // Mencetak data anime ke konsol (opsional)
  
  
  return (
    <>
      {/* Judul Halaman */}
      <section>
      <Header title={`Search result for ${decodedKeyword}....`}/>
      <AnimeList api = {searchAnime}/>
      </section>
      
      
      
     
    
      
    </>
  );
}
    
export default Page;
