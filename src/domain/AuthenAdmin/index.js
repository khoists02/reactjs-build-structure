import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

const AuthenAdmin =()=> {
  const [ userName, setUserName ] = useState("");
  const [ password, setPassword ] = useState("");
  const history = useHistory()

  const handleOnClick =()=> {
    const user = { userName: userName, password: password };
    localStorage.setItem('user', JSON.stringify(user));

    setTimeout(() => {
      history.push('admin');
    }, 3000);
  }

  return (
    <div className="login-admin flex-center">
      <div className="login-admin--content flex-center">
        <div className="form-control m-b-md">
          <label className="form-control-label" htmlFor="userName">Username <i className="asterisk"></i></label>
          <input type="text" className="form-input m-t-xxs" id="userName" name="userName" value={userName} onChange={(e)=> {
            setUserName(e.target.value)
          }} />
        </div>

        <div className="form-control">
          <label className="form-control-label" htmlFor="password">Password <i className="asterisk"></i></label>
          <input className="form-input m-t-xxs" type="password"  id="password" name="password" value={password} onChange={e=> {
            setPassword(e.target.value)
          }} />
        </div>

        <button
          className="btn btn--fixed m-t-lg"
          disabled={!userName || !password}
          onClick={handleOnClick}>RESET PASSWORD</button>
      </div>
    </div>
  )
}

export default AuthenAdmin;