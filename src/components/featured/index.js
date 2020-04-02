import React from 'react'
import Carousel from './Carousel'
import CountDownTime from './CountDownTime'

export default function Index() {
    return (
        <div style={{position:'relative'}}>
            <Carousel/>
            <div className="artist-name-wrapper">  
                <div className="artist-inner">
                    <div className="artist-name">Ariana Grande</div>
                </div>
            </div>

            <CountDownTime/>
        </div>
    )
}
