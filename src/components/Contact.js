import React from 'react';
import "../style/contact.css";
import { Stack, Typography } from '@mui/material';

const Contact = () => {
    return (
        <div className='foot'>
            <div className='ContactContainer'>
                <h3>Contact Us</h3>
                <div className='CardContainer'>
                    <div className='ContactCard'>
                        <div className='UserPicture'>
                            <img className='imc' src='./debankar.png' alt='User 1' />
                        </div>
                        <p className='UserName'>Debankar  Shubhram
                            <span>Secretary<br /> Idea Innovation Cell
                            </span>
                            <span className='sp'>6372777905<br /> debankarshubhram@gmail.com
                            </span>
                        </p>

                    </div>
                    <div className='ContactCard'>
                        <div className='UserPicture'>
                            <img className='imc' src='./sandip.png' alt='User 2' />
                        </div>
                        <p className='UserName'>Sandip Kr.  Mohanty
                            <span>Asst.Secretary<br /> Idea Innovation Cell
                            </span>
                            <span className='sp'>6371409570
                                <br /><span className='sp'>sandip.mohanty2004@gmail.com</span>
                            </span>

                        </p>

                    </div>
                    <div className='ContactCard'>
                        <div className='UserPicture'>
                            <img src='./satviki.png' alt='User 2' />
                        </div>
                        <p className='UserName'>Satviki Pradhan
                            <span>Asst.Secretary<br /> Idea Innovation Cell
                            </span>
                            <span className='sp'>8847800176
                                <br /><span className='sp'>satviki.pradhan@gmail.com</span>
                            </span>
                        </p>
                    </div>
                    <div className='ContactCard'>
                        <div className='UserPicture'>
                            <img src='./aditya.jpg' alt='User 2' />
                        </div>
                        <p className='UserName'>Aditya Kumar
                            <span>Web developer<br /> Idea Innovation Cell
                            </span>
                            <span className='sp'>9114703231
                                <br /><span className='sp'>adityakumar098k@gmail.com</span>
                            </span>
                        </p>
                    </div>
                    <div className='ContactCard'>
                        <div className='UserPicture'>
                            <img src='./me.png' alt='User 2' />
                        </div>
                        <p className='UserName'>Hritesh Roshan Mahapatra
                            <span>Web developer<br /> Idea Innovation Cell
                            </span>
                            <span className='sp'>8895292542
                                <br /><span className='sp'>hritesh532004@gmail.com</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
