import { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import PageMeta from '../components/layout/seo/PageMeta';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { useToast } from '../context/ToastContext';
import { submitContact } from '../services/api';
import {
  GitHubIcon,
  LinkedInIcon,
  CodeChefIcon,
  HackerRankIcon,
} from '../components/ui/SocialIcons';

const initial = { name: '', email: '', message: '' };

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/pranavmathur36',
    icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/pranavmathur31',
    icon: LinkedInIcon,
  },
  {
    label: 'CodeChef',
    href: 'https://www.codechef.com/users/pranavmathur31',
    icon: CodeChefIcon,
  },
  {
    label: 'HackerRank',
    href: 'https://www.hackerrank.com/profile/pranavmathur36',
    icon: HackerRankIcon,
  },
];

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Invalid email address';
  if (!form.message.trim()) errors.message = 'Message is required';
  else if (form.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setLoading(true);
    try {
      await submitContact(form);
      showToast('Message sent successfully.', 'success');
      setForm(initial);
    } catch {
      showToast('Failed to send message. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageMeta
        title="Contact | Pranav Mathur"
        description="Get in touch with Pranav Mathur for opportunities, collaborations, or questions."
      />
      <section className="page-container">
        <div className="mx-auto max-w-4xl">
          <div className="glass-card mb-8 p-6 sm:p-8">
            <h1 className="page-title">Contact</h1>
            <p className="page-subtitle">
              Have a question or opportunity? Send a message and I&apos;ll get back to you.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
            <form onSubmit={handleSubmit} className="glass-card space-y-5 p-6 sm:p-8" noValidate>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-themed-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="glass-input"
                  autoComplete="name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-themed-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="glass-input"
                  autoComplete="email"
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-themed-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="glass-input resize-none"
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="glass-btn-primary disabled:opacity-60"
              >
                {loading && <LoadingSpinner size="sm" />}
                Send Message
              </button>
            </form>

            <div className="space-y-4">
              <div className="glass-card p-5">
                <h2 className="text-sm font-semibold text-themed">Get in Touch</h2>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-themed-muted">
                    <Mail className="h-4 w-4 shrink-0 text-blue-500 dark:text-blue-400" />
                    <span>pranavmathur31@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-themed-muted">
                    <MapPin className="h-4 w-4 shrink-0 text-blue-500 dark:text-blue-400" />
                    <span>India</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-5">
                <h2 className="text-sm font-semibold text-themed">Social</h2>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="glass-icon-btn"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
