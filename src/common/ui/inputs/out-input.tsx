'use client'

import { cn } from "@/common/utils";
import { InputHTMLAttributes, useState } from "react";
import { Sprite, IconProps } from "../sprite";

export interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
    formik: any;
    id: string;
}

export const OutInput: React.FC<InputFormProps> = (props) => {
    const { className, id, formik, ...rest } = props;
    return (
        <input
            {...rest}
            className={cn(
                "px-3 py-4 text-[#332F2E] placeholder:text-muted bg-surface2 rounded-[1.25rem] border border-soft/15", 
                className
            )}
            id={id}
            name={id}
            defaultValue={props.defaultValue}
            type={props.type || "text"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[id]}
        />
    );
}

export interface InputDivProps extends InputFormProps {
    divclasses?: string;
    sprite?: IconProps;
    label?: React.ReactNode;
    actionbutton?: React.ReactNode;
}

export const OutDivInput: React.FC<InputDivProps> = (props) => {
    const { divclasses, className, label, sprite, actionbutton, ...rest } = props;

    // Локальное состояние для управления типом
    const [inputType, setInputType] = useState(rest.type || "text");

    const handleChangeType = () => {
        setInputType((prev) => (prev === "password" ? "text" : "password"));
    }

    return (
        <div 
            className={cn(
                rest.type === "date" && "relative",
                divclasses,
            )}
        >
            {label}
            <AsDiv sprite={sprite}>
                {rest.type === "color" ? (
                    <label htmlFor={rest.id} className="flex gap-2 relative px-3 py-4 text-white bg-surface2 rounded-[1.25rem] border border-soft/15">
                        <OutInput
                            {...rest}
                            className={cn("opacity-0 w-0 h-0 p-0 absolute top-16", className)}
                            type={inputType}
                        />
                    <div
                        className="w-5 rounded-full h-5"
                        style={{
                            backgroundColor: `${rest.formik?.values[rest.id]}`,
                        }}
                    />
                        {rest.formik?.values[rest.id]}
                    </label>
                ) : (
                <OutInput
                    {...rest}
                    className={cn(sprite && "pl-11", className)}
                    type={inputType} // Передаем состояние как тип
                />
                )}
                

                {rest.type === "password" && (
                    <Sprite
                        onClick={handleChangeType}
                        name="eye"
                        isImage
                        pathSprite="icons/fill"
                        className={cn("absolute cursor-pointer top-1/2 w-6 h-6 select-none -translate-y-1/2 right-3")}
                    />
                )}
                {actionbutton}
            </AsDiv>
        </div>
    );
}

const AsDiv: React.FC<{
    sprite?: IconProps;
    children: React.ReactNode;
}> = ({ sprite, children }) => {
    return sprite ? (
        <div className="relative">
            <Sprite
                {...sprite}
                className={cn("absolute top-1/2 pointer-events-none select-none -translate-y-1/2 left-3", sprite.className)}
            />
            {children}
        </div>
    ) : children;
}
