import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix default marker icon issues with Webpack/Vite
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
})

const MapView = () => {
  const [pins, setPins] = useState([])

  useEffect(() => {
    // Fetch pins from the server
    fetch('http://localhost:5000/api/map/pins')
      .then(res => res.json())
      .then(data => {
        if(data.success){
          setPins(data.pins)
        }
      })
  }, [])

  return (
    <div>
      <h2>Map</h2>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pins.map(pin => (
          <Marker key={pin.id} position={[pin.lat, pin.lng]}>
            <Popup>
              <b>{pin.name}</b><br />
              {pin.productType} – {pin.price}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default MapView
