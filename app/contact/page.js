"use client";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = new FormData();
        form.append("name", formData.name);
        form.append("email", formData.email);
        form.append("subject", formData.subject);
        form.append("message", formData.message);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: form,
            });

            const data = await res.json();
            toast.success(data.message || "Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" }); // Clear the form
        } catch (error) {
            toast.error("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="container-fluid py-5" id="contact">
                <div className="container">
                    {/* Section Title */}
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>Contact</h1>
                        <h1 className="position-absolute text-uppercase text-primary">Contact Me</h1>
                    </div>

                    {/* Contact Form */}
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form text-center p-4" style={{
                                border: "1px solid #dee2e6",
                                borderRadius: "10px",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "#fff"
                            }}>
                                <form name="sentMessage" id="contactForm" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-sm-6 mb-3">
                                            <input type="text" className="form-control p-3 border rounded" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                                        </div>
                                        <div className="col-sm-6 mb-3">
                                            <input type="email" className="form-control p-3 border rounded" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control p-3 border rounded" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control py-3 px-4 border rounded" rows={5} name="message" placeholder="Message" required value={formData.message} onChange={handleChange} />
                                    </div>
                                    <div>
                                        <button
                                            className={`btn  p-3 ${loading ? "btn-light" : "btn-primary"}`}
                                            type="submit"
                                            disabled={loading}
                                            style={{ borderRadius: "50px", fontSize: "16px", fontWeight: "bold" }}
                                        >
                                            {loading ? <Image src="/img/sending.gif" width={100} height={100} alt="Sending..." /> : "Send Message"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Google Map Embed */}
                    <br />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3266.7275943096292!2d84.98747007491339!3d25.208222831254936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDEyJzI5LjYiTiA4NMKwNTknMjQuMiJF!5e1!3m2!1sen!2sin!4v1743086272934!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </>
    );
};

export default Page;
