import { client } from "..";
import { cache } from "react";
import { IProject } from "@/common/types/project.type";


class Projects {


    get = cache(async () => {
        const projects = await client.getBody<IProject[]>('/project');
        return projects;
    });

    getId = cache(async (id: string | number) => {
        const project = await client.getBody<IProject>(`/project/${id}`);
        return project;
    });
}

export const ProjectsServer = new Projects();