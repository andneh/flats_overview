import React from "react";

const Loader = () => (
    <div style={{ display: "flex", justifyContent: "center", margin: ".5rem" }}>
        <div className="lds-dual-ring" />
    </div>
);

export default Loader;