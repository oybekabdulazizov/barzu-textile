'use client';

import { GeolocateControl, Map, NavigationControl } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

const MainMap: React.FC = ({}) => {
  return (
    <div>
      <Map
        mapboxAccessToken={mapboxToken}
        mapStyle='mapbox://styles/mapbox/streets-v12'
        initialViewState={{
          latitude: 52.237049,
          longitude: 21.017532,
          zoom: 10,
        }}
        style={{
          width: '100%',
          height: '400px',
        }}
        maxZoom={20}
        minZoom={3}
      >
        <GeolocateControl position='top-right' />
        <NavigationControl position='top-right' />
      </Map>
    </div>
  );
};

export default MainMap;
