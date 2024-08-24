import { ReactNode } from 'react';
import './globals.scss';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head>
        <title>Client Blog</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
