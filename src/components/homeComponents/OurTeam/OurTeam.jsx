import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function OurTeam() {
  return (
    <div className="w-full">
      <p className="text-center mt-[8%] lg:text-5xl md:text-5xl text-3xl font-normal lg:w-full md:w-full w-[80%] mx-auto"><span className="text-[#4CB9E7]">Meet</span> Our <span className="text-[#4CB9E7]">Team</span> Members</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-5 my-[8%] lg:mx-[10%]">
        {Members.map((member, indx) => (
          <div
            key={indx}
            className="relative lg:w-[400px] md:w-[400px] w-[300px] mx-auto shadow-md rounded-xl"
          >
            <div className="group">
              <Image
                src={member.image}
                alt={member.name}
                width={600}
                height={300}
                className="rounded-t-xl w-full transition-opacity duration-300 ease-in-out group-hover:opacity-75 lg:h-[400px] md:h-[400px] h-[350px] object-cover"
              />
              <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white rounded-t-xl transition-all duration-500 h-[400px]">
                <div className="text-center p-4">
                  <div className="text-2xl font-bold mb-2">
                    {member.designation}
                  </div>
                  <div className="text-lg text-gray-300 mb-4">
                    {member.name}
                  </div>
                  <div className="flex justify-center mt-4 space-x-4">
                    <a href="#" className="text-white">
                      <FaFacebook className="text-xl" />
                    </a>
                    <a href="#" className="text-white">
                      <FaTwitter className="text-xl" />
                    </a>
                    <a href="#" className="text-white">
                      <FaLinkedin className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" p-5">
              <p className="text-xl font-medium">{member.name}</p>
              <p className="text-sm text-gray-600 mt-4">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;

const Members = [
  {
    id: 3,
    name: "Nahid Ahmmed",
    designation: "Front-End Developer",
    bio: "Experienced front-end developer with expertise in React.js and responsive web design.",
    image: "https://i.ibb.co/dr8Z3Z3/Img2.jpg",
  },
  {
    id: 4,
    name: "MD. Robin",
    designation: "Front-End Developer",
    bio: "Passionate about creating intuitive user experiences with a focus on performance optimization.",
    image: "https://i.ibb.co/TtyV92c/profile.jpg",
  },
  {
    id: 5,
    name: "Jihad Hosain",
    designation: "Back-End Developer",
    bio: "Backend developer skilled in Node.js, Express.js, and MongoDB for building scalable APIs.",
    image: "https://i.ibb.co/FnfTKzv/icon-Jihad.png",
  },
];
