"use client"

import { Marker, Popup } from 'react-leaflet'
import React from "react"
import theme from '@/app/assets/theme'
import "leaflet/dist/leaflet.css"
import { useState } from 'react'

export default function MarkersPeziometrie ({markers, selectedMarker, setSelectedMarker}) {
  
    return (
        <React.Fragment>
            {markers.map((mark) => (
                <Marker
                    position={[mark.geometry.coordinates[1], mark.geometry.coordinates[0]]}
                    key={mark.bss_id}
                    style={{color: "#FFFFFF"}}
                    eventHandlers={{
                        click: () => {
                            setSelectedMarker(mark)
                    }}}>
                    <Popup>
                        {mark.nom_commune}
                    </Popup>
                </Marker>
            ))}
        </React.Fragment>
    )

}