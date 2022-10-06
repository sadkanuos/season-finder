import React from "react";
const Loading = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
};

// this will provide some default properties to the method
Loading.defaultProps = {
    message: "Loading"
};

export default Loading;