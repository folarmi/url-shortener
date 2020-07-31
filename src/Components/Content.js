import React, { useState, useRef, useEffect } from 'react';
import brand from '../images/icon-brand-recognition.svg';
import record from '../images/icon-detailed-records.svg';
import custom from '../images/icon-fully-customizable.svg';



function Content() {
    const initialState = JSON.parse(window.localStorage.getItem('linkArr'))
    const [link, setLink] = useState("");
    const [links, setLinks] = useState({});
    const [linkArr, setLinkArr] = useState(initialState || []);
    const [copySuccess, setCopySuccess] = useState('Copy');

    useEffect(() => {
        window.localStorage.setItem('linkArr', JSON.stringify(linkArr));
        // console.log('works')
    },[linkArr])

    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!')
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (link === "") {
            return "work"
        } else {
        fetch('https://rel.ink/api/links/', {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                url: link
            })
        })
            .then(response => response.json())
            .then((data) => {
                let returnedData = data;
                setLinks(returnedData);
                setLinkArr([...linkArr, returnedData])
            })
        }
    }


    return (

        <div className="text-center">

            <form onSubmit={handleSubmit}>
                <div className="bg-dark rounded-lg h-32 ml-6 mr-6 mt-18 lg:ml-40 lg:mt-10 lg:w-3/4">
                    <input type="text" label={'link'} name={'link'} placeholder="Shorten a link here" className="w-64 h-12 mt-8 rounded text-center lg:w-3/4" onChange={e => setLink(e.target.value)} />

                    <button className="bg-cyan hover:bg-blue-700 text-white font-bold rounded mt-4 w-32 p-2 lg:ml-6" type="submit">Shorten it!</button>
                </div>
            </form>

            <ul>
            {linkArr.map (link => (
                <li key={link.objectID}>
                       <li>{link.url}</li>

                       <textarea ref={textAreaRef} 
                            value={"https://rel.ink/" + link.hashid} 
                            onChange={e => setCopySuccess(e.target.value)}>
                            {"https://rel.ink/" + link.hashid}
                       </textarea>

                       <button className="bg-cyan text-white font-bold rounded mt-4 w-32 p-2" style={{
                        backgroundColor: (copySuccess === "Copy") ? 'hsl(180, 66%, 49%)' : ' hsl(257, 27%, 26%'
                       }}
                       onClick={copyToClipboard}>{copySuccess}</button>
                </li>
            ))}
            </ul>


            <div className="bg-gray">
                <div>
                    <h1 className="text-3xl font-bold p-8">Advanced Statistics</h1>
                    <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
            
            <div className="lg:flex lg:ml-48">
                <div className="bg-white m-6 h-64 rounded p-2">
                    <img src={brand} alt="" className="bg-dark p-4 rounded-full ml-32 mb-4 lg:ml-4" />
                    <h3 className="text-xl font-bold mb-4">Brand Recognition</h3>
                    <p>Boost your brand recognition with each click. Generic links don;t mean a thing. Branded links help instill confidence in your content.</p>
                </div>

                <div className="bg-white m-6 h-64 rounded p-2 lg:mt-16">
                    <img src={record} alt="" className="bg-dark p-4 rounded-full ml-32 lg:ml-4" />
                    <h3 className="text-xl font-bold mb-4">Detailed Records</h3>
                    <p>Gain insights into who is clicking your links. Knowing when people engage with your content helps inform better decisions.</p>
                </div>

                <div className="bg-white m-6 h-64 rounded p-2 lg:mt-24">
                    <img src={custom} alt="" className="bg-dark p-4 rounded-full ml-32 lg:ml-4" />
                    <h3 className="text-xl font-bold mb-4">Fully Customizable</h3>
                    <p className="p-2">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>

                <div className="bg-no-repeat bg-center bg-dark h-64"
                    style={{
                        backgroundImage: `url("../images/bg-boost-mobile.svg")`
                    }}>
                    <h3 className="text-white text-3xl font-bold pt-16">Boost your links today</h3>
                    <button className="bg-cyan mt-4 text-white font-bold py-2 px-4 rounded-full w-40">Get started</button>
                </div>
            </div>
        </div>
    )
}

export default Content