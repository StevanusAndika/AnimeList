import AnimeList from "@/components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";
import '@/app/globals.css';
const Page = async () => {
  // Mengambil data anime dari API
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const topAnime = await response.json();
  
  
  // Mencetak data anime ke konsol (opsional)
  
  
  return (
    <>
      {/* Judul Halaman */}
      <section>
      <Header  title="Most Popular" linkHref="/populer" linkTitle="Most popular" />
      <AnimeList api = {topAnime}/>
      </section>
      
      <section>
      <Header title="New Anime" linkHref="/populer" linkTitle="New anime"/>
      <AnimeList api = {topAnime}/>
      </section>
      
      <section>
        
      <Header title="most crowded" linkHref="/rame" linkTitle="Most crowded"/>
      <AnimeList api = {topAnime}/>
        </section>
      
     
    
      
    </>
  );
}
    
export default Page;
