import React from 'react';
import './index.scss';

const Admin =()=> {
  return (
    <div className="admin-template">
      <div className="header">
        <div className="block-site flex-center-between">
          <div className="left">Admin</div>
          <div className="right">
            {/* WE WILL SHOW THE MENU CRUD ARTICLES, PROFILE, MANAGEMENT USER AND LOGOUT SERVICE */}
            Logout
          </div>
        </div>
      </div>

      <div className="body m-tb-lg block-site">
        Body
        {/* HERE IS THE DASHBOARD CHART WE WILL HANDLE IN THE NEXT MONTH  */} 

      </div>
    </div>
  )
}

export default Admin;