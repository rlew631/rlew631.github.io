import React from "react";

const toolkit = (
  <div className="toolkit">

    <div className="skillset">
      <h2 className="w-title">
        Data Science/ Machine Learning
      </h2>
      <div className="tools">
        <img src="https://img.shields.io/badge/C++%20-brown.svg?&style=for-the-badge&logo=C&logoColor=white" alt="C++"></img>
        <img src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white" alt="Python"></img>
        <img src="https://img.shields.io/badge/-Matlab-0076A8?style=for-the-badge&logo=Mathworks" alt="Matlab"></img>

        <img src="https://img.shields.io/badge/numpy%20-%23013243.svg?&style=for-the-badge&logo=numpy&logoColor=white" alt="Numpy"></img>
        <img src="https://img.shields.io/badge/pandas%20-%23150458.svg?&style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas"></img>
        <img src="https://img.shields.io/badge/SkLearn%20-%23E34F26.svg?&style=for-the-badge&logo=scikit%20learn&logoColor=white" alt="SKLearn"></img>
        <img src="https://img.shields.io/badge/Keras%20-%23D00000.svg?&style=for-the-badge&logo=Keras&logoColor=white" alt="Keras"></img>
        <img src="https://img.shields.io/badge/TensorFlow%20-%23430098.svg?&style=for-the-badge&logo=TensorFlow&logoColor=white" alt="TensorFlow"></img>

        <img src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku"></img>
        <img src="https://img.shields.io/badge/Jupyter%20-%23F37626.svg?&style=for-the-badge&logo=Jupyter&logoColor=white" alt="Jupyter"></img>
        <img src="https://img.shields.io/badge/Colab%20-%2320232a.svg?&style=for-the-badge&logo=google&logoColor=white" alt="Colab"></img>
      </div>
    </div>

    <div classname="skillset">
      <h2 className="w-title">
        Web Development
      </h2>
      <div className="tools">
        <img src="https://img.shields.io/badge/html%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" alt="HTML"></img>
        <img src="https://img.shields.io/badge/css%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS"></img>
        <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="Javascript"></img>
        <img src="https://img.shields.io/badge/flask%20-%2307405e.svg?&style=for-the-badge&logo=flask&logoColor=white" alt="Flask"></img>
        <img src="https://assets.website-files.com/5dc3b47ddc6c0c2a1af74ad0/5e18182ab1025a63c984f248_RGB_Logo_Horizontal_Color_Dark_Bg-p-2000.png" height="28"></img>
        <img src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white" alt="Git"></img>
        <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white" alt="Github"></img>

        <img src="https://img.shields.io/badge/-PostgreSQL-336791?style=for-the-badge&logo=PostgreSQL" alt="PostGresQL"></img>
        <img src="https://img.shields.io/badge/-MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white" alt="MySQL"></img>
      </div>
    </div>

    <div classname="skillset">
      <h2 className="w-title">
        Operating Systems
      </h2>
      <div className="tools">
        <img src="https://img.shields.io/badge/mac-os?logo=apple&logoColor=white&color=999999&style=for-the-badge" alt="MacOS"></img>
        <img src="https://img.shields.io/badge/-ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=FFFFFF" alt="Ubuntu"></img>
        <img src="https://img.shields.io/badge/-debian-A81D33?style=for-the-badge&logo=debian" alt="Debian"></img>
      </div>
    </div>

    <div classname="skillset">
      <h2 className="w-title">
        Embedded Systems
      </h2>
      <div className="tools">
        <img src="https://img.shields.io/badge/-Raspberry%20Pi-C51A4A?style=for-the-badge&logo=Raspberry%20Pi" alt="RaspberryPi"></img>
        <img src="https://img.shields.io/badge/-arduino-00979D?style=for-the-badge&logo=arduino&logoColor=FFFFFF" alt="Arduino"></img>
      </div>
    </div>
  </div>
);

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "Currently located in Berkeley, Ryan holds a Bachelor's degree in Mechatronic Engineering and has primarily held positions at companies developing robotics and automation engineering products. His passion is for discovering how new technologies can be applied to existing problems in order to find simple and elegant solutions. His positive outlook and ability to convey complex principles in a digestible manner make him a joy to work with!"
        },
        // {
        //   id: "second-p-about",
        //   content:
        //     "And another paragraph possibly"
        // },
        // {
        //   id: "third-p-about",
        //   content:
        //     "Three is probably overkill"
        // }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About Me</h5>
                    </div>
                    {this.state.about_me.map(content => {
                      return (
                        <p className="lead" key={content.id}>
                          {content.content}
                        </p>
                      );
                    })}
                  </div>
                  </div>
                  <div className="col-md-6">
                    <div className="my-toolkit pt-4 pt-md-0">
                      <div className="title-box-2">
                          <h5 className="title-left">My Toolkit</h5>
                      </div>
                      {toolkit}
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

export default About;
