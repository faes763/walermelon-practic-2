import { NewsServer } from "@/common/core-axios/news/server";
import { News } from "@/page/news/page";
import { Projects } from "@/page/projects";


const NewsPage: React.FC = async () => {
    const news = await NewsServer.get();
    return (
        <News news={news}/>
    );
};

export default NewsPage;