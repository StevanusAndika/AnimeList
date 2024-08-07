import '@/app/globals.css';
import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";
import VideoPlayer from '@/components/Utilites/VideoPlayer';
import Navbar from '@/components/Navbar';
    const Page = async ({params : { id }}) => {
    const anime =await getAnimeResponse(`anime/${id}`)
    
return(
    <>
    <Navbar/>
    <div className="pt-4 px-4 ">
    <h3 className="text-2xl text-color-dark">{anime.data.title} - {anime.data.year}</h3>
    </div>

    <div className="pt-4 px-4 flex gap-2 text-color-dark overflow-x-auto">
       
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-accent p-2">
            
            <h3>Score</h3>
            <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-accent p-2">
            
            <h3>Popularity</h3>
            <p>{anime.data.popularity}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-accent p-2">
            
            <h3>Episodes</h3>
            <p>{anime.data.episodes}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-accent p-2">
            
            <h3>Status</h3>
            <p>{anime.data.status}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-accent p-2">
            
            <h3>Serial</h3>
            <p>{anime.data.type}</p>
        </div>
        
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-accent p-2">
            
            <h3>Duration</h3>
            <p>{anime.data.duration}</p>
        </div>
        
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-accent p-2">
            
            <h3>Season</h3>
            <p>{anime.data.season}</p>
        </div>
        

        
        
    </div>
    <div className="pt-4 px-4  flex sm:flex-nowrap flex-wrap gap-2 text-color-dark">
    <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="w-full rounded object-cover"
                />
                <p className="text-justify text-xl p-4">{anime.data.synopsis}</p>
                <div>
                    <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
                </div>

    </div>
    </>
)

}
export default Page