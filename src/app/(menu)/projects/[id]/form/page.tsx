import { Form } from "@/page/projects/page/page";


const FormPage: React.FC<{params: Promise<{id: string}>}> = async ({ params }) => {
    const { id } = await params;

    return (
        <Form id={id}/>
    );
};

export default FormPage
