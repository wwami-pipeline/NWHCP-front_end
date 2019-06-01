import React from 'react';
import './resources.css'

const resourceLinks = [
    {
        state: "Washington",
        links: [
            {
                title: "Map your Career",
                urls: ["http://www.mapyourcareer.org/healthcare"]
            },
            {
                title: "Washington Career Bridge", 
                urls: ["http://www.careerbridge.wa.gov"]
            },
            {
                title: `Washington State Board of Community and Technical Colleges - "Right Career for You"`,
                urls: ["https://www.sbctc.edu/starting-your-career/right-career-for-you.aspx",]
            },
            {
                title: `Washington State Board of Community and Technical Colleges - "College Program Search"`,
                urls: ["https://www.sbctc.edu/our-colleges/search-college-programs/default.aspx"]
            },
            {
                title: "Eastern Washington AHEC website", 
                urls: ["https://sites.ewu.edu/ewahec/"]
            },
            {
                title: "AHEC for Western Washington", 
                urls: ["https://ahecww.org/"]
            },
            {
                title: "Washington Department of Health - Health Professions Page", 
                urls: ["https://www.doh.wa.gov/LicensesPermitsandCertificates/ProfessionsNewReneworUpdate"]
            },
            {
                title: "Accessibility", 
                urls: [
                    "https://www.access-board.gov/guidelines-and-standards",
                    "https://www.ada.gov/pcatoolkit/chap5toolkit.htm",
                    "http://www.w3.org/WAI/standards-guidelines/"
                ]
            }
        
        ]
    },
    {
        state: "Alaska",
        links: [],
    },
    
    {
        state: "Idaho",
        links: []
    },
    {
        state: "Montana",
        links: [],
    },
    
    {
        state: "Wyoming",
        links: [],
    },
    
] 

class Resources extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="center">Resources</h1>
                    {
                        resourceLinks.map(oneState => {
                            return (
                                <div>
                                <h2 className="stateTitle">{oneState.state}</h2>
                                    {
                                        oneState.links.length > 0 ? 
                                        oneState.links.map( item => {
                                            return (
                                                <ul>
                                                    <li key={item.title} className="resourceItem">
                                                        <h2 className="resouceTitle">{item.title}</h2>
                                                        {   
                                                            item.urls.map( url => {
                                                                return (
                                                                    <div key={url}><a className="resourceURL" href={url}>{url}</a></div>
                                                                )
                                                            })
                                                        }  
                                                    </li>
                                                </ul>
                                            )
                                        }) : <div></div>
                                    }
                                </div>
                                )
                        })
                    }
                    
            </div>
        )
    }
}

export default Resources