import React, {useContext, useEffect, useState} from 'react'
import JobListItem from '../components/JobListItem'
import {JobContext} from '../context/JobsContextProvider'

export default function JobListPage() {
    // const [jobList, setJobList] = useState(null)
    const [searchString, setSearchString] = useState(null)
    const {jobList, setJobList, searchQuery, setSearchQuery} = useContext(JobContext)
    const [emptyMessage, setEmptyMessage] = useState("")
  
    console.log(jobList, "joblist")
    console.log(searchString, "searchstring")
    console.log(searchQuery, "searchQuery")
  
    function submitSearch() {
      console.log(searchString)

     if(searchString !== searchQuery){
        console.log("submitted")
      const query = searchString.replace(" ", "+")
      fetch(`/positions.json?description=${query}`)
      .then(res => res.json())
      .then(data => setJobList(data))
     }
        getEmptyMessage()
        
        setSearchQuery(searchString)
    }


    useEffect(() => {
        getEmptyMessage()
    }, [jobList])

    function getEmptyMessage() {
        if (jobList && jobList.length === 0){
            setEmptyMessage("No Results found")
        }
        if (jobList && jobList.length > 0 ) {
            setEmptyMessage("")
        }
    }

    

    return (
        <div>
            <input type="text" onChange={e => setSearchString(e.target.value)}/>
             <button onClick={submitSearch}>Search</button>
            <h1>Search result</h1>
            <p>{emptyMessage && emptyMessage}</p>
             <ul>
                {jobList && jobList.map(item => {
                        return (
                         <JobListItem key={item.id} item={item} />
                        )
                 })}
            </ul>
        </div>
    )
}
