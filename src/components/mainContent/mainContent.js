import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <main className="main-content">
      <h1>Welcome to Our Simple Homepage</h1>
      <p>This is a basic React.js homepage example.</p>

      <section className="section">
        <h2>About Us</h2>
        <p>
          We are a small team of developers and designers who are passionate about creating exceptional web experiences using React. With years of experience, we bring innovative solutions to our clients.
        </p>
      </section>

      <section className="section">
        <h2>Services</h2>
        <ul>
          <li>Web Development: From simple websites to complex web applications, we build solutions tailored to your needs.</li>
          <li>UI/UX Design: Our creative designers craft user-centered interfaces that enhance user satisfaction.</li>
          <li>Consulting: We provide expert advice and guidance on your projects, helping you make informed decisions.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <p>Check out some of our recent projects:</p>
        <ul>
          <li>
            <a href="/project1">Project 1</a> - A responsive e-commerce platform with seamless checkout experience.
          </li>
          <li>
            <a href="/project2">Project 2</a> - An interactive travel blog showcasing stunning destinations around the world.
          </li>
          <li>
            <a href="/project3">Project 3</a> - A productivity app designed to streamline daily tasks and organization.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to contact us:</p>
        <address>
          Email: <a href="mailto:info@example.com">info@example.com</a><br />
          Phone: <a href="tel:+123456789">+123 456 789</a>
        </address>
      </section>
    </main>
  );
}

export default MainContent;
