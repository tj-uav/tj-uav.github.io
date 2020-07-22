import React from 'react';
import Nav from './components/Nav';
import Button from './components/Button';
import './styles/Home.scss';

const Card = ({ header, src, style, children }) => {
  return (
    <div className="card" style={style}>
      <section className="content">
        <img src={src} alt="an icon" />
        <h1 className="heading">{header}</h1>
        {children}
      </section>
    </div>
  );
}

const Field = ({ label, type }) => {
  return (
    <>
      <label className="paragraph">{label}</label>
      {
        type === "textarea"
          ? <textarea className="paragraph" />
          : <input className="paragraph" type={type} />
      }
    </>
  )
}

function App() {
  return (
    <div className="home">
      <header className="home-header">
        <Nav />
      </header>
      <main id="hero">
        <section>
          <img src={require("./assets/logo.svg")} alt="TJAUV logo" />
          <p className="paragraph">
            We are a student-run team that designs, builds, and operates a custom search and
            rescue unmanned aerial system (copied from CUAir lol).  Help us achieve our dreams
          by <a href="/" className="link">sponsoring us!</a>
          </p>
        </section>
        <aside>
          <img src={require("./assets/home/img1.jpeg")} alt="The team" />
        </aside>
      </main>
      <section id="cards">
        <Card header="Team at TJHSST" src={require("./assets/home/cards/tjhsst.svg")}>
          <p className="paragraph">
            We are a group of innovative high-schoolers from the Thomas Jefferson High School for
            Sciece and Techology, ranked #1 high school in the nation.
          </p>
          <Button href="competition/">More About Us</Button>
        </Card>
        <Card header="Aerospace Geeks" src={require("./assets/home/cards/plane.svg")}>
          <p className="paragraph">
            In addition to creating and flying unmanned aircraft for fun, we create a search
            and rescue UAV for the yearly and international {" "}
            <a href="https://www.auvsi-suas.org/" rel="noopener noreferrer" className="link">AUVSI SUAS competition</a>.
          </p>
          <Button href="competition/">Learn More</Button>
        </Card>
        <Card header="UAV Enthusiasts" src={require("./assets/home/cards/drone.svg")}>
          <p className="paragraph">
            Design and build.  Program and fly.  Crash and repeat.  We love every part of the process.
          </p>
          <Button href="competition/">Meet the Team</Button>
        </Card>

      </section>
      <section id="about">
        <h1 className="heading">About Us</h1>
        <section className="content">
          <p className="paragraph">
            Thomas Jefferson Unmanned Aerial Vehicle (TJUAV) Team seeks to teach students about
            the basics of aeronautical design, flight, and programming. Students learn basic aviation,
            aircraft construction, electrical engineering, and computer science through several side
            projects such as individual construction of radio controlled (RC) planes and lectures by team
            leads. We work with Unmanned Aerial Systems (UAS) such as fixed wing and multirotor aircraft,
            flight computers, computer vision, and other technologies to achieve autonomous flight, respond
            to ground station commands, and detect objects...
          </p>
          <aside className="bordered">
            <img src={require("./assets/home/img2.jpeg")} alt="" />
          </aside>
        </section>
      </section>

      <section id="sponsors_contact">
        <section id="sponsors">
          <h1 className="heading">Sponsors</h1>
          <p className="paragraph">
            Put a brief summary of what our sponsors do for us here, along with a blurb to make organizations
            feel bad about not sponsoring us.  <a href="./" rel="noopener noreferrer" className="link">Sponsor us!</a>
          </p>
          <img src={require("./assets/home/TJPF.png")} alt="TJPF logo" />
        </section>
        <section id="contact">
          <h1 className="heading">Contact</h1>
          <form action="#">
            <Field label="Name" type="text" />
            <Field label="Email" type="text" />
            <Field label="Message" type="textarea" />
            <Button href="Send Message" form={true} />
          </form>
        </section>
      </section>
    </div>
  );
}

export default App;
