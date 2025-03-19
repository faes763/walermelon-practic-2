import { ProjectsServer } from "@/common/core-axios/projects/server";
import { Feedback } from "@/page/feedback";


const FeedbackPage: React.FC = async () => {
    const projects = await ProjectsServer.get();
    return (
        <Feedback projects={projects}/>
    );
};

export default FeedbackPage;