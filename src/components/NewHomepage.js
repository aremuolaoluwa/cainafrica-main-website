/* Mission Section Component */
export const MissionSection = () => (
  <section className="mission-section section-container">
    <div className="section-content-items">
      <div className="section-content-first-container">
        <div className="upper-content">
          <div className="section-content-first-item-content">The state of education in Africa <br />demands urgent intervention</div>
          <div className="section-content-item-1-second-content">
            <div className="content-heading">9 out of 10</div>
            <div className="content-paratext">Children in Africa leave school without learning <br /> any basic digital skills according to <a className="mission-link" id="mission-link" href="https://www.undp.org/sustainable-development-goals/quality-education" target="_blank">UNDP</a></div>
          </div>
        </div>
        <div className="section-content-first-container-img"></div>
      </div>
      <div className="section-content-second-container">
        <div className="second-container-upper-container">
          <div className="second-container-first-img">
            <div className="img-text">
              <div className="upper-text">98 million</div>
              <div className="lower-text mission-link">School-age children are out of school in Africa according to <a href="https://www.unesco.org/gem-report/en/2022-out-school" target="_blank">UNESCO</a></div>
            </div>
          </div>
        </div>
        <div className="second-content-container">
          <img src="./assets/images/stats.png" alt="" className="second-first-image" />
          <div className="text-container mission-link"><a href="https://mo.ibrahim.foundation/news/2021/navigating-digital-divide-africas-classrooms#:~:text=According%20to%20the%202021%20Ibrahim,covered%20by%20a%20mobile%20network." target="_blank">MIF</a> reports that 89% of students in Africa do not have access to computers</div>
        </div>
      </div>
    </div>
  </section>
);

/* Programs Section Component */
export const ProgramsSection = () => (
  <section className="programs-section section-container">
    <div className="programs-section-container">
      <div className="programs-section-container-heading section-heading">Our Core Interventions</div>
      <div className="programs-section-container-first-row-items">
        {/* Repeating components could be created for each program */}
        <div className="programs-section-container-first-row-items-1">
          <div className="programs-section-container-first-row-items-first-image item-top-image"><img src="./assets/images/chalkboard-user.svg" alt="" width="82" height="82" /></div>
          <div className="programs-section-container-first-row-items-first-text-heading text-heading">FREE <span className="heading-black-text">Daily Tutorials</span></div>
          <div className="programs-section-container-first-row-items-first-text programs-section-container-paragraph-text">We offer FREE daily Mathematics and English tutorials, empowering students in underserved African communities with essential skills for academic excellence.</div>
        </div>
        <div className="programs-section-container-first-row-items-1">
          <div className="programs-section-container-first-row-items-second-image item-top-image"><img src="https://s2.svgbox.net/materialui.svg?ic=computer&color=000" width="82" height="82" /></div>
          <div className="programs-section-container-first-row-items-first-text-heading text-heading">FREE <span className="heading-black-text">Digital Skills Training</span></div>
          <div className="programs-section-container-first-row-items-first-text programs-section-container-paragraph-text">We equip underprivileged African students with high-demand digital skills, preparing them to excel in today’s competitive, tech-driven world.</div>
        </div>
      </div>
    </div>
  </section>
);

/* Achievement Section Component */
export const AchievementSection = () => (
  <section className="achievement-section section-container">
    <div className="programs-section-container">
      <div className="achievement-section-container">
        <div className="achievement-section-container-image"><img src="./assets/images/ProgramsImage.png" alt="" /></div>
        <div className="achievement-section-container-text">
          <div className="achievement-section-container-text-heading">What have <br />we done with <br />your help?</div>
          <div className="achievement-section-container-text-paragraph">
            We’ve invested over <span className="red-text">$200,000</span> to bring more than 13 transformative projects to life, impacting over <span className="red-text">10,000 underprivileged people</span> across seven under-resourced African communities.
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* Testimonial Section Component */
export const TestimonialSection = () => (
  <section className="testimonial section-container">
    <div className="testimonial-container">
      <div className="programs-section-container">
        <div className="testimonial-section-container-heading">People have good things <br />to say about us</div>
      </div>
    </div>
  </section>
);

/* Exporting all sections */
export { MissionSection, ProgramsSection, AchievementSection, TestimonialSection };
