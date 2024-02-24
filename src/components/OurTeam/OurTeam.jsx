/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const OurTeam = () => {
  return (
    <div>
      <section className="py-6">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <h1 className="mb-10 md:mx-32 mx-3 sm:mx-32 text-[#0056b8] text-center text-4xl font-bold">
            Meet Our Team
          </h1>

          <div className="md:grid md:grid-cols-3 flex flex-row flex-wrap justify-center mt-8">
            <div className="flex flex-col hover:-translate-y-6 duration-500 hover:shadow-2xl justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 hover:bg-white hover:text-gray-800 text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-28 h-28 -mt-12 bg-center bg-cover rounded-full bg-gray-500 object-cover"
                src="https://media.licdn.com/dms/image/D5635AQEA5osPJHI-ng/profile-framedphoto-shrink_400_400/0/1697957179883?e=1709416800&v=beta&t=aUJWJa0qFOxIghuMzWOJPb5ia-wBhpVyTcapMTuIp6Y"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Kamrul Zaman Nahid
                </p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-5 text-xl border-t-2">
                <a
                  href=" https://www.facebook.com/l"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href="https://github.com/l"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaGithub></FaGithub>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/lon/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaLinkedin></FaLinkedin>{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-col hover:-translate-y-6 duration-500 hover:shadow-2xl hover:bg-white hover:text-gray-800 justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-28 h-28 -mt-12 bg-center bg-cover rounded-full bg-gray-500 "
                src="https://media.licdn.com/dms/image/D5603AQHLktBb-ALKRQ/profile-displayphoto-shrink_400_400/0/1707654373016?e=1714003200&v=beta&t=VgfHRockABHF7_q_fAsA02FTtXYOFngM-xo52Z0JnBI"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Md Alamin A.
                </p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-5 text-xl border-t-2">
                <a
                  href="https://www.facebook.com/Alamin0x01/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href="https://github.com/Alamin0x01"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaGithub></FaGithub>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/mdalaminali"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaLinkedin></FaLinkedin>{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center hover:-translate-y-6 duration-500 hover:shadow-2xl hover:bg-white hover:text-gray-800 w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-28 h-28 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
                src="https://md.jpg?width=569&height=572"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Md. Jamal Hossen
                </p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-5 text-xl border-t-2">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaGithub></FaGithub>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaLinkedin></FaLinkedin>{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full hover:-translate-y-6 duration-500 hover:shadow-2xl hover:bg-white hover:text-gray-800 px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-28 h-28 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
                src="https://70.jpg"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">Robin</p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-5 text-xl border-t-2">
                <a
                  href="https://www.facebook.com/s"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href="https://www.linkedin.com/in/as"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaGithub></FaGithub>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/s/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaLinkedin></FaLinkedin>{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center hover:-translate-y-6 duration-500 hover:shadow-2xl hover:bg-white hover:text-gray-800 w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-28 h-28 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
                src="https://media.licdn.com/dms/image/D5635AQFXQHc07DTs0A/profile-framedphoto-shrink_800_800/0/1708607921274?e=1709416800&v=beta&t=51NdaraxkGiSbmYmZfExmiykn6DZG9xJkLFX1fkT1Qo"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Pujon Das Auvi
                </p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-5 text-xl border-t-2">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaGithub></FaGithub>
                </a>
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaLinkedin></FaLinkedin>{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-col hover:-translate-y-6 duration-500 hover:shadow-2xl hover:bg-white hover:text-gray-800 justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-28 h-28 -mt-12 bg-center bg-cover rounded-full bg-gray-500 object-cover"
                src="g?width=515&height=609"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Jihad Hossain
                </p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-5 text-xl border-t-2">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {""}
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaGithub></FaGithub>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaLinkedin></FaLinkedin>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
