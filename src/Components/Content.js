import React, { useState, useEffect, useRef } from 'react';
import Link from './Link.js'
import brand from '../images/icon-brand-recognition.svg';
import record from '../images/icon-detailed-records.svg';
import custom from '../images/icon-fully-customizable.svg';



function Content() {
    const [link, setLink] = useState("");
    const [links, setLinks] = useState([])
    const [formSubmit, setFormSubmit] = useState(false);
    // function updateView () {

    // }


    function addnewLink() {
        // setLinks(...links,{
        //     link,
        //     getShortenedLink:setLinks.returnedData
        // })
        links.push({
        //   id: i, 
          link,
          shortenedLink: 'beans'
        },
        )
      }


        useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const getShortenedLink = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                url: link
              }),
        };
        fetch('https://rel.ink/api/links/',getShortenedLink)
            .then(response => response.json())
            .then((data) => {
                let returnedData = data
                setLinks({...links,returnedData});
                // console.log(returnedData)
            });
        }, [formSubmit]);

        const handleSubmit = (e) => {
            e.preventDefault()
            setFormSubmit(!formSubmit)
            // const test = addnewLink();
            console.log(links)
            // updateView()
            // setLink(e.target.value).value = ""
          };

        

    return (
       
            <div className="text-center">

            <ul>
            {(links.map(link => (
                <li key={link.objectID}>
                <li>{link.url}</li>
                <li>{link.hashid}</li>
                </li>
            )))}
            </ul>
            

        <form>
            <div className="bg-dark rounded-lg h-32 ml-6 mr-6 mt-18">
                    <input type="text" label={'link'} name={'link'} placeholder="Shorten a link here" className="w-64 h-8 mt-4 rounded text-center" onChange={e => setLink(e.target.value)}/>

                    <button className="bg-cyan hover:bg-blue-700 text-white font-bold rounded mt-4 w-32 p-2" value={formSubmit} type="submit" onClick={handleSubmit}>Shorten it!</button>
                </div>
        </form>


                <div className="bg-gray">
                    <div>
                        <h1 className="text-3xl font-bold p-8">Advanced Statistics</h1>
                        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                    </div>

                    <div className="bg-white m-6 h-64 rounded">
                        <img src={brand} alt="" className="bg-dark p-4 rounded-full ml-32 mb-6"/>
                        <h3 className="text-xl font-bold mb-4">Brand Recognition</h3>
                        <p>Boost your brand recognition with each click. Generic links don;t mean a thing. Branded links help instill confidence in your content.</p>
                    </div>

                    <div className="bg-white m-6 h-64 rounded">
                        <img src={record} alt="" className="bg-dark p-4 rounded-full ml-32"/>
                        <h3 className="text-xl font-bold mb-4">Detailed Records</h3>
                        <p>Gain insights into who is clicking your links. Knowing when people engage with your content helps inform better decisions.</p>
                    </div>

                    <div className="bg-white m-6 h-64 rounded">
                        <img src={custom} alt="" className="bg-dark p-4 rounded-full ml-32"/>
                        <h3 className="text-xl font-bold mb-4">Fully Customizable</h3>
                        <p className="p-2">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
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





