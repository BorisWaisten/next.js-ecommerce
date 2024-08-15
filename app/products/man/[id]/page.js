'use client'
import ProductPage from "@/components/Product/ProductPage"
import { usePathname } from "next/navigation"
export default function PageProduct() {
    const pathname = usePathname()
    
    const category = pathname.split("/")[2].charAt(0).toUpperCase() + pathname.split("/")[2].slice(1);
    const id = pathname.split("/")[3];
    
    return (
        <ProductPage category={category} id={id}/>
    )
}