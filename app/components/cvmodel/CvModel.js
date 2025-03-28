"use client";

import { useEffect } from "react";
import Link from "next/link";

const CvModal = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling when modal closes
    };
  }, []);

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">CV Preview</h5>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>
          <div className="modal-body">
            <iframe src="/img/cv.pdf" width="100%" height="500px" style={{ border: "none" }} />
          </div>
          <div className="modal-footer">
            {/* Open in New Tab */}
            <Link href="/img/cv.pdf" target="_blank" className="btn btn-primary">
              Open in New Tab
            </Link>
            {/* Download CV */}
            <Link href="/img/cv.pdf" download className="btn btn-success">
              Download CV
            </Link>
            <button className="btn btn-danger" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvModal;
