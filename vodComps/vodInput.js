import React, { useRef, useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function VodInput(props) {
    // let searchQ = "bank";
    const [val, setVal] = useState("");
    const [arYears, setarYears] = useState([]);
    useEffect(() => {
        craeteYears();
    }, [])
    const craeteYears = () => {
        let tempar = [1989, 1995, 2000, 2020, 2021];
        setarYears(tempar);
    }


    return (
        <div className="container-fluid bg-danger p-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className=''>VOD Search</h2>
                    </div>
                    <div className="col-lg-8 d-flex justify-content-end">
                        <input value={val} onInput={(e) => { setVal(e.target.value) }} type="search" placeholder='search...' className='form-control w-50' />

                        <Link className='btn btn-dark' to={'/search/' + val} >
                            Search
                        </Link>
                    </div>
                    <div className='d-flex justify-content-end m-2'>
                        <div className='row '>
                            <div className='col-auto p-0 mx-auto'>
                                {arYears.map(item => {
                                    return (
                                        <Link key={item} to={`/year/${item}`} className='col-auto btn me-1'>{item}</Link>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
}
