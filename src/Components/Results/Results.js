import React, { useState, useEffect } from 'react';
import Search from './Search';
import ResultCard from './ResultCard';
import { ResultMap } from './ResultMap';

const fetchPrograms = (formData, setPrograms, setLoading, setError) => {
    setLoading(true);
    // console.log("fetching...");

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
}

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
                                                CareerEmp: [],
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
        fetchPrograms(formData, setPrograms, setLoading, setError);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("form data", formData);
        setFormData(formData);
        fetchPrograms(formData, setPrograms, setLoading, setError);
    }

    return (
        <div>
            <Search formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
            <ResultMap programs={programs} />
            <div className='mt-5'>
            <h3 className="text-center text-primary mb-4">Search results found {programs.length} programs</h3>
            {
                loading ? <p>Loading Programs...</p> :
                error ? <p>Error fetching programs...</p> :
                <RenderPrograms programs={programs} />
            }
            </div>
        </div>
    );
};

export default Results;