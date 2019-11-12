import React from 'react';
import '../styles/Signup.css';

function Signup(){
    return(
        <div className='Signup'>
            <form>
                <div className='username'>
                    <label>Enter a Username</label><br/>
                    <input type='text'></input>
                </div>
                <div className='password'>
                    <label>Enter a Password</label><br/>
                    <input type='text'></input>
                </div>
                <div className='signup-button-container'>
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;