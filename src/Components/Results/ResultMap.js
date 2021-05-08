import React, {Component} from 'react';
import { MapContainer, TileLayer, Marker, Popup, Map } from 'react-leaflet';
import L from 'leaflet';

export class ResultMap extends React.Component {
    render() {
        return (
            <div>
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} id="mapid">
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        )
    }
}