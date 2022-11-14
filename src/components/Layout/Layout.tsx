import { FC } from 'react';

import MainHeader from './MainHeader';

import { ILayout } from '../../interfaces';

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
