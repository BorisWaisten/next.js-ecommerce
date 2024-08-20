"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";

export default function SignInBtn() {
    const { status } = useSession();
    const router = useRouter();
    const pathname = usePathname(); // Obtener la URL actual

    const handleSignIn = () => {
        router.push(`/signin?callbackUrl=${encodeURIComponent(pathname)}`);
    };

    return (
        <div>
            {status === "authenticated" ? (
                <button
                    onClick={() => signOut()}
                    className="bg-slate-900 text-white px-6 py-2 rounded-md"
                >
                    Sign Out
                </button>
            ) : (
                <button
                    onClick={handleSignIn}
                    className="bg-slate-900 text-white px-6 py-2 rounded-md"
                >
                    Sign In
                </button>
            )}
        </div>
    );
}
