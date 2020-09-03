import React from "react";
import BasicResume from '../../components/BasicResume';
import WorkHistory from '../../components/WorkHistory';
import Education from '../../components/Education';

const Dashboard = () => {
  return (
    <div>
      <BasicResume />

      <WorkHistory />

      <Education />
    </div>

  )
}

export default Dashboard;