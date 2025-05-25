import React, { useEffect,useState,useRef } from 'react'
import { MapMenu } from '../components/Menu'
import { MapSidebar } from '../components/Sidebars'
import '../../Map.css'
import { MapContainer, TileLayer, Marker, Popup,useMap } from 'react-leaflet'
import axios from 'axios'
import L from 'leaflet'


function ChangeMapView({center,zoom}){
  const map=useMap()
  useEffect(()=>{
    map.flyTo(center,zoom)},
    [center,zoom]
  )
  return null
}


function Map() {
  
  const [userLocation,setUserLocation]=useState([9.9312,76.2673])
  const [userLocationGranted,setUserLocationGranted]=useState(false)
  const [manualLocation,setManualLocation]=useState('')
  const [zoomLevel,setZoomLevel]=useState(10)
  const inputRef=useRef(null)
  const [events,setEvents]=useState([])
  

  const fetchEvents=async(lat,lon)=>{


    try {
const ticketmasterURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=WECqR2avBC6AUxBnAaH4trSqGy3diwPM&latlong=${lat},${lon}&radius=2000&unit=km`;
// const allEventsURL = `https://allevents.in/api/v2/events/search/?lat=${lat}&lon=${lon}&radius=100&client_id=YOUR_ALLEVENTS_API_KEY`;
// const eventlyDBURL = `/api/events?lat=${lat}&lon=${lon}&radius=100`;



const [tmRes]=await Promise.all([
  axios.get(ticketmasterURL)
  // axios.get(allEventsURL),
  //  axios.get(eventlyDBURL)
])

const tmEvents = tmRes.data._embedded?.events?.map(e => {
  const venue = e._embedded?.venues?.[0];
  return {
    id: `tm-${e.id}`,
    name: e.name,
    lat: venue?.location?.latitude || 0,
    lon: venue?.location?.longitude || 0,
    source: 'Ticketmaster'
  };
}) || []

setEvents([...tmEvents]);

      
    } catch (error) {
     console.error('Error fetching events:', error);
    }
      
      }

  const handleManualSearch=async()=>{
    if(manualLocation){
      try {
        const res=await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(manualLocation)}`)
        if(res.data.length>0){
          const{lat,lon}=res.data[0]
          setUserLocation([parseFloat(lat),parseFloat(lon)])
          setUserLocationGranted(false)
          fetchEvents(parseFloat(lat),parseFloat(lon))
          setManualLocation('')
          setZoomLevel(4)
        }
        
        else{
          alert("Location not found, try searching for a city near it")
          inputRef.current?.focus()
        }
      } catch (error) {
        alert('Failed to fetch location,Server error. Please try again')
        
      }
    }
  }

  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          setUserLocation([position.coords.latitude,position.coords.longitude])
          setUserLocationGranted(true)
          fetchEvents(position.coords.latitude,position.coords.longitude)
        },
        (error)=>{
          alert("Location access denied. Kindly enter manually")
        }
      )
    }
  },[])
  return (
    <div>
        <MapMenu/>
        <div>
            <input type="text" placeholder='Use A Different Location' value={manualLocation} 
            onChange={(e)=>setManualLocation(e.target.value)}
            onKeyDown={(e)=>e.key==='Enter' && handleManualSearch()} />
            <button onClick={handleManualSearch}>Search</button>
        </div>
        <div>
            <MapSidebar/>
            
           


          <div className="map-area" style={{ height: '80vh'}}>
    
            <MapContainer center={userLocation} zoom={zoomLevel} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <ChangeMapView center={userLocation} zoom={zoomLevel}></ChangeMapView>
              <Marker position={userLocation}>
                <Popup>{userLocationGranted ? "Your Current Location" : "Searched Location"}</Popup>

              </Marker>
              {events.map(event=>(
                <Marker key={event.id} position={[event.lat,event.lon]}>
              <Popup>{event.name}</Popup>
              </Marker>
              ))}
             
            </MapContainer>
          </div>
        </div>
    </div>
  )
}

export default Map