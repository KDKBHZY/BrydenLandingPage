import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-expand-sm navbar-light bg-white">
      <div className="container">

        <div className="navbar-header">
        <div className="container" >
        <a className="navbar-brand page-scroll" href="https://www.brydenfinancing.com/">
              <img src="https://ddztmb1ahc6o7.cloudfront.net/brydenfinancing/wp-content/uploads/2022/08/15130134/Bryden_financing_and_auto_sales-1%402x.png" width="208" height="75"></img>
            </a>{" "}
          </div>
          <div
            className="collapse"
          >
            <a className="navbar-brand page-scroll" href="https://www.brydenfinancing.com/">
              <img src="https://ddztmb1ahc6o7.cloudfront.net/brydenfinancing/wp-content/uploads/2022/08/15130134/Bryden_financing_and_auto_sales-1%402x.png" width="208" height="75"></img>
            </a>{" "}
          </div>

        </div>


        <div id="navright" class="nav navbar-nav navbar-right">
          <div id="mobilecontainer" >
            <div className="row align-items-center">
              <a href="https://www.facebook.com/brydenauto/" target="_blank">
                <img height="35px" width="35px" src="data:image/png;base64,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">
                </img>
              </a>

              <a href="https://www.instagram.com/bryden_financing/" target="_blank">
                <img height="35px" width="35px" src="data:image/png;base64,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">
                </img>
              </a>

              <a href="https://www.tiktok.com/@brydenfinancingautosales" target="_blank">
                <img height="45px" width="45px" src="data:image/jpeg;base64,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">
                </img>
              </a>
            </div>

          </div>
          <div
            className="collapse navbar-collapse"
          >
            <div class="container">
              <div class="row align-items-center">

                <a href="https://www.google.com/maps/place/Bryden+Financing+%26+Auto+Sales/@44.7603208,-63.6703595,17z/data=!3m1!4b1!4m6!3m5!1s0x4b5988f132eddad1:0x498da033b81ad4be!8m2!3d44.7603208!4d-63.6703595!16s%2Fg%2F1tjxf7hg?entry=ttu">
                  <div class="col">
                    <div class="row align-items-center">
                      <img height="15px" width="15px" src="https://www.svgrepo.com/show/127575/location-sign.svg">
                      </img>
                      <p>257 Sackville Drive, Lower Sackville NS Canada   </p>
                    </div>
                  </div>

                </a>
                <a href="https://www.google.com/maps/place/Bryden+Financing+%26+Auto+Sales/@44.7603208,-63.6703595,17z/data=!3m1!4b1!4m6!3m5!1s0x4b5988f132eddad1:0x498da033b81ad4be!8m2!3d44.7603208!4d-63.6703595!16s%2Fg%2F1tjxf7hg?entry=ttu">
                  <div class="col">
                    <div class="row align-items-center">
                      <img height="15px" width="15px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEX///8AAAD7+/vu7u7n5+eGhobIyMhcXFwGBgYzMzMgICCVlZUYGBjZ2dm/v79DQ0NJSUl3d3fh4eHS0tJ9fX319fW0tLRhYWGdnZ1ra2umpqY8PDytra0nJydRUVFWVlZo6iquAAACdklEQVRoge2Z6W7CMBCEbecgQBogIdyU93/LmiBa8K6PsIMqVZ2/rT6sjXf2sFL/SpXJszeBu/m21nrygUd3awu+ad1j0c1CP6oEortntFUBYxcu2mqCQfdLhq31FBH4/siytV4A6Py5r1qK2Vy871oJ2R8BttYbGXwfhFciL8iCbGFgwlGxygVwU0fgokwNXZarZpLLXsbiIrEwc/7NuIgMrIvAKwlcTSN0EfwQZsvcK5yklbBab0NwaTENXXWhLdqr7v+kgDK9e8/HvMn4Piaks1vz8AbBVi3LllbQu7hihwmK4g3mAGJzzUttYHB69DmMrdSnCxfn5oPI0fdAuJq4dElT4Yp0MGsgXK1ceguE5y78AoSruUs/AeFm9s5v2rhwhJ9/i1RTZJr2Lhxk6TfRHgZ5Hy8u/AxcYpDLro8461UnQkfmEq14oC3AVT2dBrY4OlNPl7jlDtNTH7135lA0436ZmK9Vx/5nPsTw8zSGT/ZGmq+p5c9WLD3ZMuKPmmvAnhrYVbKFsv3d9HnIyNxs3qXS+YHg0SQ3FfnzIvXwxNtvh79PMS1pFgalmqhnyNteT9d7J+PUyugbIYvS084PSg28d5oJKrUNjIy/HvHpRkX9N0Hn1ALA35mIkvvA2E6DVXJlzH3L2IDS1wUmuBpgNcYjSQ8Z0WIE2xoNZ5J+jVwYZGRiCml0lzYin6rxBbdNPvxLk1pqur62W8q4wk00fYlt1SXERjAcN7GEffnggzbh5a90m9f432cQk3Hn85tazrbK5ty+sEbNlqZckc4F+ZBqmv3jk8cMOZwN/LK4x+fylvfl9rSv9Ay5KHhW3wJnvr+sL3NqGEmHoZ9eAAAAAElFTkSuQmCC">
                      </img>
                      <p>Local  (902)-865-4495   </p>
                    </div>
                  </div>
                </a>
                <a href="https://www.google.com/maps/place/Bryden+Financing+%26+Auto+Sales/@44.7603208,-63.6703595,17z/data=!3m1!4b1!4m6!3m5!1s0x4b5988f132eddad1:0x498da033b81ad4be!8m2!3d44.7603208!4d-63.6703595!16s%2Fg%2F1tjxf7hg?entry=ttu">
                  <div class="col">
                    <div className="row align-items-center">
                      <img height="15px" width="15px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEX///8AAAD7+/vu7u7n5+eGhobIyMhcXFwGBgYzMzMgICCVlZUYGBjZ2dm/v79DQ0NJSUl3d3fh4eHS0tJ9fX319fW0tLRhYWGdnZ1ra2umpqY8PDytra0nJydRUVFWVlZo6iquAAACdklEQVRoge2Z6W7CMBCEbecgQBogIdyU93/LmiBa8K6PsIMqVZ2/rT6sjXf2sFL/SpXJszeBu/m21nrygUd3awu+ad1j0c1CP6oEortntFUBYxcu2mqCQfdLhq31FBH4/siytV4A6Py5r1qK2Vy871oJ2R8BttYbGXwfhFciL8iCbGFgwlGxygVwU0fgokwNXZarZpLLXsbiIrEwc/7NuIgMrIvAKwlcTSN0EfwQZsvcK5yklbBab0NwaTENXXWhLdqr7v+kgDK9e8/HvMn4Piaks1vz8AbBVi3LllbQu7hihwmK4g3mAGJzzUttYHB69DmMrdSnCxfn5oPI0fdAuJq4dElT4Yp0MGsgXK1ceguE5y78AoSruUs/AeFm9s5v2rhwhJ9/i1RTZJr2Lhxk6TfRHgZ5Hy8u/AxcYpDLro8461UnQkfmEq14oC3AVT2dBrY4OlNPl7jlDtNTH7135lA0436ZmK9Vx/5nPsTw8zSGT/ZGmq+p5c9WLD3ZMuKPmmvAnhrYVbKFsv3d9HnIyNxs3qXS+YHg0SQ3FfnzIvXwxNtvh79PMS1pFgalmqhnyNteT9d7J+PUyugbIYvS084PSg28d5oJKrUNjIy/HvHpRkX9N0Hn1ALA35mIkvvA2E6DVXJlzH3L2IDS1wUmuBpgNcYjSQ8Z0WIE2xoNZ5J+jVwYZGRiCml0lzYin6rxBbdNPvxLk1pqur62W8q4wk00fYlt1SXERjAcN7GEffnggzbh5a90m9f432cQk3Hn85tazrbK5ty+sEbNlqZckc4F+ZBqmv3jk8cMOZwN/LK4x+fylvfl9rSv9Ay5KHhW3wJnvr+sL3NqGEmHoZ9eAAAAAElFTkSuQmCC">
                      </img>
                      <p>Toll Free 1(877)427-9336   </p>
                    </div>
                  </div>
                </a>
                <div class="col noborder">
                  <div className="row align-items-center">
                    <a href="https://www.facebook.com/brydenauto/" target="_blank">
                      <img height="25px" width="25px" src="data:image/png;base64,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">
                      </img>
                    </a>

                    <a href="https://www.instagram.com/bryden_financing/" target="_blank">
                      <img height="25px" width="25px" src="data:image/png;base64,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">
                      </img>
                    </a>

                    <a href="https://www.tiktok.com/@brydenfinancingautosales" target="_blank">
                      <img height="35px" width="35px" src="data:image/jpeg;base64,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">
                      </img>
                    </a>
                  </div>
                </div>


              </div>

              <div id="row1" class="row">
                <br />
              </div>

              <div id="row2" class="row">
                <div class="col noborder">
                </div>
                <div class="col noborder">
                </div>
                <a href="https://www.brydenfinancing.com/">
                  <div class="col">
                    <p>Home</p>
                  </div>
                </a>
                <a href="https://www.brydenfinancing.com/all/">
                  <div class="col">
                    <p>Inventory</p>
                  </div>
                </a>
                <a href="https://www.brydenfinancing.com/cash-for-cars/">
                  <div class="col">
                    <p>Cash for cars</p>
                  </div>
                </a>
                <a href="https://www.brydenfinancing.com/credit-application/">
                  <div class="col">
                    <p>Finance</p>
                  </div>
                </a>
                <a href="https://www.brydenfinancing.com/loan-calculator/">
                  <div class="col">
                    <p>Loan Calculator</p>
                  </div>
                </a>
                <a href="https://www.brydenfinancing.com/contact/">
                  <div class="col">
                    <p>Contact</p>
                  </div>
                </a>
                <a href="https://www.brydenfinancing.com/about/">
                  <div class="col noborder">
                    <p>About</p>
                  </div>
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};