import React from "react";

export const Hex = ({ icon, hexagonStyle, iconStyle }) => {
    return(
        <div className="hexagon" style={hexagonStyle}>
            <span
                className="hexagon-icon"
                style={iconStyle}
            >
                { icon }
            </span>
        </div>
    )
}