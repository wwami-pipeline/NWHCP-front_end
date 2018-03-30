import React from 'react';
import '../css/map.css';

const MapPage = () => {
    return (
        <div className="app">
            <div className="container">
                <div className="seachBox">
                    <p>Seach Box</p>
                </div>
                <div className="resultsBox">
                    <p>results that are visible on the map shown here as cards</p>
                    <div className='card'>card content</div>
                    <div className='card'>card content</div>
                    <div className='card'>card content</div>
                    <div className='card'>card content</div>
                    <div className='card'>card content</div>
                    <div className='card'>card content</div>
                    <div className='card'>card content</div>
                    <div className='card'>card content</div>
                    <div className='card'>card content</div>
                    <div className='card'>card content</div>
                    <div className='card'>card content</div>
                    <div className='card'>card content</div>
                </div>
                <div className="mapBox">
                    <p>map goes here</p>
                </div>
            </div>
        </div>
    )
}
 
export default MapPage