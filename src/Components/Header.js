import React from 'react'
import './Header.css'
import punklogo from '../assets/assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/assets/header/search.png'
import themeSwitch from '../assets/assets/header/theme-switch.png'
export const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={punklogo} className='punklogo' alt='punk logo'/>
            </div>
            <div className='searchbar'>
                <div className= 'searchIcon'>
                    <img src={searchIcon} alt='search Icon'/>
                </div>
                <input className='inputSearch'/>
            </div>
            <div className='headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
            <div className='headerActions'>
                <div className='themeSwitcher'>
                    <img src={themeSwitch} alt='theme switchner'/>
                </div>
                <div>
                    <button className='getInButton'>
                        Get In
                    </button>
                </div>
            </div>
        </div>
    )
}
