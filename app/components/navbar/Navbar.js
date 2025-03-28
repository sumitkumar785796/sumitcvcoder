"use client"; // Ensure this is a Client Component

import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation"; // Use this instead of useRouter

const Navbar = () => {
    const pathname = usePathname(); // Get the current route

    return (
        <>
            {/* Navbar Start */}
            <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
                <Link href="/" className="navbar-brand ml-lg-3">
                    <h4 className="m-0 display-7">
                        <span className="text-primary" >꧁𓊈𒆜🆂𒆜𓊉꧂</span>
                    </h4>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
                    <div className="navbar-nav m-auto py-0">
                        <Link className={`nav-item nav-link ${pathname === "/" ? "active" : ""}`} href="/">Home</Link>
                        <Link className={`nav-item nav-link ${pathname === "/about" ? "active" : ""}`} href="/about">About Me</Link>
                        <Link className={`nav-item nav-link ${pathname === "/project" ? "active" : ""}`} href="/project">Project</Link>
                        {/* <Link className={`nav-item nav-link ${pathname === "/contact" ? "active" : ""}`} href="/contact">Contact Me</Link> */}
                    </div>
                    <Link href="/contact" className="btn btn-outline-primary d-none d-lg-block">Contact Me</Link>
                </div>
            </nav>
            {/* Navbar End */}
        </>
    )
}
export default Navbar
// Lazy load the Navbar
// export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
