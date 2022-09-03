import {  AiOutlineGithub,AiFillStar,AiFillLinkedin } from 'react-icons/ai';
import { BiGitRepoForked} from 'react-icons/bi';

function Footer() {
  return (
    <>
      <footer className="flex w-full">
        <a
        className="flex items-center justify-center text-gray-500 hover:text-gray-700 text-sm font-bold py-2 px-3 md:px-4 rounded-full"
          href="https://github.com/Yourstruggle11/WeatherReady"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub /> <span>GitHub</span>
        </a>
        <a
                className="flex items-center justify-center text-gray-500 hover:text-gray-700 text-sm font-bold py-2 px-3 md:px-4 rounded-full"
          href="https://github.com/Yourstruggle11/WeatherReady/fork"
          target="_blank"
          rel="noreferrer"
        >
          <BiGitRepoForked /> <span>Fork</span>
        </a>
        <a
                className="flex items-center justify-center text-gray-500 hover:text-gray-700 text-sm font-bold py-2 px-3 md:px-4 rounded-full"
          href="https://github.com/Yourstruggle11/WeatherReady"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillStar /> <span>Star</span>
        </a>
        <a
                className="flex items-center justify-center text-gray-500 hover:text-gray-700 text-sm font-bold py-2 px-3 md:px-4 rounded-full"
          href="https://www.linkedin.com/in/souviksen11"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin /> <span>LinkedIn</span>
        </a>
      </footer>
    </>
  );
}

export default Footer;
