import React from 'react';
import {Outlet} from 'react-router-dom';

class MyWorks extends React.Component {

  render() {
//    const {...state } = this.state;

    return (
      <>
        <div>My Work Page
          <Outlet/>
        </div>
      </>
    );
  }
}

export default MyWorks
