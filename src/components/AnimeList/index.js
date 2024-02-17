import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {api.data.map((anime) => {
                return (
                  <Link href={`${anime.mal_id}`} className="text-color-primary cursor-pointer transition-all">
                
                
                <Image src={anime.images.webp.image_url} width={350} height={350}alt="image"className="w-full max-h-64 object-cover" />
                <h3 className="font-bold md:text-xl text-md p-4 text-color-primary">{anime.title}</h3>
              </Link>
                )
            })}
        </div>
    )
}

export default AnimeList