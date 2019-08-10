import React from 'react';


const About = () => {
  return (
    <React.Fragment>
      <div id="container"  >
        <h2><span><em className="lefty">BIO</em><em className="righty">ETHOS</em></span></h2>
        <section className="portfolio">
        <section className="column">
          <p>I am a former math teacher turned computer science geek and now back to a teacher again. If I’m not at work sharing what I’ve learned with my students, I’m nerding out with other fellow students in my programming classes. I am a student software developer with experience in Java, HTML and CSS3. I am always seeking to expand and develop my skill base. This website will be used to showcase some of the work I've completed. The projects on this site will be continuously updated. 

          <br/><br/>
          My latest and biggest project is the development of a tutoring registration website for Bunker Hill Community College. My team and I will be using MySQL to store the information for the tutor's availability, and the subjects the tutor teaches. Students will be able to view a tutor's schedule and make an appointment to meet with them for all departments on campus. Stay tuned for links to the mock-ups and website that will be hosted by BHCC.
          </p>
      </section>
      <section className="column ethos">
        <p>
          <em>Do not go where the path may lead, go instead</em>
        </p>
        <p>
          <em>where there is no path and leave a trail.</em> 
        </p>
        Ralph Waldo Emerson
        <br></br>
        <p>
          <em>Be who you are and say what you feel because those
          who mind don't matter and those who matter don't mind.</em>
        </p>
        <p>
          Dr. Seuss
        </p>

        {/* <ul className="skills">
          <li className="html">HTML</li>
          <li className="scss">CSS</li>
          <li className="js">Java</li>
          <li className="C/C++">C/C++</li>
          <li className="JSP">JavaServer Pages</li>
        </ul> */}
      </section>

      </section>        
      </div>
    </React.Fragment>
  )
}

export default About