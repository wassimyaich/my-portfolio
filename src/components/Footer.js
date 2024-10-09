import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <div>
        <a href="https://github.com/your-username" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/your-username" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        {/* Add more icons as needed */}
      </div>
    </footer>
  );
};

export default Footer;
