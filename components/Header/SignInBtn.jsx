"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInBtn() {
    const { status } = useSession();

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
                onClick={() => signIn("google")}
                className="bg-slate-900 text-white px-6 py-2 rounded-md"
                >
                Sign In
                </button>
            )}
        </div>
    );
}