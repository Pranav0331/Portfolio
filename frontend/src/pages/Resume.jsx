import { Download } from 'lucide-react';
import PageMeta from '../components/layout/seo/PageMeta';

export default function Resume() {
  return (
    <>
      <PageMeta
        title="Resume | Pranav Mathur"
        description="View and download Pranav Mathur's resume."
      />
      <section className="page-container">
        <div className="glass-card mb-6 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h1 className="page-title">Resume</h1>
            <p className="page-subtitle">
              Preview my resume below or download a copy.
            </p>
          </div>
          <a
            href="/resume.pdf"
            download="Pranav_Mathur_Resume.pdf"
            className="glass-btn-primary animate-download shrink-0"
          >
            <Download className="mr-2 h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <div className="glass-card overflow-hidden">
          <iframe
            src="/resume.pdf"
            title="Pranav Mathur Resume"
            className="h-[75vh] w-full bg-white/5"
          />
        </div>

        <p className="mt-4 text-center text-sm text-themed-subtle">
          Replace <code className="text-xs text-themed-muted">public/resume.pdf</code> with your actual resume file.
        </p>
      </section>
    </>
  );
}
