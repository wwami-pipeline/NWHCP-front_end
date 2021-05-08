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

function CareerEmpContainer(props) {
    console.log(props.careerEmp);
    return (
        <Col>
            <FontAwesomeIcon icon={faCheck} className="green-color" />
            {props.careerEmp}
        </Col>
        
    );
}

export function ResultCard(props) {

    let program = props.program;

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