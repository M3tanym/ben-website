import React from "react";

import {IconButton, Tooltip} from "@material-ui/core";

const LinkButton = props => {
    return (
        <Tooltip title={props.tooltipText}>
            <IconButton
                href={props.href}
                target="_blank"
                rel="noopener"
                className={props.className ? props.className : ""}
            >
                {props.icon}
            </IconButton>
        </Tooltip>
    );
};

export default LinkButton;