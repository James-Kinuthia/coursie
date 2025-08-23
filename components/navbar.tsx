"use client";
import Image from 'next/image'
import Link from 'next/link'
import NavItems from './nav-items'
import { SignInButton } from '@clerk/nextjs'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { Button } from './ui/button'


const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavItems />
                <SignedOut>
                    <SignInButton>
                        <Button className='btn-signin'>Sign In</Button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton afterSignOutUrl='/' />
                </SignedIn>

            </div>
        </nav>
    )
}

export default Navbar