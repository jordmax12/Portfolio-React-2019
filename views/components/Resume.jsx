import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class Resume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="resume-container" style={{ backgroundColor: 'white' }}>
                <Grid container>
                    <Grid item md={3}>
                        <div className="resume-me">
                            <img className="me-image" src="./jordan.jpg" alt="Jordan" />
                            <div className="social-container">
                                <ul className="social">
                                    <li><a target="_blank" href="https://www.github.com/jordmax12"><i className="fab fa-github fa-2x"></i></a></li>
                                    <li><a target="_blank" href="https://linkedin.com/pub/jordan-max/87/59b/b45/"><i className="fab fa-linkedin fa-2x"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={9}>
                        <div className="resume-jobs">
                            <section id="about" className="bgWhite ofsInBottom" style={{ padding: '30px' }}>
                                <div className="about">
                                    <div className="main-title">
                                        <h1 style={{ color: '#000000 !important' }}>Experience</h1>
                                        <div className="divider">
                                            <div className="zigzag large clearfix" data-svg-drawing="yes">
                                                {/* <svg throwIfNamespace xml:space="preserve" viewBox="0 0 69.172 4.975" width="37" height="28" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                       <path d="M1.357,12.26 10.807,2.81 20.328,12.332
                                            29.781,2.879 39.223,12.321 48.754,2.79 58.286,12.321 67.815,2.793 " className="test"></path>
                                    </svg> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="block-content ">
                                            <div className="timeline experience">
                                                <div className="row ">
                                                    <div className="col-md-12">
                                                        <div className="exp-holder margTop">
                                                            <div className="exp">
                                                                <div className="hgroup" id="fcbResumeItem" style={{ minHeight: '60px' }}>
                                                                    <div className="resumeImage" style={{ float: 'left', width: '60px' }}>
                                                                        <img src="/FCB_logo.png"
                                                                            style={{ width: '50px', height: '50px' }} />
                                                                    </div>
                                                                    <div className="resumeItem" style={{ float: 'left' }}>
                                                                        <h4>Software Engineer – FCB Chicago </h4>
                                                                        <h6><i className="icon-calendar"></i>July 2017 - Present</h6>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <ul>
                                                                        <li className="lst-disc w100 floatL">Tasked with learning new technologies to find innovative solutions
                                                   to meet the needs of demanding clientele.</li>
                                                                        <li className="lst-disc w100 floatL">Majority of work done in Linux, Express, Mongo/MySQL, NodeJS stack.</li>
                                                                        <li className="lst-disc w100 floatL">Heavily works with client-owned data storage technologies.</li>
                                                                        <li className="lst-disc w100 floatL">Created and maintains a flagship product being built using AI.
                                                       Securely building the back-end encompassing a secure exposed API,
                                                   third party API integration mini-services, admin portal and more.</li>
                                                                        <li className="lst-disc w100 floatL">Interacts and negotiates with project managers, design, UX and tech
                                                                        leads; communicates how code changes may impact future releases and
                                                   overall architecture.</li>
                                                                        <li className="lst-disc w100 floatL">Regularly works well with new or unknown programming languages (or
                                                                        frameworks) while excelling at adapting quickly to the differences in
                                                   syntax within tight deadlines.</li>
                                                                        <li className="lst-disc w100 floatL">Mostly used technologies: GraphQL, NodeJS/Express, ES6 Javascript,
                                                                        ReactJS, KeystoneJS, Docker, AWS (ECS, EC2 Load Balancers, Route53,
                                                   CodePipeline/CodeBuild, SES/SNS/SQS, CodeCommit, IAM, S3 and more)</li>
                                                                        <li className="lst-disc w100 floatL">Lightly used technologies: .NET/Entity Frameworks, PHP, Golang,
                                                   Google Cloud Services, Azure Web Services, Alexa</li>
                                                                    </ul>
                                                                </div>

                                                            </div>
                                                            <div className="exp">
                                                                <div className="hgroup" id="newserResumeItem" style={{ minHeight: '60px' }}>
                                                                    <div className="resumeImage" style={{ width: '60px', float: 'left' }}>
                                                                        <img src="/newser.jpg"
                                                                            style={{ width: "50px", height: "50px" }} />
                                                                    </div>
                                                                    <div className="resumeItem" style={{ float: 'left' }}>
                                                                        <h4>Software Engineer – Newser </h4>
                                                                        <h6><i className="icon-calendar"></i>May 2016 - Jun 2017</h6>
                                                                    </div>
                                                                </div>
                                                                <ul>
                                                                    <li className="lst-disc w100 floatL">Optimized page load speeds by improving back end and front-end</li>
                                                                    <li className="lst-disc w100 floatL">Updated, Optimized and fixed mobile app deficiencies.</li>
                                                                    <li className="lst-disc w100 floatL">Created additional revenue via mobile application</li>
                                                                    <li className="lst-disc w100 floatL">Optimizing old code to newer architecture</li>
                                                                    <li className="lst-disc w100 floatL">Technologies used: ASP.NET 4.6, MSQL, Xamarin, Azure, TFS, jQuery, HTML5/CSS</li>
                                                                </ul>
                                                            </div>
                                                            <div className="exp">
                                                                <div className="hgroup" id="nextcrewResumeItem" style={{ minHeight: '60px' }}>
                                                                    <div className="resumeImage" style={{ width: '60px', float: 'left' }}>
                                                                        <img src="/nextcrew.png"
                                                                            style={{ width: "50px", height: "50px" }} />
                                                                    </div>
                                                                    <div className="resumeItem" style={{ float: 'left' }}>
                                                                        <h4>Software Engineer – NextCrew, LLC </h4>
                                                                        <h6><i className="icon-calendar"></i>Feb 2015 - May 2016</h6>
                                                                    </div>
                                                                </div>
                                                                <ul>
                                                                    <li className="lst-disc w100 floatL">Lead mobile engineer - designed developed and deployed a hybrid mobile app using Cordova</li>
                                                                    <li className="lst-disc w100 floatL">Lead an .NET project which connected Quickbooks Online endpoints to successfully integrate our software with theirs</li>
                                                                    <li className="lst-disc w100 floatL">Lead a project that moved our front end to a updated and modern UI framework (Semantic UI) as well as a Javascript framework (RactiveJS)</li>
                                                                    <li className="lst-disc w100 floatL">Technologies Used: ASP.NET, Cordova, MSQL, TFS, RactiveJS, Semantic UI, Jira, Xcode 9</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-title">
                                        <h1 style={{ color: "#000000 !important" }}>Education</h1>
                                        <div className="divider">
                                            <div className="zigzag large clearfix " data-svg-drawing="yes">
                                                {/* <svg  viewBox="0 0 69.172 4.975" width="37" height="28" y="0px"
                                       x="0px" xmlns:xlink="http://www.w3.org/1999/xlink"
                                       xmlns="http://www.w3.org/2000/svg" version="1.1">
                                       <path d="M1.357,12.26 10.807,2.81 20.328,12.332
                                            29.781,2.879 39.223,12.321 48.754,2.79 58.286,12.321 67.815,2.793 "
                                          style="stroke-dasharray: 93.9851, 93.9851; stroke-dashoffset: 0;"></path>
                                    </svg> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="block-content">
                                            <div className="timeline education">
                                                <div className="row ">
                                                    <div className="col-md-12">
                                                        <div className="exp-holder margTop">
                                                            <div className="exp">
                                                                <div className="hgroup">
                                                                    <h4>Bachelor Degree – Columbia College Chicago</h4>
                                                                    <i style={{ color: "#0071BC" }}>Mobile & Software Programming</i>
                                                                    <h6><i className="icon-calendar"></i>Aug 2012 - May 2016</h6>
                                                                </div>
                                                                <ul>
                                                                    <li className="lst-disc w100 floatL">Data structures, database design, mobile programming, web app development</li>
                                                                    <li className="lst-disc w100 floatL">3.4 GPA and ‘Deans list’ recipient</li>
                                                                    <li className="lst-disc w100 floatL">Completed various personal and team-based projects such as: SweetsComplete (PHP, ASP.NET MVC5 Entity Frameworks), Spark Help (ASP .NET MVC5 Entity Frameworks), Hamstar (Unity3D, C#, Javascript), Procedural AI pathfinding node generation algorithm (C#)</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button ofsInTop tCenter clearfix">
                                        <div className="divider">
                                            <div className="zigzag large clearfix " data-svg-drawing="yes">
                                                {/* <svg  viewBox="0 0 69.172 14.975" width="37" height="28" y="0px"
                                       x="0px" xmlns:xlink="http://www.w3.org/1999/xlink"
                                       xmlns="http://www.w3.org/2000/svg" version="1.1">
                                       <path d="M1.357,12.26 10.807,2.81 20.328,12.332
                                            29.781,2.879 39.223,12.321 48.754,2.79 58.286,12.321 67.815,2.793 "
                                          style="stroke-dasharray: 93.9851, 93.9851; stroke-dashoffset: 0;" />
                                    </svg> */}
                                            </div>
                                        </div>
                                        <div className="mt25 tac">
                                            <a className="but opc-1 ico" href="https://jdmdev.net/portfolio/Resume.pdf"
                                                target="_blank"><i className="fa fa-download mr10" aria-hidden="true"></i>Download my cv</a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Resume;