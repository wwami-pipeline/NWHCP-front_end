import React from 'react';
import Cur from './ProgramCard';
import singleOrg from '../data/singleOrg'

const Test = () => {
  console.log(singleOrg);
  return (
    <div>
      <Cur program={singleOrg}  />
    </div>
  );
}
 
export default Test;