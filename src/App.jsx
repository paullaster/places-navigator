// import { useState } from 'react'
import {GoogleMap, useJsApiLoader } from '@react-google-maps/api'
const center = {
  lat: -3.745,
  lng: -38.523
};

function App() {
  const { isLoaded} = useJsApiLoader( {
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  })
  
  return (
    <>
     <main style={{height: "100vh", width: "100vw"}}>
        <GoogleMap center={center} zoom={15}>

        </GoogleMap>
     </main>
    </>
  )
}

export default App
