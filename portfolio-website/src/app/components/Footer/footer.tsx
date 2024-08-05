import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md pt-10 md:pt-0">
      <div className="container mx-auto text-center flex flex-col items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/ajay-logo.png" 
            alt="Ajay's Logo"
            className="md:w-32 md:h-32"
            width={70}
            height={70}
          />
        </Link>
        
        {/* Text */}
        <p className="mt-4 mb-8 text-lg">
          © 2024 Ajay Bharanidhar. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 mb-4">
          {/* LinkedIn */}
          <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.icon}
            >
              <path d="M16 8a6 6 0 1 0-12 0 6 6 0 0 0 12 0Zm-3 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm5 0h2v12h-2V8Zm-4 0h2v12h-2V8Zm-4 0h2v12H9V8Z" />
            </svg>
          </Link>

          {/* GitHub */}
          <Link href="https://github.com/ajayb14" target="_blank" aria-label="GitHub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.icon}
            >
              <path d="M12 2a10 10 0 0 0-10 10c0 4.418 2.86 8.165 6.787 9.486.5.092.682-.217.682-.482 0-.238-.008-.869-.013-1.708-2.769.601-3.354-1.332-3.354-1.332-.453-1.152-1.107-1.459-1.107-1.459-.905-.617.068-.606.068-.606 1.003.071 1.64 1.034 1.64 1.034.892 1.529 2.342 1.088 2.916.832.092-.646.349-1.088.636-1.338-2.228-.252-4.571-1.114-4.571-4.95 0-1.091.39-1.985 1.034-2.684-.104-.252-.448-1.269.097-2.645 0 0 .84-.27 2.75 1.025a9.485 9.485 0 0 1 2.5-.335c.85.004 1.702.114 2.5.335 1.91-1.295 2.75-1.025 2.75-1.025.547 1.376.202 2.393.098 2.645.644.698 1.034 1.593 1.034 2.684 0 3.844-2.347 4.692-4.581 4.941.359.31.682.925.682 1.86 0 1.338-.011 2.433-.013 2.759 0 .267.185.578.688.698.489.26.68.507.852.82.895.414.04.828.024 1.247-.035C19.14 20.164 22 16.418 22 12a10 10 0 0 0-10-10Z" />
            </svg>
          </Link>

          {/* Email */}
          <Link href="mailto:ajayb14@outlook.com" aria-label="Email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.icon}
            >
              <path d="M22 12l-10-9-10 9 10 9 10-9Zm-10 7v-6m0 0v-6m0 6L4 12" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


