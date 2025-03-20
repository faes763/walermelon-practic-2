export interface IProject {
    id: number;
    name: string;
    description: string;
    image: string;
    current_amount: string;
    target_amount: string;
}

export interface IForm {
    sum: string;
    pay_status: string
    user_name: string
    comment: string
    link_status: string
    link_field: string;
}