import React from 'react'

function Review() {
  return (
    
        <>
  {/* Hello world */}
  <div className="container-fluid">
    <div align="center">
      <h4
        style={{
          fontStyle: '"kghappy"',
          fontSize: 30,
          WebkitTextStroke: "1px black",
          fontWeight: 800,
          paddingBottom: 40,
          color: "#FDE200",
          paddingTop: 40
        }}
      >
        Review
      </h4>
    </div>
    <section id="testim" className="testim">
      <div className="testim-cover">
        <div className="wrap">
          <span id="right-arrow" className="arrow right fa fa-chevron-right" />
          <span id="left-arrow" className="arrow left fa fa-chevron-left " />
          <ul id="testim-dots" className="dots">
            <li className="dot active" />
            {/*
             */}
            <li className="dot" />
            {/*
             */}
            <li className="dot" />
            {/*
             */}
            <li className="dot" />
            {/*
             */}
            <li className="dot" />
          </ul>
          <div id="testim-content" className="cont">
            <div className="active">
              <div className="img" style={{ paddingTop: 40 }}>
                <img
                  src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg"
                  alt=""
                />
              </div>
              <h2>Lorem P. Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
            <div>
              <div className="img" style={{ paddingTop: 40 }}>
                <img
                  src="https://timesofindia.indiatimes.com/thumb/msid-75752690,width-800,height-600,resizemode-4/75752690.jpg"
                  alt=""
                />
              </div>
              <h2>Mr. Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
            <div>
              <div className="img" style={{ paddingTop: 40 }}>
                <img
                  src="https://p16.muscdn.com/img/musically-maliva-obj/1627333501517830~c5_720x720.jpeg"
                  alt=""
                />
              </div>
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
            <div>
              <div className="img" style={{ paddingTop: 40 }}>
                <img
                  src="https://p16-sg-default.akamaized.net/aweme/1080x1080/tiktok-obj/1666413671597057.jpeg"
                  alt=""
                />
              </div>
              <h2>Lorem De Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
            <div>
              <div className="img" style={{ paddingTop: 40 }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKLJe1Lrz2N3ufVSwQokSJ79jGBbIptXuVnsdxMmNUlE14ohwp&usqp=CAU"
                  alt=""
                />
              </div>
              <h2>Ms. Lorem R. Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</>
 
  )
}

export default Review