import React, { useState } from 'react'
import './UrlShortener.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UrlShortener = () => {
    const [originalUrl, setOriginalUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const handleURL = async () => {
        try {
            console.log(originalUrl)
            const response = await axios.post('http://localhost:5000/url', { originalUrl });
            console.log(response.data.shortUrlCode);
            setShortUrl(response.data.shortUrlCode);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='main-box'>
            <div>
                <h1 className='heading'>URL Shortener</h1>
                <p>Enter URL to be shortened</p>
                <div className="main-content">
                    <input type="text"
                        value={originalUrl}
                        onChange={(e) => setOriginalUrl(e.target.value)}
                        placeholder='Enter URL here'
                    />
                    <button onClick={handleURL}>Get Shortened URL</button>
                </div>

                <div className="shortened-url">
                    {shortUrl && (
                        <a href={`http://localhost:5000/url/${shortUrl}`} target="_blank" rel="noopener noreferrer">
                            {`http://localhost:5000/url/${shortUrl}`}
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UrlShortener