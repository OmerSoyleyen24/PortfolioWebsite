import React from 'react'
import './Aside.css'

const Aside = () => {
  return (
    <aside>
        <ul className="social-media-list">
            <li className="social-media-list-item">
                <a href="https://tr.linkedin.com/in/omer-soyleyen">
                    <i className="bi bi-linkedin"></i>
                </a>
            </li>
            <li className="social-media-list-item">
                <a href="https://github.com/omersoyleyen24">
                    <i className="bi bi-github"></i>
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Aside