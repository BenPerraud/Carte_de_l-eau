"use client"

import { MapContainer, TileLayer } from 'react-leaflet'
import MarkersPeziometrie from './MarkersPeziometrie'
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"


export default function MapComponent ({arrayPosition, selectedMarker, setSelectedMarker}) {
    const yolo = [46.6, 2.5]
   

    return (
        <MapContainer center={yolo} zoom={5.4} scrollWheelZoom={true} style={{height: "100%", width: "100%"}} placeholder>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkersPeziometrie markers={arrayPosition} selectedMarker={selectedMarker} setSelectedMarker={setSelectedMarker}/>
        </MapContainer>
    )
}