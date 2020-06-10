// Global
import React from "react";
import { useForm } from "react-hook-form";

// Local
import "./form.css";
import Button from "../Button";

// Export function
function Form() {
	const { register, errors, handleSubmit } = useForm({
		mode: "onBlur",
	});
	const onSubmit = (data) => console.log(data);

	return (
		<form name="contact" className="form-box" onSubmit={handleSubmit(onSubmit)}>
			<p>Hi Ingrid.</p>
			<p>
				<span>My name is</span>
				<input
					name="name"
					placeholder="name"
					size={30}
					ref={register({ required: true })}
				/>
				{errors.name && <span>This field is required</span>}
				<span>and I work with</span>
				<input
					name="company"
					placeholder="company"
					size={25}
					ref={register({ required: true })}
				/>
				{errors.company && <span>This field is required</span>}
				<span>. I'd like to chat with you about</span>
				<input
					name="topic"
					placeholder="topic"
					size={60}
					ref={register({ required: true })}
				/>
				{errors.topic && <span>This field is required</span>}
				<span>. Please email me at</span>
				<input
					name="email"
					placeholder="email address"
					size={30}
					ref={register({
						required: true,
						pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
					})}
				/>
				{errors.email && <span>Please enter a valid email address</span>}
				<span>.</span>
			</p>
			<Button type="submit" label="send" />
		</form>
	);
}

export default Form;
