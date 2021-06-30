import React, { useState, useEffect } from 'react';
import Search from './Search';
import ResultCard from './ResultCard';
import { ResultMap } from './ResultMap';

const RenderPrograms = (props) => {
    return props.programs.map((program, index) => {
        return (
            <div key={index}>
                <ResultCard program={program} />
            </div>
        );
    });
}

const Results = () => {

    const [formData, setFormData] = useState({
                                                searchContent: 'seattle',
                                                CareerEmp: ['Nursing'],
                                                HasCost: false,
                                                Under18: false,
                                                HasTransport: false,
                                                HasShadow: false,
                                                GradeLevels: [] 
                                            });
    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect( () => {
        setLoading(true);
        console.log("fetching...");

        fetch('http://nwhealthcareerpath.uw.edu/api/v1/search', 
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: new Headers({
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    })
            }
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    // console.log("fetched data: ", result);
                    setPrograms(result);
                },
                (error) => {
                    setLoading(false);
                    setError(error);
                }
            )
            .finally(setLoading(false));
    }, []);

    if (loading) {
        return (
            <p>Loading Programs...</p>
        );
    }

    return (
        <div>
            <Search />
            <ResultMap programs={programs} />
            <div className='mt-5'>
                <RenderPrograms programs={programs} />
            </div>
        </div>
    );
};

export default Results;