import {images} from '../../image';
import React from 'react'
import { Paper } from "@material-ui/core";
import '../.././App.css';

export default function PageNotFound() {
    return (
        <Paper>
            <img src={images.notFoundPage} className = "pageNotFound" />
            {/* <h4>Page Not Found...</h4> */}
        </Paper>
    )
}