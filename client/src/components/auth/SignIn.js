import React from 'react'


const SignIn = () => {


    return(
        <div>
            <div>
                <div className="heading">
                    sign in
                </div>
                <div className="authFormDiv">
                    <form className="authForm">
                        <label>Email</label>
                        <input 
                            type="text"
                            name="email"
                        />
                        <label>Password</label>
                        <input 
                            type="text"
                            name="password"
                        />
                        <input
                            type="submit"
                        />
                    </form>
                </div>
                </div>
        </div>
    )
}


export default SignIn