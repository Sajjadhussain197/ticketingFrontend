"use client";
import SigninWithPassword from "./SignInWithPassword";
export default function Signin() {

	return (
		<>
			<div className='mx-auto w-full max-w-[400px] px-4 py-10'>

				<div>
                    <SigninWithPassword />
				</div>
				
			</div>
		</>
	);
}