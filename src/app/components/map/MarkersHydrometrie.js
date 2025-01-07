"use client"

import { Marker, Popup } from 'react-leaflet'
import React from "react"
import "leaflet/dist/leaflet.css"

export default function MarkersHydrometrie ({markers, setSelectedMarker, selectedMarker}) {
  
    return (
        <React.Fragment>
            {markers.map((mark) => (
                <Marker
                    position={[mark.geometry.coordinates[1], mark.geometry.coordinates[0]]}
                    key={mark.code_station}
                    style={{color: "#FFFFFF"}}
                    eventHandlers={{
                        click: () => {
                            setSelectedMarker(mark)
                    }}}>
                </Marker>
            ))}
        </React.Fragment>
    )

}