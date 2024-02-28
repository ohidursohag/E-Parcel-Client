import { BsFillSendFill } from "react-icons/bs";
const ContactForm = () => {
  const handeleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="md:w-3/5 max-w-[600px] mx-auto">
      <form className="space-y-5 " onSubmit={(e) => handeleSubmit(e)}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          className=" py-4 focus:shadow-md w-full mt-1  bg-white px-4 text-sm outline-none"
        />
        <input
          type="phone"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          className=" py-4 focus:shadow-md w-full mt-1  bg-white px-4 text-sm outline-none"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          className=" py-4 focus:shadow-md w-full mt-1  bg-white px-4 text-sm outline-none"
        />
        <textarea
          name="message"
          id="message"
          className="w-full h-[100px] p-3 focus:shadow-md outline-none"
          placeholder="Message Here"></textarea>
        <button className="text-xl mx-auto  w-max px-5 py-3 bg-orange-500 text-white relative overflow-hidden group z-10 rounded-lg shadow-md flex items-center gap-2">
          <span className="absolute -z-[1] bg-orange-200 rotate-12 -inset-12 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
          <span className="absolute -z-[1] bg-gray-500  rotate-12 -inset-12 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
          <span className="absolute -z-[1] bg-orange-500 rotate-12 -inset-12 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
          Send Message <BsFillSendFill />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
