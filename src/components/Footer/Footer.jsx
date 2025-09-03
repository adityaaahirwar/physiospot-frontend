import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com/@PhysioSpot",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://github.com/physiospott",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/physiospott/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/physiospott/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  { path: "/home", display: "Home" },
  // Remove or add only if these routes exist
  // { path: "/about", display: "About Us" },
  // { path: "/blog", display: "Blog" },
  { path: "/services", display: "Services" },
];

const quickLinks02 = [
  { path: "/privacy-policy", display: "Privacy Policy" },
  { path: "/terms-and-conditions", display: "Terms & Conditions" },
  { path: "/refund-policy", display: "Refund Policy" },
  { path: "/terms-of-service", display: "Terms of Service" },
];

const quickLinks03 = [
  { path: "/contact", display: "Contact Us" },
  { path: "/faq", display: "FAQs" },
  { path: "/support", display: "Support" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-10 bg-gray-50 border-t border-gray-200">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          {/* Logo & Socials */}
          <div>
            <img src={logo} alt="PhysioSpot Logo" className="w-[150px]" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              &copy; {year} PhysioSpot. All rights reserved.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[36px] h-[36px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-[#0067FF] hover:border-[#0067FF]"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] text-headingColor mb-6">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    className="text-[16px] leading-7 font-[400] text-textColor hover:text-[#0067FF]"
                    to={item.path}
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] text-headingColor mb-6">
              Learn More
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    className="text-[16px] leading-7 font-[400] text-textColor hover:text-[#0067FF]"
                    to={item.path}
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] text-headingColor mb-6">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    className="text-[16px] leading-7 font-[400] text-textColor hover:text-[#0067FF]"
                    to={item.path}
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
