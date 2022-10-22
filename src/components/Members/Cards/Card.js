import React from 'react'
import images from '../Cards/images.jpg'
import facebook from "../Cards/facebook.svg"
import linkedin from "../Cards/linkedin.svg"

const Card = () => {
  return (
    <div>
      <div className="card mx-auto m-3 border border-3 border-primary p-2" style={{ width: '23rem' }}>
        <img src={images} className="card-img-top img-thumbnail border border-2 border-info rounded-circle p-2" style={{ height: '50vh' }} alt="..." />
        <div className="card-body mx">
          <h3 className="card-title">Bindu Hite</h3>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            <a href="/facebook" className="btn btn-light rounded-circle mx-5">
              <img src={facebook} style={{ height: '30px', width: '30px' }} alt="FB-icon" />
            </a>
            <a href="/linkedin" className="btn btn-light mx-5">
              <img src={linkedin} style={{ height: '33px', width: '33px' }} alt="linkedin-icon" />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Card
