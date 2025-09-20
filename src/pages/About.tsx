import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";
import List from "../components/List";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const SpringBootLogo = require("../assets/logos/SpringBootLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const NextLogo = require("../assets/logos/NextLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const KafkaLogo = require("../assets/logos/KafkaLogo.png");
const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const GoogleCloudLogo = require("../assets/logos/GoogleCloudLogo.png");
const AWSLogo = require("../assets/logos/AWSLogo.png");
const DockerLogo = require("../assets/logos/DockerLogo.png");

const skills = [
  { name: "JavaScript (ES6+)", logo: JsLogo },
  { name: "Next.js", logo: NextLogo },
  { name: "React", logo: ReactLogo },
  { name: "SpringBoot", logo: SpringBootLogo },
  { name: "Tailwind CSS", logo: TailwindLogo },
  { name: "Kafka", logo: KafkaLogo },
  { name: "Python", logo: PythonLogo },
  { name: "Firebase", logo: FirebaseLogo },
  { name: "AWS", logo: AWSLogo },
  { name: "SQL", logo: SqlLogo },
  { name: "GoogleCloud", logo: GoogleCloudLogo },
  { name: "Docker", logo: DockerLogo },
];

const About = () => {
  return (
    <div
      id="About"
      className="flex mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
           I am a developer focused on backend systems using Spring Boot and Java, transitioning from Flutter,Android
            to building robust, scalable applications. My work often involves integrating APIs, managing
             databases, and delivering maintainable code. I have a strong interest in cloud platforms,
             including AWS, Google Cloud, and Azure, for deploying and scaling solutions. In my free time,
              I study ethical hacking to strengthen my understanding of security and system resilience.
          </code>
          <br />
          <br />
          <code>"Code is never just instructions; 
            it’s a conversation with the future, written to be understood, improved, and built upon.</code>
          <List list={skills} />
        </div>
      </div>
    </div>
  );
};

export default About;
