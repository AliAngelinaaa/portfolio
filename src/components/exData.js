import th1 from '../images/th1.jpg';
import bs2 from '../images/bs2.jpg';

const exData = [
    {
        "Title": "I&O Service Recovery Analyst",
        "Company": "Healthfirst",
        "Date": "Sep 2024 - Present · 1 mo",
        "Description": [
            "Selected for an exclusive cohort of 29 professionals in a fast-paced early career development program, designed to accelerate growth in the service recovery and incident management domain",
            "Shadowing P1 and P2 incidents to support effective recovery processes, learning from the Incident Management Process and assisting in timely resolutions."
        ],
        "Image": "https://healthfirst.org/svg/logos/hf-logo.svg"
    },
    {
        "Title": "Co-Founder",
        "Company": "WIT Unite",
        "Date": "Nov 2023 - Present · 11 mos",
        "Description": [
            "Co-founded an initiative to inform CUNY school students about internships and career development programs in NYC and the wider New York area.",
            "Maintaining a discord server with 90+ members.",
            "Played a key role in building the community and fostering a space for data enthusiasts to connect, learn, and share knowledge."
        ],
        "Image": "https://example.com/wit-unite-logo.png"
    },
    {
        "Title": "Backend Engineering Intern",
        "Company": "The New York Times",
        "Date": "Jun 2024 - Aug 2024 · 3 mos",
        "Description": [
            "Integrated into a high-impact team of mid-level and senior engineers, actively participating in Agile ceremonies such as daily stand-ups, sprint planning, and retrospectives.",
            "Updated drone.yml configuration to redirect alert notifications from one Slack channel to another, improving notification management.",
            "Utilized Datadog to adjust alert calls, recorded all monitors in Excel, and ensured comprehensive tracking and reporting.",
            "Utilized BigQuery and its API to analyze data across three separate databases and ensure data integrity.",
            "Configured Amazon RDS for seamless data integration with Google Cloud Platform via Fivetran and PrivateLink."
        ],
        "Image": "https://example.com/nyt-logo.png"
    },
    {
        "Title": "TTP Residency Fellow",
        "Company": "NYC Tech Talent Pipeline",
        "Date": "Jun 2023 - Aug 2024 · 1 yr 3 mos",
        "Description": [
            "Selected as one of 40+ applicants to participate in the NYC Tech Talent Pipeline Web Development Program at Brooklyn College.",
            "Completed assignments with JavaScript, Node, Express, React, and PostgreSQL."
        ],
        "Image": "https://images.squarespace-cdn.com/content/v1/6290c8a39c101f5c88b06678/884771ff-90c6-4f19-bb00-3d4938bf669c/logo.png"
    },
    {
        "Title": "Engineering Intern",
        "Company": "Teladoc Health",
        "Date": "Jan 2024 · 1 mo",
        "Description": [
            "Partnered with 4 diverse interns to design and implement a unified onboarding workflow, resulting in a 20% increase in new hire satisfaction.",
            "Leveraged SharePoint, Forms, Confluence, and Excel to build a streamlined onboarding process."
        ],
        "Image": `${th1}`
    },
    {
        "Title": "GSWEP Fellow",
        "Company": "Google",
        "Date": "Oct 2023 - Dec 2023 · 3 mos",
        "Description": [
         
          "Selected from a competitive applicant pool of 350+ to participate in the Google GSWEP Program, a 10-week internship that provides students with the opportunity to work 1:1 with a Google Software Engineer on real-world projects."
        ],
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
      },
      {
        "Title": "Intern",
        "Company": "Wikitongues",
        "Date": "Sep 2023 - Dec 2023 · 4 mos",
        "Description": [
          "Upgraded legacy jQuery code to vanilla JavaScript, improving efficiency and performance.",
          "Reduced code complexity and improved readability by removing unnecessary jQuery dependencies.",
          "Ensured code compatibility with modern browsers and devices by migrating to JavaScript."
        ],
        "Image": "https://wikitongues.org/wp-content/uploads/2021/11/WT-Logo-Blk-01.png"
      },
      {
        "Title": "Tech Intern",
        "Company": "NYC Department of Education",
        "Date": "Oct 2023 - Nov 2023 · 2 mos",
        "Description": [
          "Troubleshooted and resolved a variety of printer issues for over 100 users, improving printer uptime by 20%.",
          "Developed and implemented a new printer maintenance procedure, reducing the average time to resolve printer issues by 15%."
        ],
        "Image": "data:image/png;base64,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"
      },
      {
        "Title": "Intern",
        "Company": "Blackstone",
        "Date": "Jan 2023 · 1 mo",
        "Description": [
          "Worked across several sub-teams with Blackstone's Technology and Innovations group to learn about and improve current work streams.",
          "Developed an API using React and Python, and managed the lifecycle of various tickets using JIRA."
        ],
        "Image": `${bs2}`
      },
      {
        "Title": "Spring Guild Program Participant",
        "Company": "Break Through Tech",
        "Date": "Apr 2022 · 1 mo",
        "Description": [
          "Completed a cohort-based program focused on building a website with a unique approach to CSS and HTML using Bootstrap."
        ],
        "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6MsLuFytedxrjyGhoPXCmgPWfA5o0A1Kjg&s"
      },
      {
        "Title": "Fall 2019 Exploring Program Participant",
        "Company": "New York Institute of Technology",
        "Date": "Nov 2019 · 1 mo",
        "Description": [
          "Participated in a program where students recreated games using Java and JavaScript hosted by NYIT."
        ],
        "Image": "https://www.longislandcolleges.com/college-photos/nyit-manhattan-campus.jpg"
      }
      

];
export default exData;