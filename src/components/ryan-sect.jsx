import React from "react";
import Popup from "reactjs-popup";

import dna from "../img/dna.png";
import minicity from "../img/minicity.png";

// from https://react-popup.elazizi.com/react-modal/
// This function/section works fine. Keeping for reference while prototyping other elements

// class RyanSect extends React.Component{
//     render(){
//       return (
//         <div className="col-md-4">
//           <div className="work-box">
//             <Popup trigger={
//               <button className="work-img">
//                 <img src={minicity} alt="Autonomous Vehicle Simulation in FLOW" className="img-fluid" />
//               </button>} modal nested>
//               {close => (
//                 <div className="modal1"> 
//                   <button className="close" onClick={close}>
//                     &times;
//                   </button>
//                   <div className="header"> Project 1 Title </div>
//                   <div className="content">
//                     {' '}
//                     Here's going to be the intro to the project and maybe some tools used
//                     <br />
//                     Here's a brief description, links to the github and maybe a picture on the side/top depending on window size
//                   </div>
//                 </div>
//               )}
//             </Popup>
//             <div className="work-content">
//               <div className="row">
//                   <div className="col-sm-8">
//                   <h2 className="w-title">Training Autonomous Vehicles with RL</h2>
//                   <div className="w-more">
//                       <span className="w-ctegory">
//                       Python, FLOW, RLlib, OpenAI Gym, SUMO, OpenStreetMaps, Tensorflow
//                       </span>
//                   </div>
//                   </div>
//                   <div className="col-sm-4">
//                   <div className="w-like">
//                       <span className="ion-ios-plus-outline"></span>
//                   </div>
//                   </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
//   export default RyanSect;

class RyanSect extends React.Component{
  render(){
    return (
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
    );
  }
}
export default RyanSect;