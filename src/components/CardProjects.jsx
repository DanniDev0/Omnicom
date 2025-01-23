import React from 'react'
import '../assets/style/CardProjects.css'

export const CardProjects = ({ Image, Title, Description }) => {
    return (
        <div>
            <div className="project-item  animate__animated animate__flipInX">
                <img src={Image} alt={Title} className="project-image" />
                <div className="project-content">
                    <h3 className="project-title">{Title}</h3>
                    <p className="project-description">{Description}</p>
                </div>
            </div>
        </div>
    )
}
