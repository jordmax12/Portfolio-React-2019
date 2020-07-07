import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import projects from '../assets/projects';
import Slider from 'react-lightbox-slider';

const image_array = [
    "https://cdn.hipwallpaper.com/i/47/13/eVrcb6.jpg",
    "https://kakiseni.org/wp-content/uploads/2018/03/250X250.png",
"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
]

class Timeline extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects
        }
    }

    render() {
        const { projects } = this.state;
        console.log(projects);
        return (
            <React.Fragment>
                <div style={{ width: '100%', marginRight: 'auto', marginLeft: 'auto', textAlign: 'center', backgroundColor: 'white', padding: '10px 20px' }}>
                    <h3>Projects</h3>
                    <p>Unfortunately I wasn't able to include all the cool stuff I worked on. </p>
                </div>
                <Slider 
                sliderMaxWidth='400px'
                minHeight='100%'
                images={image_array} />
                <VerticalTimeline>
                    {
                        projects.map(project => {
                            return <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date={project.date}
                                iconStyle={{ background: project.iconColor, color: '#fff' }}
                                icon={<div className="tac"><i className={project.iconClass}></i></div>}
                            >
                                <h3 className="vertical-timeline-element-title">{ project.link.length > 0 ? <a href={project.link} target="__blank">{project.title}</a> : <h3>{project.title}</h3>}</h3>
                                <h4 className="vertical-timeline-element-subtitle mt10">{project.stack}</h4>
                                <p> {project.description}</p>
                            </VerticalTimelineElement>
                        })
                    }
                </VerticalTimeline>
            </React.Fragment>
        )
    }
}

export default Timeline;
