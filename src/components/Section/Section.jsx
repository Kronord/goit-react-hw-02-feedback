import React from "react";
import propTypes from "prop-types";

const Section = ({ title, children }) => { 
    console.log(title, children);
    return (
        <section>
            <h1>
                {title}
            </h1>
            {children}
        </section>
    );
};

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.object.isRequired,
};

export default Section;