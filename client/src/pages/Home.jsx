import React from "react";

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the best IT Company</p>
              <h1>Welcome to Prototype Company</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                blanditiis fuga deserunt sequi similique illum perspiciatis
                nostrum quos quaerat debitis?
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/services">
                  <button className="btn secondery-btn">Learn more</button>
                </a>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="/public/images/home.png"
                alt="hompage "
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>
      </main>

      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>registered companies</p>
          </div>
          <div className="div1">
            <h2>10,000+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Well known Developers</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>Service</p>
          </div>
        </div>
      </section>

      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-image">
            <img
              src="/public/images/home.png"
              alt="hompage "
              width={400}
              height={400}
            />
          </div>
          
          <div className="hero-content">
            <p>We are the best IT Company</p>
            <h1>Welcome to Prototype Company</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              blanditiis fuga deserunt sequi similique illum perspiciatis
              nostrum quos quaerat debitis?
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect Now</button>
              </a>
              <a href="/services">
                <button className="btn secondery-btn">Learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
