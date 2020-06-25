import React from 'react';

const Risks = (props) => (
  <div style={{ whiteSpace: 'pre-wrap' }}>
    {props.risks.replace(/[\r]+/g, '\n')}
  </div>
);

export default Risks;