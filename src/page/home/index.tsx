import { Sprite } from "@/common/ui/sprite";
import Image from "next/image";
import Link from "next/link";

export function HomePage() {
  return (
    <div className="flex relative flex-col justify-between h-screen pb-7 pt-20 px-5">
      <div className=" text-right">
        <h1 className=" text-orange font-extrabold text-4xl uppercase">
          Пункт<br/> милосердия
        </h1>
        <p className="text-xl mt-4 font-light">платформа для благотворительной помощи детям </p>
      </div>
      <div className="space-y-7 ">
        <div className=" flex justify-end">
          <Link href={'/about'}>
            <Sprite
              name="arrow"
              className="w-20 h-20"
              isImage
              pathSprite="icons/fill"
            />
          </Link>
        </div>
        <div className=" items-center flex justify-between">
          <Image
            src={'/logo.svg'}
            alt=""
            width={192}
            height={48}
            className=" w-32 h-9"
          />
          <a className="  px-3 gap-2 text-xs text-white font-medium h-14 rounded-xl bg-orange center">
            <Sprite
              name="android"
              className="w-10 h-10"
              isImage
              pathSprite="icons/solid"
            />
            Скачать<br/> приложение 
          </a>
        </div>
      </div>
      <Image
        src={'/icons/solid/heart.svg'}
        alt=""
        width={600}
        height={600}
        className=" absolute pointer-events-none right-1/2 bottom-0 w-[200%] h-[120vw]"
      />
    </div>
  );
}
