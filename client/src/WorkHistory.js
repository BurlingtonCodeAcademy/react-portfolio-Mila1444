import React from 'react'
import ResumePDF from './images-icons/resume/Resume_MilagroCarranza.pdf';
import Resume from './images-icons/resume/resume.png';

function WorkHistory(props) {
    return (
        <div id='main-container'>
            <div id='body'>
                <h3> Work History</h3>
                <div id='company'>
                    <h5>American Meadows</h5>
                    {/* <p>Link to Company, maybe add logo</p> */}
                    <p>Online retailer of wildflower seeds, perennial plants and flower bulbs.</p>
                    <p>Jul 2019 – May 2020</p>
                    <p>Digital Marketing Manager:</p>
                    <ul>
                        <li>Managed SEO efforts, including keyword research, analysis and implementation into content and other aspects of websites. Analyzed and optimized paid social campaigns in several social media platforms. Manage, optimize and report on KPI's for all digital marketing programs across all channels and device types and presented data during weekly company meetings</li>
                        <li>Managed a monthly paid advertising budget of $100K</li>
                        <li>Working with partner agencies, achieved a 76% increase in CTR, 90% increase in conversion rate, 50% decrease in CPL and 66% increase in ROAS by creating and optimizing search, display, social, and remarketing campaigns</li>
                    </ul>
                </div>
                <div id='company'>
                    <h5>iMarket Solutions</h5>
                    {/* <p>Link to Company, maybe add logo</p> */}
                    <p>Digital marketing agency for HVAC contractors.</p>
                    <p>Jul 2017 – Mar 2019</p>
                    <p>Search Engine Marketing Specialist:</p>
                    <ul>
                        <li>Proposed new strategies, oversaw implementation and provided in-depth analysis/reporting. Presented during intra and interdepartmental meetings on topics ranging from platform changes and new advertising features, to landing page optimization, best practices, and new strategies.</li>
                        <li>Managed $2M+ in client spend</li>
                        <li>Achieved a 103% increase in CTR, 130% increase in conversion rate and 77% decrease in CPL by creating and optimizing search, display, and remarketing campaigns</li>
                    </ul>
                </div>
            </div>
            <div id='sidebar'>
            <h5> Download my resume for my complete work history:</h5>
                <div id='resume-wrapper'>
                    <a href={ResumePDF}
                        download="Personal Resume">
                        <img src={Resume} alt="My Personal Resume Screenshot"></img>
                    </a>
                    <a href={ResumePDF}
                        download="Personal Resume">
                        <p>Donwload my resume</p>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default WorkHistory