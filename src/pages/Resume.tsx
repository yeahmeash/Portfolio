import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Chitkara  University</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Bachleors in Information technology
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • Sept 2020 - July 2024
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Software Developer</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Kreativan Technologies - Chandigarh, India{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• July 2024 - Sep 2025</code>
            <br />
            <code className="text-sm">
              <br />• Developed and optimized REST APIs for smoother integration between frontend and backend.
              <br />• Worked with Java, Spring Boot, and databases to improve system performance.
                      
              <br />• Collaborated with the team to debug and resolve production issues quickly.
              <br />• Enhanced user experience by fixing bugs and improving UI/UX consistency. 
              <br />• Participated in requirement analysis and provided input for scalable design.
              <br />• Implemented charts and data grids to display large datasets clearly.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
    <br />• Java, Spring Boot, Hibernate
    <br />• REST API design and integration
    <br />• React.js, JavaScript (ES6+)
    <br />• Charting & grid libraries (Recharts, AG Grid, Highcharts)
    <br />• SQL & NoSQL Databases (MySQL, MongoDB)
    <br />• Git, GitHub, and version control
    <br />• Problem-solving & debugging complex issues
    <br />• Agile & collaborative teamwork
  </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
