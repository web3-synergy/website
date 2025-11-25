import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  MessageCircle,
  Calendar,
  Linkedin,
  X,
  Clock,
  CheckCircle,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 px-4 sm:px-6 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="font-inter font-bold text-xl text-[#0A0F1C]">
            <a href="/">AscendHQ</a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="font-inter font-medium text-sm text-[#0A0F1C] hover:text-[#008B8B] transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/about"
              className="font-inter font-medium text-sm text-[#0A0F1C] hover:text-[#008B8B] transition-colors duration-200"
            >
              About
            </a>
            <a
              href="/projects"
              className="font-inter font-medium text-sm text-[#0A0F1C] hover:text-[#008B8B] transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="/services"
              className="font-inter font-medium text-sm text-[#0A0F1C] hover:text-[#008B8B] transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="/partnerships"
              className="font-inter font-medium text-sm text-[#0A0F1C] hover:text-[#008B8B] transition-colors duration-200"
            >
              Partnerships
            </a>
            <a
              href="/blog"
              className="font-inter font-medium text-sm text-[#0A0F1C] hover:text-[#008B8B] transition-colors duration-200"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="font-inter font-medium text-sm text-[#008B8B] font-semibold"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#"
            className="bg-[#008B8B] hover:bg-[#D4AF37] text-white px-6 py-2 rounded-lg font-inter font-medium text-sm transition-all duration-300 flex items-center gap-2"
          >
            Book Strategy Call
            <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>

      {/* Hero Section - White Background */}
      <section className="bg-white pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-manrope font-bold text-[clamp(2.5rem,8vw,3.5rem)] leading-[1.1] text-[#0A0F1C] mb-6">
            Let's Connect
          </h1>
          <p className="font-inter text-xl text-[#0A0F1C]/70 mb-8 max-w-2xl mx-auto">
            For consulting, partnerships, or media—use the form or book
            directly.
          </p>
          <div className="w-24 h-1 bg-[#008B8B] mx-auto"></div>
        </div>
      </section>

      {/* Contact Options Section - White Background */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Strategy Call Option */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#008B8B] rounded-lg flex items-center justify-center mb-6">
                <Calendar size={24} className="text-white" />
              </div>
              <h3 className="font-manrope font-bold text-2xl text-[#0A0F1C] mb-4">
                Book a Strategy Call
              </h3>
              <p className="font-inter text-[#0A0F1C]/70 mb-6 leading-relaxed">
                Ready to discuss your product, growth, or revenue strategy? Book
                a focused session to explore how we can work together.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#008B8B] rounded-full"></div>
                  <span className="font-inter text-sm text-[#0A0F1C]/70">
                    Free 15-minute intro consultation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                  <span className="font-inter text-sm text-[#0A0F1C]/70">
                    60-90 minute deep-dive sessions available
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#008B8B] rounded-full"></div>
                  <span className="font-inter text-sm text-[#0A0F1C]/70">
                    Typically respond within 24 hours
                  </span>
                </div>
              </div>

              <button className="w-full bg-[#008B8B] hover:bg-[#D4AF37] text-white px-8 py-4 rounded-lg font-inter font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2">
                <Calendar size={20} />
                Schedule Call
              </button>
            </div>

            {/* Direct Contact Option */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-6">
                <MessageCircle size={24} className="text-white" />
              </div>
              <h3 className="font-manrope font-bold text-2xl text-[#0A0F1C] mb-4">
                Send a Message
              </h3>
              <p className="font-inter text-[#0A0F1C]/70 mb-6 leading-relaxed">
                Prefer to start with a message? Use the form below or reach out
                directly for partnerships, media inquiries, or speaking
                opportunities.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                  <span className="font-inter text-sm text-[#0A0F1C]/70">
                    General inquiries and partnerships
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#008B8B] rounded-full"></div>
                  <span className="font-inter text-sm text-[#0A0F1C]/70">
                    Media requests and speaking engagements
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                  <span className="font-inter text-sm text-[#0A0F1C]/70">
                    Project collaboration opportunities
                  </span>
                </div>
              </div>

              <button className="w-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 py-4 rounded-lg font-inter font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - White Background */}
      <section className="bg-white py-16 px-4 sm:px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-manrope font-bold text-3xl text-[#0A0F1C] mb-4">
              Get in Touch
            </h2>
            <p className="font-inter text-lg text-[#0A0F1C]/70">
              Tell me about your project or inquiry, and I'll get back to you
              soon.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-inter font-medium text-[#0A0F1C] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter text-[#0A0F1C] placeholder:text-[#0A0F1C]/50 focus:outline-none focus:ring-2 focus:ring-[#008B8B] focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-inter font-medium text-[#0A0F1C] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter text-[#0A0F1C] placeholder:text-[#0A0F1C]/50 focus:outline-none focus:ring-2 focus:ring-[#008B8B] focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-inter font-medium text-[#0A0F1C] mb-2">
                Company (Optional)
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter text-[#0A0F1C] placeholder:text-[#0A0F1C]/50 focus:outline-none focus:ring-2 focus:ring-[#008B8B] focus:border-transparent transition-all duration-200"
                placeholder="Your company or organization"
              />
            </div>

            <div>
              <label className="block text-sm font-inter font-medium text-[#0A0F1C] mb-2">
                Inquiry Type *
              </label>
              <select
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter text-[#0A0F1C] focus:outline-none focus:ring-2 focus:ring-[#008B8B] focus:border-transparent transition-all duration-200"
              >
                <option value="">Select inquiry type</option>
                <option value="consulting">Product & Growth Strategy</option>
                <option value="advisory">Revenue & Scaling Advisory</option>
                <option value="community">Community & Content Strategy</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="media">Media & Speaking</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-inter font-medium text-[#0A0F1C] mb-2">
                Message *
              </label>
              <textarea
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter text-[#0A0F1C] placeholder:text-[#0A0F1C]/50 focus:outline-none focus:ring-2 focus:ring-[#008B8B] focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell me about your project, goals, or how I can help..."
              ></textarea>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="newsletter"
                className="w-4 h-4 text-[#008B8B] border-gray-300 rounded focus:ring-[#008B8B]"
              />
              <label
                htmlFor="newsletter"
                className="text-sm font-inter text-[#0A0F1C]/70"
              >
                I'd like to receive occasional updates about product, revenue,
                and community insights.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#008B8B] hover:bg-[#D4AF37] text-white px-8 py-4 rounded-lg font-inter font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Social & Additional Contact - Dark Background */}
      <section className="bg-[#0A0F1C] text-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-manrope font-bold text-3xl text-white mb-4">
              Other Ways to Connect
            </h2>
            <p className="font-inter text-white/80 text-lg">
              Find me on social media or reach out directly for different types
              of inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Social Media */}
            <div className="text-center">
              <div className="w-12 h-12 bg-[#008B8B] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Linkedin size={24} className="text-white" />
              </div>
              <h3 className="font-manrope font-bold text-lg text-white mb-2">
                Social Media
              </h3>
              <p className="font-inter text-white/70 text-sm mb-4">
                Connect on LinkedIn or follow on X for updates and insights.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/oluwatosin-ajayi-09a897196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#008B8B] hover:text-[#D4AF37] transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://x.com/Magnifico_Lbr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#008B8B] hover:text-[#D4AF37] transition-colors duration-200"
                >
                  <X size={20} />
                </a>
              </div>
            </div>

            {/* Direct Email */}
            <div className="text-center">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="font-manrope font-bold text-lg text-white mb-2">
                Direct Email
              </h3>
              <p className="font-inter text-white/70 text-sm mb-4">
                For time-sensitive inquiries or detailed proposals.
              </p>
              <a
                href="mailto:hello@beyondscaling.com"
                className="text-[#D4AF37] hover:text-white font-inter font-medium transition-colors duration-200"
              >
                hello@beyondscaling.com
              </a>
            </div>

            {/* Response Time */}
            <div className="text-center">
              <div className="w-12 h-12 bg-[#008B8B] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="font-manrope font-bold text-lg text-white mb-2">
                Response Time
              </h3>
              <p className="font-inter text-white/70 text-sm mb-4">
                I typically respond within 24-48 hours.
              </p>
              <span className="text-[#D4AF37] font-inter font-medium">
                Usually faster
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - White Background */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-manrope font-bold text-3xl text-[#0A0F1C] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-[#0A0F1C]/70 text-lg">
              Common questions about working together and next steps.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-inter font-semibold text-[#0A0F1C] mb-3">
                What's the best way to get started?
              </h3>
              <p className="font-inter text-[#0A0F1C]/70 leading-relaxed">
                The best approach depends on your needs. For specific project
                discussions, book a strategy call. For partnerships or media
                inquiries, use the contact form or email directly.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-inter font-semibold text-[#0A0F1C] mb-3">
                Do you work with early-stage startups?
              </h3>
              <p className="font-inter text-[#0A0F1C]/70 leading-relaxed">
                Yes, I work with founders at various stages—from early concept
                validation through scaling and growth. The focus is always on
                building sustainable systems that ship, sell, and sustain.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-inter font-semibold text-[#0A0F1C] mb-3">
                What types of partnerships are you interested in?
              </h3>
              <p className="font-inter text-[#0A0F1C]/70 leading-relaxed">
                I'm actively building Senti and AptBlack, so I'm interested in
                aligned capital, distribution partnerships, and ecosystem
                collaborations. Check the partnerships page for more details.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-inter font-semibold text-[#0A0F1C] mb-3">
                Are you available for speaking engagements?
              </h3>
              <p className="font-inter text-[#0A0F1C]/70 leading-relaxed">
                Yes, I speak on topics related to product strategy, Web3
                adoption, revenue scaling, and community building. Reach out
                with event details and I'll let you know if it's a good fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Dark Background */}
      <footer className="bg-[#0A0F1C] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-md">
              <div className="font-inter font-bold text-2xl text-white mb-4">
                AscendHQ
              </div>
              <p className="font-inter text-white/70 leading-relaxed">
                Founder & builder helping Web3 and forward-thinking businesses
                ship, sell, and sustain.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-inter font-semibold text-white mb-4">
                  Navigation
                </h4>
                <div className="space-y-2">
                  <a
                    href="/"
                    className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block"
                  >
                    About
                  </a>
                  <a
                    href="/projects"
                    className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block"
                  >
                    Projects
                  </a>
                  <a
                    href="/services"
                    className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block"
                  >
                    Services
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-inter font-semibold text-white mb-4">
                  Connect
                </h4>
                <div className="space-y-2">
                  <a
                    href="/partnerships"
                    className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block"
                  >
                    Partnerships
                  </a>
                  <a
                    href="/blog"
                    className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block"
                  >
                    Blog
                  </a>
                  <a
                    href="/contact"
                    className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-inter font-semibold text-white mb-4">
                  Projects
                </h4>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block"
                  >
                    Senti
                  </a>
                  <a
                    href="#"
                    className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block"
                  >
                    AptBlack
                  </a>
                  <a
                    href="#"
                    className="font-inter text-white/70 hover:text-[#008B8B] transition-colors duration-200 block"
                  >
                    GoGet.Fit
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-inter font-semibold text-white mb-4">
                  Social
                </h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/oluwatosin-ajayi-09a897196"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-lg border border-white/20 hover:border-white/40 flex items-center justify-center"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://x.com/Magnifico_Lbr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="w-10 h-10 rounded-lg border border-white/20 hover:border-white/40 flex items-center justify-center"
                  >
                    <X size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="font-inter text-white/50">
              © 2024 AscendHQ. Building beyond the ordinary.
            </p>
          </div>
        </div>
      </footer>

      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        
        .font-manrope {
          font-family: 'Manrope', sans-serif;
        }

        @media (prefers-reduced-motion: reduce) {
          .group-hover\\:translate-x-1,
          .group-hover\\:-translate-y-1,
          .hover\\:scale-\\[1\\.02\\] {
            transform: none !important;
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
