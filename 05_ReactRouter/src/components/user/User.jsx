import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function User() {
  const [data, setData] = useState({})

  useEffect(()=>{
    fetch('https://api.github.com/users/whiteblueskyss')
    .then((response) => response.json())
    .then((data) => setData(data));
  }, [])

  const {userid} = useParams()

  return (
    <>
       <div className="bg-slate-500 p-4 text-white m-4">Followers of {data.login} is:
         {data.followers} and userid : {userid}
        <img className='p-4' src={data.avatar_url} width={250} alt="git pic" />
       </div>
    </>
  )
}
