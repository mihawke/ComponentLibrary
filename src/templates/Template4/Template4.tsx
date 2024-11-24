import styles from './Frontpage4.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Brands from './assets/Brands.png'
import product from './assets/product.png'
import feature1 from './assets/feature1.png'
import feature2 from './assets/feature2.png'
import feature3 from './assets/feature3.png'
import user1 from './assets/user1.png'
import star from './assets/star.png'
import contact from './assets/contact.png'

const Template4 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.frame1}>
                    <div className={styles.logo}>
                        PixelForge.io
                    </div>
                </div>
                <div className={styles.frame2}>
                    <div className={styles.menu}>
                        <div className={styles.item}>Menu1</div>
                        <div className={styles.item}>Menu2</div>
                        <div className={styles.item}>Menu3</div>
                        <div className={styles.item}>Menu4</div>
                        <div className={styles.item}>Menu5</div>
                    </div>
                </div>
                <div className={styles.frame3}>
                    <div className={styles.button1}>
                        Sign up
                    </div>
                    <div className={styles.button2}>
                        Log in
                    </div>
                </div>
            </div>

            {/*  */}

            <div className={styles.hero}>
                <div className={styles.frame1}>
                    <p className={styles.text1}>Main big title here</p>
                    <p className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className={styles.button}>Get Started</button>
                </div>
            </div>

            {/*  */}

            <div className={styles.brands}>
                <div className={styles.frame1}>
                    <div className={styles.line}></div>
                    <img className={styles.image} src={Brands}></img>
                    <div className={styles.line}></div>
                </div>
            </div>

            {/*  */}

            <div className={styles.products}>
                <div className={styles.frame}>
                    <img className={styles.image} src={product}></img>
                </div>
            </div>

            {/*  */}

            <div className={styles.features}>
                <div className={styles.frame1}>
                    <div className={styles.card}>
                        <img className={styles.image} src={feature1}></img>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', width: 255, marginTop: 32, rowGap: 10 }}>
                            <p className={styles.title}>Feature1</p>
                            <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.image} src={feature2}></img>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', width: 255, marginTop: 32, rowGap: 10 }}>
                            <p className={styles.title}>Feature2</p>
                            <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.image} src={feature3}></img>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', width: 255, marginTop: 32, rowGap: 10 }}>
                            <p className={styles.title}>Feature3</p>
                            <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}

            <div className={styles.feedback}>
                <div className={styles.frame1}>
                    <p className={styles.text1}>“Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! thanks!”</p>
                    <div className={styles.frame2}>
                        <img className={styles.image} src={user1}></img>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <p className={styles.text1}>Johnny Owens</p>
                            <div style={{ display: 'flex', flexDirection: 'row', columnGap: 5 }}>
                                <img className={styles.image} src={star}></img>
                                <img className={styles.image} src={star}></img>
                                <img className={styles.image} src={star}></img>
                                <img className={styles.image} src={star}></img>
                                <img className={styles.image} src={star}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}


            <div className={styles.contact}>
                <div className={styles.frame1}>
                    <p className={styles.title}>Questions? <br /> Let's talk</p>
                    <p className={styles.subtitle}>Contact us through our 24/7 live chat. We’re always happy to help!</p>
                    <button className={styles.button}>Contact</button>
                </div>
                <div className={styles.frame2}>
                    <img style={{ width: 500, height: 446, backgroundColor: '#333333' }} src={contact}></img>
                </div>
            </div>

            {/*  */}

            <div className={styles.footer}>
                <div style={{width:'80%' , height: 1 , backgroundColor:'#FFFFFF' , opacity:0.2}}></div>
                <div className={styles.frame}>
                    <div className={styles.info}>
                        <div className={styles.logo}>
                            PixelForge.io
                        </div>
                        <div className={styles.copyright}>
                            <p className={styles.text}>Copyright © 2024 PixelForge.io ltd. <br />All rights reserved</p>
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
                            <a className={styles.item}>Blog</a>
                            <a className={styles.item}>Contact us</a>
                            <a className={styles.item}>Pricing</a>
                            <a className={styles.item}>Testimonials</a>
                        </div>
                        <div className={styles.column}>
                            <a className={styles.title}>Support</a>
                            <a className={styles.item}>Help center</a>
                            <a className={styles.item}>Terms of services</a>
                            <a className={styles.item}>Legal</a>
                            <a className={styles.item}>Privacy policy</a>
                            <a className={styles.item}>Status</a>
                        </div>
                        <div className={styles.column}>
                            <p className={styles.title}>Stay up to date</p>
                            <input type='email' id='email' className={styles.input} placeholder='Your email address'></input>
                            <label htmlFor="email"></label>
                            <button className={styles.button}>Send</button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Template4