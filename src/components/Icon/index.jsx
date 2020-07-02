import React from 'react';

import { ResultIcon } from './styles';


function Icon({ svg, active }) {
  return (
        <ResultIcon svg={ svg } active={ active }/>
  );
}

export default Icon;