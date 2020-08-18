import _Logo from "#root/assets/img/logo/logo_1.svg";

import React from 'react'
import { Link } from 'react-router-dom';

const Logo = ({ width = 200, height = 50 }) => {
    return (
        <Link to="/">
            <img src={_Logo} width={width} height={height} alt="Brain Drip Logo" />
        </Link>
    )
}

export default Logo
