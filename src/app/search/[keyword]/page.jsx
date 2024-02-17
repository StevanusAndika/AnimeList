import AnimeList from "@/components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";
import '@/app/globals.css';
const Page = async ({params}) => {
const{keyword} = params;
const decodedKeyword = decodeURI(keyword);

  // Mengambil data anime dari API
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`);
  const searchAnime = await response.json();
  
  
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
