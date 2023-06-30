import styles from './Contact.module.scss';

const Contact = () => {
	const submitHandler = (e) => {
		e.preventDefault();
	}
	return (
		<section id='contact' className={`section ${styles.contact}`}>
			<h2 className='heading'>Contact <span>Me!</span><span className='animatedSpan scroll custom-size' style={{ '--i': '1'}}></span></h2>

			<form onSubmit={submitHandler}>
				<div className={styles.box}>
					<div className={styles.field}>
						<input type='text' placeholder='Full Name' required />
						<span className={styles.focus}></span>
						<span className='animatedSpan scroll custom-size' style={{ '--i': '2'}}></span>
					</div>
					<div className={styles.field}>
						<input type='email' placeholder='Email Address' required />
						<span className={styles.focus}></span>
						<span className='animatedSpan scroll custom-size' style={{ '--i': '3'}}></span>
					</div>
				</div>

				<div className={styles.box}>
					<div className={styles.field}>
						<input type='number' placeholder='Mobile Number' required />
						<span className={styles.focus}></span>
						<span className='animatedSpan scroll custom-size' style={{ '--i': '2'}}></span>
					</div>
					<div className={styles.field}>
						<input type='text' placeholder='Email Subject' required />
						<span className={styles.focus}></span>
						<span className='animatedSpan scroll custom-size' style={{ '--i': '3'}}></span>
					</div>
				</div>

				<div className={styles.textarea}>
					<textarea name='' id='' cols='30' rows='10' placeholder='Your Message' required></textarea>
					<span className={styles.focus}></span>
					<span className='animatedSpan scroll custom-size' style={{ '--i': '4'}}></span>
				</div>

				<div className={`btn-box ${styles.btns}`}>
					<button type='submit' className='btn primary'>Submit</button>
					<span className='animatedSpan scroll custom-size' style={{ '--i': '5'}}></span>
				</div>
			</form>
		</section>
	);
};

export default Contact;
