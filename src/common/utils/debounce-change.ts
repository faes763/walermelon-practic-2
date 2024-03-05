import debounce from "debounce";

export const debounceUpdate = (value:any,setValue:any,duration?:number) => debounce(() => {
    setValue(value);
},duration ? duration : 200)();