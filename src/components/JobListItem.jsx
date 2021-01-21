import React from 'react'
import {Link } from 'react-router-dom'
import styled from 'styled-components'

export default function JobListItem({ item }) {

    return (
        <LinkItem to={`/positions/${item.id}`} >
        <li key={item.id}>
            <h2>{item.title}</h2> 
            <p>{item.company}</p>
            <strong>{item.type}</strong>
            <a href={item.company_url}>{item.company_url}</a>
            <p dangerouslySetInnerHTML={{__html: item.description}}/>
            <img src={item.company_logo} alt="company-logo"/>
        </li>
     </LinkItem>
    )
}

const LinkItem = styled(Link)`
text-decoration: none;
color: black;
`