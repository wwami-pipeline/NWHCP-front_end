import React, { useState, useEffect, useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link } from "gatsby";
import iconLocation from "../../images/icon-location.svg";
import iconSchool from "../../images/graduation-cap-solid-full.svg";
import { Context as AllProgramContext } from "../../context/programContext";

// Component that displays a react leaflet map
// Centers itself around the average of the search results
function Map({ programs, center, bounds, mapHeight="90vh", marginBtm="0px" }) {
  const [map, setMap] = useState(null);
  const programAllStates = useContext(AllProgramContext).state;

  // const ChangeView = ({ bounds }) => {
  //   const map = useMap();
  //   // map.fitBounds(bounds);
  //   return null;
  // };
  useEffect(() => {
    if (map) {
      map.fitBounds(bounds);
      // console.log(bounds)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bounds]);

  // useEffect(() => {
  //   if (map) {
  //     map.fitBounds()
  //   }
  // }, [programs])

  useEffect(() => {
    if (map) {
      map.flyTo(center, 14, {
        animate: true,
        duration: 1.5,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [center]);

  const getProgramType = (program) => {
    // extract all pathway type keys
    const entries = Object.entries(program);
    // filter entries to only include keys with 'pathway_type'
    const filteredEntries = entries.filter(([key]) =>
      key.includes("pathway_type")
    );
    // convert filtered entries back into object
    const allPathways = Object.fromEntries(filteredEntries);
    let pathways = [];
    // loop through all pathway keys
    Object.keys(allPathways).forEach((type) => {
      // if val of curr key = 1, then program type is active
      if (allPathways[type] === "1") {
        pathways.push(type.split("___")[1]);
      }
    });
    return pathways[0] || "default";
  };

  const createMarker = (id, type) => {
    let iconType;
    switch (type) {
      case "certification":
        iconType = iconSchool;
        break;
      case "college_readiness":
        iconType = iconLocation;
        break;
      case "community_service":
        iconType = iconLocation;
        break;
      case "health_career":
        iconType = iconSchool;
        break;
      case "youth_camp":
        iconType = iconLocation;
        break;
      case "mentor":
        iconType = iconLocation;
        break;
      case "tutoring":
        iconType = iconLocation;
        break;
      case "work_based":
        iconType = iconLocation;
        break;
      default:
        iconType = iconLocation;
    }
    return new L.Icon({
      iconUrl: iconType,
      iconSize: new L.Point(20, 25),
      className: "marker" + id,
    });
  };

  // // Set map parameters
  useEffect(() => {
    let minLat = 180,
      maxLat = -180;
    let minLng = 180,
      maxLng = -180;
    programs.forEach((program) => {
      let lat = program["latitude"];
      let lng = program["longitude"];
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
    if (map)
      map.fitBounds([
        [minLat, minLng],
        [maxLat, maxLng],
      ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [programAllStates.searchFilter.searchContent]);

  // useEffect(() => {
  //   if (!map) return;
  //   console.log(map.getBounds());

  //   map.on("zoomend", function () {
  //     console.log(map.getBounds());
  //   });
  // }, [map]);

  if (typeof window !== "undefined") {
    return (
      <div style={{ height: mapHeight, width: "100%", marginBottom: marginBtm }}>
        <MapContainer
          style={{ height: "100%", width: "100%" }}
          center={center}
          bounds={bounds}
          whenCreated={setMap}
          boundsOptions={{ padding: [20, 20] }}
          id="mapid"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {programs &&
            programs.map((program) => {
              return (
                <Marker
                  key={program._id}
                  position={[
                    program.latitude || 47.6062,
                    program.longitude || -122.3321,
                  ]}
                  icon={createMarker(program._id, getProgramType(program))}
                >
                  <Popup>
                    <span>
                      <h4>{program.org_name || program.org_name_v2}</h4>
                      <p>
                        {program.street_address_1 ||
                          program.street_address_1_v2}
                        ,
                        {program.street_address_2 ||
                          program.street_address_2_v2}
                        <br />
                        {`${program.org_city || program.org_city_v2}, 
                ${program.org_state || program.org_state_v2}
                ${(program.zip_code || program.zip_code_v2 || "").slice(0, 5)}`}
                        <br />
                        {program.org_phone_number ||
                          program.org_phone_number_v2}
                      </p>
                      <Link to={`/orgs/${program._id}`} state={program}>
                        More Details
                      </Link>
                    </span>
                  </Popup>
                </Marker>
              );
            })}
          {/* <ChangeView bounds={bounds} /> */}
        </MapContainer>
      </div>
    );
  }
  return null;
}

export default Map;
