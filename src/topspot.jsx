import React from 'react';

export default props => (

    <div className='well'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a href={props.href} className="btn btn-link">google maps</a>
    </div>


);
