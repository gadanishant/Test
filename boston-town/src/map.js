import React, { useEffect } from 'react';
import L from 'leaflet';

const MapComponent = () => {
  useEffect(() => {
    // Boston's location
    const bostonCoordinates = [42.3601, -71.0589];

    // Initial the map:
    const map = L.map('map').setView(bostonCoordinates, 13);

    // Add the tile layer:
    const tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoicnVuZ2R1bmciLCJhIjoiY2tqeWh6cXF4MDgzMjJvbWVmbGQzYjAwMyJ9.U-aJyoqyKvTXlhVk43jV1A'
    }).addTo(map);

    // Define the bounds of Massachusetts
    const massachusettsBounds = L.latLngBounds(
      [41.237964, -73.508142],
      [42.886589, -69.858861]
    );

    // Set the maximum bounds of the map
    map.setMaxBounds(massachusettsBounds);

    // Clean up the map
    return () => {
      map.remove();
      tileLayer.remove();
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '100vh' }} />;
};

export default MapComponent;