import React from 'react'
import appwriteService from '../appwrite/appWriteConfig.js' 
import { Link } from 'react-router-dom'

const Postcard = ({
  $id,
  title,
  featureImage
}) => {
  return (
    <Link to={`/Postcard/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img src={appwriteService.getFilePreview(featureImage)} alt={title} 
          className='rounded-xl'/>
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  )
}

export default Postcard