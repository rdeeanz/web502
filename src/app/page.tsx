"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Facebook,
  Twitter,
  Link2,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Music,
  HardDrive,
  Bitcoin,
  Briefcase,
  Disc,
  Code2,
  GraduationCap,
  FolderOpen,
  Share2,
  Gamepad2,
  Joystick,
  Home,
  Network,
  Newspaper,
  FileText,
  Cloud,
  Wrench,
  Image,
  Video,
  Globe,
  Shield,
  MessageCircle,
  Heart,
  Cpu,
  MapPin,
  Monitor,
  Smartphone,
  Tablet,
  Terminal,
  Chrome,
  Tv,
  Watch,
  Car,
  ShoppingCart,
  Package,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";

// Category data with icons
const categories = [
  { name: "AI Tools & Services", icon: Sparkles, href: "https://alternativeto.net/category/ai-tools/" },
  { name: "Audio & Music", icon: Music, href: "https://alternativeto.net/category/audio-and-music/" },
  { name: "Backup & Sync", icon: HardDrive, href: "https://alternativeto.net/category/backup-and-sync/" },
  { name: "Bitcoin & Cryptocurrency", icon: Bitcoin, href: "https://alternativeto.net/category/cryptocurrencies/" },
  { name: "Business & Commerce", icon: Briefcase, href: "https://alternativeto.net/category/business-and-commerce/" },
  { name: "CD/DVD Tools", icon: Disc, href: "https://alternativeto.net/category/burn-and-rip/" },
  { name: "Development", icon: Code2, href: "https://alternativeto.net/category/developer-tools/" },
  { name: "Education & Reference", icon: GraduationCap, href: "https://alternativeto.net/category/education-and-reference/" },
  { name: "File Management", icon: FolderOpen, href: "https://alternativeto.net/category/file-management/" },
  { name: "File Sharing", icon: Share2, href: "https://alternativeto.net/category/file-sharing/" },
  { name: "Games", icon: Gamepad2, href: "https://alternativeto.net/category/games/" },
  { name: "Gaming Software", icon: Joystick, href: "https://alternativeto.net/category/gaming-software/" },
  { name: "Home & Family", icon: Home, href: "https://alternativeto.net/category/home-and-family/" },
  { name: "Network & Admin", icon: Network, href: "https://alternativeto.net/category/networking-and-admin/" },
  { name: "News & Books", icon: Newspaper, href: "https://alternativeto.net/category/books--news/" },
  { name: "Office & Productivity", icon: FileText, href: "https://alternativeto.net/category/productivity/" },
  { name: "Online Services", icon: Cloud, href: "https://alternativeto.net/category/online-services/" },
  { name: "OS & Utilities", icon: Wrench, href: "https://alternativeto.net/category/utilities/" },
  { name: "Photos & Graphics", icon: Image, href: "https://alternativeto.net/category/phots-and-graphics/" },
  { name: "Remote Work & Education", icon: Monitor, href: "https://alternativeto.net/category/remote-work-and-education/" },
  { name: "Security & Privacy", icon: Shield, href: "https://alternativeto.net/category/security/" },
  { name: "Social & Communications", icon: MessageCircle, href: "https://alternativeto.net/category/social/" },
  { name: "Sport & Health", icon: Heart, href: "https://alternativeto.net/category/sport-and-health/" },
  { name: "System & Hardware", icon: Cpu, href: "https://alternativeto.net/category/system-and-hardware/" },
  { name: "Travel & Location", icon: MapPin, href: "https://alternativeto.net/category/travel-and-location/" },
  { name: "Video & Movies", icon: Video, href: "https://alternativeto.net/category/video/" },
  { name: "Web Browsers", icon: Globe, href: "https://alternativeto.net/category/browsers/" },
];

// Top platforms with app counts
const topPlatforms = [
  { name: "Windows", count: "43.2K", icon: Monitor, color: "from-blue-500 to-blue-600" },
  { name: "Mac", count: "27.1K", icon: Monitor, color: "from-gray-600 to-gray-700" },
  { name: "Linux", count: "22K", icon: Terminal, color: "from-orange-500 to-orange-600" },
  { name: "Android", count: "28.6K", icon: Smartphone, color: "from-green-500 to-green-600" },
  { name: "iPhone", count: "24.9K", icon: Smartphone, color: "from-gray-700 to-gray-800" },
  { name: "Online", count: "62.4K", icon: Globe, color: "from-indigo-500 to-indigo-600" },
];

