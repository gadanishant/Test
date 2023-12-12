import React, { useEffect } from 'react';
import L from 'leaflet';

const MapComponent = () => {
  useEffect(() => {
    // Initialize Leaflet map
    const map = L.map('map').setView([13.04171861, 77.5850622], 13);

    // Add Mapbox tiles
    const tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/rungdung/cl3jusid0001g15odcz3f1dcb/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicnVuZ2R1bmciLCJhIjoiY2tqeWh6cXF4MDgzMjJvbWVmbGQzYjAwMyJ9.U-aJyoqyKvTXlhVk43jV1A', {
      minZoom: 0,
      maxZoom: 18,
      tileSize: 256,
      subdomains: 'abc',
      errorTileUrl: '',
      tms: false,
      noWrap: false,
      zoomOffset: 0,
      zoomReverse: false,
      opacity: 1,
      zIndex: 1,
      detectRetina: false,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Infrastructure layers &copy SafeYelli contributors Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    }).addTo(map);

    // Set maximum bounds for the map
    map.setMaxBounds(L.latLngBounds([13.028562, 77.564031], [13.05394, 77.619306]));

    // Add polylines to the map
    const polylines = [
      [[77.5925255623231, 13.0970844681559], [77.5931085853912, 13.0965818373011]],
      // Add more polylines as needed
    ];

    polylines.forEach((coordinates) => {
      L.polyline(coordinates).addTo(map);
    });

    // Cleanup function to remove the map and tile layer when the component is unmounted
    return () => {
      map.remove();
      tileLayer.remove();
    };
  }, []); // Run this effect only once

  return <div id="map" style={{ width: '100%', height: '100vh' }} />;
};

export default MapComponent;