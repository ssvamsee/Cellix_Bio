import React from 'react';
import { NavLink} from "react-router-dom";
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';
import GoToTop from './GoToTop';
const Footer = () => {
  return(
        <>
        <CDBFooter className="shadow">
          <CDBBox display="flex" flex="column" className=" mx-auto py-5" style={{ width: '80%' }}>
            <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                  <div className='FooterInfoContainer'>
                      <CDBBox>
                                <a href="/" className="d-flex align-items-center p-0 text-dark">
                                  <img className='Fimg'
                                    alt="logo"
                                    src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Icon.png"
                                    width="30px"
                                  />
                                  {/* <span className="ml-3 h5 font-weight-bold">Cellix Bio</span> */}
                                </a>
                            <div className='FooterContainerp'>
                                <span className="my-3">
                                  We are focusing to develop best-in-class therapies for the treatment of Neurological, Inflammatory and Metabolic Diseases.
                                </span>
                            </div>
                            <div className='FooterContainerp'>
                                  <ul className='FooterUL'>
                                    <li><span className='Fdetails'>GLOBAL PATENTS: </span><b className='Fdetailspan'>640</b></li>
                                    <li><span className='Fdetails'>ISSUED U.S PATENTS: </span><b className='Fdetailspan'>112</b></li>
                                    <li><span className='Fdetails'>PENDING U.S. PATENETS: </span><b className='Fdetailspan'>28</b></li>
                                  </ul>
                            </div>
                        </CDBBox>
                        <CDBBox display="flex" style={{ width: '50%' }} justifyContent="between">
                              <CDBBox>
                                <p className="h5 mb-4" style={{ fontWeight: '500', color:'whitesmoke' }}>
                                  PRODUCT
                                </p>
                                <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0'}}>
                                        <NavLink className={"Navlink"} to="/Home">HOME</NavLink>
                                        <NavLink className={"Navlink"} to="/Patents">PATENTS</NavLink>
                                        <NavLink className={"Navlink"} to="/IP">INTELLECTUAL PROPERTY</NavLink>
                                        <NavLink className={"Navlink"} to="/Pipeline">PIPELINE</NavLink>
                                </CDBBox>
                              </CDBBox>
                              <CDBBox>
                                <p className="h5 mb-4" style={{ fontWeight: '500',color:'whitesmoke' }}>
                                  ABOUT US
                                </p>
                                <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                                        <NavLink className={"Navlink"} to="/About">ABOUT</NavLink>
                                        <NavLink className={"Navlink"} to="/Leadership">LEADERSHIP</NavLink>
                                        <NavLink className={"Navlink"} to="/Contact">CONTACT US</NavLink>
                                </CDBBox>
                              </CDBBox>
                        </CDBBox>
                  </div>
            </CDBBox>
              <CDBBox display="flex" className="mt-4" justifyContent="between">
                <div className='smallContainer'>
                  <small className="ml-2">&copy; Cellix Bio, 2022. All rights reserved.</small>
                </div>
                <CDBBox display="flex">
                    <div className='FooterIcons'>
                        <CDBBtn href="https://www.cellixbio.com/" target={"_blank"} flat color="dark" className="p-2">
                          <CDBIcon  className='Ficon' fab icon="google" />
                        </CDBBtn>
                        <CDBBtn href="https://www.linkedin.com/in/mahesh-kandula-b052a752/" target={"_blank"} flat color="dark" className="mx-3 p-2">
                          <CDBIcon fab icon="linkedin" />
                        </CDBBtn>
                        <CDBBtn href="https://www.facebook.com/" flat color="dark" target={"_blank"} className=" p-2">
                          <CDBIcon fab icon="facebook-f" />
                        </CDBBtn>
                        <CDBBtn href="https://www.instagram.com/" flat color="dark" target={"_blank"} className="mx-3 p-2">
                          <CDBIcon fab icon="instagram" />
                        </CDBBtn>
                        <CDBBtn href="https://www.twitter.com/" flat color="dark" target={"_blank"} className="p-2">
                          <CDBIcon fab icon="twitter"/>
                        </CDBBtn>
                        <CDBBtn href="https://www.reddit.com/" flat color="dark" target={"_blank"} className="mx-3 p-2">
                          <CDBIcon fab icon="reddit"/>
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