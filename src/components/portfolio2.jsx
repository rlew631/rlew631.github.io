import React from "react";
import Popup from "reactjs-popup";

//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import dna from "../img/dna.png";
import minicity from "../img/minicity.png";
import drone from "../img/drone_cad.png";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Here are some of the Robotics, Data Science and Engineering projects I've developed (along with this site)
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <Popup trigger={
                  <button className="work-img">
                    <img src={minicity} alt="Autonomous Vehicle Simulation in FLOW" className="img-fluid" />
                  </button>} modal nested>
                  {close => (
                    <div className="modal1"> 
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="header">Training Autonomous Vehicles with RL</div>
                      <div className="content">
                        {' '}
                        Here's going to be the intro to the project and maybe some tools used
                        <br />
                        Here's a brief description, links to the github and maybe a picture on the side/top depending on window size
                      </div>
                    </div>
                  )}
                </Popup>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                    <h2 className="w-title">Training Autonomous Vehicles with RL</h2>
                    <div className="w-more">
                      <span className="w-ctegory">
                      Python, FLOW, RLlib, OpenAI Gym, SUMO, OpenStreetMaps, Tensorflow
                      </span>
                    </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline"></span>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <Popup trigger={
                  <button className="work-img">
                    <img src={dna} alt="Project number 2" className="img-fluid" />
                  </button>} modal nested>
                  {close => (
                    <div className="modal1"> 
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="header"> Project 1 Title </div>
                      <div className="content">
                        {' '}
                        Here's going to be the intro to the project and maybe some tools used
                        <br />
                        Here's a brief description, links to the github and maybe a picture on the side/top depending on window size
                      </div>
                    </div>
                  )}
                </Popup>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                    <h2 className="w-title">Drug stuff</h2>
                    <div className="w-more">
                      <span className="w-ctegory">
                      Python, tools for drug stuff
                      </span>
                    </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline"></span>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
