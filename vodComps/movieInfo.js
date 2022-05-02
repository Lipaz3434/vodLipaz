import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



export default function MovieInfo(props) {
  const [movie, setMovie] = useState({});
  const [loading,setLoading]=useState(false);
  let query = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    doApiInfo();
  }, [query.id])

  const doApiInfo = async () => {
    setLoading(true)
    let url = `https://www.omdbapi.com/?i=${query.id}&apikey=ea55707c`;
    let resp = await axios.get(url);
    console.log(resp.data);
    setMovie(resp.data)
    setLoading(false)
  }

  return (
    <div className='box bg-dark py-5'>
    <div className=' box1 '>
      { loading? <img style={{height:'60px',width:'80px'}} src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'></img> :
      <div  style={{borderRadius:'20px'}}  className='  text-center p-2 col-lg-6 mx-auto bg-white'>
        <img src={movie.Poster} />
        <h2>{movie.Title}</h2>
        <div className='text-info'>Year:{movie.Year}</div>
        <div className='text-info'>Score:{movie.imdbRating}</div>
        <div className='text-info'>Vote Count:{movie.imdbVotes}</div>
        <button className='btn btn-danger' onClick={() => navigate(-1)}>Go back</button>

      </div>
  
      }
      
    </div>
    </div>
    
  )
}
