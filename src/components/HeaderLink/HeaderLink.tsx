import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

// Define the props type for HeaderLink
interface HeaderLinkProps {
  href: string;
  children: ReactNode;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, children }) => {
  return <Link to={href}>{children}</Link>;
};

export default HeaderLink;
