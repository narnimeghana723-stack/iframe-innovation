import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Linkedin,
  Github,
  Twitter,
  Youtube,
  Instagram
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FormState {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!form.name.trim()) {
      errs.name = 'Full name is required';
    } else if (form.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!form.email.trim()) {
      errs.email = 'Corporate or personal email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please provide a valid email address';
    }

    if (!form.subject.trim()) {
      errs.subject = 'Please specify a subject or project type';
    }

    if (!form.message.trim()) {
      errs.message = 'Please provide details about your project or inquiry';
    } else if (form.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic responsive API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }, 900);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#091122] relative text-white border-t border-b border-blue-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <span>GET IN TOUCH</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Let's Build Something Great Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Have an idea, project, or collaboration opportunity? We’d love to hear from you.
            Our technical leadership responds directly to inquiries.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Details & Socials */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="p-8 rounded-2xl bg-[#0e1935] border border-blue-900/60 text-white shadow-xl">
              <span className="text-xs font-mono font-medium text-cyan-400 tracking-wider uppercase block mb-2">
                HEADQUARTERS & LABS
              </span>
              <h3 className="text-2xl font-bold text-white mb-6">
                Direct Communication Channels
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start justify-between group">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-950/80 text-cyan-300 flex items-center justify-center shrink-0 border border-blue-800">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">General Inquiries</span>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(COMPANY_INFO.email, 'email')}
                    className="p-2 rounded-lg bg-blue-950 hover:bg-blue-900 text-slate-300 hover:text-white transition-colors cursor-pointer border border-blue-800/60"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-start justify-between group">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-950/80 text-cyan-300 flex items-center justify-center shrink-0 border border-blue-800">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">Phone Support</span>
                      <a
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors font-mono"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(COMPANY_INFO.phone, 'phone')}
                    className="p-2 rounded-lg bg-blue-950 hover:bg-blue-900 text-slate-300 hover:text-white transition-colors cursor-pointer border border-blue-800/60"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/80 text-cyan-300 flex items-center justify-center shrink-0 border border-blue-800">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Office Address</span>
                    <p className="text-sm font-semibold text-white leading-snug">
                      {COMPANY_INFO.address}
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">{COMPANY_INFO.cityStateZip}</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/80 text-cyan-300 flex items-center justify-center shrink-0 border border-blue-800">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Operating Hours</span>
                    <p className="text-sm font-semibold text-white">
                      {COMPANY_INFO.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-blue-900/60">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-3 font-mono">
                  Connect on Social
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={COMPANY_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800 hover:bg-blue-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={COMPANY_INFO.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800 hover:bg-slate-700 text-slate-200 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={COMPANY_INFO.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800 hover:bg-cyan-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="X / Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={COMPANY_INFO.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800 hover:bg-red-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href={COMPANY_INFO.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800 hover:bg-pink-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick response guarantee card */}
            <div className="p-4 rounded-xl bg-[#0d1833] border border-blue-900/60 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
              <p className="text-xs text-slate-300">
                <strong className="text-white">Prompt Response SLA:</strong> Our technical team reviews and responds to all validated proposals within 24 business hours.
              </p>
            </div>
          </div>

          {/* Right Column: Professional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0e1935] border border-blue-900/60 shadow-xl">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 text-emerald-400 border border-emerald-800 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Successfully Sent!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you for reaching out to {COMPANY_INFO.name}. An engineering lead will review your project requirements and follow up shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-semibold shadow-md transition-colors cursor-pointer ring-1 ring-cyan-400/30"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5 font-mono">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Dr. Jane Cooper"
                        className={`w-full px-4 py-3 rounded-xl text-sm bg-[#081125] border transition-all text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-400 bg-red-950/20'
                            : 'border-blue-900/80 focus:ring-cyan-500 focus:border-cyan-500 focus:bg-[#0a152e]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5 font-mono">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane.cooper@enterprise.com"
                        className={`w-full px-4 py-3 rounded-xl text-sm bg-[#081125] border transition-all text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-400 bg-red-950/20'
                            : 'border-blue-900/80 focus:ring-cyan-500 focus:border-cyan-500 focus:bg-[#0a152e]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company / Institution */}
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5 font-mono">
                        Company or Institution
                      </label>
                      <input
                        type="text"
                        id="contact-company"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Organization or University"
                        className="w-full px-4 py-3 rounded-xl text-sm bg-[#081125] border border-blue-900/80 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:bg-[#0a152e] transition-all focus:outline-hidden"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5 font-mono">
                        Subject / Domain <span className="text-cyan-400">*</span>
                      </label>
                      <select
                        id="contact-subject"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl text-sm bg-[#081125] border transition-all text-white focus:outline-hidden focus:ring-2 ${
                          errors.subject
                            ? 'border-red-500 focus:ring-red-400 bg-red-950/20'
                            : 'border-blue-900/80 focus:ring-cyan-500 focus:border-cyan-500 focus:bg-[#0a152e]'
                        }`}
                      >
                        <option value="" className="bg-[#091122] text-slate-400">Select Topic of Collaboration</option>
                        <option value="AI & Predictive Analytics" className="bg-[#091122]">AI & Predictive Analytics</option>
                        <option value="IoT & Industrial Telemetry" className="bg-[#091122]">IoT & Industrial Telemetry</option>
                        <option value="Software Systems Architecture" className="bg-[#091122]">Software Systems Architecture</option>
                        <option value="Robotics & Autonomous Control" className="bg-[#091122]">Robotics & Autonomous Control</option>
                        <option value="Academic Research & Fellowship" className="bg-[#091122]">Academic Research & Fellowship</option>
                        <option value="Other Technology Partnership" className="bg-[#091122]">Other Technology Partnership</option>
                      </select>
                      {errors.subject && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5 font-mono">
                      Project Details & Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Outline your project scope, target timeline, technical requirements, or research questions..."
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-[#081125] border transition-all text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-400 bg-red-950/20'
                          : 'border-blue-900/80 focus:ring-cyan-500 focus:border-cyan-500 focus:bg-[#0a152e]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-950/50 hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-99 ring-1 ring-cyan-400/30"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Validating & Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4 text-cyan-200" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-400">
                    We honor non-disclosure agreements and treat all technical specifications with strict confidentiality.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
