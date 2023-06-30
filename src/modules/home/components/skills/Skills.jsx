import styles from './Skills.module.scss';
import { useEffect } from 'react';

const Skills = () => {
	useEffect(() => {
		const progressDivs = document.querySelectorAll(`.skillsProgress`);
		progressDivs.forEach(div => {
			const percentValue = div.querySelector('h3 > span').textContent;
			const bar = div.querySelector(`div > span`);

			bar.style.width = percentValue;
		});
	});

	return (
		<section id='skills' className={`custom-bg section ${styles.skills}`}>
			<h2 className='heading'>My <span>Skills</span><span className='animatedSpan scroll custom-size' style={{ '--i': '1'}}></span></h2>

			<div className={styles.row}>
				<div className={styles.column}>
					<h3 className={styles.title}>Coding Skills<span className='animatedSpan scroll custom-size' style={{ '--i': '2'}}></span></h3>

					<div className={styles.box}>
						<div className={styles.content}>
							<div className={`skillsProgress ${styles.progress}`}>
								<h3>React <span>65%</span></h3>
								<div className={styles.bar}><span></span></div>
							</div>

							<div className={`skillsProgress ${styles.progress}`}>
								<h3>HTML <span>90%</span></h3>
								<div className={styles.bar}><span></span></div>
							</div>

							<div className={`skillsProgress ${styles.progress}`}>
								<h3>CSS <span>80%</span></h3>
								<div className={styles.bar}><span></span></div>
							</div>

							<div className={`skillsProgress ${styles.progress}`}>
								<h3>JavaScript <span>70%</span></h3>
								<div className={styles.bar}><span></span></div>
							</div>
						</div>
						<span className='animatedSpan scroll custom-size' style={{ '--i': '3'}}></span>
					</div>
				</div>

				<div className={styles.column}>
					<h3 className={styles.title}>Professional Skills<span className='animatedSpan scroll custom-size' style={{ '--i': '2'}}></span></h3>

					<div className={styles.box}>
						<div className={styles.content}>
							<div className={`skillsProgress ${styles.progress}`}>
								<h3>Web Design <span>95%</span></h3>
								<div className={styles.bar}><span></span></div>
							</div>

							<div className={`skillsProgress ${styles.progress}`}>
								<h3>Web Development <span>70%</span></h3>
								<div className={styles.bar}><span></span></div>
							</div>

							<div className={`skillsProgress ${styles.progress}`}>
								<h3>Graphic Design <span>85%</span></h3>
								<div className={styles.bar}><span></span></div>
							</div>

							<div className={`skillsProgress ${styles.progress}`}>
								<h3>SEO Marketing <span>68%</span></h3>
								<div className={styles.bar}><span></span></div>
							</div>
						</div>
						<span className='animatedSpan scroll custom-size' style={{ '--i': '3'}}></span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
