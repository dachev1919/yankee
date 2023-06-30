import styles from './Header.module.scss';
import { BiMenu, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { HEADER_MENU, ROUTES } from '../../../utils/constants';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
	const headerRef = useRef(null);
	const [menuOpen, setMenuOpen] = useState(false);

	// sticky
	document.addEventListener('scroll', () => {
		headerRef.current.classList.toggle(`${styles.sticky}`, window.scrollY > 100);
	});

	return (
		<header ref={headerRef} id='header' className={styles.header}>
			<Link to={ROUTES.HOME} className={styles.logo}>Dachev.<span className='animatedSpan' style={{ '--i': '1'}}></span></Link>

			<div className={ styles.menu } onClick={() => {
				setMenuOpen(!menuOpen);
			}}>
				{ menuOpen ? <BiX /> : <BiMenu /> }
				<span className='animatedSpan' style={{ '--i': '2'}}></span>
			</div>

			<nav className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}>
				{HEADER_MENU.map(({name, href}, index) => (
					<a key={ href } href={`#${href}`} className={`${index === 0 ? styles.active : ''}`} onClick={() => setMenuOpen(false)}>{ name }</a>
				))}
				<span className={styles['active-nav']}></span>
				<span className='animatedSpan' style={{ '--i': '2'}}></span>
			</nav>
		</header>
	);
};

export default Header;
