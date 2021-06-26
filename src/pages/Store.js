import React from 'react'

const Store = ({match}) => {
    return ( 
        <div>
            {match.params.location}
        </div>
     );
}
 
export default Store;