import aboutImg from "/About.jpeg";

const About = () => {
  return (
    <div id="about" className="bg-white shadow-md rounded-2xl border-b border-gray-200 p-6">

      <div className="flex flex-col md:flex-row items-center gap-6">

        {/* Text  */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">About Us</h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            We specialize in building modern web applications with clean design,
            high performance, and scalable architecture.
            <br />
            Our portfolio highlights a wide range of projects that demonstrate our technical expertise and ability to deliver reliable, user-focused digital solutions.
          </p>
        </div>

        {/* Image  */}
        <div className="md:w-1/2 flex justify-center">
          <img src={aboutImg} alt="An image of a laptop"
            className="w-100 h-100 object-cover rounded-full shadow-lg"
          />
        </div>

      </div>
    </div>
  );
}

export default About;