import React from 'react'
import '../assets/style/CardProjects.css'

export const CardProjects = ({ Image, description, onClick }) => {
    return (
        <div>
            <div className="project-item" onClick={onClick}>
                <img src={Image} className="project-image" loading='lazy' />
                <div className="project-content">
                    <p className="project-description">{description}</p>
                </div>
            </div>
        </div>
    )
}
