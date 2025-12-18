import { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@shared/ui/header';

import styles from './Layout.module.scss';

const Layout: FC = () => {
   return (
      <div className={styles.wrapper}>
         <Header />
         <main className={styles.content}>
            <Outlet />
         </main>
      </div>
   )
}

export default Layout;