import React, { useState } from 'react';
import List from './List';

function BatchBy() {

  return (
      <div>
        <p style={{textAlign:'left', fontWeight:'bold'}}>Executing Agri-Input Orders &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Batch By</p>
        <hr />
            <List />
      </div>
    
  );
}

export default BatchBy;
