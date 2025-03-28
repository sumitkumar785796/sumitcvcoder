"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
const Page = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("/api/project"); // Replace with actual API
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    // Pagination Logic
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    // show less word
    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };
    return (
        <div>
            <div className="container-fluid pt-5" id="blog">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>Project</h1>
                        <h1 className="position-absolute text-uppercase text-primary">My Project</h1>
                    </div>
                    <div className="row">
                        {loading ? (
                            Array.from({ length: projectsPerPage }).map((_, index) => (
                                <div className="col-lg-4 mb-5" key={index}>
                                    <Skeleton height={200} className="mb-2" />
                                    <Skeleton width={150} />
                                    <Skeleton width={200} className="mb-2" />
                                    <Skeleton width={200} className="mb-2" />
                                    <Skeleton width={100} height={30} />
                                </div>
                            ))
                        ) : (
                            currentProjects.map((item, index) => (
                                <div className="col-lg-4 mb-5" key={index}>
                                    <div className="position-relative mb-4">
                                        <Image
                                            className="img-fluid rounded w-100"
                                            src={item.file}
                                            width={200}
                                            height={200}
                                            alt={item.title}
                                        />
                                    </div>
                                    <h4 className="font-weight-bold m-0">{item.title}</h4>
                                    <h5 className="font-weight-medium mb-4" style={{textAlign:"justify"}}>{truncateText(item.desc,20)}</h5>
                                    <Link className="btn btn-sm btn-outline-primary py-2" href={`/project/${item._id}`}>Read More</Link>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Pagination */}
                    <nav>
                        <ul className="pagination justify-content-center">
                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
                            </li>
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                                    <button className="page-link" onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Page;
