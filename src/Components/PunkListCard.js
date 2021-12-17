import React from 'react'
import PunkCard from './PunkCard'
import './PunkListCard.css'

const PunkListCard = ({ punkdata,setselectedPunk }) => {
    return (
        <div className='punkListCard'>
            {
                punkdata.map((punk) => (
                    <div onClick={()=>setselectedPunk(punk.token_id)}>
                        <PunkCard
                        key={punk.token_id}
                        id={punk.token_id}
                        name={punk.name}
                        traits={punk.traits}
                        image={punk.image_original_url}
                        />
                         </div>
                     
                ))}
        </div>
    )
}

export default PunkListCard
