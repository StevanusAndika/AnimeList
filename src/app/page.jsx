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
      <section>
        <Header title="Most Popular" linkTitle="See More" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
     
    </>
  )
}



    
export default Page;
