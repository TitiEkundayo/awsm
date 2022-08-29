import React from "react";
import { SubmitBtn, SubscribeBtn, SignUpBtn, LoginBtn } from "./Buttons";

export const SignUpForm = () => {
	return (
		<section className="w-25 formBg">
			<form className="mt-3 pt-5 pb-5 px-4">
				<div className="mb-3">
					<input
						type="text"
						className="form-control formField"
						id=""
						placeholder="Email"
					/>
				</div>
				<div className="mb-3">
					<input
						type="password"
						className="form-control formField"
						id="exampleInputPassword1"
						placeholder="Password"
					/>
				</div>
				<div className="mb-3">
					<input
						type="password"
						className="form-control formField"
						id="exampleInputPassword1"
						placeholder="Confirm Password"
					/>
				</div>

				<div className="text-center pt-3">
					<SignUpBtn />
				</div>
			</form>
			<p className="text-center pb-5">
				Already a Member? <span className="yellowText">Login Here</span>
			</p>
		</section>
	);
};

export const SignInForm = () => {
	return (
		<section className="w-25 formBg">
			<form className="mt-3 pt-5 pb-5 px-4">
				<div className="mb-3">
					<input
						type="text"
						className="form-control formField"
						id=""
						placeholder="Email"
					/>
				</div>
				<div className="mb-3">
					<input
						type="password"
						className="form-control formField"
						id="exampleInputPassword1"
						placeholder="Password"
					/>
				</div>
				<div className="mb-3">
					<input
						type="password"
						className="form-control formField"
						id="exampleInputPassword1"
						placeholder="Confirm Password"
					/>
				</div>

				<div className="text-center pt-3">
					<LoginBtn />
				</div>
			</form>
			<p className="text-center pb-5">
				Don't Have an Account? <span className="yellowText">Sign Up</span>
			</p>
		</section>
	);
};

export const AWSMMomentsForm = () => {
	return (
		<form className="mt-3 w-50">
			<div className="mb-3">
				<input
					type="text"
					className="form-control formField"
					id=""
					placeholder="Name"
				/>
			</div>
			<div className="mb-3">
				<input
					type="email"
					className="form-control formField"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Email"
				/>
			</div>
			<div className="mb-3">
				<textarea
					className="form-control formField"
					placeholder="Messages"
					id="exampleFormControlTextarea1"
					rows="5"></textarea>
			</div>

			<div className="text-center pt-4">
				<SubmitBtn />
			</div>
		</form>
	);
};

export const SubscribeForm = () => {
	return (
		<form className="mt-3">
			{/* <form className="mt-3 footerFormWidth"> */}
			<div className="mb-3">
				<input
					type="text"
					className="form-control formField"
					id=""
					placeholder="Name"
				/>
			</div>
			<div className="mb-3">
				<input
					type="email"
					className="form-control formField"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Email"
				/>
			</div>
			<div className="">
				<SubscribeBtn />
			</div>
		</form>
	);
};
