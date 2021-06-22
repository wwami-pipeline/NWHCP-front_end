import React from 'react';
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
        <div className="flex-row">
            <FontAwesomeIcon icon={faCheck} className="green-color" />
            <p className="emphasis">{props.careerEmp}</p>
        </div>
        
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
                        <p className="font-size-14">{program.OrgTitle}</p>
                        <p className="program-details">{program.Phone}</p>
                        <p className="program-details">{program.StreetAddress}</p>
                        <div className="flex-row">
                            {generateCareerEmphasis(program.CareerEmp)}
                        </div>
                        <p>2 days ago</p>
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