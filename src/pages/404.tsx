import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navi = useNavigate();
  return (
    <>
      <p onClick={() => navi(-1)}><a href="#">Back</a></p>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </>
  )
}

export default PageNotFound