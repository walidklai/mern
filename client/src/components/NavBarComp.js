import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, Container
} from 'reactstrap'

const NavBarComp = () => {
    const [toggler, setToggler] = useState(false)
    const toggle = () => {
        setToggler(!toggler)
    }
    return (
        <div>
            <Navbar color='dark' dark expand='sm' className='mb-5'>
                <Container>
                    <NavbarBrand href='/'>▒▓ ìo-Märket ▓▒</NavbarBrand>
                    <NavbarToggler onClick={() => toggle()} />
                    <Collapse isOpen={toggler} navbar>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <NavLink href='https://google.com'>Google</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBarComp