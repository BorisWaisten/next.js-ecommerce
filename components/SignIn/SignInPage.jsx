'use client';

import { signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SignInPage() {
    const { data: session } = useSession();
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/'; // Redirigir a la página principal si no hay callbackUrl

    useEffect(() => {
        if (session) {
            router.push(callbackUrl);
        }
    }, [session, router, callbackUrl]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-md rounded-lg p-8 w-80">
                <h1 className="text-2xl font-bold mb-4 text-gray-900 text-center">Sign In</h1>
                <button
                    onClick={() => signIn('google', { callbackUrl })}
                    className="bg-slate-900 text-white font-semibold py-2 px-4 rounded-md w-full"
                >
                    Sign in with Google
                </button>

                <p className="text-gray-500 mt-4 text-sm text-center">
                    By signing in, you agree to our 
                    <a href="#" className="text-slate-900 underline ml-1">Terms of Service</a> 
                    and 
                    <a href="#" className="text-slate-900 underline ml-1">Privacy Policy</a>.
                </p>
            </div>
        </div>
    );
}
