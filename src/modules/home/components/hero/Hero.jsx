import styles from './Hero.module.scss';
import { BiLogoGithub, BiLogoInstagramAlt, BiLogoTelegram } from 'react-icons/bi';
import heroImage from '../../../../common/assets/images/home.jpg';

const Hero = () => {
	return (
		<section id='hero' className={`show-animate section ${styles.hero}`} style={{background: `url(${heroImage}) 60% center no-repeat`}}>
			<div className={styles.content}>
				<h1>Hi, I'm <span>Dachev Oleh</span><span className='animatedSpan' style={{ '--i': '3'}}></span></h1>
				<div className={styles['text-animate']}>
					<h3 id='heroH3'>Frontend Developer</h3>
					<span className='animatedSpan' style={{ '--i': '4'}}></span>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet corporis dignissimos
					error, expedita illum in inventore, nisi praesentium quod sint tempora tenetur vel. Commodi cum, et.
					<span className='animatedSpan' style={{ '--i': '5'}}></span>
				</p>

				<div className='btn-box'>
					<button className='btn primary'>Hire Me</button>
					<button className='btn secondary'>Let's Talk</button>
					<span className='animatedSpan' style={{ '--i': '6'}}></span>
				</div>
			</div>

			<div className={styles.sci}>
				<a target='_blank' rel='noreferrer' href='https://t.me/Ya_yozh'><BiLogoTelegram /></a>
				<a target='_blank' rel='noreferrer' href='https://github.com/dachev1919'><BiLogoGithub /></a>
				<a target='_blank' rel='noreferrer' href='https://www.instagra	m.com/dachev0leg/'><BiLogoInstagramAlt /></a>
				<span className='animatedSpan' style={{ '--i': '7'}}></span>
			</div>

			<div className={styles['background-hover']} />
			<span className='animatedSpan home-img' style={{ '--i': '8'}}></span>
		</section>
	);
};

export default Hero;
