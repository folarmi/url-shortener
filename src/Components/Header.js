import React from 'react'
import logo from '../images/logo.svg'
import background from '../images/illustration-working.svg'

function Header() {
    return (
        <div className="lg:ml-48">
                <header>
                        <img src={logo} alt="Shortly logo" className="p-4"/>
                </header>

                <div className="lg:flex lg:flex-row-reverse">

                    <div className="text-center" >
                        <img src={background} alt="" className="ml-24 md:ml-72"/>
                    </div>

                        <div className="lg:bg-pink">
                                <h1 className="text-3xl lg:mt-24 text-dark font-bold lg:bg-yellow lg:text-6xl">More than just shorter links</h1>
                                <p>Build your brand's recognition and get detailed insight on how your links are performing</p>
                                <button className="bg-cyan mt-4 mb-20 text-white 
                                font-bold py-2 px-4 rounded-full">Get started</button>
                        </div>

                    </div>
            </div>
    )
}

export default Header