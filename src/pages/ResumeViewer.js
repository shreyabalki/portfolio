// ResumeViewer.js
const ResumeViewer = () => (
  <div style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0 }}>
    <iframe
      src="/Srimonchaari_Padmanabhan_Babu_Resume.pdf"
      title="Resume PDF"
      width="100%"
      height="100%"
      style={{ border: "none", display: "block" }}
    />
  </div>
);

export default ResumeViewer;
