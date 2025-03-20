import { IProject } from "@/common/types/project.type";
import { cn } from "@/common/utils";
import Image from "next/image";
import Link from "next/link";



export const Project: React.FC<{project: IProject}> = ({ project }) => {
    return (
        <div className="px-7 pt-6 pb-24 relative overflow-hidden min-h-screen">
            <div className=" relative z-10">
            <div className=" flex justify-end">
                <Image
                    src={'/logo.svg'}
                    alt=""
                    width={192}
                    height={48}
                    className=" w-32 h-9"
                />
            </div>
            <h1 className=" mt-20 uppercase text-orange font-extrabold text-4xl">Сборы средств</h1>
            <div className=" mt-14">
                <Card {...project}/>
            </div>
            </div>

            <Image
                src={'/icons/solid/heart.svg'}
                alt=""
                width={600}
                height={600}
                className=" absolute pointer-events-none left-24 top-[40%] min-w-[140vw] min-h-[120vw]"
            />
        </div>
    );
};




export const Card: React.FC<IProject> = (project) => {
    return (
        <div className=" p-8 border border-[#332F2E] backdrop-blur rounded-[3.75rem]">
            <Image
                src={project.image}
                alt=""
                width={300}
                height={300}
                className="w-full rounded-[3.75rem] h-80"
            />
            <p className="mt-7 text-3xl font-semibold">{project.name}</p>
            <p className="mt-1 line-clamp-3 text-ellipsis overflow-hidden text-[#524A49]">{project.description}</p>
            <div className=" mt-6">
                <div className=" w-4/5 mx-auto h-3 relative rounded-full bg-[#332F2E]">
                    <div 
                         style={{width: `${100 * (Number(project.current_amount) / (Number(project.target_amount) == 0 ? 1 : Number(project.target_amount)))}%`}} 
                        className={cn(" bg-orange   h-full rounded-full",(Number(project.current_amount) / (Number(project.target_amount)) > 0 &&  "min-w-[7%]"))}
                    />
                </div>
                <div className=" mt-0.5 text-xs flex justify-between items-center">
                    <p>{project.current_amount}</p>
                    <p>{project.target_amount}</p>
                </div>
            </div>
            <div className="mt-6">
                <Link href={`/projects/${project.id}/form`} className=" w-full block text-center rounded-xl py-3 px-9 bg-black text-white">Пожертвовать</Link>
            </div>
        </div>
    );
};
