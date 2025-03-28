import React from 'react'
import Image from 'next/image'

const about = () => {
    return (
        <>
            {/* About Start */}
            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>About</h1>
                        <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 pb-4 pb-lg-0">
                            <Image
                                src="/img/profile.png"
                                width={400}
                                height={400}
                                alt="Profile Image"
                            />
                        </div>
                        <div className="col-lg-7">
                            <h3 className="mb-4">|| MERN Stack Enthusiast || Specializing in Modern Web Development Technologies ||</h3>
                            <p style={{ textAlign: "justify" }}>I am an enthusiastic MERN Stack Developer eager to secure a dynamic role where I can apply my expertise in web development.Possessing a robust foundation in MySQL, MongoDB, Express.js, Node.js, React.js, and Next.js, I am keen on contributing my skills to tackle challenging projects in the field.</p>
                            <div className="row mb-3">
                                <div className="col-sm-6 py-2"><h6>Name: <span className="text-secondary">Sumit Kumar</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Degree: <span className="text-secondary">MCA</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Phone: <span className="text-secondary">+91 6202179949</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Email: <span className="text-secondary">merncodeslearn@gmail.com</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Address: <span className="text-secondary">Gaurakshni Jehanabad,Bihar</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Freelance: <span className="text-secondary">Available</span></h6></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            
            {/* Education Start */}
            <div className="container-fluid pt-5" id="blog">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>Education</h1>
                        <h1 className="position-absolute text-uppercase text-primary">Education</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="position-relative mb-4">
                                <Image
                                    className="img-fluid"
                                    src="/img/gu.png"
                                    alt="gu"
                                    width={500}
                                    height={500}
                                />

                            </div>
                            <h5 className="font-weight-medium mb-4" style={{color:"#20c997"}}>
                                MASTER OF COMPUTER APPLICATIONS(MCA)
                            </h5>
                            <p className="text-gray-600 mt-2">2022-2024</p>
                            <p className="text-gray-700 font-medium" style={{color:"rgb(47, 191, 247)"}}>GALGOTIAS UNIVERSITY</p>
                            <p className="text-gray-500">GREATER NOIDA, U.P (203201)</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative mb-4">
                                <Image
                                    className="img-fluid"
                                    src="/img/sns.png"
                                    alt="sns"
                                    width={290}
                                    height={400}
                                />
                            </div>
                            <h5 className="font-weight-medium mb-4" style={{color:"#20c997"}}>
                                BACHELOR OF COMPUTER APPLICATIONS(BCA)
                            </h5>
                            <p className="text-gray-600 mt-2">2018-2021</p>
                            <p className="text-gray-700 font-medium" style={{color:"rgb(47, 191, 247)"}}>S.N.SINHA COLLEGE</p>
                            <p className="text-gray-500">JEHANABAD, BIHAR (804408)</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Education End */}
        </>
    )
}

export default about
export const metadata = {
    title: "About Me",
    description: "MERN Stack Enthusiast , Specializing in Modern Web Development Technologies, Sumit kumar jehanabad bihar 804408",
};
