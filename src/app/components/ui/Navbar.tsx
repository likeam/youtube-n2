import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./Button";

const Navbar = async () => {
  const session = await getServerSession();

  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-center items-center">
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          Text Similarity
        </Link>
        <div className="md:hidden">
            <ThemeToggle />
        </div>
        <div className="hidden md:flex gap-4">
            <ThemeToggle />
            <Link href="/documentaion" className={buttonVariants({ variants: "ghost" })}>
            Documentation
        </Link>
        { session ? (
            <>
                <Link href='/dashboard' className={buttonVariants({ variants: "ghost" })}>
                    Dashboard
                </Link>
                <SingnOutButton />
            </>
        ) : <signInButton /> }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
