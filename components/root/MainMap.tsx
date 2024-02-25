'use client';

import { GeolocateControl, Map, Marker, NavigationControl } from 'react-map-gl';
import { HiLocationMarker } from 'react-icons/hi';

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
          zoom: 12,
        }}
        style={{
          width: '100%',
          height: '400px',
        }}
        maxZoom={20}
        minZoom={3}
      >
        <Marker latitude={52.237049} longitude={21.017532}>
          <HiLocationMarker className='h-10 w-10 text-red-600 mb-5' />
        </Marker>
        <GeolocateControl position='top-right' />
        <NavigationControl position='top-right' />
      </Map>
    </div>
  );
};

export default MainMap;
