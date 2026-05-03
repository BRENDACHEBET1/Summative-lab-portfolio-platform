import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

 const Contact = () =>{
  return (
    <div id="contact" className="flex flex-col items-center mt-10 text-center space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Contact Us:</h1>
      
      <div className="flex gap-6">
        {/* GitHub */}
        <FaGithub className="w-8 h-8 text-gray-800 hover:text-black transition-colors cursor-pointer" />

        {/* LinkedIn */}
        <FaLinkedin className="w-8 h-8 text-blue-600 hover:text-blue-800 transition-colors cursor-pointer" />

        {/* Twitter */}
        <FaTwitter className="w-8 h-8 text-sky-500 hover:text-sky-700 transition-colors cursor-pointer" />

        {/* Email */}
        <FaEnvelope className="w-8 h-8 text-red-500 hover:text-red-700 transition-colors cursor-pointer" />
      </div>
    </div>
  );
}

export default Contact