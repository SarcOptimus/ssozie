import React from 'react'

export default function LinkCards() {
    var s =[];
    var requestObj = function(){
        fetch("http://localhost:3031/link_db").then(response => {response.json()})
             .then(data => { s.push(data);
                console.log(data[0].id); });
    }  
        return (
        <div className='text-light'>
            {requestObj}
        </div>
    )

}
