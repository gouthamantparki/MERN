import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export const NavbarComp = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className='w-100'>
                <Navbar.Brand className='w-25'>BLOG APP</Navbar.Brand>
                <Nav className="w-25 me-auto d-flex justify-content-around">
                    <div className='menu'><Link className='menus me-2' to="/signin">SignIn</Link></div>
                    <div className='menu'><Link className='menus me-2' to="/">Posts</Link></div>
                    <div className='menu'><Link className='menus me-2' to="/signup">Register</Link></div>
                    <div className='menu'><Link className='menus me-2' to="/create">Create Post</Link></div>
                </Nav>
            </Container>
        </Navbar>
    )
}
