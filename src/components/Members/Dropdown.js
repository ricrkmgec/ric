import React from 'react'

const Dropdown = () => {
    return (
        <div>
            <div className="dropdown mt-2 mx-2">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Members
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/Core">Core Members</a></li>
                    <li><a className="dropdown-item" href="/General">General Members</a></li>
                    <li><a className="dropdown-item" href="/Alumni">Alumni Members</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Dropdown
