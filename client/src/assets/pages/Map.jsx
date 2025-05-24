import React from 'react'
import { MapMenu } from '../components/Menu'
import { MapSidebar } from '../components/Sidebars'
import '../../Map.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Map() {
  return (
    <div>
        <MapMenu/>
        <div>
            <input type="text" placeholder='Use A Different Location' />
            <button>Search</button>
        </div>
        <div>
            <MapSidebar/>
           


          <div className="map-area" style={{ height: '80vh'}}>
    
            <MapContainer center={[9.9312, 76.2673]} zoom={10} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
             
            </MapContainer>
          </div>
        </div>
    </div>
  )
}

export default Map