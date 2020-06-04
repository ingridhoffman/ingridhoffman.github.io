// Global
import React from "react";
import { Form, Input, Button } from "antd";

// Export function
function Contact() {
	const onFinish = (values) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<section id="contact">
			<h2>Let's start a conversation...</h2>
			<Form name="contact" onFinish={onFinish} onFinishFailed={onFinishFailed}>
				<p class="emphasize">Hi Ingrid.</p>
				<p>
					My name is
					<Form.Item
						label="name"
						name="name"
						rules={[{ required: true, message: "your name" }]}>
						<Input />
					</Form.Item>
				</p>
				<p>
					and I work with
					<Form.Item
						label="company"
						name="company"
						rules={[{ required: true, message: "your company" }]}>
						<Input />
					</Form.Item>
				</p>
				<p>
					I'd like to chat with you about
					<Form.Item
						label="topic"
						name="topic"
						rules={[{ required: true, message: "your message" }]}>
						<Input.TextArea autoSize={true} />
					</Form.Item>
				</p>
				<p>
					Please email me at
					<Form.Item
						label="email"
						name="email"
						rules={[
							{ required: true, type: "email", message: "your email address" },
						]}>
						<Input />
					</Form.Item>{" "}
				</p>
				<Form.Item>
					<Button htmlType="submit">submit</Button>
				</Form.Item>
			</Form>
		</section>
	);
}

export default Contact;
