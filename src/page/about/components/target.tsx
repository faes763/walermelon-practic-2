'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Sprite } from "@/common/ui/sprite";


const data = [
    {
        name: "Сбор Средств",
        desc: "Привлечение финансовых ресурсов для реализации программ и проектов, направленных на помощь детям.",
    },
    {
        name: "Сбор Средств",
        desc: "Привлечение финансовых ресурсов для реализации программ и проектов, направленных на помощь детям.",
    },
    {
        name: "Сбор Средств",
        desc: "Привлечение финансовых ресурсов для реализации программ и проектов, направленных на помощь детям.",
    }
]

export const Target = () => {


    return (
        <div className=" mt-24 relative min-h-[80vh]">
            <h3 className=" uppercase text-orange font-extrabold text-4xl">Цели нашего фонда</h3>
            <p className=" text-xl font-light mt-4">Помощь детям - это важно</p>

            <Swiper spaceBetween={28} navigation={true} modules={[Navigation]} className="mySwiper h-[28rem] mt-14 ">
                {data.map((e,idx)=>(
                    <SwiperSlide 
                        key={e.name+idx}
                        className=" border border-[#332F2E] bg-white/25 backdrop-blur px-6 py-10 rounded-[3.75rem]"
                    >
                        <div className=" flex justify-between">
                            <p className="text-4xl font-semibold">0{idx + 1}</p>
                            <Sprite
                                name="wallet"
                                className="w-10 h-10"
                                isImage
                                pathSprite="icons/solid"
                            />
                        </div>
                        <div className=" mt-32">
                            <p className="text-3xl font-semibold">{e.name}</p>
                            <p className=" mt-5">{e.desc}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Image
                src={'/icons/solid/heart.svg'}
                alt=""
                width={600}
                height={600}
                className=" absolute pointer-events-none right-10 -bottom-10 min-w-[150vw] min-h-[120vw]"
            />
            <Image
                src={'/icons/solid/heart.svg'}
                alt=""
                width={600}
                height={600}
                className=" absolute pointer-events-none right-0 -bottom-24 w-24 h-24"
            />
        </div>
    );
};
