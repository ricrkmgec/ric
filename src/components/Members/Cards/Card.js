import React from 'react'
import images from '../Cards/images.jpg'

const Card = () => {
  return (
    <div>
      <div className="card mx-auto" style={{width: '18rem'}}>
        <img src={images} className="card-img-top img-thumbnail" style={{height: '40vh'}} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/hello" class="btn btn-primary mx-2">Facebook</a>
            <a href="/hello" class="btn btn-primary mx-2">LinkedIn</a>
          </div>
      </div>
    </div>
  )
}

export default Card
