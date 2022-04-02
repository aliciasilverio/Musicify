import React from "react";
import '../App.css';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }
    
// SRC WILL COME FROM PROPS NOT CONST
    const src = source;     
    return (
        // basic bootstrap classes. you can change with yours.
        <div className="musicvideos">
            <div className="emdeb-responsive">
                <iframe src={src}></iframe>
            </div>
        </div>
    );
};

export default Iframe;