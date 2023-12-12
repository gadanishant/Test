import React, { useState } from 'react';
import { List, Button } from 'antd';
import './incident.css';

const YourComponent = () => {
  // Replace this data with your actual incident data
  const allIncidentData = Array.from({ length: 15 }, (_, index) => ({
    title: `Incident ${index + 1}`,
    location: "Boston",
    date : "01/09/2023",
    description: `Description of incident ${index + 1}`,
  }));

  // State variable to track whether to show all incidents
  const [showAllIncidents, setShowAllIncidents] = useState(false);

  // Data to render based on whether to show all incidents
  const displayedIncidentData = showAllIncidents
    ? allIncidentData
    : allIncidentData.slice(0, 10);

  return (
    <div className="incident-container-padding">
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        <List
          dataSource={displayedIncidentData}
          renderItem={(incident) => (
            <List.Item key={incident.id}>
              <div>
                <h3>{incident.title}</h3>
                <h4>{incident.location}</h4>
                <h5>{incident.date}</h5>
                <p>{incident.description}</p>
              </div>
            </List.Item>
          )}
        />
      </div>

      {!showAllIncidents && allIncidentData.length > 10 && (
    <Button className = "showAllIncidents" onClick={() => setShowAllIncidents(true)}>Show All Incidents</Button>
  )}

    </div>



  );

};

export default YourComponent;