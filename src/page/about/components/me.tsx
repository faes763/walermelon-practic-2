'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


const data = [
    '/images/about/image.png',
    '/images/about/image.png',
    '/images/about/image.png',
]

export const Me = () => {


    return (
        <div className=" relative min-h-[80vh]">
            <h3 className=" uppercase text-orange font-extrabold text-4xl">Знакомство</h3>
            <p className=" text-xl font-light mt-4">с нашим фондом</p>

            <Swiper spaceBetween={28} navigation={true} modules={[Navigation]} className="mySwiper h-[28rem] mt-14 ">
                {data.map((e,idx)=>(
                    <SwiperSlide 
                        key={e+idx}
                        className=" border border-[#332F2E] bg-white/25 backdrop-blur p-8 rounded-[3.75rem]"
                    >
                        <Image
                            src={'/images/about/image.png'}
                            alt=""
                            width={400}
                            height={500}
                            className=" rounded-[2.25rem] h-full"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className=" mt-2.5 border text-center rounded-full border-[#A59390] px-2.5 py-1">
                <p className=" font-medium">Андросенков Константин</p>
                <p className="text-[#A59390]">директор</p>
            </div>
            <Image
                src={'/icons/solid/heart.svg'}
                alt=""
                width={600}
                height={600}
                className=" absolute pointer-events-none right-24 bottom-10 min-w-[140vw] min-h-[120vw]"
            />
        </div>
    );
};
