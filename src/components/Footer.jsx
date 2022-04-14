import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#001730] w-full h-96 mt-[-8rem] z-0 grid place-items-center">
      <div className="text-center">
        <ul className="text-white flex space-x-10 mt-28">
          <li>Home</li>
          <li>About</li>
          <li>Preformer</li>
          <li>Event Shedule</li>
        </ul>
        <div className="text-white space-x-10 mt-5 text-3xl pb-5">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-solid fa-envelope"></i>
          <i class="fa-brands fa-instagram-square"></i>
        </div>
        <span className="text-gray-500">Copyright &copy; @Jakareya</span> 
      </div>
    </div>
  );
};

export default Footer;
