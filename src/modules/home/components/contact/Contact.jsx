import styles from './Contact.module.scss';

const Contact = () => {
	const submitHandler = (e) => {
		e.preventDefault();
	}
	return (
		<section id='contact' className={`section ${styles.contact}`}>
			<h2 className='heading'>Contact <span>Me!</span></h2>

			<form onSubmit={submitHandler}>
				<div className={styles.box}>
					<div className={styles.field}>
						<input type='text' placeholder='Full Name' required />
						<span className={styles.focus}></span>
					</div>
					<div className={styles.field}>
						<input type='email' placeholder='Email Address' required />
						<span className={styles.focus}></span>
					</div>
				</div>

				<div className={styles.box}>
					<div className={styles.field}>
						<input type='number' placeholder='Mobile Number' required />
						<span className={styles.focus}></span>
					</div>
					<div className={styles.field}>
						<input type='text' placeholder='Email Subject' required />
						<span className={styles.focus}></span>
					</div>
				</div>

				<div className={styles.textarea}>
					<textarea name='' id='' cols='30' rows='10' placeholder='Your Message' required></textarea>
					<span className={styles.focus}></span>
				</div>

				<div className={`btn-box ${styles.btns}`}>
					<button type='submit' className='btn primary'>Submit</button>
				</div>
			</form>
		</section>
	);
};

export default Contact;
