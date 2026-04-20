import { useState } from "react";
import Profile from "./component/CV";
import Dashboard from "./component/dashboard";
import "./App.css";

type Section = "home" | "cv" | "projects" | "about" | "contact";

function App() {
  const [currentSection, setCurrentSection] = useState<Section>("home");

  const navTo = (section: Section) => {
    setCurrentSection(section);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <a href="#" onClick={() => navTo("home")} className="brand">
          CV & Portfolio
        </a>
        <nav className="site-nav">
          <button onClick={() => navTo("cv")}>CV</button>
          <button onClick={() => navTo("projects")}>Project</button>
          <button onClick={() => navTo("about")}>About</button>
          <button onClick={() => navTo("contact")}>Contact</button>
        </nav>
      </header>

      <main className="main-content">
        {currentSection === "home" && (
          <section className="hero-section">
            <div className="section-content">
              <div className="hero-card">
                <span className="hero-chip">Belajar React</span>
                <div className="hero-avatar">Abcd</div>
                <h1>Web CV dan Portfolio</h1>
                <p>
                  Saya sedang belajar membangun website CV dan portfolio dengan React dan dibantu oleh copilot.
                </p>
                <div className="hero-actions">
                  <button onClick={() => navTo("cv")}>CV</button>
                  <button onClick={() => navTo("projects")}>Project</button>
                  <button onClick={() => navTo("contact")}>Contact</button>
                </div>
              </div>
            </div>
            <footer className="footer">
              <p>&copy; 2026 Web Portfolio. All rights reserved.</p>
            </footer>
          </section>
        )}

        {currentSection === "cv" && (
          <section className="full-section">
            <div className="section-content">
              <Profile />
            </div>
            <footer className="footer">
              <p>&copy; 2026 Web CV. Kunjungi <a href="#">LinkedIn</a> atau <a href="#">GitHub</a> kami</p>
            </footer>
          </section>
        )}
        {currentSection === "projects" && (
          <section className="full-section">
            <div className="section-content">
              <Dashboard />
            </div>
            <footer className="footer">
              <p>&copy; 2026 Web Projects. Lihat project-project kami di <a href="#">GitHub</a></p>
            </footer>
          </section>
        )}

        {currentSection === "about" && (
          <section className="full-section">
            <div className="section-content">
              <div className="card about-section">
                <div className="section-header">About</div>
                <p>
                  Kami adalah tim dengan latar belakang teknik komputer, IoT, dan memiliki minat di web
                  development.
                </p>
              </div>
            </div>
            <footer className="footer">
              <p>&copy; 2026 Web About. All rights reserved.</p>
            </footer>
          </section>
        )}

        {currentSection === "contact" && (
          <section className="full-section">
            <div className="section-content">
              <div className="card contact-section">
                <div className="section-header">Contact</div>
                <p>Hubungi kami untuk kolaborasi, project, atau pengembangan web bersama.</p>
                <div className="contact-grid">
                  <div>
                    <strong>Email</strong>
                    <p>firmanalief098@gmail.com</p>
                  </div>
                  <div>
                    <strong>WhatsApp</strong>
                    <p>+62 85706336657</p>
                  </div>
                  <div>
                    <strong>Lokasi</strong>
                    <p>Surabaya, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer">
              <p>&copy; 2026 Web Contact.</p>
            </footer>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
