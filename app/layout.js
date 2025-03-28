import Footer from "./components/navbar/Footer";
import Navbar from "./components/navbar/Navbar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../public/css/style.css";
import "../public/css/button.css";
import "../public/css/google.css";
export const metadata = {
  title: "Sumit Kumar",
  description: "facebook:https://www.facebook.com/sumit785796,linkedin:https://www.linkedin.com/in/sumit785796/,sumit kumar jehanabad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/img/favicon.png" />

        {/* Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />

        {/* Libraries Stylesheets */}
        {/* <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" /> */}
        {/* <link href="/lib/lightbox/css/lightbox.min.css" rel="stylesheet" /> */}
      </head>
      <body data-spy="scroll" data-target=".navbar" data-offset="51">
        <Navbar />
        {children}
        <Footer />
        {/* JavaScript Libraries */}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" strategy="beforeInteractive" />
        <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/lib/typed/typed.min.js" strategy="lazyOnload" />
        <Script src="/lib/easing/easing.min.js" strategy="lazyOnload" />
        <Script src="/lib/waypoints/waypoints.min.js" strategy="lazyOnload" />
        <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/lib/isotope/isotope.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/lib/lightbox/js/lightbox.min.js" strategy="lazyOnload" />

        {/* Contact Form Scripts */}
        <Script src="/mail/jqBootstrapValidation.min.js" strategy="lazyOnload" />
        <Script src="/mail/contact.js" strategy="lazyOnload" />

        {/* Custom Main JavaScript */}
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
