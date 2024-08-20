'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import SignInBtn from "../SignIn/SignInBtn";

export default function NavBar() {
    const router = useRouter();
    return (
        <div className="bg-gray-800">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Image
                                width={32}
                                height={32}
                                onClick={() => router.push("/")}
                                className="h-8 w-8"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                alt="Workflow logo"
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <SignInBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
