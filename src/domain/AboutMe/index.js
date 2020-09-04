import React from 'react';
import ListOfLogo from '../../components/ListOfLogo';

import facebook from '../../assets/images/facebook.png';
import linked from '../../assets/images/174857.png';
import instagram from '../../assets/images/4202090instagramlogosocialsocialmedia-115598_115703.png';
import gmail from '../../assets/images/gmail.png';

const AboutMe =(props)=> {
  const initialList = [
    {  
      id: 1, logo: facebook, path: 'https://www.facebook.com/minhkhoi.le.982/'
    }, {
      id: 2, logo: linked, path: 'https://www.linkedin.com/in/khoi-le-480941188/'
    }, {
      id: 3, logo: instagram, path: 'https://www.instagram.com/fox.hoang/'
    }, {
      id: 4, logo: gmail, path: 'https://gmail.com'
    }
  ];
  return (
    <div>
      <div className="socials m-b-sm highlight font-h4">
        You can see more my information on social network
      </div>
      <ListOfLogo logos={initialList} noborder></ListOfLogo>
    </div>
  )
}

export default AboutMe;