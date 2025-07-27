import React from "react";
import logo from "./logo1.png";
import "./Home.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="nav">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="yo" />
          </div>
        </Link>
        <div className="navc">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            {" "}
            <Link to="/search">Search</Link>
          </p>
          <p>
            <Link to="/watchlist">Watchlist</Link>
          </p>
          <p>
            <Link to="/about">About Us</Link>
          </p>
        </div>
      </div>
      {/* <div className='aboutviewly'>\
        <li>Email: sanathwaraikar@gmail.com</li>
        <li>GitHub: <a href="https://github.com/sanath-2512" >sanath-2512</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/sanath-waraikar/" target="_blank">Sanath Waraikar</a></li>
        </ul>
        </div> */}
      <div className="aboutviewly">
        <h1>About Viewly</h1>
        <div>
          <strong>Viewly</strong> is a modern and intuitive movie discovery web
          application built to provide an engaging experience for film
          enthusiasts. It allows users to effortlessly:
        </div>
        <div>
          <ul>
            1) Explore trending and popular movies
            <br />
            2) Search by movie name <br /> 3) Watch official trailers <br />
            4) View comprehensive movie details <br />
            5) Build and manage a personalized watchlist with local storage
            support
          </ul>
          <div>
            The app fetches real-time data from the{" "}
            <strong>TMDB (The Movie Database) API</strong>, and integrates{" "}
            <strong>YouTube trailer</strong> links for a dynamic and interactive
            experience.
          </div>
        </div>
      </div>
      <div className="features">
        <div className="techstack">
          <h1>TechStack</h1>
          <ul>
            {" "}
            <li> Frontend: React.js, JSX, CSS (or TailwindCSS)</li>
            <br />
            <li>API Integration: TMDB API, YouTube embed</li> <br />
            <li>State Management: React useState/useEffect</li> <br />
            <li>Persistence: localStorage</li> <br />
            <li>Deployment: Netlify</li>
          </ul>
        </div>
        <div className="learninggoals">
          <h1>Learning Goals</h1>
          The primary goal of building Viewly was to:
          <ul>
            <li> Practice real-world API integration</li>
            <li>Learn how to manage application state effectively</li>
            <li>
              Work with user-interactive features like a persistent watchlist
            </li>
            <li>Improve frontend design and animation skills</li>
            <li>Understand routing and component architecture in React</li>
          </ul>
          This project is Major milestone in my journey toward becoming a
          full-stack developer.
        </div>
      </div>
      <div className="future">
        <h1>Possible Future Enhancements</h1>
        <ul>
          <li>User authentication (Clerk)</li>
          <li>Movie genre filters and sorting</li>
          <li>Pagination and infinite scroll for trending lists</li>
          <li>Dark/light theme toggle</li>
          <li>Backend integration for a full-stack experience</li>
        </ul>
      </div>

      <div className="thedevel">
        <h1>The Developer</h1>
        <p>
          Hi! I’m <strong>Sanath P Waraikar</strong>, a passionate student of{" "}
          <strong>Computer Science & Artificial Intelligence</strong>,
          constantly exploring the world of web development, UI/UX, and
          AI-powered applications.
        </p>
        <p>
          I enjoy turning ideas into meaningful digital products and take pride
          in writing clean, readable, and scalable code. <strong>Viewly</strong>{" "}
          is one of many projects I’m building as I grow my skills toward
          becoming a full-stack software engineer.
        </p>

        <h2>Connect with Me</h2>
        <div className="thedeveloper">
          <ul>
            Email: sanathwaraikar@gmail.com <br />
            GitHub: <a href="https://github.com/sanath-2512">
              sanath-2512
            </a>{" "}
            <br />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/sanath-waraikar/"
              target="_blank"
            >
              Sanath Waraikar
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
