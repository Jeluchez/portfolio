import { Github } from '../icons/Github';
import { Linkedin } from '../icons/Linkedin';

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="text-sm py-16 mt-20 border-t-2 border-surface-0 dark:border-surface-0-dark bg-surface-3 dark:bg-surface-3-dark">
      <div className="max-w-lg mx-auto px-4 sm:px-6 xl:px-0 flex justify-between">
        <div className="contact flex flex-col space-y-2">
          <h3 className="text-2xl font-heading text-theme-heading">Get in touch</h3>
          <span className="text-purple">jeluchez@gmail.com</span>
          <ul className="text-theme-subtitle flex space-x-1">
            <li>
              <a href="https://github.com/Jeluchez" className="hover:text-theme-text">
                <Github width={24} height={24} className='dark:fill-gray-400'/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jeluchez/" rel="me">
                <Linkedin width={24} height={24} className='dark:fill-gray-400'/>
              </a>
            </li>
          </ul>
        </div>
        <span>
          <button className="tag px-4 py-2" data-feedback-fish="true">Got feedback?</button>
        </span>
      </div>
      <p className="text-center mt-4">
      Copyright © {year} jeluchez
      </p>
    </footer>
  );
};


