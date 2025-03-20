import { client } from "..";
import { cache } from "react";
import { IForm, IProject } from "@/common/types/project.type";


class Projects {

    formId = async(body: IForm, id: string | number) => {


        const form = await client.postBody<IProject>(`/form`, {body: {...body}});

        return form;
    }
}

export const ProjectsClient = new Projects();