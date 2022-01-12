import React from 'react'

export default function Card (props) {
    const city = props.info;
    return (
        // simple card component - renders a div with the information, as shown in the example
        <div className='card'>
            <div className= "topLine">
                <h2>&emsp;{`${city.LocationText}`}</h2>
            </div>
            <ul>
                <li>&nbsp;{`State: ${city.State}`}</li>
                <li>&nbsp;{`Location: (${city.Lat}, ${city.Long})`}</li>
                <li>&nbsp;{`Population (estimated): ${city.EstimatedPopulation ? city.EstimatedPopulation : "No data"}`}</li>
                <li>&nbsp;{`Total Wages: ${city.TotalWages ? city.TotalWages : "No data"}`}</li>
            </ul>
        </div>
    )
} 