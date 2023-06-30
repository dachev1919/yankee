import styles from './Education.module.scss';
import { BiSolidCalendar } from 'react-icons/bi';

const Education = () => {
	return (
		<section id='education' className={`section ${styles.education}`}>
			<h2 className='heading'>My <span>Journey</span><span className='animatedSpan scroll' style={{ '--i': '1'}}></span></h2>

			<div className={styles.row}>
				<div className={styles.column}>
					<h3 className={styles.title}>Education<span className='animatedSpan scroll' style={{ '--i': '2'}}></span></h3>

					<div className={styles.box}>
						<div className={styles['content-wrapper']}>
							<div className={styles.content}>
								<div className={styles.year}>
									<BiSolidCalendar /> 2015 - 2019
								</div>
								<h3>Master Degree - College</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugit hic necessitatibus nostrum odio omnis pariatur placeat recusandae saepe soluta.</p>
							</div>
						</div>

						<div className={styles['content-wrapper']}>
							<div className={styles.content}>
								<div className={styles.year}>
									<BiSolidCalendar /> 2019 - 2022
								</div>
								<h3>Master Degree - University</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugit hic necessitatibus nostrum odio omnis pariatur placeat recusandae saepe soluta.</p>
							</div>
						</div>

						<div className={styles['content-wrapper']}>
							<div className={styles.content}>
								<div className={styles.year}>
									<BiSolidCalendar /> 2022 - 2023
								</div>
								<h3>Master Degree - University</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugit hic necessitatibus nostrum odio omnis pariatur placeat recusandae saepe soluta.</p>
							</div>
						</div>
						<span className='animatedSpan scroll custom-size' style={{ '--i': '3'}}></span>
					</div>
				</div>

				<div className={styles.column}>
					<h3 className={styles.title}>Experience<span className='animatedSpan scroll' style={{ '--i': '2'}}></span></h3>

					<div className={styles.box}>
						<div className={styles['content-wrapper']}>
							<div className={styles.content}>
								<div className={styles.year}>
									<BiSolidCalendar /> 2015 - 2019
								</div>
								<h3>Full-stack - Company</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugit hic necessitatibus nostrum odio omnis pariatur placeat recusandae saepe soluta.</p>
							</div>
						</div>

						<div className={styles['content-wrapper']}>
							<div className={styles.content}>
								<div className={styles.year}>
									<BiSolidCalendar /> 2019 - 2022
								</div>
								<h3>Frontend - Company</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugit hic necessitatibus nostrum odio omnis pariatur placeat recusandae saepe soluta.</p>
							</div>
						</div>

						<div className={styles['content-wrapper']}>
							<div className={styles.content}>
								<div className={styles.year}>
									<BiSolidCalendar /> 2022 - 2023
								</div>
								<h3>Frontend - Company</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugit hic necessitatibus nostrum odio omnis pariatur placeat recusandae saepe soluta.</p>
							</div>
						</div>
						<span className='animatedSpan scroll custom-size' style={{ '--i': '3'}}></span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
