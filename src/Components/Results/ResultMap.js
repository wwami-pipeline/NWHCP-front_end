import React, {Component} from 'react';
import { MapContainer, TileLayer, Marker, Popup, Map } from 'react-leaflet';
import L from 'leaflet';

// calculates and returns the average of a nums array
function avgPt(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total / arr.length
}

// Component that displays a react leaflet map
// centers itself around the average of the search results or the inputted search parameters
// inputted search parameters can be an address, a career emphasis, or an organizaton name
// (I think)
export function ResultMap(props) {

    let programs = props.programs
    console.log(props.programs)

    let lats = programs.map(d => d.Lat)
    let longs = programs.map(d => d.Long)

    let avgLat = avgPt(lats)
    let avgLong = avgPt(longs)

    let center = [avgLat, avgLong]

    console.log(center)

    return (
        <div>
            <MapContainer center={/* center */ [47.638976615384614, -122.31030542307691]} zoom={13} scrollWheelZoom={false} id="mapid">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[47.638976615384614, -122.31030542307691]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
