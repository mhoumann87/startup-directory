import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from '@/auth';

const NavBar = async () => {
    const session = await auth();

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-centered">
                <Link href="/">
                    <Image src="/st-dir.png" alt="logo" width={144} height={53} />
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                    <>
                        <Link href="/startup/create">Create</Link>

                        <form action={async () =>{
                            "use server";

                            await signOut({redirectTo: '/'});
                        }}>
                            <button type='submit'>
                                Log Out
                            </button>
                        </form>

                        <Link href="`/user/${session?.id`">
                            <span>{session?.user?.name}</span>
                        </Link>
                    </> ) :
                        (
                            <form action={async () => {
                                "use server";

                                await signIn('github');
                            } }>
                                <button type="submit">Log In</button>
                            </form>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}

export default NavBar;