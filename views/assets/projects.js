const projects = [
{
    link: '/databus.pdf',
    date: 'Novemer 2020 - February 2021',
    title: 'Databus ETL Pipeline',
    stack: 'Python, AWS Glue, AWS Athena, AWS S3, AWS SQS, AWS ApiGateway, AWS Lambda, AWS DynamoDB',
    description: 'ETL pipeline built with python. This project was fun because I\'ve never used Python before so this was a learning experience, but in a fun way. Also got to experiment with new AWS services such as Glue and Athena to query raw S3 data.',
    iconClass: 'fab fa-python projectIcon',
    iconColor: 'rgb(55,118,171)'
},
{
    link: 'https://www.npmjs.com/package/@npmpackageschicago/simple-fs',
    date: 'October 2020',
    title: 'Simple-FS',
    stack: 'NPM, NodeJS',
    description: 'Just a simple fs repo that helps using the fs system with promises and more functionality. Meant to be built upon over time.',
    iconClass: 'fab fa-npm projectIcon',
    iconColor: 'rgb(204,53,52)'
},
{
    link: 'https://www.npmjs.com/package/@npmpackageschicago/serverless-generator',
    date: 'September/October 2020',
    title: 'Serverless Generator CLI Tool',
    stack: 'NPM, Serverless Framework',
    description: 'Serverless-generator is agnostic to runtime language, and will build resources, iam policies, serverless file, package.json file and more. This is a CLI tool that prompts the user to select the options they desire, and we do all the setup work for you. Create as many resources as you like. Currently supports: Elasticsearch, DynamoDB, SQS, SNS (Topics & Subscriptions), S3, ApiGateway, RDS MySQL and RDS Postgres.',
    iconClass: 'fab fa-npm projectIcon',
    iconColor: 'rgb(204,53,52)'
},{
    link: 'https://www.npmjs.com/package/@syngenta-digital/dta',
    date: '2020',
    title: 'Syngenta Database Driver Adapter',
    stack: 'NodeJS, Neo4J, DynamoDB, MySQL, Postgres',
    description: 'This package was originally built as a multi-engine database driver for dynamodb, neo4j, mysql and postgres for use of our internal teams. We open sourced this package for public consumption.',
    iconClass: 'fab fa-npm projectIcon',
    iconColor: 'rgb(204,53,52)'
},{
    link: 'https://documentation.syngenta-digital.com/',
    date: 'September 2020',
    title: 'Syngenta Documentation (Front-End, Back-End)',
    stack: 'NPM, AWS Lambda, AWS ApiGateway, AWS S3, CircleCI',
    description: 'This project is a way for our API projects to automatically publish each of their OpenAPI schema files. I made a NPM package, which is built into our CICD process, to find your openAPI file, convert it to json and send it to an API I made. I have a publisher/subscriber design pattern impltemented which listens for new OpenAPI files, and when it detects a new one will convert it to HTML and publish it to an S3 bucket. I also created a front end (link above) that consumes this HTML and displays it for a user.',
    iconClass: 'fab fa-npm projectIcon',
    iconColor: 'rgb(204,53,52)'
},{
    link: '/EnogenArchitecture.pdf',
    date: 'January 2020 - Present',
    title: 'Enogen Initiative (with Syngenta)',
    stack: 'NodeJS, AWS Lambda, AWS ApiGateway, AWS SQS, AWS SNS, AWS DynamoDB',
    description: 'Built a series of microservices which services multiple applications interacting with modularized api\'s. This was a product being used by a multitude of our teams and is involved with millions of dollars of transactions a year.',
    iconClass: 'fab fa-aws projectIcon',
    iconColor: 'rgb(255,153,0)'
},{
    link: 'https://www.npmjs.com/package/generator-serverless-j',
    date: 'August 2020',
    title: 'generator-serverless-j',
    stack: 'NodeJS, Serverless',
    description: 'Building a CLI tool to generate serverless files, ability to have config.yml file to construct models and all the resources and apigateway resources you\'d need.',
    iconClass: 'fab fa-npm projectIcon',
    iconColor: 'rgb(204,53,52)'
},{
    link: 'https://www.npmjs.com/package/react-lightbox-slider',
    date: 'June 2020',
    title: 'react-lightbox-slider',
    stack: 'NPM, ReactJS',
    description: 'React component that is a image slider and shows a lightbox if you click on an image.',
    iconClass: 'fab fa-npm projectIcon',
    iconColor: 'rgb(204,53,52)'
}, {
    link: 'https://www.npmjs.com/package/react-barebones-modal',
    date: 'June 2020',
    title: 'react-barebondes-modal',
    stack: 'NPM, ReactJS',
    description: 'Simple react barebones modal component.',
    iconClass: 'fab fa-npm projectIcon',
    iconColor: 'rgb(204,53,52)'
}, {
    link: '',
    date: 'June 2020',
    title: 'Enogen PDF Generator (with Syngenta)',
    stack: 'NodeJS, AWS Lambda, AWS ApiGateway',
    description: 'Private API which allowed a user to submit a HTML string, or a base64 encoded string and convert it to a PDF. This was originally built as the mechanism that generated all the contracts between our company and our customers, which I also modularized and made into a re-usable API for other applications.',
    iconClass: 'fab fa-js-square projectIcon',
    iconColor: 'rgb(135,206,250)'
}, {
    link: '/PlatformAuthFlows.pdf',
    date: 'May 2020',
    title: 'Enogen Authentication API (with Syngenta)',
    stack: 'NodeJS, AWS Lambda, AWS ApiGateway, AWS Cognito, AWS DynamoDB',
    description: 'Microservice to handle login across all applications. Built to allow multiple forms of login including: email/pw, SSO (Facebook, Google, Active Directory), and SMS. Any application that needed to have users logged in would utilize this microservice.',
    iconClass: 'fab fa-aws projectIcon',
    iconColor: 'rgb(255,153,0)'
}, {
    link: '',
    date: 'May 2020',
    title: 'Enogen Notifications API (with Syngenta)',
    stack: 'NodeJS, AWS Lambda, AWS ApiGateway, AWS SES, Twilio, AWS SQS, AWS DynamoDB',
    description: 'Microservice for in-house use to deliver notifications using email or sms message.',
    iconClass: 'fab fa-aws projectIcon',
    iconColor: 'rgb(255,153,0)'
}, {
    link: 'https://dev-uikit.syndpe.com',
    date: 'December 2019',
    title: 'Syngenta UI Kit',
    stack: 'ReactJS',
    description: 'Private NPM package designed to be re-used components and styles across multiple projects.',
    iconClass: 'fab fa-react projectIcon',
    iconColor: 'rgb(97,218,251)'
}, {
    link: '/AgriedgeAppArchitecture.pdf',
    date: 'July 2019 - Feburary 2020',
    title: 'Agriedge (Back End, with Syngenta)',
    stack: 'NodeJS, AWS Lambda, AWS ApiGateway, AWS RDS, Serverless Framework.',
    description: 'Agriedge Calculator Tool was a tool designed to help sales reps and growers figure out how to get the most rebate out of their purchases, designed specifically to look at soil conditions, weather patterns..etc to recommend the best product, which then would give them a better rebate.',
    iconClass: 'fab fa-aws projectIcon',
    iconColor: 'rgb(255,153,0)'
}, {
    link: '/Agriedge2.png',
    date: 'July 2019 - Feburary 2020',
    title: 'Agriedge (Front End, with Syngenta)',
    stack: 'ReactJS, AWS S3, AWS Cloudfront, CSS, HTML.',
    description: 'Agriedge Calculator Tool was a tool designed to help sales reps and growers figure out how to get the most rebate out of their purchases, designed specifically to look at soil conditions, weather patterns..etc to recommend the best product, which then would give them a better rebate.',
    iconClass: 'fab fa-react projectIcon',
    iconColor: 'rgb(97,218,251)'
},
{
    link: 'https://www.fcbvita.com/',
    date: '2018-2019',
    title: 'FCB Vita',
    stack: 'GraphQL, Prisma, NodeJS, ReactJS, AWS (EC2, ECS, SQS, SNS, Rekognition), Azure (Cognitive Services), Google Cloud Platform (Kubernetes, Storage, Vision) Docker',
    description: 'Collection of small independent services that analyzed, tagged and retrieved metadata for an array of different media types using various intelligent machine learning API\'s such as: Google, AWS and Microsoft (Computer Vision). Set up an automated CICD pipeline for all of our services, and acted as the main orchestrator in managaing and maintaining the collection. I was also responsible for developing any new features and working closely with front-end teams to build out an front-facing website. On top of the ETL process we had to collect data, I built a GraphQL API on top of it that would allow our front-end team to communicate with it securely. I also built the authentication system, using GraphQL and JWT tokens.',
    iconClass: 'fab fa-js-square projectIcon',
    iconColor: 'rgb(135,206,250)'
},
{
    link: 'https://signal-code-challenge.herokuapp.com/',
    date: 'June 2019',
    title: 'Signal Coding Challenge',
    stack: 'NodeJS, Heroku',
    description: 'Simple notification CRUD api built as a coding challenge.',
    iconClass: 'fab fa-js-square projectIcon',
    iconColor: 'rgb(135,206,250)'
},
{
    link: '/AlexaMinerProject.png',
    date: 'June 2019',
    title: 'Alexa in the Browser (with FCB Chicago)',
    stack: 'NodeJS, Alexa Voice Services, AWS (Transcribe, DynamoDB)',
    description: 'Fun tool that enabled users to use an Alexa right from their browser. Record a question, and send it off to Alexa. Our process parsed the result, sent it through transcribe and stored the text result in DynamoDB.',
    iconClass: 'fab fa-js-square projectIcon',
    iconColor: 'rgb(135,206,250)'
},
{
    link: 'https://github.com/jordmax12/WERN-Skeleton',
    date: 'May 2019',
    title: 'WERN Skeleton',
    stack: 'Webpack, Express, ReactJS, NodeJS',
    description: 'Built a simple skeleton to help people get started on projects utilizing webpack, express, reactjs, and nodejs. Express can be interchanged with any other framework. This portfolio was built using WERN.',
    iconClass: 'fab fa-js-square projectIcon',
    iconColor: 'rgb(135,206,250)'
},
{
    link: 'https://www.youtube.com/watch?v=jBLSxzdbo4o&feature=youtu.be',
    date: 'May 2019',
    title: 'Photoshop Automation (with FCB Chicago)',
    stack: 'ES5 Javascript',
    description: 'Utilizing the Adobe Scripting API I was able to build out an automation script that made designers and copywriters more efficient by relieving them of tedius manual processes.',
    iconClass: 'fab fa-js-square projectIcon',
    iconColor: 'rgb(135,206,250)'
},
{
    link: 'https://github.com/jordmax12/discordbotesea',
    date: 'January 2019',
    title: 'Discord Bot',
    stack: 'NodeJS, Heroku',
    description: 'Utilizing the CSGO api, I made a Discord bot for a friend who had a Discord server of 1,000+ users daily. They used this server to set up scrims and matches in an online game called Counter-Strike. This Discord bot authenticated users and assigned them roles and rights depending on their rank on ESEA.',
    iconClass: 'fab fa-js-square projectIcon',
    iconColor: 'rgb(135,206,250)'
},
{
    link: 'https://www.amazon.com/Bioverativ-Infusion-Squad/dp/B07N395L84',
    date: 'November 2018',
    title: 'Infusion Squad (with FCB)',
    stack: 'Alexa Voice Services, NodeJS, Azure Serverless Functions, DynamoDB',
    description: 'Interactive Alexa app to help the Hemophilia community, specifically children. It provides a way to interact and obtain information for patients and their care givers about their existing condition and the overall infusion process. My first Alexa app published on the Alexa store.',
    iconClass: 'fab fa-js-square projectIcon',
    iconColor: 'rgb(135,206,250)'
},
{
    link: 'https://www.adsoftheworld.com/media/experiential/radio_flyer_radio_flyer_adventure_travel',
    date: 'July 2018',
    title: 'Radio Flyer Campaign (with FCB)',
    stack: 'NodeJS, ReactJS, Microsoft Cognitive Services',
    description: 'A fun program that uses AI to predict a users age, which changes the experience of the display depending on the age of the user. We gave a more fun experience if the user was a child, which was what this project was geared towards. Giving children an experience only they can experience, while the adult would get something completely different.',
    iconClass: 'fab fa-js-square projectIcon',
    iconColor: 'rgb(135,206,250)'
},
{
    link: 'https://game.symtuza.com/',
    date: 'May 2018',
    title: 'Symtuza: Don\'t Risk Resistance (with FCB)',
    stack: 'Javascript, HTML, CSS',
    description: 'I usually do not do front end projects, but this one was fun because it heavily involved building a "Bejeweled" like algorithm to work on the web. I had a lot of fun with this, because it reminded me of college building out game AI. It was a nice break from the usual development stuff. Getting it to work fast enough for the web was a big struggle, I was able to develop a unique way to check for matches and also built in the ability to make the board as big as the screen without any noticable different in speed of alogirhtm.',
    iconClass: 'fab fa-js-square projectIcon',
    iconColor: 'rgb(135,206,250)'
},
{
    link: 'https://alprolix.com/',
    date: 'November 2017',
    title: 'Alprolix (with FCB)',
    stack: 'ASP.NET Web Forms, ReactJS, AWS (Load Balancer, S3)',
    description: 'Alprolix is a medicine aimed to help people with Hemophilia B. It is a branch of Bioverativ (Sanofi). This website was developed to help people with Hemophilia B by getting them resources they need.',
    iconClass: 'fab fa-js-square projectIcon',
    iconColor: 'rgb(135,206,250)'
},
{
    link: 'https://eloctate.com/',
    date: 'October 2017',
    title: 'Eloctate (with FCB)',
    stack: 'ASP.NET Web Forms, ReactJS, AWS (Load Balancer, S3)',
    description: 'Eloctate is a medicine aimed to help people with Hemophilia A. It is a branch of Bioverativ (Sanofi). This website was developed to help people with Hemophilia A by getting them resources they need.',
    iconClass: 'fab fa-js-square projectIcon',
    iconColor: 'rgb(135,206,250)'
},
{
    link: 'https://itunes.apple.com/us/app/newser/id334678577?mt=8',
    date: '2017',
    title: 'Newser Mobile App',
    stack: 'Xamarin, Azure, ASP.NET (API), Azure Notification Hub',
    description: '(Released on: App Store & Google Play) Read less - know more. Newser makes it easy to read less and know more: stories are brief - usually two paragraphs that tell you all you need to know about the day\'s most important and interesting news.',
    iconClass: 'fab fa-microsoft projectIcon',
    iconColor: 'rgb(233, 30, 99)'
},
{
    link: 'https://m.newser.com/',
    date: '2017',
    title: 'Newser Site Redesign',
    stack: 'ASP.Net Web Forms, RactiveJS, SemanticUI',
    description: 'This project had several components: redo mobile website, add funtionality to current website (features that required back-end admin portal changes), and more. These seperate components were built out during my time at Newser. I was able to add revenue with faster ad loading, while also building on the current functionality and improving the admin portal to give editors more power. I successfully integrated social media embeds, responsive youtube embeds, and also redid the entire mobile website.',
    iconClass: 'fab fa-microsoft projectIcon',
    iconColor: 'rgb(233, 30, 99)'
},
{
    link: 'https://itunes.apple.com/us/app/nextcrew/id1031706393?mt=8',
    date: '2016',
    title: 'Nextcrew Mobile App',
    stack: 'ASP.Net (API), Cordova, RactiveJS',
    description: '(Released on: App Store & Google Play) Fun Cordova mobile app I built during my time at Nextcrew.',
    iconClass: 'fab fa-microsoft projectIcon',
    iconColor: 'rgb(233, 30, 99)'
},
{
    link: '',
    date: '2016',
    title: 'Nextcrew Quickbooks Integration',
    stack: 'C#, .NET',
    description: 'We found a lot our clients had to manually enter in data to Quickbooks, using C#, I was able to build a program that automated all those processes. We saved our clients a lot of money from having to hire accountants to do the same work.',
    iconClass: 'fab fa-microsoft projectIcon',
    iconColor: 'rgb(233, 30, 99)'
},
{
    link: 'https://github.com/jordmax12/SparkHelp',
    date: 'May 2015',
    title: 'SparkHelp',
    stack: 'ASP.NET Entity Frameworks, Bootstrap, MySQL, Azure (Database)',
    description: 'After college I was pretty hungry to build something cool. I always found myself searching on the same programming sites for help (stackoverflow..etc) and figured why not automate this process. A user types in a question or keyword, and the software takes it through the various AI\'s and displayed data and metadata. For instance, it would tell you the upvote count for each answer we got back (maximum 6). This gave the user the efficiency to type once and search all.',
    iconClass: 'fab fa-microsoft projectIcon',
    iconColor: 'rgb(233, 30, 99)'
},
{
    link: 'https://www.youtube.com/watch?v=iZ_GP43Gqgo&t=49s',
    date: '2015',
    title: 'Procedural Pathfinding Node Algorithm',
    stack: 'C#, Unity3D',
    description: 'This was one of my favorite things I did in college, which is why I included it in my highlites. This algorithm was able to work within any 3D or 2D environment and build out pathfinding nodes programatically at run-time. It took in account of terrain and obstacles. I used this for one of my game AI finals, and it took about 1.5 semesters to fully build out, a lot of which I did in my own free time. This was incredibly gratifying to build at the time.',
    iconClass: 'fab fa-microsoft projectIcon',
    iconColor: 'rgb(233, 30, 99)'
}
]

export default projects;