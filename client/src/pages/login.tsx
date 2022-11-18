import React, { useState,useEffect} from "react"
import LoginPass from "../components/auth/LoginPass";
import LoginSms from "../components/auth/LoginSms";

import { Link } from "react-router-dom"

const Login = () => {
	let [sms, setSms] = useState(false);
	return (
		<div className="container-fluid p-5 rounded font-weight-bold w-50 mt-5 bg-light flex-column bd-highlight mb-3 ">
			{sms?<LoginSms/>:<LoginPass/>}
			<small className="row my-2 text-primary" role="button">
				<Link  to="/forget_password" className="col-6">Forget Password?</Link>
			</small>
			<span className="text-primary" role="button"  onClick={()=>setSms((e)=>!e)}>
				{sms ? "Sign in with Password" : "Sign in with SMS."}
			</span>
			<p>
				You Don't have an account? <Link to={`/register`}>Register Now</Link>
			</p>
		</div>
	)
}

export default Login;