import styles from './Hero.module.scss';
import { BiLogoGithub, BiLogoInstagramAlt, BiLogoTelegram } from 'react-icons/bi';
import heroImage from '../../../../common/assets/images/home.jpg';

const Hero = () => {
	return (
		<section id='hero' className={styles.hero} style={{background: `url(${heroImage}) no-repeat`}}>
			<div className={styles.content}>
				<h1>Hi, I'm <span>Dachev Oleh</span></h1>
				<div className={styles['text-animate']}>
					<h3>Frontend Developer</h3>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet corporis dignissimos
					error, expedita illum in inventore, nisi praesentium quod sint tempora tenetur vel. Commodi cum, et.
				</p>

				<div className='btn-box'>
					<button className='btn primary'>Hire Me</button>
					<button className='btn secondary'>Let's Talk</button>
				</div>
			</div>

			<div className={styles.sci}>
				<a target='_blank' rel='noreferrer' href='https://t.me/Ya_yozh'><BiLogoTelegram /></a>
				<a target='_blank' rel='noreferrer' href='https://github.com/dachev1919'><BiLogoGithub /></a>
				<a target='_blank' rel='noreferrer' href='https://www.instagram.com/dachev0leg/'><BiLogoInstagramAlt /></a>
			</div>

			<div className={styles['background-hover']} />
		</section>
	);
};

export default Hero;
