import { client } from "..";
import { cache } from "react";
import { INews } from "@/common/types/news.type";


class News {


    get = cache(async () => {
        const news = await client.getBody<INews[]>('/new');
        return news;
    });
}

export const NewsServer = new News();