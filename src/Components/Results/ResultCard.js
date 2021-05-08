import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-regular-svg-icons'

// export class ResultCard extends React.Component {
//     render() {
//         return (
//             <Container>
//                 <Row>
//                     <Col xs={10}>
//                         <p className="font-size-12">
//                             <b className="font-size-14">Nursing Assistant Program</b>
//                             <br />
//                             Seattle Central College
//                             <br />
//                             1701 Broadway, Seattle, WA 98122
//                             <Row>
//                                 <Col>
//                                     <FontAwesomeIcon icon={faCheck} className="green-color" /> College
//                                 </Col>
//                                 <Col>
//                                     <FontAwesomeIcon icon={faCheck} className="green-color" /> Internship
//                                 </Col>
//                             </Row>
//                             2 days ago
//                         </p>
//                     </Col>
//                     <Col xs={2}>
//                         <h3>
//                             <FontAwesomeIcon icon={faStar} />
//                         </h3>
//                     </Col>
//                 </Row>
//                 <hr />
//             </Container>
//         )
//     }
// }

// Container for any career emphasis the program has (green checkmark if exists, defaults to all green)
// props takes in a careerEmp as a string that names a career emphasis
function CareerEmpContainer(props) {
    return (
        <Col>
            <FontAwesomeIcon icon={faCheck} className="green-color" />
            {props.careerEmp}
        </Col>
        
    );
}

// component to display an individual result for program search
// contains the title of the organization, phone number, street address
// takes in a prop called program (JSON of health careepathway program info)
export function ResultCard(props) {
    let program = props.program
    
    let generateCareerEmphasis = (careerEmp) => {
        let res = []
        for (let i = 0; i < careerEmp.length; i++) {
            res.push(
                <CareerEmpContainer careerEmp={careerEmp[i]} />
            )
        }
        return res;
    }

    return (
        <Container>
            <Row>
                <Col xs={10}>
                    <p className="font-size-12">
                        <b className="font-size-14">{program.OrgTitle}</b>
                        <br />
                        {program.Phone}
                        <br />
                        {program.StreetAddress}
                        <Row>
                            {generateCareerEmphasis(program.CareerEmp)}
                        </Row>
                        2 days ago
                    </p>
                </Col>
                <Col xs={2}>
                    <h3>
                        <FontAwesomeIcon icon={faStar} />
                    </h3>
                </Col>
            </Row>
            <hr />
        </Container>
    )
}