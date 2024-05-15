import React from 'react';
import { FaSearch, FaSyncAlt, FaHome } from 'react-icons/fa';

const ButtonComponent = ({ icon, text, onClick, style }) => {
    let IconComponent;

    switch (icon) {
        case 'search':
            IconComponent = FaSearch;
            break;
        case 'sync':
            IconComponent = FaSyncAlt;
            break;
        case 'home':
            IconComponent = FaHome;
            break;
        default:
            IconComponent = null;
    }

    return (
        <button style={style} onClick={onClick}>
            {IconComponent && <IconComponent />}
            {text}
        </button>
    );
}

export default ButtonComponent;
