import { ProjectsServer } from "@/common/core-axios/projects/server";
import { Projects } from "@/page/projects";


const ProjectsPage: React.FC = async () => {
    const projects = await ProjectsServer.get();
    return (
        <Projects projects={projects}/>
    );
};

export default ProjectsPage;