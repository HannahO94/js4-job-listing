import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import JobDetailPage from './pages/JobDetailPage'
import JobListPage from './pages/JobListPage'


function App() {
  // const [jobList, setJobList] = useState(null)
  // const [searchString, setSearchString] = useState(null)


  // function submitSearch() {
  //   console.log(searchString)
  //   const query = searchString.replace(" ", "+")
  //   console.log(query)
  //   fetch(`/positions.json?description=${query}`)
  //   .then(res => res.json())
  //   .then(data => setJobList(data))
    
  // }


  return (
    <div>
      {/* <input type="text" onChange={e => setSearchString(e.target.value)}/>
      <button onClick={submitSearch}>Search</button> */}

      {/* {jobList && <JobListPage jobList={jobList} />} */}
    
      <Switch>

      <Route path="/positions/:id" component={JobDetailPage} />
      <Route path="/" component={JobListPage} />
    
      </Switch>
    </div>
  );
}

export default App;
