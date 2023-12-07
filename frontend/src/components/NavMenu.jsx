// src/NavMenu.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMenu } from '../api';
import Loader from './Loader';
import { Burger, Nav, NavList } from './NavMenu.style';
import logo from '../assets/logo.svg';
import menu from '../assets/menu-2.png';

const NavMenu = () => {
    const { data: menuItems, isLoading, error } = useQuery(['menu', 'top-nav'], () => getMenu());
    const [isOpen, setIsOpen] = useState(false);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        console.error('Error fetching menu:', error.message);
        return <div>Error fetching menu</div>;
    }

    return (
        <Nav>
            <img src={logo} alt="Logo" />
            <NavList isOpen={isOpen}>
                {menuItems.map((menuItem) => (
                    <li className={menuItem.classes} key={menuItem.id}>
                        <Link to={menuItem.href}>{menuItem.name}</Link>
                    </li>
                ))}
            </NavList>
            <Burger onClickCapture={() => { setIsOpen(!isOpen) }} className='burger' src={menu} alt="" />
        </Nav>
    );
};

export default NavMenu;
