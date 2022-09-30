import React from 'react';
import {Link} from "react-scroll";


const ButtonDown = (props:any) => {

    return (
        <Link 
        activeClass="active" to="about" spy={true} smooth={false} offset={0} 
            >
                {props.children}
        </Link>
    );
};

export default ButtonDown;