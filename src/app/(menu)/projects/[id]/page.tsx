import { ProjectsServer } from "@/common/core-axios/projects/server";
import { Project } from "@/page/projects/page";


const ProjectsPage: React.FC<{params: Promise<{id: string}>}> = async ({ params }) => {
    const { id } = await params;
    const project = await ProjectsServer.getId(id);

    return (
        <Project project={project}/>
    );
};

export default ProjectsPage;