import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./navbar.css";



function Navbarsite() {
    const expand = "md"

    return (

        <>

            <Navbar style={{ background: "#ccc" }} expand={expand} className=" mb-3">
                <Container >
                    <Navbar.Brand className="lalezar fs-4" href="#">   amirnematzadeh </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                بلاگ نکست وان کد
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <hr />
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <NavLink style={({ isActive }) =>
                                    isActive
                                        ? {
                                            borderBottom: "1px solid black",fontWeight: "bold"
                                        }
                                        : { fontWeight: "600" }
                                }
                                    className="nav-link " to={"/"}> صحفه نخست </NavLink>

                                <NavLink style={({ isActive }) =>
                                    isActive
                                        ? {
                                            borderBottom: "1px solid black",fontWeight: "bold"
                                        }
                                        : { fontWeight: "600" }
                                } className="nav-link" to={"/addarticle"}>ساخت مقاله</NavLink>
                                <NavLink style={({ isActive }) =>
                                    isActive
                                        ? {
                                            borderBottom: "1px solid black",fontWeight: "bold"
                                        }
                                        : { fontWeight: "600" }
                                } className="nav-link" to={"/about"}>درباره ما</NavLink>

                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}
export default Navbarsite