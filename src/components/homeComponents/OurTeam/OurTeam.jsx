import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function OurTeam() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-5">
      {Members.map((member, indx) => (
        <div key={indx} className="relative w-[400px] mx-auto">
          <div className="group">
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={300}
              className="rounded-xl transition-opacity duration-300 ease-in-out group-hover:opacity-75"
            />
            <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white rounded-xl transition-all duration-500 h-[400px]">
              <div className="text-center p-4">
                <div className="text-2xl font-bold mb-2">{member.designation}</div>
                <div className="text-lg text-gray-300 mb-4">{member.name}</div>
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
          <p>{member.name}</p>
          <p className="text-sm text-gray-600 mt-4">{member.bio}</p>
        </div>
      ))}
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
    image: "https://i.ibb.co/2gW4Cv2/2148859448.jpg",
  },
  {
    id: 4,
    name: "Robin Hosain",
    designation: "Front-End Developer",
    bio: "Passionate about creating intuitive user experiences with a focus on performance optimization.",
    image: "https://i.ibb.co/qRbv48f/2148029483.jpg",
  },
  {
    id: 5,
    name: "Jihad hoosain",
    designation: "Back-End Developer",
    bio: "Backend developer skilled in Node.js, Express.js, and MongoDB for building scalable APIs.",
    image: "https://i.ibb.co/WKGrmX9/255.jpg",
  },
];
