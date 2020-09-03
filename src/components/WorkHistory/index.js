import React, { useState, useEffect } from 'react';
import location from '../../assets/images/pngtree-vector-location-icon-png-image_317888.jpg';
import clock from '../../assets/images/png-transparent-round-black-analog-clock-illustration-clock-time-icon-time-noun-project-symbol-scalable-vector-graphics-thumbnail.png';
import './index.scss';

const WorkHistory =(props)=> {
  const [workHistories, setWorkHistories] = useState([]);

  const initialWorkHistories = [
    {
      id: 1,
      title: 'Fresher BE Developer',
      company: 'FPTSoftware',
      timeFrom: 'Oct 2016',
      timeTo: 'Oct 2017',
      location: 'HCM City',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehend',
    }, {
      id: 2,
      title: 'Middle Frontend developer',
      company: 'Saigon Technology Solution(STS)',
      timeFrom: 'Oct 2017',
      timeTo: 'Oct 2019',
      location: 'HCM City',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehend',
    }, {
      id: 3,
      title: 'Senior Frontend developer',
      company: 'Nextjuris',
      timeFrom: 'Oct 2019',
      timeTo: 'Now',
      location: 'HCM City',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehend',
    }
  ]

  useEffect(()=> {
    setWorkHistories(initialWorkHistories);
  }, []);

  return (
    <div className="work-history m-t-md">
      <div className="big-title m-b-sm font-h3">
        WORK HISTORY
      </div>
      {workHistories.map(work=> {
        return (
          <div className="work-history--item m-b-md" key={work.id}>
            <div className="title font-h3 highlight">{work.title}</div>
            <div className="company font-h3">{work.company}</div>
            <div className="time-locations flexbox m-tb-xxs">
              <span className="m-r-md flexbox">
                <img className="logo-clock m-r-xxs" src={clock} />
                {work.timeFrom} - {work.timeTo}</span>
              <span className="flexbox"><img className="logo-location m-r-xxs" src={location} /> {work.location}</span>
            </div>
            <div className="description m-t-xs">
              {work.description}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default WorkHistory;