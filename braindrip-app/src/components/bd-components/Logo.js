import _Logo from "#root/assets/img/logo/logo_1.svg";

import React from 'react'

const Logo = ({ width=200, height=50 }) => {
    return (
        <a href="/">
            <img src={_Logo} width={width} height={height} alt="Brain Drip Logo" />
        </a>
    )
}

export default Logo
