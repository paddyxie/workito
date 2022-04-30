import React from 'react';
import {Route, Routes} from 'react-router-dom';

import AppLayout from './AppLayout';

// Index
import Index from './index/Index';

// My
import MyWorks from './my/MyWorks';
import MyNotes from './my/MyNotes';

// Project
import ProjectDetail from './project/ProjectDetail';

class AppRoute extends React.Component {

  render() {
    return (
      <Routes>
        <Route element={<AppLayout/>}>
          <Route path="/" element={<Index/>}/>
          <Route path="index" element={<Index/>}/>
          <Route path="notes" element={<MyNotes/>}/>
          <Route path="project" element={<ProjectDetail/>}/>

          <Route path="/works" element={<MyWorks/>}>
            <Route path=":workId" element={<MyNotes/>}/>
          </Route>
        </Route>
      </Routes>
    )
  }

}

export default AppRoute;