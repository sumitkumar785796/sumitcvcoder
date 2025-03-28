"use client"; // Ensure it's a client component

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TypingEffect from "./components/typing/TypingEffect";
import CvModal from "./components/cvmodel/CvModel";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState([]); // State for skills data

  // Fetch skills from an API
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/api/skills"); // Replace with actual API
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  // Show 3 skills by default
  const displayedSkills = showAllSkills ? skills : skills.slice(0, 3);
  // show less word
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };
  return (
    <>
      {/* Header */}
      <div className="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
              <Image className="rounded-circle" src="/img/profile.png" width={400} height={400} alt="Profile Image" />
            </div>
            <div className="col-lg-7 text-center text-lg-left">
              <h3 className="text-white font-weight-normal mb-3">I&apos;m</h3>
              <h1 className="display-3 text-uppercase text-primary mb-2" style={{ WebkitTextStroke: "2px #ffffff" }}>
                Sumit Kumar
              </h1>
              <TypingEffect />
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <button className="btn btn-outline-light mr-5" onClick={() => setShowModal(true)}>
                  Preview CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CV Modal */}
      {showModal && <CvModal onClose={() => setShowModal(false)} />}

      {/* Skills */}
      <div className="container-fluid pt-5" id="service">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>
              Skills
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">My Skills</h1>
          </div>

          <div className="row pb-3">
            {loading
              ? Array(3)
                .fill(0)
                .map((_, index) => (
                  <div className="col-lg-4 col-md-6 text-center mb-5" key={index}>
                    <div className="d-flex align-items-center">
                      <Skeleton height={70} width={70} circle />
                      <h4 className="font-weight-bold m-0 ml-3">
                        <Skeleton width={100} />
                      </h4>
                    </div>
                    <p><Skeleton count={3} /></p>
                    <Skeleton width={100} />
                  </div>
                ))
              : displayedSkills.map((skill) => (
                <div className="col-lg-4 col-md-6 text-center mb-5" key={skill._id}>
                  <div className="d-flex align-items-center justify-content-center mb-4">
                    <Image
                      src={skill.file}
                      width={70}
                      height={70}
                      alt={skill.title}
                      style={{
                        borderRadius: "50%",
                        backgroundColor: "#000",
                        padding: "1px",
                        display: "block",
                        margin: "0 10px",
                      }}
                    />
                    <h4 className="font-weight-bold m-0">{skill.title}</h4>
                  </div>
                  <p>{truncateText(skill.desc, 20)}</p>
                  <Link className="border-bottom border-primary text-decoration-none" href={`/skills/${skill._id}`}>
                    Read More
                  </Link>
                </div>
              ))}
          </div>

          {/* Show More / Show Less Button */}
          {skills.length > 3 && (
            <div className="text-center">
              <button className="btn btn-primary" onClick={() => setShowAllSkills(!showAllSkills)}>
                {showAllSkills ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
