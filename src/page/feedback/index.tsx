'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Sprite } from "@/common/ui/sprite";
import { IProject } from "@/common/types/project.type";
import { Card } from "../projects/page";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export const Feedback: React.FC<{projects: IProject[]}> = ({ projects = [] }) => {
    return (
        <div className=" px-7 pb-24 relative overflow-hidden min-h-screen ">
            <div className=" flex justify-end">
                <Image
                    src={'/logo.svg'}
                    alt=""
                    width={192}
                    height={48}
                    className=" w-32 h-9"
                />
            </div>
            <h1 className=" mt-20 uppercase text-orange font-extrabold text-4xl">Сборы средств</h1>
            <div>
            <Swiper spaceBetween={28} navigation={true} modules={[Navigation]} className="mySwiper mt-14 ">
                {projects.map((e,idx)=>(
                    <SwiperSlide 
                        key={e.name+idx}
                        className=""
                    >
                        <Card {...e}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    );
};
