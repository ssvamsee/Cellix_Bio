import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link, Routes, Route } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Home from "./Home";
import PT from "./PT";
import About from "./About";
import IP from "./IP";
import Pipeline from "./Pipeline";
import Leadership from "./Leadership";
import Contact from "./Contact";
import Logo from "./Logo";
import Patents from "../Body/Patents/Patents";
import PatentsDashboard from '../Body/Patents/Years/PatentsDashboard';
import { useState} from 'react';
import Error404 from '../Body/Error404';
import PatentInfo from '../Body/Patents/Years/PatentInfo';

function NavBar() {

        const [search, setSearch] = useState({
            searchTerm: {searchNumber: ''}
        });
        let updateSearch = (event) => {
            setSearch({
                ...search,
                searchTerm: {
                    ...search.searchTerm,
                    [event.target.name] : event.target.value
                }
            })
        };
        let searchClick = (event) => {
            event.preventDefault();
            console.log(search.searchTerm);
        }


        return (
            <>
                <div>
                
                    <Navbar collapseOnSelect bg="dark" variant={"dark"} expand="lg" ><Logo></Logo>
                        <Navbar.Brand href="#">
                           
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav
                                className="mr-auto my-2 my-xxl-0"
                                style={{ maxHeight: '100%'}}
                                responsive-navbar-nav
                            >
                                <Nav.Link as={Link} to="/Home" eventKey="1">Home</Nav.Link>
                                <Nav.Link as={Link} to="/About" eventKey="2">About</Nav.Link>
                                <Nav.Link as={Link} to="/Patents" eventKey="3">Patents</Nav.Link>
                                <Nav.Link as={Link} to="/PT" eventKey="4">Platform Technologies</Nav.Link>
                                <Nav.Link as={Link} to="/IP" eventKey="5">Intellectual Property</Nav.Link>
                                <Nav.Link as={Link} to="/Pipeline" eventKey="6">Pipeline</Nav.Link>
                                <Nav.Link as={Link} to="/Leadership" eventKey="7">Leadership</Nav.Link>
                                <Nav.Link as={Link} to="/Contact" eventKey="8">Contact</Nav.Link>

                            </Nav>
                           
                            <Form className="Navform">
                                <Form.Control
                                onChange={updateSearch}
                                type="search"
                                placeholder="Enter WIPO Number or Therapeutic Area"
                                className="me-2 Navform"
                                aria-label="Search"
                                />
                                <Button classname="Navbutton" variant="outline-secondary" size="sm" onClick={searchClick}>Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route path='/Home' element = {<Home></Home>}></Route>
                        <Route path='/About' element = {<About></About>}></Route>
                        <Route path='/Patents' element = {<Patents></Patents>}></Route>
                        <Route path='/PT' element = {<PT></PT>}></Route>
                        <Route path='/IP' element = {<IP></IP>}></Route>
                        <Route path='/Pipeline' element = {<Pipeline></Pipeline>}></Route>
                        <Route path='/Leadership' element = {<Leadership></Leadership>}></Route>
                        <Route path='/Contact' element = {<Contact></Contact>}></Route>
                        <Route path='/PatentsDashboard/:years' element = {<PatentsDashboard></PatentsDashboard>}></Route>
                        <Route path='/PatentInfo/:wno' element = {<PatentInfo></PatentInfo>}></Route>
                        <Route path='/Cellix_Bio' element={<Home></Home>}></Route>
                        <Route path='*' element={<Error404/>}></Route>
                    </Routes>
                </div>
            </>
        );
    }
export default NavBar;
