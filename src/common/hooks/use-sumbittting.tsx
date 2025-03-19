import { useEffect } from "react";
import { toast } from "sonner";



export const useSubmitting: React.FC<{formik: any}> = ({ formik }) => {
    useEffect(()=>{
        if(formik.isSubmitting) {
            Object.entries(formik.errors).forEach(([key,value],i) => {
                if (value) {
                    setTimeout(()=>{
                        toast.error("Error validation", {
                            description: key + ": " + value,
                            position: "top-center",
                            duration: 10000
                        });
                    }, 1000 * (i));
                }
            });
        }
    },[formik.isSubmitting]);

    return null;
};
