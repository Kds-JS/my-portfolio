import { Link } from '@chakra-ui/react';
import React from 'react';
import { Url } from 'url';

type navlinkProps = {
    link : string;
    text : string;
}

const NavLink = ({link, text}: navlinkProps) => {

    return (
        <Link href={link} target="_blank" _hover={{color: 'primary.500'}}>{text}</Link>
    );
};

export default NavLink;