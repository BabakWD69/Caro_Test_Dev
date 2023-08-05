import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  GeoJSON,
  useMapEvents,
  Popup,
  useMap,
} from "react-leaflet";
import { default as bezierSpline } from "@turf/bezier-spline";
import * as helpers from "@turf/helpers";
import { Icon } from "leaflet";
import marker from "../../../../assets/images/colorPin.png";
import "leaflet/dist/leaflet.css";
/////
const myIcon = new Icon({
  iconUrl: marker,
  iconSize: [32, 32],
});
////
const useCalcMap = ({
  originPosition = [36.54259076199696, 53.01246398520805],
  onDestinationSelected,
  draggable = true,
}) => {
  /////////
  const [curved, set_curved] = useState();
  const [midPoint, set_midPoint] = useState(originPosition);
  const [positions, set_positions] = useState([originPosition]);
  /////////
  const computeMidpoint = (latlngs) => {
    var latlng1 = latlngs[0],
      latlng2 = latlngs[1];

    var offsetX = latlng2[1] - latlng1[1],
      offsetY = latlng2[0] - latlng1[0];

    var r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2)),
      theta = Math.atan2(offsetY, offsetX);

    var thetaOffset = -3.14 / 15;

    var r2 = r / 2 / Math.cos(thetaOffset),
      theta2 = theta + thetaOffset;

    var midpointX = r2 * Math.cos(theta2) + latlng1[1],
      midpointY = r2 * Math.sin(theta2) + latlng1[0];

    var midpointLatLng = [midpointY, midpointX];
    set_midPoint(midpointLatLng);

    return [latlng1, midpointLatLng, latlng2];
  };
  /////////
  React.useEffect(() => {
    if (positions?.length === 2) {
      console.log(1);
      const line = helpers.lineString(
        computeMidpoint(positions).map((lngLat) => [lngLat[1], lngLat[0]])
      );
      set_curved(null);
      setTimeout(() => {
        set_curved(bezierSpline(line));
      }, 200);
    }
  }, [positions]);

  /// Geo Json Style
  const geoJsonStyle = {
    color: "#973079",
  };

  //
  const renderMap = () => {
    return (
      <MapContainer
        center={midPoint}
        zoom={13}
        doubleClickZoom={false}
        id="mapId"
        className="w-100 h-100"
        // tap={false}
        dragging={draggable}
        scrollWheelZoom={draggable ? true : false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker
          set_positions={set_positions}
          positions={positions}
          onDestinationSelected={onDestinationSelected}
          dragging={draggable}
        />
        {/********* ORIGIN MARKER *********/}
        {positions?.[0] && (
          <Marker icon={myIcon} position={positions[0]}>
            <Popup>مبدا</Popup>
          </Marker>
        )}
        {/********** DESTINATION MARKER **********/}
        {positions?.[1] && (
          <Marker icon={myIcon} position={positions[1]}>
            <Popup>مقصد</Popup>
          </Marker>
        )}
        {/********** CURVED LINE **********/}
        {curved && <GeoJSON style={geoJsonStyle} data={curved} />}
        {/* FLY AFTER ORIGIN CHANGED */}
        <OriginChange origin={originPosition} />
      </MapContainer>
    );
  };

  return {
    renderMap,
    set_curved,
    set_midPoint,
    set_positions,
  };
};

export default useCalcMap;

/////////////////////////////////
function OriginChange({ origin }) {
  //
  const map = useMap();
  React.useEffect(() => {
    map.flyTo({ lat: origin[0], lng: origin[1] }, map.getZoom());
  }, [origin]);
  //
  return <></>;
}
/////////////////////////////////
function LocationMarker({
  set_positions,
  positions,
  onDestinationSelected,
  dragging = true,
}) {
  // const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click(e) {
      if (dragging === true) {
        if (positions.length === 1) {
          set_positions((pl) => [...pl, [e.latlng.lat, e.latlng.lng]]);
        }
        if (positions.length > 1) {
          const arr = [positions[0], [e.latlng.lat, e.latlng.lng]];
          set_positions(arr);
        }
        onDestinationSelected([e.latlng.lat, e.latlng.lng]);
        map.flyTo(e.latlng, map.getZoom());
      }
    },
  });
  return <></>;
}
