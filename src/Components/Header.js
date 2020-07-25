import React from 'react'
import logo from '../images/logo.svg'
import background from '../images/illustration-working.svg'

function Header() {
    return (
        <header>
            <div>
                <img src={logo} alt="Shortly logo" className="p-4"/>
            </div>
            <div className="text-center">
                <img src={background} alt="" className="ml-24"/>
                <h1 className="text-3xl text-dark font-bold">More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insight on how your links are performing</p>
                <button className="bg-cyan mt-4 mb-20 text-white font-bold py-2 px-4 rounded-full">Get started</button>
            </div>
        </header>
    )
}

export default Header