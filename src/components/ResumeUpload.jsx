import { useState } from "react";
import { Eyebrow, Icon } from "./ui.jsx";

const pipeline = [["file", "Resume analyzed", "Ready in 4s"], ["check", "Skills matched", "Deep taxonomy"], ["briefcase", "Experience matched", "Contextual seniority"], ["search", "1,000+ sources searched", "Real-time aggregators"]];

export default function ResumeUpload() {
  const [fileName, setFileName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  function handleFile(file) {
    if (!file) return;
    setFileName(/\.(pdf|doc|docx)$/i.test(file.name) && file.size <= 10 * 1024 * 1024 ? file.name : "Choose a PDF, DOC or DOCX file up to 10MB.");
  }
  return <section className="resume" id="resume"><div className="wrap resume__inner"><header className="resume__head reveal"><Eyebrow>TRY IT LIVE <small>v2.4 AI Engine</small></Eyebrow><h2 className="h-lg">Upload your resume.<br/>Find jobs that fit.</h2><p className="lead">Upload once. CampusPe reads your skills, experience, and preferences — then finds relevant jobs across 1,000+ sources.</p></header><div className={`drop-wrap reveal ${isDragging ? "is-over" : ""}`} onDragOver={(event) => { event.preventDefault(); setIsDragging(true); }} onDragLeave={() => setIsDragging(false)} onDrop={(event) => { event.preventDefault(); setIsDragging(false); handleFile(event.dataTransfer.files[0]); }}><div className="drop"><Icon name="upload"/><h3>Upload your resume</h3><p>PDF, DOC, or DOCX · Up to 10MB · We'll use it to understand your skills and experience.</p><label className="btn btn--upload">Choose resume<input type="file" accept=".pdf,.doc,.docx" hidden onChange={(event) => handleFile(event.target.files[0])}/></label><small>{fileName || "or drag and drop your file here"}</small></div></div><ul className="pipeline">{pipeline.map(([icon, title, note]) => <li key={title}><Icon name={icon}/><span><b>{title}</b><small>{note}</small></span></li>)}</ul></div></section>;
}
