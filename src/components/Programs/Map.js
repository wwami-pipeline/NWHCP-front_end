import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Link } from 'gatsby';
import iconLocation from '../../images/icon-location.svg';

// Component that displays a react leaflet map
// Centers itself around the average of the search results

function Map({ programs }) {
    
    const [centerLatLng, setCenterLatLng] = useState([47.6062, -122.3321]); // Seattle, WA
    const [bounds, setBounds] = useState([
        [47.51, -122.23],
        [47.71, -122.43]
    ]);
    
    const ChangeView = ({ bounds }) => {
        const map = useMap();
        map.fitBounds(bounds);
        return null;
    };

    const createMarker = (id) => {
        let marker = new L.Icon({
            iconUrl: iconLocation,
            iconSize: new L.Point(20, 30),
            className: 'marker' + id
        });
        return marker;
    }

    const renderedMarkers = programs.map((program) => (
        <Marker
            key={program.OrgId}
            position={[program.Lat, program.Long]}
            icon={createMarker(program.OrgId)}
            // onClick={() => handleMarkerClick(program.OrgId)}
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
                    <Link to={`/orgs/${program.OrgId}`} state={program}>
                        More Details
                    </Link>
                </span>
            </Popup>
        </Marker>
    ));

    // Set map parameters
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

    // https://www.gatsbyjs.com/plugins/gatsby-plugin-react-leaflet/
    if (typeof window !== 'undefined') {
        return (
            <div>
                <MapContainer
                    center={centerLatLng}
                    bounds={bounds}
                    boundsOptions={{padding: [20, 20]}}
                    id='mapid'
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    {renderedMarkers}
                    <ChangeView bounds={bounds}/>
                </MapContainer>
            </div>
        );
    }
    return null

}

export default Map;