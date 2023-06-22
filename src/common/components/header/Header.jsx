import styles from '../../styles/Header.module.scss';
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants';

const Header = () => {
	return (
		<header className={styles.header}>
			<Link to={ROUTES.HOME} className={styles.logo}>Yankee.</Link>

			<BiMenu className={ styles.menu } />

			<nav className={styles.navbar}>
				<Link className={styles.active} to={{ pathname: ROUTES.HOME, hash: 'home' }}>Home</Link>
				<Link to={{ pathname: ROUTES.HOME, hash: 'about' }}>About</Link>
				<Link to={{ pathname: ROUTES.HOME, hash: 'education' }}>Education</Link>
				<Link to={{ pathname: ROUTES.HOME, hash: 'skills' }}>Skills</Link>
				<Link to={{ pathname: ROUTES.HOME, hash: 'contact' }}>Contact</Link>
			</nav>
		</header>
	);
};

export default Header;
