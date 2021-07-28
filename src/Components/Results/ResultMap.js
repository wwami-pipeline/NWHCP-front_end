import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

// Component that displays a react leaflet map
// centers itself around the average of the search results or the inputted search parameters
// inputted search parameters can be an address, a career emphasis, or an organizaton name
// (I think)
export function ResultMap({ programs }) {
    const marker = new L.Icon({
        iconUrl: process.env.PUBLIC_URL + '/imgs/icon-location.svg',
        iconSize: new L.Point(20, 30)
    });

    const [centerLatLng, setCenterLatLng] = useState([47.6062, -122.3321]);
    const [bounds, setBounds] = useState([
        [47.51, -122.23],
        [47.71, -122.43]
    ]);

    const ChangeView = ({ bounds }) => {
        const map = useMap();
        map.fitBounds(bounds);
        return null;
    };

    const renderedMarkers = programs.map((program) => (
        <Marker
            key={program.OrgId}
            position={[program.Lat, program.Long]}
            icon={marker}
        >
            <Popup>
                <span>
                    <h4>{program.OrgTitle}</h4>
                    <p>
                        {program.StreetAddress}
                        <br />
                        {`${program.City}, ${
                            program.State
                        } ${program.ZipCode.slice(0, 5)}`}
                        <br />
                        {program.Phone}
                    </p>
                    <a className='text-primary' target='_blank' href='#'>
                        More Details
                    </a>
                </span>
            </Popup>
        </Marker>
    ));

    useEffect(() => {
        let minLat = 180,
            maxLat = -180;
        let minLng = 180,
            maxLng = -180;

        programs.forEach((program) => {
            let lat = program['Lat'];
            let lng = program['Long'];
            if (lat < minLat) {
                minLat = lat;
            }
            if (lat > maxLat) {
                maxLat = lat;
            }
            if (lng < minLng) {
                minLng = lng;
            }
            if (lng > maxLng) {
                maxLng = lng;
            }
        });
        // console.log(minLat, maxLat, minLng, maxLng)

        if (minLat === maxLat || minLng === maxLng) {
            const adjustDegree = 0.05;
            minLat -= adjustDegree;
            minLng -= adjustDegree;
            maxLat += adjustDegree;
            maxLng += adjustDegree;
        }

        setCenterLatLng([(minLat + maxLat) / 2, (minLng + maxLng) / 2]);
        setBounds([
            [minLat, minLng],
            [maxLat, maxLng]
        ]);
    }, [programs]);

    return (
        <div>
            <MapContainer
                center={centerLatLng}
                bounds={bounds}
                boundsOptions={{ padding: [20, 20] }}
                id='mapid'
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {renderedMarkers}
                <ChangeView bounds={bounds} />
            </MapContainer>
        </div>
    );
}
