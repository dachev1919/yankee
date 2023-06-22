import styles from './Header.module.scss';
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { HEADER_MENU, ROUTES } from '../../../utils/constants';
import { useState } from 'react';

const Header = () => {
	const [activeLink, setActiveLink] = useState('hero');

	return (
		<header className={styles.header}>
			<Link to={ROUTES.HOME} className={styles.logo}>Yankee.</Link>

			<BiMenu className={ styles.menu } />

			<nav className={styles.navbar}>
				{HEADER_MENU.map(({name, href}) => (
					<a key={ href } href={`#${href}`} className={`${activeLink === href ? styles.active : ''}`} onClick={() => setActiveLink(href)}>{ name }</a>
				))}
			</nav>
		</header>
	);
};

export default Header;
