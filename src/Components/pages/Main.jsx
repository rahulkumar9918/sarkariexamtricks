import React from "react";
import Result from "./result/Result";
import AdmitCard from "./admit-card/AdmitCard";
import LatestJobs from "./latest-jobs/LatestJobs";
import AnswerKey from "./answerKey/AnswerKey";
import Syllabus from "./syllabus/Syllabus";
import Admission from "./Admission";
import CertificateVerification from "./CertificateVerification";
import Important from "./Important";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://watermark.lovepik.com/photo/20211201/large/lovepik-educational-learning-picture_501364635.jpg')`, // Replace with your desired image or GIF URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-gray-800">
        {/* Welcome Section */}
        <div className="text-center font-semibold pt-6 text-lg sm:text-xl">
          <p className="text-white pt-3">
            Welcome to No. 1 Sarkari Exam Portal Sarkari Exam Tricks 2025
          </p>
        </div>

        {/* Marquee Section */}
        <div className="text-center font-semibold text-lg sm:text-xl px-4 sm:px-10 mt-4">
          <div className="relative overflow-hidden">
            <div className="animate-marquee-left whitespace-nowrap">
              <p className="pt-1 inline-block space-x-4">
                <Link
                  to="/ctet-result"
                  className="text-white border-b-2 border-transparent hover:border-white transition duration-300"
                >
                  CTET Result July 2024
                </Link>
                <Link
                  to="/ipr-res-mts"
                  className="text-white border-b-2 border-transparent hover:border-white transition duration-300"
                >
                  IPR RES MTS Online Form 2024
                </Link>
                <Link
                  to="/mp-cpct"
                  className="text-white border-b-2 border-transparent hover:border-white transition duration-300"
                >
                  MP CPCT Online Form 2024
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Grid Section for Result, Admit Card, and Latest Jobs */}
        <div className="container mx-auto p-4">
          <h2 className="text-center text-white text-3xl font-bold mb-6">
            Important Sections
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Result />
            <AdmitCard />
            <LatestJobs />
          </div>
        </div>

        {/* Grid Section for Other Components */}
        <div className="container mx-auto p-4">
          <h2 className="text-center text-white text-3xl font-bold mb-6">
            Other Sections
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnswerKey />
            <Syllabus />
            <Admission />
            <CertificateVerification />
            <Important />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Main;
