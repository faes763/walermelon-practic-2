import { Sprite } from "@/common/ui/sprite";
import Link from "next/link";

const navLinks = [
    {
        sprite: "about",
        name: "О нас",
        href: "/about",
    },
    {
        sprite: "projects",
        name: "Проекты",
        href: "/projects",
    },
    {
        sprite: "feedback",
        name: "Пожертвовать",
        href: "/feedback",
    },
    {
        sprite: "news",
        name: "Новости",
        href: "/news",
    },
];

export const Menu = () => {
    return (
        <nav className="bg-orange z-50 sticky bottom-0 w-full left-0 py-3 px-4">
            <ul className=" grid grid-cols-4 gap-8">
                {navLinks.map((link,idx)=>(
                    <li key={link.href + idx + link.name}>
                        <Link className=" w-full h-full center flex-col gap-1" href={link.href}>
                            <Sprite 
                                name={link.sprite}
                                className="w-7 h-7"
                                isImage
                                pathSprite="icons/navigation"
                            />
                            <span className=" whitespace-nowrap text-white uppercase text-small font-semibold">{link.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
