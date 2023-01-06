import React from 'react';
import { NavLink} from "react-router-dom";
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';
import GoToTop from './GoToTop';

const Footer = () => {

  return(
        <>
        <CDBFooter className="shadow">
          <CDBBox display="flex" flex="column" className=" mx-auto" style={{ width: '80%' }}>
            <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                  <div className='FooterInfoContainer'>
                      <CDBBox display="flex" style={{ width: '20%' }} justifyContent="around">
                                <a href="/" className="d-flex align-items-center p-0 text-dark">
                                  <img className='Fimg'
                                    alt="logo"
                                    src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Icon.png"
                                    width="30px"
                                  />
                                  {/* <span className="ml-3 h5 font-weight-bold">Cellix Bio</span> */}
                                </a>
                            {/* <div className='FooterContainerp'>
                                <p className="my-3">
                                  We are focusing to develop best-in-class therapies for the treatment of Neurological, Inflammatory and Metabolic Diseases.
                                </p>
                            </div> */}
                            <div className='FooterContainerp' display="flex" justifyContent="around">
                                  <ul className='FooterUL'>
                                    {/* <li><p className='Fdetails'>GLOBAL PATENTS: </p><b className='Fdetail'>645</b></li>
                                    <li><p className='Fdetails'>ISSUED U.S PATENTS: </p><b className='Fdetail'>184</b></li> */}
                                    {/* <li><p className='Fdetails'>PENDING U.S. PATENETS: </p><b className='Fdetail'>28</b></li> */}
                                  </ul>
                            </div>
                        </CDBBox>
                        <CDBBox display="flex" style={{ width: '20%' }} justifyContent="around" className="footernavlinks">
                              <CDBBox>
                                {/* <p className="h5 mb-4" style={{ fontWeight: '500', color:'whitesmoke' }}>
                                  Product
                                </p> */}
                                <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0'}}>
                                        <NavLink className={"Navlink"} to="/Home">Home</NavLink>
                                        <NavLink className={"Navlink"} to="/Pipeline">Pipeline</NavLink>
                                        <NavLink className={"Navlink"} to="/Patents">Patents</NavLink>
                                        <NavLink className={"Navlink"} to="/IP">Intellectual Property</NavLink>
                                </CDBBox>
                              </CDBBox>
                              <CDBBox>
                                {/* <p className="h5 mb-4" style={{ fontWeight: '500',color:'whitesmoke' }}>
                                  About Us
                                </p> */}
                                <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                                        {/* <NavLink className={"Navlink"} to="/About">About</NavLink> */}
                                        {/* <NavLink className={"Navlink"} to="/Leadership">Leadership</NavLink> */}
                                        <NavLink className={"Navlink"} to="/Inventor">Inventor</NavLink>
                                        <NavLink className={"Navlink"} to="/Media">Media</NavLink>
                                        <NavLink className={"Navlink"} to="/Careers">Careers</NavLink>
                                        <NavLink className={"Navlink"} to="/Contact">Contact</NavLink>
                                </CDBBox>
                              </CDBBox>
                        </CDBBox>
                  </div>
            </CDBBox>
              <CDBBox display="flex" className="mt-4 test" justifyContent="between">
                <div className='smallContainer'>
                  <small className="ml-2">&copy; Cellix Bio, {new Date().getFullYear()}. All rights reserved.</small>
                </div>
                <CDBBox display="flex">
                    <div className='FooterIcons'>
                        <CDBBtn href="https://www.cellixbio.com/" target={"_blank"} flat color="dark" className="p-2">
                          <CDBIcon  fab icon="google" />
                        </CDBBtn>
                        <CDBBtn href="https://www.linkedin.com/in/cellix-bio-36813111a/" target={"_blank"} flat color="dark" className="mx-3 p-2">
                          <CDBIcon fab icon="linkedin" />
                        </CDBBtn>
                        <CDBBtn href="https://www.facebook.com/profile.php?id=100089107628765&mibextid=ZbWKwL" flat color="dark" target={"_blank"} className=" p-2">
                          <CDBIcon fab icon="facebook-f" />
                        </CDBBtn>
                        <CDBBtn href="https://www.instagram.com/cellix_bio/" flat color="dark" target={"_blank"} className="mx-3 p-2">
                          <CDBIcon fab icon="instagram" />
                        </CDBBtn>
                        <CDBBtn href="https://twitter.com/CelixBio" flat color="dark" target={"_blank"} className="p-2">
                          <CDBIcon fab icon="twitter"/>
                        </CDBBtn>
                    </div>
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBFooter>
      <GoToTop/>
    </>
  );
};
export default Footer;