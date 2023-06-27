import styles from './Header.module.scss';
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { HEADER_MENU, ROUTES } from '../../../utils/constants';
import { useEffect, useRef } from 'react';

const Header = () => {
	const headerRef = useRef();

	// sticky
	document.addEventListener('scroll', () => {
		headerRef.current.classList.toggle(`${styles.sticky}`, window.scrollY > 100);
	});

	useEffect(() => {
		// active navbar links
		let sections = document.querySelectorAll('section');
		let navLinks = document.querySelectorAll('header nav a');

		document.addEventListener('scroll', () => {
			sections.forEach(section => {
				let top = window.scrollY;
				let sectionOffsetTop = section.offsetTop - 100;
				let sectionHeight = section.offsetHeight;
				let sectionId = section.getAttribute('id');

				if (top >= sectionOffsetTop && top < sectionOffsetTop + sectionHeight) {
					navLinks.forEach(link => {
						link.classList.remove(`${styles.active}`);
						document.querySelector(`header nav a[href*='${sectionId}']`).classList.add(`${styles.active}`);
					})
				}
			});
		});
		// END active navbar links
	}, []);


	return (
		<header ref={headerRef} id='header' className={styles.header}>
			<Link to={ROUTES.HOME} className={styles.logo}>Yankee.</Link>

			<BiMenu className={ styles.menu } />

			<nav className={styles.navbar}>
				{HEADER_MENU.map(({name, href}, index) => (
					<a key={ href } href={`#${href}`} className={`${index === 0 ? styles.active : ''}`}>{ name }</a>
				))}
			</nav>
		</header>
	);
};

export default Header;
