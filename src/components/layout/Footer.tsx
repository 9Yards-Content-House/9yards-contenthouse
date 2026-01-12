import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight, Zap, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  creativeServices: [
    { name: "Video Production", href: "/services/video-production" },
    { name: "Photography", href: "/services/photography" },
    { name: "Graphic Design", href: "/services/graphic-design" },
    { name: "Print Design", href: "/services/print-design" },
    { name: "Branding", href: "/services/branding-services" },
  ],
  digitalStrategy: [
    { name: "Social Media Marketing", href: "/services/social-media-management" },
    { name: "Website Development", href: "/services/website-development" },
    { name: "Influencer Marketing", href: "/services/influencer-marketing" },
    { name: "Email Marketing", href: "/services/email-marketing" },
    { name: "Digital Strategy", href: "/services/digital-strategy" },
  ],
  mediaProduction: [
    { name: "Podcast Production", href: "/services/podcast-production" },
    { name: "TV & Radio Production", href: "/services/tv-radio-production" },
    { name: "Voice-Over Recording", href: "/services/voice-over" },
    { name: "Podcast Studio Rental", href: "/services/podcast-studio-rental" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/portfolio" },
    { name: "Why Us", href: "/why-us" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
};

// Custom TikTok icon since lucide doesn't have one
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Custom Instagram icon
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

// Custom YouTube icon
const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const socialLinks = [
  { name: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/9yards_content_house/" },
  { name: "YouTube", icon: YouTubeIcon, href: "https://www.youtube.com/@9Yards-ch" },
  { name: "TikTok", icon: TikTokIcon, href: "https://www.tiktok.com/@9.yards.content.house" },
];

const features = [
  { icon: Zap, label: "Fast Turnaround" },
  { icon: Award, label: "World-Class Quality" },
  { icon: Clock, label: "Flexible Pricing" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#181818] text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-10 sm:py-14 md:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                Ready to bring your<br className="hidden sm:block" /> vision to life?
              </h2>
              <p className="mt-3 sm:mt-4 text-white/60 text-sm sm:text-base lg:text-lg">
                Let's create something extraordinary together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="accent" size="lg" className="px-6 sm:px-8 text-sm sm:text-base" asChild>
                <Link to="/get-started">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg" 
                className="border-white/30 hover:border-white px-6 sm:px-8 text-sm sm:text-base"
                asChild
              >
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-10 sm:py-12 md:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 sm:gap-x-6 lg:gap-x-10 gap-y-8 sm:gap-y-10">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-1 mb-2 md:mb-4 lg:mb-0">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/images/logo/9Yards-Logo-Inverted-Color.png" 
                alt="9Yards Content House" 
                className="h-9 sm:h-10 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-xs">
              Your complete creative department. Fast, affordable, exceptional.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2.5 mb-5">
              <a
                href="tel:+256700488870"
                className="flex items-center gap-2.5 text-white/70 hover:text-accent transition-colors text-sm group"
              >
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                +256 700 488 870
              </a>
              <a
                href="mailto:contenthouse@9yards.co.ug"
                className="flex items-center gap-2.5 text-white/70 hover:text-accent transition-colors text-sm group"
              >
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors flex-shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                contenthouse@9yards.co.ug
              </a>
              <div className="flex items-center gap-2.5 text-white/70 text-sm">
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                Canoga suites. Lower Kkonge
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent text-white/70 hover:text-white transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Creative Services */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-accent mb-3 sm:mb-4">Creative Services</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {footerLinks.creativeServices.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Digital & Strategy */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-accent mb-3 sm:mb-4">Digital & Strategy</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {footerLinks.digitalStrategy.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Media Production */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-accent mb-3 sm:mb-4">Media Production</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {footerLinks.mediaProduction.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-accent mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Strip */}
        <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-2.5 text-white/50">
                <feature.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Copyright - Left */}
          <p className="text-xs sm:text-sm text-white/50 text-center sm:text-left">
            © {currentYear} 9Yards Content House
          </p>

          {/* Legal Links - Right */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/50">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
