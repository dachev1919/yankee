import styles from './Footer.module.scss';
import { BiUpArrowAlt } from 'react-icons/bi';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.text}>
				<p>Copyright &copy; 2023 by Dachev | All Rights Reserved.</p>
			</div>
			<div className={styles.icon}>
				<a rel='noreferrer' href='#hero'>
					<BiUpArrowAlt />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
