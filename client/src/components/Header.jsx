import React from 'react';

const Header = () => {

  return (
    <React.Fragment>
      <header id="top">

        <div class="Brett">			
          <img class="avatar" src="img/pro_pic1.jpg" alt="Brett" />

          <h2>Brett Cunningham II <span>Software Developer</span></h2>

          <div class="social">

            
            <a class="linkedin" href="https://www.linkedin.com/pub/brett-cunningham-ii/a7/a96/b3" data-username="#">LinkedIn</a>
            <a class="github" href="https://github.com/MrSankofa">Github</a>
            <a class="email" href="mailto:bwcunninghamii@gmail.com">Email me</a>
          </div>

        </div>

      </header>
    </React.Fragment>
  )
}

export default Header;