// Platform groups
const platformGroups = [
  { group: "DESKTOP", count: 15 },
  { group: "MOBILE", count: 8 },
  { group: "TABLET", count: 3 },
  { group: "DEV", count: 26 },
  { group: "BROWSER", count: 14 },
  { group: "WEB", count: 4 },
  { group: "TV", count: 5 },
  { group: "GAMES & CONSOLES", count: 18 },
  { group: "WEARABLE", count: 2 },
  { group: "INDIE", count: 11 },
  { group: "AUTOMOTIVE", count: 2 },
  { group: "E-COMMERCE", count: 5 },
  { group: "PACKAGE-MANAGER", count: 6 },
];

export default function BrowsePage() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [platformFilter, setPlatformFilter] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(categoryFilter.toLowerCase())
  );

  const filteredPlatforms = topPlatforms.filter((plat) =>
    plat.name.toLowerCase().includes(platformFilter.toLowerCase())
  );

  const filteredGroups = platformGroups.filter((group) =>
    group.group.toLowerCase().includes(platformFilter.toLowerCase())
  );

  const copyLink = () => {
    navigator.clipboard.writeText("https://alternativeto.net/browse/");
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg border-b border-slate-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="https://alternativeto.net" className="flex items-center gap-2">
                <span className={`text-2xl font-display font-bold ${scrolled ? "text-primary-600" : "text-white"}`}>
                  AlternativeTo
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="https://alternativeto.net/browse/new-apps/"
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                  scrolled ? "text-slate-700" : "text-white/90"
                }`}
              >
                NEW APP RELEASES
              </a>
              <a
                href="https://alternativeto.net/browse/"
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                  scrolled ? "text-primary-600" : "text-white"
                }`}
              >
                BROWSE ALL APPS
              </a>
              <a
                href="https://alternativeto.net/news/all/"
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                  scrolled ? "text-slate-700" : "text-white/90"
                }`}
              >
                TECH NEWS
              </a>
            </div>

            {/* Search & Sign In */}
            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Find an alternative to..."
                  className={`w-64 pl-10 pr-4 py-2 rounded-full text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    scrolled
                      ? "bg-slate-100 text-slate-700 placeholder-slate-400"
                      : "bg-white/10 text-white placeholder-white/60 border border-white/20"
                  }`}
                />
                <Search
                  className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
                    scrolled ? "text-slate-400" : "text-white/60"
                  }`}
                />
              </div>
              <a
                href="https://alternativeto.net/api/auth/login"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  scrolled
                    ? "border-2 border-primary-500 text-primary-600 hover:bg-primary-50"
                    : "border-2 border-white/40 text-white hover:bg-white/10"
                }`}
              >
                Sign In
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${scrolled ? "text-slate-700" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? "text-slate-700" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 shadow-lg"
            >
              <div className="px-4 py-4 space-y-4">
                <input
                  type="text"
                  placeholder="Find an alternative to..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-100 text-slate-700 placeholder-slate-400"
                />
                <div className="flex flex-col gap-2">
                  <a
                    href="https://alternativeto.net/browse/new-apps/"
                    className="py-2 text-slate-700 font-medium"
                  >
                    NEW APP RELEASES
                  </a>
                  <a
                    href="https://alternativeto.net/browse/"
                    className="py-2 text-primary-600 font-medium"
                  >
                    BROWSE ALL APPS
                  </a>
                  <a
                    href="https://alternativeto.net/news/all/"
                    className="py-2 text-slate-700 font-medium"
                  >
                    TECH NEWS
                  </a>
                </div>
                <a
                  href="https://alternativeto.net/api/auth/login"
                  className="block w-full py-3 text-center rounded-lg border-2 border-primary-500 text-primary-600 font-medium"
                >
                  Sign In
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-primary-900 to-navy-800">
          {/* SVG Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            Browse All Apps
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-white/80 mb-4 max-w-3xl mx-auto"
          >
            Whether you're looking for alternatives to your favorite apps or browsing by type or OS,
            this page offers a clear overview of everything available.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-white/70 mb-8 max-w-3xl mx-auto"
          >
            Explore by category—from productivity and creative tools to developer utilities—organized
            by function and platform, including Windows, macOS, Linux, Android, iPhone, and the web.
            All powered by community ratings and recommendations.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Find an alternative to..."
                className="w-full pl-14 pr-32 py-4 rounded-2xl bg-white text-slate-800 placeholder-slate-400 text-lg shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary-500/50"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors">
                Search
              </button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            <span className="text-white/60 text-sm">Share:</span>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://alternativeto.net/browse/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=https://alternativeto.net/browse/&text=Browse%20All%20Apps%20on%20AlternativeTo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Share on X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.reddit.com/submit?url=https://alternativeto.net/browse/&title=Browse%20All%20Apps%20on%20AlternativeTo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Share on Reddit"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.812.114 3.422.814 4.554 1.876.39-.39.93-.629 1.53-.629 1.18 0 2.14.96 2.14 2.14 0 .89-.54 1.65-1.31 1.97.03.18.05.37.05.56 0 2.98-2.69 5.4-6.01 5.4s-6.01-2.42-6.01-5.4c0-.19.02-.38.05-.56-.77-.32-1.31-1.08-1.31-1.97 0-1.18.96-2.14 2.14-2.14.6 0 1.14.239 1.53.629 1.13-1.062 2.74-1.762 4.554-1.876l.8-3.747-2.597.547a1.25 1.25 0 0 1-1.248-1.165A1.25 1.25 0 0 1 12.01 4.744a1.25 1.25 0 0 1 1.238 1.194l2.597.547.8-3.747-2.597-.547a1.25 1.25 0 0 1-1.248-1.165A1.25 1.25 0 0 1 12.01 0a1.25 1.25 0 0 1 1.238 1.194z"/>
                </svg>
              </a>
              <button
                onClick={copyLink}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Copy link"
              >
                {copiedLink ? <Check className="w-5 h-5 text-green-400" /> : <Link2 className="w-5 h-5" />}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 0.6, delay: 0.5, y: { repeat: Infinity, duration: 1.5 } }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="text-3xl font-display font-bold text-slate-800">Categories</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Filter categories..."
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCategories.map((category, index) => (
              <motion.a
                key={category.name}
                href={category.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="group flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <category.icon className="w-6 h-6 text-primary-600" />
                </div>
                <span className="font-medium text-slate-700 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="text-3xl font-display font-bold text-slate-800">Platforms</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Filter platforms..."
                value={platformFilter}
                onChange={(e) => setPlatformFilter(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
          </div>

          {/* Top Platforms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={`https://alternativeto.net/browse/all/?platform=${platform.name.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${platform.color}`} />
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-lg`}>
                    <platform.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary-600 transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary-600">{platform.count} apps</p>
                  </div>
                </div>
                <ExternalLink className="absolute top-4 right-4 w-5 h-5 text-slate-300 group-hover:text-primary-500 transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Platform Groups */}
          <div>
            <h3 className="text-xl font-display font-bold text-slate-800 mb-4">Browse by Platform Type</h3>
            <div className="flex flex-wrap gap-3">
              {filteredGroups.map((group, index) => (
                <motion.a
                  key={group.group}
                  href={`https://alternativeto.net/browse/all/?platform=${group.group.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 text-sm font-medium"
                >
                  {group.group}
                  <span className="text-xs text-slate-400">({group.count})</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-display font-bold text-white mb-2">AlternativeTo</span>
              <p className="text-slate-400 text-sm">
                A platform for discovering app alternatives powered by community ratings and recommendations.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a href="https://alternativeto.net/browse/" className="text-slate-400 hover:text-white transition-colors">
                Browse All Apps
              </a>
              <a href="https://alternativeto.net/browse/new-apps/" className="text-slate-400 hover:text-white transition-colors">
                New App Releases
              </a>
              <a href="https://alternativeto.net/news/all/" className="text-slate-400 hover:text-white transition-colors">
                Tech News
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://x.com/alternativeto"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/AlternativeTo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-500">
            © AlternativeTo
          </div>
        </div>
      </footer>
    </div>
  );
}
