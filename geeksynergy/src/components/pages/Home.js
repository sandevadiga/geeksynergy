import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Home.css'
// import { Link, Outlet } from "react-router-dom";

export default function Home() {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const [data, setData] = useState([]);

    const fetchData = () => {
        axios.post('https://hoblist.com/api/movieList', {
            category: "movies",
            language: "kannada", genre: "all",
            sort: "voting"
        })
            .then(response => {
                setData(response.data.result)
            });
    }
console.log(data)

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div className='container-mv'>

            {data.map((data1) => {
                return (

                    <div className="card" key={data1._id}>
                        <div className="row ">
                            <div className="col-vote" style={{ marginTop: 40 }}>
                                
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                                            <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
                                        </svg>
                                        <p  style={{width:100}} >{data1.totalVoted}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-down-square-fill " viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                                        </svg>
                                  
                              
                            </div>
                            <div className="card-poster">
                                <img src={data1.poster} alt="movie post" />
                            </div>
                            
                            <div className="card-des">
                              
                                    <h5 className="card-title">{data1.title}</h5>
                                    <p className="card-text">Gener:{data1.genre}</p>
                                    <p className="card-text">Director:{data1.director}</p>
                                    <p className="card-text">Stars:{data1.stars}</p>

                                    <span className="card-text mx-1"><small className="text-muted">{data1.runTime} Mins</small></span>
                                    <span>|</span>
                                    <span className="card-text mx-1"><small className="text-muted">{data1.language}</small></span>
                                    <span>|</span>
                                    <span className="card-text mx-1"><small className="text-muted">{new Date((data1.releasedDate * 1000)).getDate() + " " + months[new Date((data1.releasedDate * 1000)).getMonth()]}</small></span><br />

                                    <span className="card-text mx-1"><small className="text-muted">{data1.pageViews}Views</small></span>
                                    <span>|</span>
                                    <span className="card-text"><small className="text-muted">Voted By:{data1.totalVoted} Peopel</small></span>
                            
                            </div>

                        </div>
                        <button className='btn btn-trailer'>Watch Trailer</button>
                    </div>
                )
            })}
        </div>

  )
}