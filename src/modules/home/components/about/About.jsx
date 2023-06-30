import styles from './About.module.scss';
import image from '../../../../common/assets/images/about.jpg';

const About = () => {
	return (
		<section id='about' className={`custom-bg section ${styles.about}`}>
			<h2 className='heading'>About <span>Me</span><span className='animatedSpan scroll' style={{ '--i': '1'}}></span></h2>

			<div className={styles.image}>
				<img src={image} alt='about' />
				<span id='aboutCircleSpin' className={styles['circle-spin']}></span>
				<span className='animatedSpan scroll' style={{ '--i': '2'}}></span>
			</div>

			<div className={styles.content}>
				<h3>Frontend Developer<span className='animatedSpan scroll' style={{ '--i': '3'}}></span></h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Aut delectus dignissimos dolor, doloremque esse in
					iste laboriosam laborum mollitia natus, neque obcaecati odit
					perferendis porro possimus quaerat quam quidem, quod rem sint
					sunt tempore tenetur unde voluptas voluptatibus. Accusantium
					autem cupiditate esse, natus porro quidem sequi vel. Incidunt, quia, quis!
					<span className='animatedSpan scroll' style={{ '--i': '4'}}></span>
				</p>
			</div>
			<div className='btn-box second'>
				<button className='btn primary second'>Read More</button>
				<span className='animatedSpan scroll' style={{ '--i': '5'}}></span>
			</div>
		</section>
	);
};

export default About;
