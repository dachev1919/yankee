import styles from './About.module.scss';
import image from '../../../../common/assets/images/about.jpg';

const About = () => {
	return (
		<section id='about' className={`section ${styles.about}`}>
			<h2 className='heading'>About <span>Me</span></h2>

			<div className={styles.image}>
				<img src={image} alt='about' />
				<span className={styles['circle-spin']}></span>
			</div>

			<div className={styles.content}>
				<h3>Frontend Developer</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Aut delectus dignissimos dolor, doloremque esse in
					iste laboriosam laborum mollitia natus, neque obcaecati odit
					perferendis porro possimus quaerat quam quidem, quod rem sint
					sunt tempore tenetur unde voluptas voluptatibus. Accusantium
					autem cupiditate esse, natus porro quidem sequi vel. Incidunt, quia, quis!
				</p>
			</div>
			<div className='btn-box second'>
				<button className='btn primary second'>Read More</button>
			</div>
		</section>
	);
};

export default About;
