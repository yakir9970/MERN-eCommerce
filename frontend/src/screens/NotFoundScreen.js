import React from "react";
import Meta from "../components/Meta";
import "./NotFoundScreen.css";

const NotFoundScreen = () => {
  return (
    <>
      <Meta title={"Oops, 404!"} />
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm10 col-sm-offset-1 text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">Looks Like You're Lost...</h3>
                  <p>The page you're looking for is not available!</p>
                  <a href="/" className="link_404">
                    Go To Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundScreen;
