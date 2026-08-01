import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Hackathons from './pages/Hackathons';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <ToastProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="hackathons" element={<Hackathons />} />
                <Route path="experience" element={<Experience />} />
                <Route path="contact" element={<Contact />} />
                <Route path="resume" element={<Resume />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ToastProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
