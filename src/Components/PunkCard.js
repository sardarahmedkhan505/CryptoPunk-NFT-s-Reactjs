import React from 'react'
import weth from '../assets/assets/weth.png'
import './PunkCard.css'

const PunkCard = ({name,image,id,traits}) => {
    return (
        <div className='Punkcard'>
            <img src={image} alt='Punk itself' />
            <div className='details'>
            <div className='name'> {name}
            <div className='id'>.#{id}</div>
             </div>
             <div className='etherPrice'>
                 <img className='etherImage' src={weth} alt='Ether'/>
                 <div className='ActualPrice' > {traits[0]?.value}</div>
             </div>
             </div>
        </div>
    )
}

export default PunkCard
