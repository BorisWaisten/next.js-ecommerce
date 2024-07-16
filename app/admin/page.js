import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const AdminPage = () => {
    const { data: session, status } = useSession();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (session) {
            const adminEmail = process.env.NEXT_PUBLIC_EMAIL_ADMIN;
            if (session.user.email === adminEmail) {
                setIsAdmin(true);
            }
        }
    }, [session]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!session) {
        return (
            <div>
                <h1>Access Denied</h1>
                <button onClick={() => signIn()}>Sign in</button>
            </div>
        );
    }

    if (!isAdmin) {
        return (
            <div>
                <h1>Access Denied</h1>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <nav>
                <ul>
                    <li><Link href="/admin/addProduct">Add Product</Link></li>
                </ul>
            </nav>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    );
};

export default AdminPage;
