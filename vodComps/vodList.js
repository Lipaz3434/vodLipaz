import React from 'react'
import { Link } from 'react-router-dom'

export default function VodList(props) {
    return (
        <div className='container'>
            <h2 className='text-white p-3 text-center'>Movies:</h2>
            <div className="row">
                {props.movies_ar.map(item => {

                    item.Poster = item.Poster != "N/A" ? item.Poster : "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    return (
                        <div key={item.imdbID} className='col-md-4 px-5 py-5 my-md-0 justify-content-between'>
                            <Link className='btn btn-dark' to={"/video/" + item.imdbID}>
                                <div style={{ borderRadius: "20px", cursor: "pointer" }} className="shadow overflow-hidden h-100">
                                    <img src={item.Poster} alt={item.Title} height={300} className="w-100" />
                                </div>
                            </Link>
                            <h4 className='col-md-8 text-center'>{item.Title}</h4>
                        </div>                         
                    )
                })}
            </div>
        </div>
    )
}
