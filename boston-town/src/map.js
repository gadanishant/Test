import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';
import './map.css';

const MapComponent = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map', {
      center: [42.3601, -71.0589], // Boston's coordinates
      zoom: 13
    });

    // Add a tile layer to the map using Mapbox
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; ...',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoicnVuZ2R1bmciLCJhIjoiY2tqeWh6cXF4MDgzMjJvbWVmbGQzYjAwMyJ9.U-aJyoqyKvTXlhVk43jV1A'
    }).addTo(map);

    // Fetch incident data, then create a heatmap and add markers to the map
    const fetchIncidents = async () => {
      try {
        const response = await fetch('http://localhost:3000/getAllIncidents');
        const data = await response.json();

        if (data.success) {
          const points = []; // Array to hold our points for the heatmap
          // Skip the first element which is a count
          data.description.slice(1).forEach(incident => {
            const lat = incident.latitude;
            const lng = incident.longitude;
            if (lat && lng) {
              points.push([lat, lng]); // Add the point to the heatmap array

              // Create a marker for each incident and add to the map
              L.marker([lat, lng], {
                icon: L.divIcon({
                  className: 'custom-marker', // This class can be used to style the markers
                  html: '<div class="marker-dot"></div>',
                  iconSize: [10, 10]
                })
              }).addTo(map);
            }
          });

          // Add the heatmap to the map with the points
          L.heatLayer(points, {
            radius: 25,
            blur: 15,
            maxZoom: 17,
            max: 1.0, // Higher max to increase intensity
            gradient: {0.4: 'red', 0.6: 'red', 0.8: 'red', 1: 'red'},
            maxOpacity: 0.8, // Adjust maxOpacity to make the heatmap more visible
            minOpacity: 0.2 // You can also adjust minOpacity if needed
          }).addTo(map);
        }
      } catch (error) {
        console.error('Failed to fetch incidents:', error);
      }
    };

    fetchIncidents();

    // Cleanup function to remove the map when the component is unmounted
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '70vh' }} />;
};

export default MapComponent;



//       accessToken: 'pk.eyJ1IjoicnVuZ2R1bmciLCJhIjoiY2tqeWh6cXF4MDgzMjJvbWVmbGQzYjAwMyJ9.U-aJyoqyKvTXlhVk43jV1A'
