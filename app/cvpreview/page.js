const CvPreview = () => {
    return (
        <div style={{ width: "100%", height: "90vh" }}>
            <iframe 
                src="/img/cv.pdf"
                width="100%" 
                height="100%" 
                style={{ border: "none" }}
            />
        </div>
    );
};

export default CvPreview;
