import React from 'react';

const Blogs = () => {
    const array = [];
    for (let index = 0; index < 10; index++) {
        array.push(index+1);
    }
    return <>
        <div style={{display:'flex',  flexDirection: 'column'}}>{array.map((item) => <h2 style={{display: 'flex', justifyContent: 'center', backgroundColor: 'red', position: 'relative'}}>{item}</h2>)}</div>
    </>
};

export default Blogs;