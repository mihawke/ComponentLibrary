import styles from './Frontpage5.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import hero from './assets/hero.png'
import graphicDesign from './assets/graphicDesign.png'
import webDev from './assets/webDev.png'
import contentWriting from './assets/contentWriting.png'
import features1 from './assets/features1.png'
import features2 from './assets/features2.png'
import features3 from './assets/features3.png'
import features4 from './assets/features4.png'
import work1 from './assets/work1.png'
import work2 from './assets/work2.png'
import work3 from './assets/work3.png'
import work4 from './assets/work4.png'
import testimonial1 from './assets/testimonial1.png'

const Template5 = () => {
    return (
        <div className={styles.container}>

            {/* ******** */}

            <div className={styles.hero}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        PixelForge.io
                    </div>
                    <div className={styles.navbar}>
                        <div className={styles.item}>About</div>
                        <div className={styles.item}>Demos</div>
                        <div className={styles.item}>Support</div>
                        <div className={styles.item}>Contact</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <button className={styles.login}>
                            Login
                        </button>
                        <button className={styles.signup}>
                            Signup
                        </button>
                    </div>
                </div>
                <div className={styles.frame}>
                    <div className={styles.content}>
                        <p className={styles.text1}>LET’S SHIFT YOUR BUSINESS</p>
                        <p className={styles.text2}>Shift your business fast with Shade Pro.</p>
                        <p className={styles.text3}>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
                        <button className={styles.button}>Get started</button>
                    </div>
                    <img src={hero} />
                </div>
            </div>

            {/* ******** */}

            <div className={styles.services}>
                <p className={styles.text1}>OUR SERVICES</p>
                <p className={styles.text2}>We provide great services for our customers based on needs</p>
                <div className={styles.frame}>
                    <div className={styles.card}
                        style={{ backgroundColor: '#68D585' }}
                    >
                        <img src={graphicDesign} />
                        <p className={styles.text1}>Graphic Design</p>
                        <p className={styles.text2}>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                        <button className={styles.button}>Learn more</button>
                    </div>
                    <div className={styles.card}
                        style={{ backgroundColor: '#473BF0' }}
                    >
                        <img src={webDev} />
                        <p className={styles.text1}>Graphic Design</p>
                        <p className={styles.text2}>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                        <button className={styles.button}>Learn more</button>
                    </div>
                    <div className={styles.card}
                        style={{ backgroundColor: '#F64B4B' }}
                    >
                        <img src={contentWriting}/>
                        <p className={styles.text1}>Graphic Design</p>
                        <p className={styles.text2}>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                        <button className={styles.button}>Learn more</button>
                    </div>
                </div>
            </div>

            {/* ******** */}

            <div className={styles.about}>

            </div>

            {/* ******** */}

            <div className={styles.facts}>
                <div className={styles.frame}>
                    <p className={styles.text1}>1M+</p>
                    <p className={styles.text2}>Customers visit Omega every month to get their service done.</p>
                </div>
                <div className={styles.frame}>
                    <p className={styles.text1}>92%</p>
                    <p className={styles.text2}>Satisfaction rate comes from our awesome customers.</p>
                </div>
                <div className={styles.frame}>
                    <p className={styles.text1}>4.9/5.0</p>
                    <p className={styles.text2}>Average customer ratings we have got all over internet.</p>
                </div>
            </div>

            {/* ******** */}

            <div className={styles.features}>
                <p className={styles.text1}>WHY CHOOSE US</p>
                <p className={styles.text2}>People choose us because we serve the best for everyone</p>
                <div className={styles.frame}>
                    <div className={styles.frame2}>
                        <div className={styles.card}>
                            <img src={features1} style={{ paddingTop: 6 }} />
                            <div>
                                <p className={styles.text1}>Dedicated project manager</p>
                                <p className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim elit risus.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={features3} style={{ paddingTop: 6 }} />
                            <div>
                                <p className={styles.text1}>Easy feedback sharing</p>
                                <p className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim elit risus.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.frame2}>
                        <div className={styles.card}>
                            <img src={features2} style={{ paddingTop: 6 }} />
                            <div>
                                <p className={styles.text1}>Organized tasks</p>
                                <p className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim elit risus.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={features4} style={{ paddingTop: 6 }} />
                            <div>
                                <p className={styles.text1}>Never miss deadline</p>
                                <p className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim elit risus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: '70%', height: 1, backgroundColor: '#D8D8D8', margin: 100 }}></div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <div className={styles.frame3}>
                        <p className={styles.text1}>Ready to launch your next project?</p>
                        <p className={styles.text2}>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    </div>
                    <button className={styles.button}>Get started</button>
                </div>
            </div>

            {/* ******** */}

            <div className={styles.works}>
                <p className={styles.text1}>CASE STUDIES</p>
                <p className={styles.text2}>Our works describe why we are the best in the business</p>
                <div className={styles.frame}>
                    <div className={styles.frame2}>
                        <div className={styles.card}>
                            <img src={work1} style={{ paddingTop: 6 }} />
                            <div>
                                <p className={styles.text2}>Graphic Design</p>
                                <p className={styles.text1}>Aura Branding Design</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={work2} style={{ paddingTop: 6 }} />
                            <div>
                                <p className={styles.text2}>Web Development</p>
                                <p className={styles.text1}>Gradient Website Development</p>

                            </div>
                        </div>
                    </div>
                    <div className={styles.frame2}>
                        <div className={styles.card}>
                            <img src={work3} style={{ paddingTop: 6 }} />
                            <div>
                                <p className={styles.text2}>Graphic Design</p>
                                <p className={styles.text1}>AB.S Snack Packaging</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={work4} style={{ paddingTop: 6 }} />
                            <div>
                                <p className={styles.text2}>Content Writing</p>
                                <p className={styles.text1}>Magazine Content Writing</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={styles.button}>
                    See all works
                </button>
            </div>

            {/* ******** */}

            <div className={styles.testimonial}>
                <p className={styles.text1}>TESTIMONIAL</p>
                <p className={styles.text2}>“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                <img src={testimonial1} style={{ marginBottom: 18 }} />
                <p className={styles.text3}>Ian Klein</p>
                <p className={styles.text4}>Digital Marketer</p>
            </div>

            {/* ******** */}

            <div className={styles.footer}>
                <div className={styles.frame1} >
                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: 200 }}>
                        <p className={styles.text1}>Ready to launch your next project?</p>
                        <p className={styles.text2}>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    </div>
                    <button className={styles.button}>Get started</button>
                </div>
                <div style={{ width: '70%', height: 1, backgroundColor: '#979797', marginBottom: 0 }}></div>
                <div className={styles.frame2}>
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

            {/* ******** */}

        </div >
    )
}

export default Template5