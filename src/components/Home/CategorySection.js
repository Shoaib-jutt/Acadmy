import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const greenText = {
  color: "#56B24B",
  fontSize: 26,
};

const subItemText = {
  color: "#ffffff",
  fontSize: 24,
  fontWeight: "bolder",
};

const itemSeperator = {
  backgroundColor: "#ffffff",
  height: 4,
  width: "50%",
  borderRadius: 100,
  marginBottom: 40,
  marginTop: 20,
};

class Category extends Component {
  render() {
    return (
      <main>
        <section className="category__area">
          <div className="pt-30 pb-10" style={{ backgroundColor: "#56B24B" }}>
            <div className="container">
              <div className="row align-items-end">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
                  <div className="section__title-wrapper">
                    <h1
                      className="clickableText"
                      style={{
                        color: "#ffffff",
                        fontSize: 60,
                        lineHeight: 1,
                      }}
                    >
                      EXPLORE <br />
                      <span style={{ color: "#15375B" }}>US </span>
                    </h1>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4">
                  <div className="category__more float-md-end fix mb-20 clickableText">
                    <Link href="/course-grid">
                      <a className="link-btn" style={{ color: "#ffffff" }}>
                        View all Category
                        <FontAwesomeIcon
                          icon={["fas", "arrow-right"]}
                          style={{
                            marginLeft: 12,
                            width: 24,
                            height: 24,
                            color: "#ffffff",
                          }}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-60 pb-30" style={{ backgroundColor: "#15375B" }}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h3 style={greenText} className="clickableText">
                    F.SC
                  </h3>
                  <div style={itemSeperator} />
                  <h3 style={greenText} className="clickableText">
                    ICS
                  </h3>
                  <div style={itemSeperator} />
                  <h3 style={greenText} className="clickableText">
                    MATRIC
                  </h3>
                </div>

                <div className="col">
                  <h3 style={greenText} className="mb-30 clickableText">
                    ENGINEERING TESTS
                  </h3>
                  <h4 style={subItemText} className="clickableText">
                    ECAT
                  </h4>
                  <h4 style={subItemText} className="clickableText">
                    NUST
                  </h4>
                  <h4 style={subItemText} className="clickableText">
                    FAST
                  </h4>
                  <h4 style={subItemText} className="clickableText">
                    GIKI
                  </h4>
                  <h4 style={subItemText} className="clickableText">
                    PIEAS
                  </h4>
                  <h4 style={subItemText} className="clickableText">
                    NTS
                  </h4>
                </div>

                <div className="col">
                  <div
                    style={{
                      display: "flex",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: 3,
                        backgroundColor: "white",
                        marginLeft: -50,
                        marginTop: 16,
                        marginBottom: 16,
                      }}
                    ></div>
                    <div
                      style={{
                        display: "flex",
                        marginLeft: 50,
                        flexDirection: "column",
                      }}
                    >
                      <h3 style={greenText} className="mb-30">
                        MEDICAL TESTS
                      </h3>
                      <h4 style={subItemText} className="clickableText">
                        NMDCAT
                      </h4>
                      <h4 style={subItemText} className="clickableText">
                        AGA KHAN
                      </h4>
                      <h4 style={subItemText} className="clickableText">
                        FMDC
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Category;
