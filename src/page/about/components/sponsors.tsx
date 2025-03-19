import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export const Sponsors = () => {
    return (
        <div className=" mt-24 relative min-h-[80vh]">
            <div className="relative z-10">
                <h3 className=" uppercase text-orange font-extrabold text-4xl">Наши спонсоры</h3>
                <p className=" text-xl font-light mt-4">которым мы благодарны за помощь</p>


                <div className=" mt-14  space-y-4">
                    {Array.from({ length: 4 }).map((e,idx)=>(
                        <div key={"sponsor" + idx} className="grid rounded-[2.25rem] grid-cols-3 gap-3 px-5 py-6 bg-white/25 backdrop-blur border border-[#332F2E]">
                            <Image
                                src={'/logo.svg'}
                                alt=""
                                width={192}
                                height={48}
                                className=" w-32 h-9"
                            />
                            <Image
                                src={'/logo.svg'}
                                alt=""
                                width={192}
                                height={48}
                                className=" w-32 h-9"
                            />
                            <Image
                                src={'/logo.svg'}
                                alt=""
                                width={192}
                                height={48}
                                className=" w-32 h-9"
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            <Image
                src={'/icons/solid/heart.svg'}
                alt=""
                width={600}
                height={600}
                className=" absolute pointer-events-none left-1/2 -translate-x-1/2 top-24 min-w-[140vw] min-h-[120vw]"
            />
        </div>
    );
};
