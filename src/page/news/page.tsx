import { INews } from "@/common/types/news.type";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/common/ui/shadcn/drawer";
import { formatDate } from "@/common/utils/format-date";
import Image from "next/image";



export const News: React.FC<{news: INews[]}> = ({ news = []}) => {
    return (
        <div className="px-7 pt-6 pb-24 relative overflow-hidden min-h-screen">
            <div className=" flex justify-end">
                <Image
                    src={'/logo.svg'}
                    alt=""
                    width={192}
                    height={48}
                    className=" w-32 h-9"
                />
            </div>
            <h1 className=" mt-20 uppercase text-orange font-extrabold text-4xl">Новости</h1>
            <p className=" text-xl font-light mt-4">самое интересное только у нас!</p>

            <div className=" relative">
                <div className=" relative z-10 space-y-4 mt-16">
                    {news.map((news,idx)=>(
                        <NewsCard 
                            {...news} 
                            key={news.name + idx}
                        />
                    ))}
                </div>
                <Image
                    src={'/icons/solid/heart.svg'}
                    alt=""
                    width={600}
                    height={600}
                    className=" absolute pointer-events-none left-24 bottom-10 min-w-[140vw] min-h-[120vw]"
                />
            </div>

        </div>
    );
};



export const NewsCard: React.FC<INews> = (news) => {

    const { name, description, created_at } = news;

    return (
        <div className="px-6 py-5 border border-[#332F2E] bg-white/25 backdrop-blur rounded-[2.25rem]">
            <p className="text-3xl line-clamp-2 text-ellipsis overflow-hidden font-semibold">{name}</p>
            <p className=" text-xs text-[#A59390]">{formatDate(created_at)}</p>
            <p className=" line-clamp-3 text-ellipsis overflow-hidden mt-3">{description}</p>
            <Drawer direction="bottom">
                <DrawerTrigger asChild>
                    <button className="mt-6 rounded-xl py-3 px-9 bg-black text-white">Подробнее</button>
                </DrawerTrigger>
                <DrawerContent className=" px-6 min-h-[40%] max-h-[60%]">
                    <DrawerTitle className="text-3xl font-semibold">{name}</DrawerTitle>
                    <p className=" text-xs text-[#A59390]">{formatDate(created_at)}</p>
                    <p className=" mt-3">{description}</p>
                </DrawerContent>
            </Drawer>
        </div>
    );
};
