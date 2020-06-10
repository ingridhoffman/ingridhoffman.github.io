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
		<div className="form-wrap">
			<form
				name="contact"
				className="form-box"
				onSubmit={handleSubmit(onSubmit)}>
				<p>Hi Ingrid.</p>
				<p>
					<span>My name is</span>
					<input
						name="name"
						aria-label="input name"
						placeholder="name"
						size={25}
						ref={register({ required: true })}
					/>
					<span>and I work with</span>
					<input
						name="company"
						aria-label="input company"
						placeholder="company"
						size={30}
						ref={register({ required: true })}
					/>
					<span>. I'd like to chat with you about</span>
					<input
						name="topic"
						aria-label="input topic"
						placeholder="topic"
						size={50}
						ref={register({ required: true })}
					/>
					<span>. Please email me at</span>
					<input
						name="email"
						aria-label="input email"
						placeholder="email address"
						size={30}
						ref={register({
							required: true,
							pattern: /\S+@\S+\.\S+/,
						})}
					/>
					<span>.</span>
				</p>
				{errors.name && <p className="error">Name is required</p>}
				{errors.company && <p className="error">Company is required</p>}
				{errors.topic && <p className="error">Topic is required</p>}
				{errors.email && (
					<p className="error">Please enter a valid email address</p>
				)}
				<Button type="submit" label="send" />
			</form>
		</div>
	);
}

export default Form;
