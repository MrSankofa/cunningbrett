import React from 'react';

const Header = () => {

  return (
    <React.Fragment>
      <header id="top">

        <div className="Brett">			
          <img className="avatar" src="img/pro_pic1.jpg" alt="Brett" />

          <h2>Brett Cunningham II <span>Software Developer</span></h2>

          <div className="social">

            
            <a className="linkedin" href="https://www.linkedin.com/pub/brett-cunningham-ii/a7/a96/b3" data-username="#">LinkedIn</a>
            <a className="github" href="https://github.com/MrSankofa">Github</a>
            <a className="email" href="mailto:bwcunninghamii@gmail.com">Email me</a>
            <a className="email" href="recastlyRedux.html">recastlyRedux</a>
          </div>

        </div>

      </header>
    </React.Fragment>
  )
}

export default Header;