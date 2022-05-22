import React from 'react'
import './AnnualReport.css'
import data from './DataReport'

const AnnualReport = () => {
  return (
    <div class="container">
        <p class="heading">Annual Reports</p>
        <div class="reports">
            {data.map((report,index)=>(
                <div class="Report-box" key={index}>
                <a href={report.URL} target="_blank" rel='noreferrer'>
                <img src={report.image} alt={report.alt}/></a>
              </div>
            ))}
        </div>
    </div>
  )
}

export default AnnualReport