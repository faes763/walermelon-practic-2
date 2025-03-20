'use client'
import { useSubmitting } from "@/common/hooks/use-sumbittting";
import Image from "next/image";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useFormik } from "formik";
import { OutDivInput, OutInput } from "@/common/ui/inputs/out-input";
import { RadioGroup, RadioGroupItem } from "@/common/ui/shadcn/radio-group";
import { ProjectsClient } from "@/common/core-axios/projects/client";
import { toast } from "sonner";

const Schema = z.object({
    sum: z.number(),
    pay_status: z.string(),
    user_name: z.string(),
    comment: z.string().optional(),
    link_status: z.string().optional(),
    link_field: z.string().optional(),
});
export const Form: React.FC<{id: string}> = ({ id }) => {

    const formik = useFormik({
        initialValues: {
            sum: "",
            pay_status: "",
            user_name: "",
            comment: "",
            link_status: "",
            link_field: "",
        },
        validationSchema: toFormikValidationSchema(Schema),
        onSubmit: (values) => {
            const body = {
                ...values,
                sum: String(values.sum),
            }

            console.log(body);
        
            ProjectsClient.formId(body, id);

            toast("Вы успешно пожертвовали! Спасибо!", {
                duration: 4000,
                position: "bottom-center",
            })
        },
    });

    console.log(formik.errors);
    
    return (
        <div className="px-7 pt-6 pb-24 relative overflow-hidden min-h-screen">
            <Image
                src={'/icons/solid/heart.svg'}
                alt=""
                width={600}
                height={600}
                className=" absolute pointer-events-none left-24 top-[40%] min-w-[140vw] min-h-[120vw]"
            />
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
            <h1 className=" mt-20 uppercase text-[#332F2E] font-extrabold text-4xl">Чтобы внести свой вклад, заполните форму</h1>

            <form className=" mt-14 bg-white/25 backdrop-blur space-y-7 py-10 px-6 rounded-[3.75rem] border border-[#A59390]" onSubmit={formik.handleSubmit}>
                <OutDivInput 
                    label={(
                        <p className=" text-2xl mb-1 font-semibold text-[#332F2E]">Cумма пожертвования</p>
                    )} 
                    type="number"
                    formik={formik} 
                    id="sum" 
                    className="w-full placeholder:text-sm" 
                    placeholder="Введите сумму пожертвования"
                />

                <div>
                    <p className=" text-2xl mb-1 font-semibold text-[#332F2E]">Выбор способа платежа</p>
                    <RadioGroup className="flex text-sm gap-6 mt-2" onValueChange={(e)=>formik.setFieldValue("pay_status", e == "yes1" ? "разовый" : "ежемесячный")} defaultValue="">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem className="w-7 h-7 rounded-lg" value="yes1" id="yes1" />
                            <label htmlFor="yes1">Разовый</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem className="w-7 h-7 rounded-lg" value="no1" id="no1" />
                            <label htmlFor="no1">Ежемесячный</label>
                        </div>
                    </RadioGroup>
                    <div className=" flex gap-10 items-center">

                    </div>
                </div>

                <OutDivInput 
                    label={(
                        <p className=" text-2xl mb-1 font-semibold text-[#332F2E]">Ваше ФИО </p>
                    )} 
                    formik={formik} 
                    id="user_name" 
                    className="w-full placeholder:text-sm" 
                    placeholder="Введите ФИО"
                />
                <OutDivInput 
                    label={(
                        <p className=" text-2xl mb-1 font-semibold text-[#332F2E]">Комментарий <span className=" font-normal text-base">(по желанию)</span></p>
                    )} 
                    formik={formik} 
                    id="comment" 
                    className="w-full placeholder:text-sm" 
                    placeholder="Введите комментарий"
                />
                <OutDivInput 
                    label={(
                        <p className=" text-2xl mb-1 font-semibold text-[#332F2E]">Ваш номер <span className=" font-normal text-base">(по желанию)</span></p>
                    )} 
                    formik={formik} 
                    type="number"
                    id="num" 
                    className="w-full placeholder:text-sm" 
                    placeholder="+7 "
                />
                <div>
                    <p className=" text-2xl mb-1 font-semibold text-[#332F2E]">Я хочу получать персональное фото с благодарностью в соц. сетях</p>
                    <RadioGroup className="flex text-sm gap-6 mt-2" onValueChange={(e)=>formik.setFieldValue("link_status", e == "yes" ? "да" : "нет")} defaultValue="">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem className="w-7 h-7 rounded-lg" value="yes" id="yes" />
                            <label htmlFor="yes">Да</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem className="w-7 h-7 rounded-lg" value="no" id="no" />
                            <label htmlFor="no">Нет</label>
                        </div>
                    </RadioGroup>
                    <div className=" flex gap-10 items-center">

                    </div>
                </div>

                <OutDivInput 
                    label={(
                        <p className=" text-2xl mb-1 font-semibold text-[#332F2E]">Если выше Вы выбрали “Да”, то оставьте ссылки на соц. сети</p>
                    )} 
                    formik={formik} 
                    id="link_field" 
                    className="w-full placeholder:text-sm" 
                    placeholder="Введите ссылку"
                />

                <button className="mt-6 w-full  rounded-xl py-3 px-9 font-semibold bg-black text-white">ОТПРАВИТЬ</button>
            </form>
            </div>
        </div>
    );
};


