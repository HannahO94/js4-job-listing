import React, { createContext, useState } from 'react'

export const JobContext = createContext({})


export default function JobsContextProvider({children}){
    const [jobList, setJobList] = useState(null)
    const [searchQuery, setSearchQuery] = useState(null)
    
    return (
        <JobContext.Provider value={{jobList, setJobList, searchQuery, setSearchQuery}}>
            {children}
        </JobContext.Provider>
    )
}