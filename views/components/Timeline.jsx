import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import projects from '../assets/projects';
import Slider from 'react-lightbox-slider';

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
                    {/* <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2018-2019"
                        iconStyle={{ background: 'rgb(135,206,250)', color: '#fff' }}
                    icon={<div className="tac"><i className="fab fa-js-square projectIcon"></i></div>}
                    >
                        <h3 className="vertical-timeline-element-title"><a href="https://www.fcbvita.com/" target="__blank">FCB Vita</a></h3>
                        <h4 className="vertical-timeline-element-subtitle mt10">GraphQL, Prisma, NodeJS, ReactJS, AWS (EC2, ECS, SQS, SNS, Rekognition), Azure (Cognitive Services), Google Cloud Platform (Kubernetes, Storage, Vision) Docker</h4>
                        <p> FCB Vita is a flagship product that sends media through an array of API services to gather metadata and annotation data frame by frame. I was able to develop most of the backend services that this product uses and build the main API in which all services use to operate.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="June 2019"
                        iconStyle={{ background: 'rgb(135,206,250)', color: '#fff' }}
                    icon={<div className="tac"><i className="fab fa-js-square projectIcon"></i></div>}
                    >
                        <h3 className="vertical-timeline-element-title"><a href="/AlexaMinerProject.png" target="__blank">Alexa in the Browser (with FCB Chicago)</a></h3>
                        <h4 className="vertical-timeline-element-subtitle mt10">NodeJS, Alexa Voice Services, AWS (Transcribe, DynamoDB)</h4>
                        <p> Fun tool that enabled users to use an Alexa right from their browser. Record a question, and send it off to Alexa. Our process parsed the result, sent it through transcribe and stored the text result in DynamoDB. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="May 2019"
                        iconStyle={{ background: 'rgb(135,206,250)', color: '#fff' }}
                    icon={<div className="tac"><i className="fab fa-js-square projectIcon"></i></div>}
                    >
                        <h3 className="vertical-timeline-element-title"><a href="https://github.com/jordmax12/WERN-Skeleton" target="__blank">WERN Skeleton</a></h3>
                        <h4 className="vertical-timeline-element-subtitle mt10">Webpack, Express, ReactJS, NodeJS</h4>
                        <p> Built a simple skeleton to help people get started on projects utilizing webpack, express, reactjs, and nodejs. Express can be interchanged with any other framework. This portfolio was built using WERN.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="May 2019"
                        iconStyle={{ background: 'rgb(135,206,250)', color: '#fff' }}
                    icon={<div className="tac"><i className="fab fa-js-square projectIcon"></i></div>}
                    >
                        <h3 className="vertical-timeline-element-title"><a href="https://www.youtube.com/watch?v=jBLSxzdbo4o&feature=youtu.be" target="__blank">Photoshop Automation (with FCB Chicago)</a></h3>
                        <h4 className="vertical-timeline-element-subtitle mt10">ES5 Javascript</h4>
                        <p> Utilizing the Adobe Scripting API I was able to build out an automation script that made designers and copywriters more efficient by relieving them of tedius manual processes. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="January 2019"
                        iconStyle={{ background: 'rgb(135,206,250)', color: '#fff' }}
                    icon={<div className="tac"><i className="fab fa-js-square projectIcon"></i></div>}
                    >
                        <h3 className="vertical-timeline-element-title"><a href="https://github.com/jordmax12/discordbotesea" target="__blank">ESEA Discord Bot</a></h3>
                        <h4 className="vertical-timeline-element-subtitle mt10">NodeJS, Heroku</h4>
                        <p> Utilizing the ESEA api, I made a Discord bot for a friend who had a Discord server of 1,000+ users daily. They used this server to set up scrims and matches in an online game called Counter-Strike. This Discord bot authenticated users and assigned them roles and rights depending on their rank on ESEA. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="November 2018"
                        iconStyle={{ background: 'rgb(135,206,250)', color: '#fff' }}
                    icon={<div className="tac"><i className="fab fa-js-square projectIcon"></i></div>}
                    >
                        <h3 className="vertical-timeline-element-title"><a href="https://www.amazon.com/Bioverativ-Infusion-Squad/dp/B07N395L84" target="__blank">Infusion Squad (Alexa)</a></h3>
                        <h4 className="vertical-timeline-element-subtitle mt10">Alexa Voice Services, NodeJS, Azure Serverless Functions, DynamoDB</h4>
                        <p> Fun Alexa application to help the Hemophilia community, specifically children. It provides information to patients and their care givers about their exisiting condition and the overall infusion process. My first Alexa app published on the Alexa app store. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="July 2018"
                        iconStyle={{ background: 'rgb(135,206,250)', color: '#fff' }}
                    icon={<div className="tac"><i className="fab fa-js-square projectIcon"></i></div>}
                    >
                        <h3 className="vertical-timeline-element-title"><a href="https://www.adsoftheworld.com/media/experiential/radio_flyer_radio_flyer_adventure_travel" target="">Radio Flyer Campaign (with FCB Chicago)</a></h3>
                        <h4 className="vertical-timeline-element-subtitle mt10">NodeJS, ReactJS, Microsoft Cognitive Services</h4>
                        <p> A fun program that uses AI to predict a users age, which changes the experience of the display depending on the age of the user. We gave a more fun experience if the user was a child, which was what this project was geared towards. Giving children an experience only they can experience, while the adult would get something completely different. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="May 2018"
                        iconStyle={{ background: 'rgb(135,206,250)', color: '#fff' }}
                    icon={<div className="tac"><i className="fab fa-js-square projectIcon"></i></div>}
                    >
                        <h3 className="vertical-timeline-element-title"><a href="https://game.symtuza.com/" target="">Symtuza: Don't Risk Resistance (with FCB Chicago)</a></h3>
                        <h4 className="vertical-timeline-element-subtitle mt10">jQuery, HTML, CSS</h4>
                        <p> I usually do not do front end projects, but this one was fun because it heavily involved building a "Bejeweled" like algorithm to work on the web. I had a lot of fun with this, because it reminded me of college building out game AI. It was a nice break from the usual development stuff. Getting it to work fast enough for the web was a big struggle, I was able to develop a unique way to check for matches and also built in the ability to make the board as big as the screen without any noticable different in speed of alogirhtm. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="November 2017"
                        iconStyle={{ background: 'rgb(135,206,250)', color: '#fff' }}
                    icon={<div className="tac"><i className="fab fa-js-square projectIcon"></i></div>}
                    >
                        <h3 className="vertical-timeline-element-title"><a href="https://alprolix.com" target="">Alprolix (with FCB Chicago)</a></h3>
                        <h4 className="vertical-timeline-element-subtitle mt10">ASP.NET Web Forms, ReactJS, AWS (Load Balancer, S3)</h4>
                        <p> Alprolix is a medicine aimed to help people with Hemophilia B. It is a branch of Bioverativ (Sanofi). This website was developed to help people with Hemophilia B by getting them resources they need. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="October 2017"
                        iconStyle={{ background: 'rgb(135,206,250)', color: '#fff' }}
                    icon={<div className="tac"><i className="fab fa-js-square projectIcon"></i></div>}
                    >
                        <h3 className="vertical-timeline-element-title"><a href="https://eloctate.com" target="">Eloctate (with FCB Chicago)</a></h3>
                        <h4 className="vertical-timeline-element-subtitle mt10">ASP.NET Web Forms, ReactJS, AWS (Load Balancer, S3)</h4>
                        <p> Alprolix is a medicine aimed to help people with Hemophilia A. It is a branch of Bioverativ (Sanofi). This website was developed to help people with Hemophilia A by getting them resources they need. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2017"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<div className="tac"><i className="fab fa-microsoft projectIcon"></i></div>}
                    >
                        <h3 className="vertical-timeline-element-title"><a href="https://itunes.apple.com/us/app/newser/id334678577?mt=8" target="__blank">Newser Mobile App</a></h3>
                        <h4 className="vertical-timeline-element-subtitle mt10">Xamarin, Azure, ASP.NET (API), Azure Notification Hub</h4>
                        <p> (Released on: App Store & Google Play) Read less - know more. Newser makes it easy to read less and know more: stories are brief - usually two paragraphs that tell you all you need to know about the day's most important and interesting news. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2017"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<div className="tac"><i className="fab fa-microsoft projectIcon"></i></div>}
                    >
                        <h3 className="vertical-timeline-element-title"><a href="https://m.newser.com" target="__blank">Newser Site Redesign</a></h3>
                        <h4 className="vertical-timeline-element-subtitle mt10">ASP.Net Web Forms, RactiveJS, SemanticUI</h4>
                        <p> This project had several components: redo mobile website, add funtionality to current website (features that required back-end admin portal changes), and more. These seperate components were built out during my time at Newser. I was able to add revenue with faster ad loading, while also building on the current functionality and improving the admin portal to give editors more power. I successfully integrated social media embeds, responsive youtube embeds, and also redid the entire mobile website.   </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2016"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<div className="tac"><i className="fab fa-microsoft projectIcon"></i></div>}
                    >
                        <h3 className="vertical-timeline-element-title"><a href="https://itunes.apple.com/us/app/nextcrew/id1031706393?mt=8" target="__blank">Nextcrew Mobile App</a></h3>
                        <h4 className="vertical-timeline-element-subtitle mt10">ASP.NET, Cordova, RactiveJS</h4>
                        <p> (Released on: App Store & Google Play) Fun Cordova mobile app I built during my time at Nextcrew. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2016"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<div className="tac"><i className="fab fa-microsoft projectIcon"></i></div>}
                    >
                        <h3 className="vertical-timeline-element-title">Nextcrew Quickbooks Integration</h3>
                        <h4 className="vertical-timeline-element-subtitle mt10">C#</h4>
                        <p> We found a lot our clients had to manually enter in data to Quickbooks, using C#, I was able to build a program that automated all those processes. We saved our clients a lot of money from having to hire accountants to do the same work. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="May 2015"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<div className="tac"><i className="fab fa-microsoft projectIcon"></i></div>}
                    >
                        <h3 className="vertical-timeline-element-title"><a href="https://github.com/jordmax12/SparkHelp" target="_blank">Spark Help</a></h3>
                        <h4 className="vertical-timeline-element-subtitle mt10">ASP.NET Entity Frameworks, Bootstrap, MySQL, Azure (Database)</h4>
                        <p> After college I was pretty hungry to build something cool. I always found myself searching on the same programming sites for help (stackoverflow..etc) and figured why not automate this process. A user types in a question or keyword, and the software takes it through the various AI's and displayed data and metadata. For instance, it would tell you the upvote count for each answer we got back (maximum 6). This gave the user the efficiency to type once and search all. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2015"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<div className="tac"><i className="fab fa-microsoft projectIcon"></i></div>}
                    >
                        <h3 className="vertical-timeline-element-title"><a href="https://www.youtube.com/watch?v=iZ_GP43Gqgo&t=49s" target="_blank">Procedural Pathfinding Node Algorithm</a></h3>
                        <h4 className="vertical-timeline-element-subtitle mt10">C#, Unity3D</h4>
                        <p> This was one of my favorite things I did in college, which is why I included it in my highlites. This algorithm was able to work within any 3D or 2D environment and build out pathfinding nodes programatically at run-time. It took in account of terrain and obstacles. I used this for one of my game AI finals, and it took about 1.5 semesters to fully build out, a lot of which I did in my own free time. This was incredibly gratifying to build at the time. </p>
                    </VerticalTimelineElement> */}
                </VerticalTimeline>
            </React.Fragment>
        )
    }
}

export default Timeline;
