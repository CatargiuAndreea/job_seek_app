import React, { useState} from 'react';
import Axios from 'axios'; 
import './frontPage.css';
import ReactPaginate from 'react-paginate';

function FrontPage(){

    const [title, setTitle] = useState("")
    const [fullTime, setFullTime] = useState("")
    const [location, setLocation] = useState("")
    const [jobStatus, setJobStatus] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    const jobsPerPage = 10 
    const pagesVisited = pageNumber * jobsPerPage

    const search = () => {
        Axios.post('http://localhost:3001/search', {
            title: title, 
            fullTime: fullTime,
            location: location,
        }).then((response) => {
            if (response.data.message) {
                setJobStatus(response.data.message)
            } else {
                setJobStatus(response.data)
            }
        })
    };

    const displayJobs = jobStatus.slice(pagesVisited, pagesVisited + jobsPerPage).map((val) => {
        return (
        <div className="card">
            <h1 className='card-title'>Title: {val.title} </h1>
            <p>Description: {val.description}</p>
            <p>Location: {val.location}</p>
        </div>
        );});

    const pageCount = Math.ceil(jobStatus.length/ jobsPerPage)

    const changePage = ({selected}) => {
        setPageNumber (selected)
    }

    return(
        <div className='frontPage'>
            <div className='job-search'>
                <input type='text' placeholder="Title..." onChange={(e) => {
                        setTitle(e.target.value);
                        }}/>
                <input type='text' placeholder="Location..." onChange={(e) => {
                        setLocation(e.target.value);
                        }}/>
                <label>Only full time? </label>
                <select id = "dropdown" onChange = {(e)=> setFullTime(e.target.value)}>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </select>
                <button onClick={search}>Search</button>
            </div>
            {displayJobs} <ReactPaginate
                previousLabel = {"Previous"}
                nextLabel = {"Next"}
                pageCount = {pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"PreviousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    );
}

export default FrontPage;