import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>

            {/* Footer Start */}
            <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
                <div className="container text-center py-5">

                    <div className="wrapper">
                        <Link href="https://www.facebook.com/sumit785796" target='_blank' className="button">
                            <div className="icon">
                                <i className="fab fa-facebook-f"></i>
                            </div>
                            <span>Facebook</span>
                        </Link>
                        <Link href="https://x.com/sumitku00198192" target='_blank' className="button">
                            <div className="icon">
                                <i className="fab fa-twitter"></i>
                            </div>
                            <span>Twitter</span>
                        </Link>
                        <Link href="https://www.instagram.com/sumit785796/" target='_blank' className="button">
                            <div className="icon">
                                <i className="fab fa-instagram"></i>
                            </div>
                            <span>Instagram</span>
                        </Link>
                        <Link href="https://github.com/sumitkumar785796" target='_blank' className="button">
                            <div className="icon">
                                <i className="fab fa-github"></i>
                            </div>
                            <span>Github</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/sumit785796/" target='_blank' className="button">
                            <div className="icon">
                                <i className="fab fa-linkedin"></i>
                            </div>
                            <span>LinkedIn</span>
                        </Link>
                    </div>
                    <br />
                    <Link href="/contact">Contact Me</Link>
                    <p className="m-0">© 2025. All Rights Reserved. Designed & Developed by <span className="text-white font-weight-bold">Sumit Kumar</span>
                    </p>
                </div>
            </div>
            {/* Footer End */}
        </>
    )
}

export default Footer