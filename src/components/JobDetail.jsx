import React from 'react'

export default function JobDetail({item}) {
    return (
        <div>
            <li key={item.id}>
            <h2>{item.title}</h2> 
            <p>{item.company}</p>
            <strong>{item.type}</strong>
            <a href={item.company_url}>{item.company_url}</a>
            <p dangerouslySetInnerHTML={{__html: item.description}}/>
            <img src={item.company_logo} alt="company-logo"/>
        </li>
        </div>
    )
}
