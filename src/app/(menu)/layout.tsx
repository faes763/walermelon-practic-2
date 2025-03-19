import { Menu } from "@/components/menu";

function MenuLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <Menu />        
        </>
    );
}
export default MenuLayout;