import { type FC } from 'react';
import { menuItems } from './contsants/menuItems';

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';


export const Header: FC = () => {
   return (
      <header className={styles.header}>
         <h1>Duck Tinder</h1>
         <ul className={styles.menuList}>
            {menuItems.map((item) => 
               <li key={item.id} className={styles.menuItem}>
                  <Link to={item.path} className={styles.menuItemLink}>
                     {item.label}
                  </Link>
               </li>
            )}
         </ul>
      </header>
   )
}