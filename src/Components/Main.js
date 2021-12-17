import React from 'react'
import { useState, useEffect } from 'react';
import instagramlogo from '../assets/assets/owner/instagram.png'
import twitterlogo from '../assets/assets/owner/twitter.png'
import moreIcon from '../assets/assets/owner/more.png'
import './Main.css'

export const Main = ({selectedPunk,punkdata}) => {
    const[activePunk,setActivePunk]=useState(punkdata[0])

    useEffect(() => {
        setActivePunk(punkdata[selectedPunk])
    }, [punkdata,selectedPunk])
    return (
       <div className='Main'>
            <div className="MainContainer">
                <div className="punkightlight">
                    <div className="punkContainer">
                        <img className='selectedPunk'
                            src={activePunk.image_original_url}
                            alt="" />
                    </div>
                </div>
                <div className="punkDetails" style={{ 'color': '#fff' }}>
                    <div className="title">{activePunk.name}
                        <span className="activeNumber">.#{activePunk.token_id}</span>
                    </div>

                    <div className="owner">
                        <div className="ownerImageContainer">
                            <img src={activePunk.owner.profile_img_url} alt="" />
                        </div>
                        <div className="ownerDetails">
                            <div className="ownerNameAndHandle">
                                <div>{activePunk.owner.address}</div>
                                <div className="ownerHandle">@ahmedkhan</div>
                            </div>
                            <div className="ownerLink">
                                <img src={instagramlogo} alt="" />
                            </div>
                            <div className="ownerLink">
                                <img src={twitterlogo} alt="" />
                            </div>
                            <div className="ownerLink">
                                <img src={moreIcon} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
