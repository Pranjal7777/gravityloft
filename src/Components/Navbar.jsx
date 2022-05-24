
import logo from "../images/Nextyn.png"
import Styles from "./Navbar.module.css"
import search1 from "../images/Search 3.png"
import consult from "../images/consult.png"
import miranda from "../images/miranda.png"


import AddIcon from '@mui/icons-material/Add';



import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import AddIcon from '@mui/icons-material/ExpandMore';

export const Navbar = () => {
    return <>

        <div className={Styles.navbar}>
            <div className="logoDiv">
                <img className={Styles.logo} src={logo} alt="" />
            </div>
            <div className={Styles.authButtons}>
                <button className={Styles.contact}>Contact us</button>
                <button className={Styles.login}>Login</button>
                <button className={Styles.register}>Register</button>
            </div>
        </div>

        <div className={Styles.mainTheme}>

            <div className={Styles.first} >
                <div className={Styles.details}>
                    <h1 className={Styles.way}><span className={Styles.purple}>We are</span> <br /> the best way to connect <br /> with Industry Experts</h1>
                    <p className={Styles.loremtext}>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p></div>



            </div>
            <div className={Styles.trialVersion}>

                <div className={Styles.trialDiv}>
                    <div className={Styles.heading}>
                        <span className={Styles.title}>Get Trial version </span> <br />
                        <span className={Styles.title}>to find experts</span>
                    </div>
                    <div>
                        <label htmlFor="">Full Name</label>
                        <br />
                        <div className={Styles.form}>
                            <input type="text" value={"Dhruv123#"} />
                        </div> <br />
                        <label htmlFor="">Email Address</label>   <br />
                        <div className={Styles.form}>
                            <input type="text" value={"Dhruv@Nextyn.com"} />
                        </div>

                        <div className={Styles.form}>
                            <input className={Styles.submitbtn} type="submit" value={"Get Started"} />
                        </div>
                    </div>


                </div>

            </div>

        </div>




        <div className={Styles.expertcloud}>
            <div className={Styles.heading2}>
                <h1>Expert Cloud</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>

            <div className={Styles.search}>

                <div className={Styles.detail}>
                    <h1 className={Styles.way}><span className={Styles.purple}>Search.</span> <br /> Top Experts with <br /> advance search. </h1>
                    <p className={Styles.lorem2text}>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className={Styles.color}>
                    <img className={Styles.search1} src={search1} alt="" />
                </div>

            </div>

            <div className={Styles.consult}>
                <div className={Styles.consultimg}>
                    <img className={Styles.search1} src={consult} alt="" />
                </div>
                <div className={Styles.consultdetail}>
                    <h1 className={Styles.way}><span className={Styles.purple}>Consult.</span> <br /> with
                        Top Industry Experts</h1>
                    <p className={Styles.lorem2text}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>


            </div>



            <div className={Styles.colla}>

                <div className={Styles.consultdetail}>
                    <h1 className={Styles.way}><span className={Styles.purple}>Collaborate.</span> <br /> with
                        Experts is easy now.</h1>
                    <p className={Styles.lorem2text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className={Styles.collaimg}>
                    <img className={Styles.collaimg1} src={miranda} alt="" />
                </div>



            </div>


            <div className="faq">

                <div className={Styles.heading2}>
                    <h1>FAQ</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                </div>

                <div className={Styles.accordianDiv}>

                    <div>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography> <span className={Styles.acco}>What is Techrefic ?</span></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <p className={Styles.loremforacco}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography> <span className={Styles.acco}>What is Techrefic ?</span></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <p className={Styles.loremforacco}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography> <span className={Styles.acco}>What is Techrefic ?</span></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <p className={Styles.loremforacco}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography> <span className={Styles.acco}>What is Techrefic ?</span></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <p className={Styles.loremforacco}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography> <span className={Styles.acco}>What is Techrefic ?</span></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <p className={Styles.loremforacco}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography> <span className={Styles.acco}>What is Techrefic ?</span></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <p className={Styles.loremforacco}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>




                    </div>


                </div>

            </div>


            <div className={Styles.contactus}>


                <h1 className={Styles.headcon}>Contact us, if you <br />
                    facing any problems</h1>



                <p className={Styles.con}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className={Styles.conbtn}>Contact Now</button>
            </div>





            <div className={Styles.footer}>

                <div className={Styles.logofoot}>
                    <div className={Styles.logo}>
                        <img src={logo} alt="" />

                    </div>
                    <p className={Styles.lorem2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
                <div className={Styles.tabsfoot}>

                    <div className={Styles.row1}>
                        <h4>Account</h4>
                        <button className={Styles.footbtn}>Login</button> <br />
                        <button className={Styles.footbtn}>Signup</button> <br />
                    </div>
                    <div className={Styles.row2}>

                        <h4>Company</h4>
                        <button className={Styles.footbtn}>Privacy Policy</button> <br />
                        <button className={Styles.footbtn}>Terms of use</button> <br />
                        <button className={Styles.footbtn}>Compliance</button> <br />
                    </div>
                    <div className={Styles.row3}>

                        <h4>Support</h4>
                        <button className={Styles.footbtn}>Contact us</button> <br />
                        <button className={Styles.footbtn}>FAQ</button>  <br />


                    </div>





                </div>


            </div>

            <hr className={Styles.hr} />


            <div className={Styles.coppyright}>
                <p>Copyright © 2022 by Techrefic</p>
            </div>
















        </div>


    </>
}