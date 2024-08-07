import { Button, buttonVariants } from "@/components/ui/button"
import { LoginLink, RegisterLink, } from "@kinde-oss/kinde-auth-nextjs/server"
import Link from "next/link"
import { ShoppingCart } from 'lucide-react';


interface navArray {
    label: string,
    href: string
}

const navArray: navArray[] = [
    {
        label: "Female",
        href: "/Female"
    },
    {
        label: "Male",
        href: "/Male"
    },
    {
        label: "Products",
        href: "/Products"
    },
    {
        label: "Kids",
        href: "/Kids"
    },
    
]

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href={"/"} className="cursor-pointer flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Logo</span>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    {navArray.map((item, index) => (
                        <Link key={index} href={item.href} className="cursor-pointer mr-5 hover:text-gray-900">{item.label}</Link>
                    ))}
                </nav>
                <div className="space-x-4 flex items-center">
                  
                    <Link href={"/cart"}><ShoppingCart size={18} /></Link>

                        <LoginLink className={buttonVariants({
                            variant: "outline",
                            size: "sm",
                        })}>Sign in</LoginLink>

                        <RegisterLink
                            className={buttonVariants({
                                variant: "secondary",
                                size: "sm",
                            })}
                        >Sign up</RegisterLink>
                </div>
            </div>
        </header>
    )
}

export default Navbar