"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkillDetails() {
  const { id } = useParams(); // Get `id` from the URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(`/api/project/${id}`);
        if (!response.ok) throw new Error("Failed to fetch project details");
        const data = await response.json();
        setProject(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container-fluid py-5" id="about">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>
            ProjectDetails
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">My Project Details</h1>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 pb-4 pb-lg-0">
            {loading ? (
              <Skeleton height={300} width={400} />
            ) : (
              <Image className="img-fluid rounded" src={project.file} width={400} height={400} alt={project.title} layout="responsive" />
            )}
          </div>
          <div className="col-lg-7">
            <h3 className="mb-4">{loading ? <Skeleton width={200} /> : project.title}</h3>
            <p>{loading ? <Skeleton count={3} /> : project.desc}</p>
            {loading ? (
              <Skeleton width={120} height={40} />
            ) : (
              <Link href={project.url} target="_blank" className="btn btn-outline-primary">
                View Project
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
