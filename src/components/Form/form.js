/** @format */

// Global
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

// Local
import "./form.css";
import Button from "../Button";

// Export function
function Form() {
	const [formSent, setFormSent] = useState(false);

	const { register, errors, handleSubmit } = useForm({
		mode: "onBlur",
	});

	const onSubmit = (data) => {
		console.log("data: ", data);
		const templateParams = {
			from_name: data.name,
			from_company: data.company,
			reply_to: data.email,
			message_html: data.topic,
		};
		emailjs.send(
			"portfolio_contact",
			"template_4G7kZ2Mv",
			templateParams,
			"user_VvAW6NcRpYlgzZaPAWFPs"
		);
		setFormSent(true);
	};

	return (
		<div className="form-wrap">
			{!formSent ? (
				<form name="contact" className="form-box" onSubmit={handleSubmit(onSubmit)}>
					<p>Hi Ingrid.</p>
					<p>My name is</p>
					<input
						name="name"
						aria-label="input name"
						placeholder="name"
						ref={register({ required: true })}
					/>
					<p>and I work with</p>
					<input
						name="company"
						aria-label="input company"
						placeholder="company"
						ref={register({ required: true })}
					/>
					<p>I'd like to chat with you about</p>
					<input
						name="topic"
						aria-label="input topic"
						placeholder="topic"
						ref={register({ required: true })}
					/>
					<p>Please email me at</p>
					<input
						name="email"
						aria-label="input email"
						placeholder="email address"
						ref={register({
							required: true,
							pattern: /\S+@\S+\.\S+/,
						})}
					/>
					<div className="error-box">
						{errors.name && <p className="error">Name is required</p>}
						{errors.company && <p className="error">Company is required</p>}
						{errors.topic && <p className="error">Topic is required</p>}
						{errors.email && <p className="error">Please enter a valid email address</p>}
					</div>
					<div className="right">
						<Button type="submit" label="send" />
					</div>
				</form>
			) : (
				<div className="sent-message">
					<h2>Thank you for your message!</h2>
				</div>
			)}
		</div>
	);
}

export default Form;
