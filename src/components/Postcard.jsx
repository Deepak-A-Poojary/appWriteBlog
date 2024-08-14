import React from 'react'
import appwriteService from "../appwrite/appWriteConfig.js"
import {Link} from 'react-router-dom'

function Postcard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-[290px] bg-gray-100 rounded-xl p-4 align-middle text-center h-[400px]'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl h-80 w-100 object-fit' />
            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default Postcard