import React from "react";

const About = ({ teachersName }) => {
    return (
        <div className="card text-center">
            <div className="card-header">About Developer</div>
            <div className="card-body">
                <h5 className="card-title">Full-Stack MERN Developer</h5>
                <p className="card-text">Name&nbsp;: {teachersName}</p>
                <a
                    href="https://ciamacdavoudi.com/"
                    className="btn btn-success"
                >
                   Go to the Website
                </a>
            </div>
            <div className="card-footer text-muted">
                (:&nbsp;Happy Coding
            </div>
        </div>
    );
};

export default About;
