import React from 'react'
import { useParams } from 'react-router-dom'

function ViewPage() {
    let id = useParams()
    console.log(id)
  return (
    <div>ViewPage</div>
  )
}

export default ViewPage