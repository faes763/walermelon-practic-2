import Image from "next/image";
import { cn } from "../utils";

export type IconProps = {
    name: string;
    className: string;
    onClick?: () => void;
    isImage?: boolean;
    style?: React.CSSProperties;
    isPng?: boolean;

    pathSprite?: string;
};

export const Sprite:React.FC<IconProps> =({
    name,
    className,
    onClick,
    isImage,
    style, 
    isPng,
    pathSprite,
}) => {
    if (isImage) {
        return (
            <>
            <Image
                fetchPriority="high"
                priority
                src={`/${pathSprite ?? "icons"}/${name}.${isPng ? "png" : "svg"}`}
                alt=""
                width={256}
                height={256}
                className={cn(typeof onClick == "function" && "cursor-pointer", className)}
                onClick={onClick}
                style={style}
            />
            {/* <link rel="preload" fetchPriority="high" as="image" href={`/${pathSprite ?? "icons"}/${name}.${isPng ? "png" : "svg"}`}/> */}
            </>
        );
    }

    return (
        <svg onClick={onClick} className={className} style={style}>
            <use xlinkHref={`/sprite.svg#${name}`} />
        </svg>
    );
}
