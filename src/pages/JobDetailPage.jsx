import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import JobDetail from '../components/JobDetail'

export default function JobDetailPage(props) {
    const id = props.match.params.id
    const [job, setJob] = useState(null)

    function getJob() {
        fetch(`/positions/${id}.json`)
        .then(res => res.json())
        .then(data => setJob(data)) 
      }

      useEffect( () => {
        getJob()
      }, [])

    return (
        <div>
            <Link to="/">Back</Link>
            <h1>Job details</h1>
            {job && (
                <JobDetail item={job} />
            ) }
        </div>
    )
}
