
import './App.css';
import { Header } from './Components/Header';

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import PunkListCard from './Components/PunkListCard';
import { Main } from './Components/Main';

function App() {
  const[punkdata,setpunkdata] = useState([])
  const[selectedPunk,setselectedPunk] = useState(0)

  useEffect(() => {
     const getMyNFT = async () =>{
    const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x0fc75b28F00EB9D63fC84946842E1c188A3c4e3F&order_direction=asc'
    )
    console.log(openSeaData.data.assets)
    setpunkdata(openSeaData.data.assets)
  }
    return getMyNFT();
  }, [])
 

  return (
    <div className="App">
      <Header/>
      {
        punkdata.length > 0 && (
         <> 
<Main 
      punkdata={punkdata}
      selectedPunk={selectedPunk}
      />
      <PunkListCard 
       punkdata={punkdata}
       setselectedPunk={setselectedPunk}
       />
         </>
        )
      }
      
      {/* <PunkCard id={0} 
      name={'Jasan Statham'}
       traits={[{value : 0}]} 
       image={'https://nftlabs.mypinata.cloud/ipfs/bafybeichmigzcebanai4n7jjj2xsc2uwhe5dnluvngpo5legnezdbariru'}/> */}
       
    </div>
  );
}

export default App;
