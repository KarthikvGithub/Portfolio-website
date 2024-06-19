import React, {useState} from 'react';
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                  <div className={toggleState === 1 ? "qualification__button qualification__active button-flex" : "qualification__button button-flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                    Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button-flex" : "qualification__button button-flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">BTech (EE)</h3>
                            <span className="qualification__subtitle">IIT Bhilai<br/>CGPA: 8.48</span>
                            <div className="qualification__calender">
                                <i class="uil uil-calendar-alt"></i> 2020 - 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Class 12</h3>
                            <span className="qualification__subtitle">Sri Chaitanya<br/>Score: 98.8%</span>
                            <div className="qualification__calender">
                                <i class="uil uil-calendar-alt"></i> 2019 - 2020
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Class 10</h3>
                            <span className="qualification__subtitle">Mahabubnagar Grammar<br/>GPA: 9.8</span>
                            <div className="qualification__calender">
                                <i class="uil uil-calendar-alt"></i> 2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">UX Expert</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calender">
                                <i class="uil uil-calendar-alt"></i> 2020 - 2024
                            </div>
                        </div>
                    </div> */}
                </div>


                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Internship Trainee</h3>
                            <span className="qualification__subtitle">Intern<br/>InventModel</span>
                            <div className="qualification__calender">
                                <i class="uil uil-calendar-alt"></i> June 2024 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Web Developer</h3>
                            <span className="qualification__subtitle">Intern<br/>CodSoft</span>
                            <div className="qualification__calender">
                                <i class="uil uil-calendar-alt"></i> Jul - Aug 2023
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Fest Committee</h3>
                            <span className="qualification__subtitle">Volunteer<br/>IIT Bhilai</span>
                            <div className="qualification__calender">
                                <i class="uil uil-calendar-alt"></i> 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification;