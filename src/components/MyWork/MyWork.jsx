import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="title-box">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="theme pattern" />
            </div>

            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <div key={index} className="mywork-card">
                        <img src={work.w_img} alt={work.w_name} />
                        <h3>{work.w_name}</h3>
                        {work.w_link && (
                            <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                               
                            </a>
                        )}
                    </div>
                ))}
            </div>

            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="arrow" />
            </div>
        </div>
    )
}

export default MyWork
