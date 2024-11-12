import styles from './Frontpage6.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Template6 = () => {
    return (
        <div className={styles.container}>

            {/* ******** */}

            <div className={styles.header}>
                <div className={styles.logo}>
                    PixelForge.io
                </div>
                <div className={styles.navbar}>
                    <div className={styles.item}>Home</div>
                    <div className={styles.item}>Product</div>
                    <div className={styles.item}>About</div>
                    <div className={styles.item}>Contact</div>
                </div>
                <button className={styles.login}>
                    Login
                </button>
            </div>

            {/* ******** */}

            <div className={styles.hero}>
                <p className={styles.text1}>Work at the speed <br /> of thought</p>
                <p className={styles.text2}>Most calendars are designed for teams. Slate is designed for<br /> freelancers who want a simple way to plan their schedule.</p>
                <div className={styles.frame}>
                    <button className={styles.button1}>Try For Free</button>
                    <button className={styles.button2}>Learn More</button>
                </div>
            </div>

            {/* ******** */}

            {/* <div className={styles.screen}>
                <img src='src/assets/images/template6/screens.png' width={'100%'}/>
            </div> */}

            {/* ******** */}

            <div className={styles.features}>
                <p className={styles.text1}>FEATURES</p>
                <p className={styles.text2}>Most calendars are designed for teams. Slate is designed for<br /> freelancers who want a simple way to plan their schedule.</p>
                <div className={styles.frame}>
                    <img src='src/assets/images/template6/featuresBg.png' style={{ width: 752, height: 759 }} />
                    <div className={styles.frame1}>
                        <div className={styles.card}>
                            <div className={styles.heading}>
                                <img src='src/assets/images/template6/features1.png' />
                                <p className={styles.text1}>A single source of truth</p>
                            </div>
                            <p className={styles.text2}>When you add work to your Slate calendar we automatically calculate useful insights </p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.heading}>
                                <img src='src/assets/images/template6/features2.png' />
                                <p className={styles.text1}>Intuitive Interface</p>
                            </div>
                            <p className={styles.text2}>When you add work to your Slate calendar we automatically calculate useful insights </p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.heading}>
                                <img src='src/assets/images/template6/features3.png' />
                                <p className={styles.text1}>Or with rules</p>
                            </div>
                            <p className={styles.text2}>When you add work to your Slate calendar we automatically calculate useful insights </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ******** */}

            <div className={styles.contents}>
                <p className={styles.text1}>CONTENTS</p>
                <p className={styles.text2}>We focus on ergonomics and meeting you where you work. <br />It's only a keystroke away.</p>
                <div className={styles.frame}>
                    <div className={styles.card}>
                        <p className={styles.text1}>Work</p>
                        <p className={styles.text2}>Ever wondered if you're too reliant on a client for work? Slate helps you identify .</p>
                        <button className={styles.button}>Sign Up</button>
                        <img src='src/assets/images/template6/content1.png' />
                    </div>
                    <div className={styles.card} style={{ paddingBottom: 0 }}>
                        <p className={styles.text1}>Design with real data</p>
                        <p className={styles.text2}>Ever wondered if you're too reliant on a client for work? Slate helps you identify .</p>
                        <button className={styles.button}>Try For Free</button>
                        <img src='src/assets/images/template6/content2.png' />
                    </div>
                </div>
            </div>

            {/* ******** */}

            <div className={styles.gallery}>
                <p className={styles.text1}>GALLERY</p>
                <p className={styles.text2}>We focus on ergonomics and meeting you where you work. <br />It's only a keystroke away.</p>
                <div className={styles.frame}>
                    <img src='src/assets/images/template6/gallery1.png' />
                    <img src='src/assets/images/template6/gallery2.png' />
                    <img src='src/assets/images/template6/gallery3.png' />
                    <img src='src/assets/images/template6/gallery4.png' />
                    <img src='src/assets/images/template6/gallery5.png' />
                    <img src='src/assets/images/template6/gallery6.png' />
                    <img src='src/assets/images/template6/gallery7.png' />
                </div>
                <button className={styles.button}>See more</button>
            </div>

            {/* ******** */}

            <div className={styles.partners}>
                <p className={styles.text1}>PARTNERS</p>
                <p className={styles.text2}>We focus on ergonomics and meeting you where you work. <br />It's only a keystroke away.</p>
                <div className={styles.frame}>
                    <img src='src/assets/images/template6/partner1.png' />
                    <img src='src/assets/images/template6/partner2.png' />
                    <img src='src/assets/images/template6/partner3.png' />
                    <img src='src/assets/images/template6/partner4.png' />
                    <img src='src/assets/images/template6/partner5.png' />
                    <img src='src/assets/images/template6/partner6.png' />
                </div>
                <button className={styles.button}>All Partners</button>
            </div>

            {/* ******** */}

            <div className={styles.testimonials}>
                <p className={styles.text1}>CONTENTS</p>
                <p className={styles.text2}>We focus on ergonomics and meeting you where you work. <br />It's only a keystroke away.</p>
                <div className={styles.frame}>
                    <div className={styles.card}>
                        <div className={styles.heading}>
                            <img src='src/assets/images/template6/avatar1.png' />
                            <p className={styles.text1}>Claire Bell <br /><span className={styles.text3}>Designer</span></p>
                        </div>
                        <p className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.heading}>
                            <img src='src/assets/images/template6/avatar2.png' />
                            <p className={styles.text1}>Francisco Lane <br /><span className={styles.text3}>Designer</span></p>
                        </div>
                        <p className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.heading}>
                            <img src='src/assets/images/template6/avatar3.png' />
                            <p className={styles.text1}>Ralph Fisher <br /><span className={styles.text3}>Designer</span></p>
                        </div>
                        <p className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.heading}>
                            <img src='src/assets/images/template6/avatar4.png' />
                            <p className={styles.text1}>Jorge Murphy <br /><span className={styles.text3}>Designer</span></p>
                        </div>
                        <p className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>

            {/* ******** */}

            <div className={styles.advertisement}>
                <div className={styles.frame}>
                    <p className={styles.text1}>OpenType features and Variable fonts</p>
                    <button className={styles.button}>Try For Free</button>
                </div>
                    <img src='src/assets/images/template6/advertisement1.png' style={{borderTopRightRadius:33,borderBottomRightRadius:33}} />
            </div>

            {/* ******** */}

            <div className={styles.footer}>
                <div className={styles.frame}>
                    <div className={styles.info}>
                        <div className={styles.logo}>
                            PixelForge.io
                        </div>
                        <div className={styles.copyright}>
                            <p className={styles.text}>Copyright © 2020 PixelForge.io ltd. <br />All rights reserved</p>
                        </div>
                        <div className={styles.socials}>
                            <a><FaInstagram className={styles.icon} size={20} /></a>
                            <a><FaFacebookF className={styles.icon} size={20} /></a>
                            <a><FaTwitter className={styles.icon} size={20} /></a>
                            <a><FaYoutube className={styles.icon} size={20} /></a>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.column}>
                            <a className={styles.title}>Company</a>
                            <a className={styles.item}>About us</a>
                            <a className={styles.item}>Contact us</a>
                            <a className={styles.item}>Careers</a>
                            <a className={styles.item}>Press</a>
                        </div>
                        <div className={styles.column}>
                            <a className={styles.title}>Product</a>
                            <a className={styles.item}>Features</a>
                            <a className={styles.item}>Pricing</a>
                            <a className={styles.item}>News</a>
                            <a className={styles.item}>Help Desk</a>
                            <a className={styles.item}>Support</a>
                        </div>
                        <div className={styles.column}>
                            <a className={styles.title}>Services</a>
                            <a className={styles.item}>Digital Marketing</a>
                            <a className={styles.item}>Content Writing</a>
                            <a className={styles.item}>SEO for business</a>
                            <a className={styles.item}>UI Design</a>
                        </div>
                        <div className={styles.column}>
                            <a className={styles.title}>Legal</a>
                            <a className={styles.item}>Privacy policy</a>
                            <a className={styles.item}>Terms of services</a>
                            <a className={styles.item}>Return Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Template6