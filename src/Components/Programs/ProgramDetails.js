import React from 'react';
import { Link } from 'gatsby';
import { Button, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faGlobe,
    faEnvelope,
    faPhoneAlt,
    faMapMarkerAlt,
    faChevronDown,
    faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import '../../css/program-details.scss';

const ProgramDetails = (props) => {
    const validateUrl = (url) => {
        let valid = /^(ftp|http|https):\/\//.test(url);
        return valid ? url : 'http://' + url;
    };

    const program = {
        ...props.location.state,
        OrgWebsite: validateUrl(props.location.state.OrgWebsite),
        eligibilityRequirements: ['one', 'two'],
        targetPopulation: ['one', 'two'],
        other: ['one', 'two']
    };
    console.log(program);

    const emphasisList = program.CareerEmp.map((emphasis, index) => {
        return (
            <li key={index} className='w-50'>
                <span className='fa-li'>
                    <FontAwesomeIcon icon={faCheck} className='text-success' />
                </span>
                {emphasis}
            </li>
        );
    });

    // const [showMore, setShowMore] = useState(false);
    // const [contactInfo, setContactInfo] = useState(false);
    // const [programDetail, setProgramDetail] = useState(false);

    return (
        <div className='page-wrapper'>

            <Link to='/search-programs'>
                <FontAwesomeIcon icon={faChevronLeft} className='mr-2' />
                Search Results
            </Link>

            <h3 className='text-primary mt-4 mb-3'>{program.OrgTitle}</h3>

            {/* <p className={`mt-4 ${showMore || " text-truncate"}`}> */}
            <p>{program.ActivityDesc}</p>
            {/* <div className="my-4">
        <Button variant="link" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show less" : "Show more"}
        </Button>
      </div> */}

            <h4>Career Emphasis</h4>
            <ul className='fa-ul d-flex flex-row flex-wrap'>{emphasisList}</ul>

            <Button variant='primary' block className='my-4'>
                <FontAwesomeIcon icon={faGlobe} className='mr-2' />
                <a
                    href={program.OrgWebsite}
                    target='_blank'
                    className='text-white'
                >
                    Visit Program Website
                </a>
            </Button>

            <Accordion>
                <Accordion.Toggle as='h4' eventKey='0'>
                    {/* <h4 onClick={() => setContactInfo(!contactInfo)}> */}
                    <h4>
                        Contact Information
                        <FontAwesomeIcon
                            // icon={contactInfo ? faChevronUp : faChevronDown}
                            icon={faChevronDown}
                            className='ml-2'
                        />
                    </h4>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey='0'>
                    <ul id='contact-information' className='fa-ul contact-info'>
                        <li>
                            <span className='fa-li'>
                                <FontAwesomeIcon icon={faGlobe} />
                            </span>
                            <a href={program.OrgWebsite} target='_blank'>
                                {program.OrgWebsite}
                            </a>
                        </li>
                        <li>
                            <span className='fa-li'>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <a href={`mailto:${program.Email}`}>
                                {program.Email}
                            </a>
                        </li>
                        <li>
                            <span className='fa-li'>
                                <FontAwesomeIcon icon={faPhoneAlt} />
                            </span>
                            <a href={'tel:+1' + program.Phone.match(/\d+/g)}>
                                {program.Phone}
                            </a>
                        </li>
                        <li>
                            <span className='fa-li'>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </span>
                            {program.StreetAddress}, {program.City},{' '}
                            {program.State}, {program.ZipCode.slice(0, 5)}
                        </li>
                    </ul>
                </Accordion.Collapse>

                <Accordion.Toggle as='h4' eventKey='1'>
                    {/* <h4 onClick={() => setProgramDetail(!programDetail)}> */}
                    <h4 className='mt-4'>
                        Program Details
                        <FontAwesomeIcon
                            // icon={programDetail ? faChevronUp : faChevronDown}
                            icon={faChevronDown}
                            className='ml-2'
                        />
                    </h4>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey='1'>
                    <div>
                        <p className='text-primary text-uppercase mt-3'>
                            Eligibility requirements
                        </p>
                        <ul>
                            {program.eligibilityRequirements.map(
                                (item, index) => (
                                    <li key={index}>{item}</li>
                                )
                            )}
                        </ul>
                        <p className='text-primary text-uppercase'>
                            Target Population
                        </p>
                        <ul>
                            {program.targetPopulation.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className='text-primary text-uppercase'>Other</p>
                        <ul>
                            {program.other.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </Accordion.Collapse>
            </Accordion>
        </div>
    );
};

export default ProgramDetails;
