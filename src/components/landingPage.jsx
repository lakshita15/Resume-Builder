import React from 'react'
import "./landingPage.css";

import { Link } from 'react-router-dom';
import resume from '../static/images/resumenew.png';






import backgroundimage from '../static/images/gradient-cloud.png'
import footer from '../static/images/footer.png'
import logoss from '../static/images/logoss.png'

const Landing = () => {
    return (
        <React.Fragment>
            <div className="full-page">

                <div className="landing-page">
                    <h1>Create a resume that stands out</h1>

                    <p>Create a Resume that perfectally describes your skils and match job profile.</p>
                    <div>
                        <Link to="/templates">
                            <button className="btn">Get Started For Free</button>
                        </Link>
                        <div className="logo">
                            <img src={resume} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="companies">
                <div className="company-heading">

                    <h1>DON'T MISS THE CHANCE TO GET PLACED IN:</h1>
                </div>
                <div className="logoss">
                    <img src={logoss} className="logoss-img" alt="" />
                </div>

            </div>

            <section className="FAQ">
                <div id="faq">

                    <div className="faq-heading">
                        <h1>FREQUENTLY ASKED QUESTIONS</h1>
                    </div>
                    <div className="question-section">
                        <article className="faq-item">
                            <header className="faq-item-header">
                                <h3>What should I put on my resume?</h3>
                            </header>
                            <div className="entry-content">

                                <p>
                                    There are five main sections that every resume should include: Contact Info, Resume Introduction, Professional Experience, Education, and Skills. Keep in mind that, depending on your industry, your resume may need to include additional sections. For example, nurses should include a section about their professional licenses and certifications — which you can easily add in our resume builder. To learn more about what to put on your resume, visit our
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
                <div id="faq">

                    <div className="question-section">
                        <article className="faq-item">
                            <header className="faq-item-header">
                                <h3>Why do I need different resumes for every job application?</h3>
                            </header>
                            <div className="entry-content">

                                <p>
                                    No two jobs are exactly alike. Even if you apply for two positions with the exact same title, it’s extremely likely that each company highlights different skills and traits in their job descriptions. That’s why we recommend that you tailor your resume to address the specific requirements in the job description before you send out your application. Usually this would be a headache for job seekers, but our resume creator allows you to build fully-customized resumes in just minutes.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
                <div id="faq">

                    <div className="question-section">
                        <article className="faq-item">
                            <header className="faq-item-header">
                                <h3>Which resume builder template should I use?</h3>
                            </header>
                            <div className="entry-content">

                                <p>
                                    Choose a resume template based on your personal preference and the impression you want to make on hiring managers. We design every template so that it’s flexible enough to suit any industry, level of experience and education, or skill set. No matter which template you choose, you can be confident that it’s optimized to highlight your unique experiences and abilities — and that hiring managers will like the way it looks.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
                <div id="faq">

                    <div className="question-section">
                        <article className="faq-item">
                            <header className="faq-item-header">
                                <h3>Are there any good resume examples that I can look at?</h3>
                            </header>
                            <div className="entry-content">

                                <p>
                                    Yes, we offer an extensive library of free , covering all industries and 90+ job titles. Our experts, overseen by our resident , meticulously wrote each resume sample to demonstrate what an ideal resume in every industry should cover. Whether you aren’t sure what to include in your resume, or you just need some inspiration to get started, we highly encourage you to read a sample from your industry.
                                <Link to="/templates">
                                        <button className="btn">Get Started For Free</button>
                                    </Link>
                                </p>
                            </div>
                        </article>
                    </div>
                </div>

            </section>

            
            <footer>
        <div class="footer">
          <ul class="footer-text">
            <li class="text-value"><Link to="/about">ABOUT US</Link></li>
            <li class="text-value"><Link to="/templates">FREE TEMPLATES</Link></li>
          </ul>
          <ul class="social-link">
            <li><a href="https://www.facebook.com/"><i class="fab fa-facebook icon-footer"></i></a></li>
            <li><a href="https://twitter.com/"><i class="fab fa-twitter-square icon-footer"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram icon-footer"></i></a></li>
            <li><a href="#"><i class="fab fa-snapchat-square icon-footer"></i></a></li>
          </ul>
        </div>
        <p class="footer-p">Copyright © 2017EVERYONE. All rights reserved.</p>
      </footer>
           
        </React.Fragment>
    );
}

export default Landing;