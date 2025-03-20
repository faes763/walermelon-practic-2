import { IProject } from "@/common/types/project.type";
import Image from "next/image";
import Link from "next/link";



export const Projects: React.FC<{projects: IProject[]}> = ({ projects = [] }) => {
    return (
        <div className="px-7 pt-6 pb-24 relative overflow-hidden min-h-screen">
            <div className=" flex justify-end">
                <Image
                    src={'/logo.svg'}
                    alt=""
                    width={192}
                    height={48}
                    className=" w-32 h-9"
                />
            </div>
            <h1 className=" mt-20 uppercase text-orange font-extrabold text-4xl">Проекты</h1>
            <p className=" text-xl font-light mt-4">на которые собираются средства</p>

            <div className=" relative">
                <div className=" relative z-10 space-y-4 mt-16">
                    {projects.map((project,idx)=>(
                        <Project 
                            {...project} 
                            key={project.name + idx}
                        />
                    ))}
                </div>
                <Image
                    src={'/icons/solid/heart.svg'}
                    alt=""
                    width={600}
                    height={600}
                    className=" absolute pointer-events-none left-24 bottom-10 min-w-[140vw] min-h-[120vw]"
                />
            </div>

                
            

        </div>
    );
};




const Project: React.FC<IProject> = (project) => {

    const { name, description,  } = project;

    return (
        <div className="px-6 py-5 border border-[#332F2E] bg-white/25 backdrop-blur rounded-[2.25rem]">
            <p className="text-3xl font-semibold">{name}</p>
            <p className=" mt-3">{description}</p>
            <div className=" mt-6">
                <div className=" w-4/5 mx-auto h-3 relative rounded-full bg-[#332F2E]">
                    <div 
                        style={{width: `${Number(project.target_amount) / Number(project.current_amount) == 0 ? 1 : Number(project.current_amount)}%`}} 
                        className=" bg-orange  h-full rounded-full"
                    />
                </div>
                <div className=" mt-0.5 text-xs flex justify-between items-center">
                    <p>{project.current_amount}</p>
                    <p>{project.target_amount}</p>
                </div>
            </div>
            <div className="mt-6">
                <Link href={`/projects/${project.id}`} className=" inline-block rounded-xl py-3 px-9 bg-black text-white">Подробнее</Link>
            </div>
        </div>
    );
};
