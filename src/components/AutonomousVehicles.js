import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./AutVehicles.css";
import image1 from "./images/autonomous-vehicle-01.jpg";
import service1 from "./images/service1.png";
import service2 from "./images/service2.png";
import service3 from "./images/service3.png";
import service4 from "./images/service4.png";
import service5 from "./images/service5.png";
import service6 from "./images/service6.png";
import service7 from "./images/service7.png";
import solution1 from "./images/solution1.png";
import solution2 from "./images/solution2.png";
import footer from "./images/labelify-footer-logo.png";
import india from "./images/india.png";
import france from "./images/france.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function AutonomousVehicles() {
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  return (
    <>
      <div className="container-fluid con1">
        <div
          className="row row1"
          style={{
            width: display ? "95%" : "80%",
            padding: display ? "60px 0 100px 0" : "150px 0",
            margin: "auto",
          }}
        >
          <div className="col-lg-7 py-4" style={{ textAlign: "start" }}>
            <h2
              data-aos="fade-up"
              data-aos-duration="500"
              style={{ fontSize: display ? "36px" : "48px" }}
            >
              AUTONOMOUS VEHICLES AI INDIA
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{ fontSize: display ? "16px" : "18px" }}
            >
              Labelify is a global leader in technology services, providing data
              annotation across computer vision and natural language processing.
              This allows large companies to use machine learning and artificial
              intelligence for autonomous transportation.
            </p>
            <button className="btn btn-primary btn1">
              Let's Connect{" "}
              <i
                className="fa-solid fa-arrow-right"
                style={{ marginLeft: "5px" }}
              ></i>
            </button>
          </div>
          <div className="col-lg-5 row1col2 py-md-4 py-5">
            <center>
              <img
                src={image1}
                alt="img 1"
                style={{
                  height: "90%",
                  width: display ? "100%" : "90%",
                  borderRadius: "15px",
                  boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, .5)",
                  margin: "auto",
                }}
              />
            </center>
          </div>
        </div>
      </div>
      <div
        className="row row2"
        style={{
          width: display ? "85%" : "80%",
          margin: "auto",
          backgroundColor: "black",
          padding: display ? "50px 20px 10px 20px" : "60px 30px 40px 30px",
        }}
      >
        <div className="col-md-1" style={{ textAlign: "start" }}>
          <i
            className="fa-solid fa-desktop pb-5"
            style={{ color: "#ffffff", fontSize: "50px" }}
          ></i>
        </div>
        <div className="col-md-11 row2col2">
          <p style={{ fontSize: "20px" }}>
            Labelify's data labeling services, paired with experienced data
            annotation specialists, provide high-quality training data to
            support the machine learning models developed by leading engineers,
            product and data scientists from top autonomous vehicle companies.
          </p>
        </div>
      </div>
      <div
        className="row row3"
        style={{
          width: display ? "90%" : "80%",
          margin: "auto",
          textAlign: "start",
        }}
      >
        <h2
          className="mb-5"
          style={{
            fontSize: display ? "36px" : "48px",
            textAlign: "center",
          }}
        >
          SERVICES
        </h2>
        <div
          className="col-md-6 col-lg-3"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="card card1">
            <center>
              <img
                className="mb-2"
                src={service1}
                alt="service1"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
            </center>
            <div className="card-body">
              <h5>OBJECT TRACKING</h5>
              <p style={{ fontSize: display ? "16px" : "18px" }}>
                The use cases for labelify are face detection and pedestrian
                detection.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-3"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="card card1">
            <center>
              <img
                className="mb-2"
                src={service2}
                alt="service2"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
            </center>
            <div className="card-body">
              <h5>SEMANTIC SEGMENTATION</h5>
              <p style={{ fontSize: display ? "16px" : "18px" }}>
                The Labelify team segments images into components and annotates
                them. Labelify Computer Vision experts can detect desired
                objects in images at the pixel-level.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-3"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="card card1">
            <center>
              <img
                className="mb-2"
                src={service3}
                alt="service3"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
            </center>
            <div className="card-body">
              <h5>POLYGON ANNOTATION</h5>
              <p style={{ fontSize: display ? "16px" : "18px" }}>
                Expert annotators place points at each vertex of the target
                object. Annotating objects with polygons allows for all edges to
                be marked, regardless of their shape.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-3"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="card card1">
            <center>
              <img
                className="mb-2"
                src={service4}
                alt="service4"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
            </center>
            <div className="card-body">
              <h5>MULTI-SENSOR FUSION</h5>
              <p style={{ fontSize: display ? "16px" : "18px" }}>
                Labelify’s teams combine LiDAR with images from multiple angles
                taken from different sensors to help reduce uncertainty in
                navigation.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mx-0 py-lg-5">
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="card card1">
              <center>
                <img
                  className="mb-2"
                  src={service5}
                  alt="service5"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                />
              </center>
              <div className="card-body">
                <h5>BOUNDING BOXES</h5>
                <p style={{ fontSize: display ? "16px" : "18px" }}>
                  The Labelify Computer Vision experts use rectangle box
                  annotations to illustrate objects and train data. This allows
                  algorithms to locate and identify objects during ML processes.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="card card1">
              <center>
                <img
                  className="mb-2"
                  src={service6}
                  alt="service6"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                />
              </center>
              <div className="card-body">
                <h5>LIDAR</h5>
                <p style={{ fontSize: display ? "16px" : "18px" }}>
                  The Labelify teams label 360-degree visibility images and
                  videos captured by multi-sensor camera systems. This allows
                  them to create accurate ground truth datasets that can be used
                  to drive autonomous driving algorithms.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="card card1">
              <center>
                <img
                  className="mb-2"
                  src={service7}
                  alt="service7"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                />
              </center>
              <div className="card-body">
                <h5>PANOPTIC SEGMENTATION</h5>
                <p style={{ fontSize: display ? "16px" : "18px" }}>
                  Combining instance and semantic segmentation, Labelify
                  enrichment team identify pixels in images that belong to a
                  class and identify which instances they belong to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row row4 mt-5 mb-4 justify-content-center"
        style={{
          width: display ? "90%" : "80%",
          margin: "auto",
          textAlign: "start",
        }}
      >
        <h2
          className="mb-5"
          style={{
            fontSize: display ? "36px" : "48px",
            textAlign: "center",
          }}
        >
          SOLUTIONS
        </h2>
        <div
          className="col-md-6 col-lg-4 py-4"
          data-aos="zoom-in"
          data-aos-duration="1500"
          style={{ paddingRight: display ? "0" : "30px", paddingLeft: "0" }}
        >
          <div className="card card2">
            <center>
              <img
                className="mb-2"
                src={solution1}
                alt="solution1"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
            </center>
            <div className="card-body px-0">
              <h4
                style={{
                  textAlign: "center",
                  fontSize: display ? "20px" : "25px",
                  marginBottom: "30px",
                  marginTop: "17px",
                }}
              >
                COMPUTER VISION
              </h4>
              <p style={{ fontSize: display ? "16px" : "18px" }}>
                Labelify’s teams have extensive experience in autonomous vehicle
                domain Computer Vision projects.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 py-4"
          data-aos="zoom-in"
          data-aos-duration="1500"
          style={{ paddingRight: "0", paddingLeft: "0" }}
        >
          <div className="card card2">
            <center>
              <img
                className="mb-2"
                src={solution2}
                alt="solution2"
                style={{
                  height: "95%",
                  width: "93%",
                  borderRadius: "10px",
                }}
              />
            </center>
            <div className="card-body px-0">
              <h4
                style={{
                  textAlign: "center",
                  fontSize: display ? "20px" : "25px",
                }}
              >
                NATURAL LANGUAGE PROCESSING
              </h4>
              <p style={{ fontSize: display ? "16px" : "18px" }}>
                Labelify’s experts in linguistic labeling can help you build the
                best-in-class, in vehicle communication systems.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row row5 justify-content-center mx-0"
        data-aos="zoom-in"
        data-aos-duration="2500"
        style={{
          maxWidth: "100vw",
          marginTop: display ? "100px" : "150px",
          marginBottom: "100px",
        }}
      >
        <div className="col-md-10 col-lg-8">
          <h2
            className="py-3"
            style={{
              fontSize: display ? "36px" : "48px",
              textAlign: "center",
            }}
          >
            GETTING STARTED
          </h2>
          <p style={{ fontSize: display ? "16px" : "18px" }}>
            There has never been a greater need for high-quality, speedy data
            annotation. Labelify is a combination of the best in predictive and
            automated annotation technology, world-class data annotation, and
            subject matter experts to provide the data you need quickly.
          </p>
          <button className="btn btn-primary btn1">
            Let's Connect{" "}
            <i
              className="fa-solid fa-arrow-right"
              style={{ marginLeft: "5px" }}
            ></i>
          </button>
        </div>
      </div>
      {/* footer */}
      <div className="container-fluid con2">
        <div
          className="row"
          style={{
            width: display ? "90%" : "80%",
            margin: "auto",
            textAlign: "start",
            padding: "30px 0 20px 0",
          }}
        >
          <div className="col-md-6 col-lg-3 py-3">
            <img src={footer} alt="labelify" style={{ width: "100%" }} />
            <br />
            <br />
            <br />
            <p>
              <a
                href="mailto:hello@datalabelify.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                }}
              >
                hello@datalabelify.com
              </a>
            </p>
            <p>
              <a
                href="tel:+912025811220"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                +91 20 25811220
              </a>
            </p>
            <p>
              <img src={india} alt="IND" style={{ width: "20px" }} /> - Labelify
              HQ, Pune India
            </p>
            <p>
              <img src={france} alt="FR" style={{ width: "20px" }} /> - Paris,
              France
            </p>
          </div>
          <div className="col-md-6 col-lg-3 py-3">
            <p className="p1" style={{ fontSize: "20px" }}>
              Our Services
            </p>
            <p>Image Annotation</p>
            <p>Video Annotation</p>
            <p>Text Annotation</p>
            <p>Audio Transcription</p>
            <p>Image Segmentation</p>
            <p>Lidar Annotation</p>
            <p>Product Categorization</p>
            <p>Sentiment Analysis</p>
            <p>Content Moderation</p>
          </div>
          <div className="col-md-6 col-lg-3 py-3">
            <p className="p1" style={{ fontSize: "20px" }}>
              Industries
            </p>
            <p>Autonomous Vehicles</p>
            <p>Commerce</p>
            <p>Agricultural AI</p>
            <p>Financial Services</p>
            <p>Geospatial Technology</p>
            <p>Medical AI</p>
            <p>Government</p>
          </div>
          <div className="col-md-6 col-lg-3 py-3">
            <p className="p1" style={{ fontSize: "20px" }}>
              Company
            </p>
            <p>About Us</p>
            <p>Blog</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
          </div>
          <hr />
          <p className="p2">
            © 2018 - 2022 Labelify | Annotate - Train - Automate
          </p>
        </div>
      </div>
    </>
  );
}

export default AutonomousVehicles;
