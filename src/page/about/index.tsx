import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Me } from "./components/me";
import { Target } from "./components/target";
import { Sponsors } from "./components/sponsors";


export const About = () => {
    return (
        <div className=" px-7 pb-24 relative overflow-hidden min-h-screen ">
            <div className="py-64 center">
                <Image
                    src={'/logo.svg'}
                    alt=""
                    width={192}
                    height={48}
                    className=" w-80 h-24"
                />
            </div>

            <Me />
            <Target />
            <Sponsors />
        </div>
    );
};
