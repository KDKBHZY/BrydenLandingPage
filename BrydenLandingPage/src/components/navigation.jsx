import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">

          <a className="navbar-brand page-scroll" href="https://www.brydenfinancing.com/">
            <img src="https://ddztmb1ahc6o7.cloudfront.net/brydenfinancing/wp-content/uploads/2022/08/15130134/Bryden_financing_and_auto_sales-1%402x.png" width="208" height="75"></img>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >

          <div className="nav navbar-nav navbar-right">
            <div class="row">
              <ul>
                <li>
                 
                  <a href="https://www.google.com/maps/place/Bryden+Financing+%26+Auto+Sales/@44.7603208,-63.6703595,17z/data=!3m1!4b1!4m6!3m5!1s0x4b5988f132eddad1:0x498da033b81ad4be!8m2!3d44.7603208!4d-63.6703595!16s%2Fg%2F1tjxf7hg?entry=ttu">
                  <div class="col-md-8">
                    <span>
                      <img height="15px" width="15px" src="https://www.svgrepo.com/show/127575/location-sign.svg">
                      </img>
                     <p>257 Sackville Drive, Lower Sackville NS Canada</p> 
                    </span>
                  </div>
                  </a>
                  <div class="col-md-6">col-2</div>
                  <div class="col-md-6">col-3</div>
                  <div class="col-md-6">col-4</div>
                </li>
              </ul>
            </div>

            <div class="row">
              <div class="col-md-3">col-8</div>
              <div class="col-md-3">col-4</div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};
