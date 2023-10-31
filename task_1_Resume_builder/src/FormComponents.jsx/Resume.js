// Resume.js
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { BiMap } from "react-icons/bi";

function Resume({ personalInfo, skills, workExperience, educationInfo }) {
  const pdfRef = useRef();
  
  const options = {
    orientation: 'portrait', // or 'landscape'
    unit: 'mm',
    format: 'a4',
  };

  const handleGeneratePDF = () => {
    const refpdf = pdfRef.current;

    html2canvas(refpdf).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF(options);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    })
  };
  return (
    <>
    <div ref={pdfRef} class="w-3/5 h-fit m-2 pt-2 pl-2 pb-2 border-2 rounded">
        <div class="bg-slate-100">
            <h1 class="font-serif font-bold text-center text-4xl ">{personalInfo.name}</h1>
            <div class="text-center">
              <h3 class="font-semibold text-2xl">{personalInfo.profession}</h3>
              <p>Email: {personalInfo.email}</p>
              <p class="justify-center"><span className="icon">
                <BiMap size='18px' color='green' />
              </span> {personalInfo.city}</p>
              <hr class="p-1 mb-1 shadow-sm bg-slate-700" />
            </div>
        </div>
        
        <div>
          <h3 class="headers-list">Skills</h3>
          <p class="list-content">
          { skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
          </p>
        </div>
        <hr class="p-1 bg-slate-100 mb-1 mt-1" />
        <div>
        <h3 class="headers-list">Work Experience</h3>
        {workExperience.map((experience, index) => (
          <div key={index}>
            <p class="font-semibold">Company: {experience.company}</p>
            <p>Position: {experience.position}</p>
            <p class="font-sans text-base italic" >{experience.startDate}  -  <span> {experience.endDate}</span></p>
            <p class="list-content">Roles: {experience.roles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}</p>
            <hr class="p-1 bg-slate-100 mb-1 mt-1" />
          </div>
        ))}
        </div>

        <div>
        <h3 class="headers-list">Education</h3>
        {educationInfo.map((education, index) => (
          <div class="p-2" key={index}>
            <p class="font-semibold">Degree: {education.degree}</p>
            <p>School: {education.school}</p>
            <p class="font-sans text-base italic" >{education.startDate} to <span> {education.endDate}</span></p>
            <p>Location: {education.location}</p>
            <p class="list-content">Description: {education.description.map((desc, index) => (
              <li key={index}>
              {desc}
              </li>
            ))}</p>
            <hr />
          </div>
        ))}
        </div>
    </div>
    <button class="btn-primary w-auto" onClick={handleGeneratePDF}>Download PDF</button>
    </>

  );
}

export default Resume;