import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { ThemeToggle } from "../../components/ui/theme-toggle";
import { Mail, Phone, MapPin, Send, Activity, Info, DollarSign, Box } from "lucide-react";

export const ContactPage = (): JSX.Element => {
  return (
    <div className="bg-[#04171d] dark:bg-[#04171d] bg-white min-h-screen w-full transition-colors duration-300">
      {/* Header/Navigation */}
      <header className="w-full px-8 py-6 flex justify-between items-center fixed top-0 left-0 bg-[#04171d] dark:bg-[#04171d] bg-white z-50 transition-colors duration-300">
        <div className="flex items-center space-x-4">
          <img
            className="h-8 w-auto"
            alt="Pramana Logo"
            src="/frame-5.svg"
          />
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="/#modules" className="text-[#12b8ca] dark:text-[#12b8ca] text-gray-700 hover:text-[#0cd6ef] transition-colors hover:font-bold font-light">Modules</a>
          <a href="/#about" className="text-[#12b8ca] dark:text-[#12b8ca] text-gray-700 hover:text-[#0cd6ef] transition-colors hover:font-bold font-light">About</a>
          <a href="/contact" className="text-[#12b8ca] dark:text-[#12b8ca] text-gray-700 hover:text-[#0cd6ef] transition-colors hover:font-bold font-light">Contact</a>
          <ThemeToggle />
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-[#0cd6ef] text-[#04171d] px-6 py-2 rounded-lg font-semibold hover:bg-[#12b8ca] transition-colors">
            Get Started
          </button>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-4 bg-[#04171d]/30 rounded-full px-6 py-3 shadow-lg backdrop-blur-md border border-[#0cd6ef]/20 shadow-blue-glow">
          <a href="/#modules" className="text-[#12b8ca] hover:text-[#0cd6ef] transition-all p-2 rounded-full">
            <Box className="h-6 w-6" />
          </a>
          <a href="/#about" className="text-[#12b8ca] hover:text-[#0cd6ef] transition-all p-2 rounded-full">
            <Info className="h-6 w-6" />
          </a>
          <a href="/#pricing" className="text-[#12b8ca] hover:text-[#0cd6ef] transition-all p-2 rounded-full">
            <DollarSign className="h-6 w-6" />
          </a>
          <a href="/contact" className="text-[#12b8ca] hover:text-[#0cd6ef] transition-all p-2 rounded-full">
            <Mail className="h-6 w-6" />
          </a>
          <ThemeToggle />
        </div>
      </nav>

      {/* Contact Section */}
      <section className="px-8 py-32 mt-[88px]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#12b8ca] dark:text-[#12b8ca] text-gray-800 text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h2>
            <p className="text-[#12b8ca] dark:text-[#12b8ca] text-gray-600 text-xl opacity-80 max-w-3xl mx-auto">
              Get in touch with us to learn more about our healthcare solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-[#0a2329] to-[#051a1f] dark:from-[#0a2329] dark:to-[#051a1f] from-gray-50 to-gray-100 border-2 border-[#0cd6ef] border-opacity-20">
                <CardContent className="p-8">
                  <h3 className="text-white dark:text-white text-gray-800 text-2xl font-bold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-[#0cd6ef] mt-1" />
                      <div>
                        <h4 className="text-white dark:text-white text-gray-800 font-semibold mb-1">Email</h4>
                        <p className="text-[#12b8ca] dark:text-[#12b8ca] text-gray-600">contact@pramana.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-[#0cd6ef] mt-1" />
                      <div>
                        <h4 className="text-white dark:text-white text-gray-800 font-semibold mb-1">Phone</h4>
                        <p className="text-[#12b8ca] dark:text-[#12b8ca] text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-[#0cd6ef] mt-1" />
                      <div>
                        <h4 className="text-white dark:text-white text-gray-800 font-semibold mb-1">Address</h4>
                        <p className="text-[#12b8ca] dark:text-[#12b8ca] text-gray-600">
                          123 Healthcare Street<br />
                          Medical District<br />
                          City, State 12345
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#0a2329] to-[#051a1f] dark:from-[#0a2329] dark:to-[#051a1f] from-gray-50 to-gray-100 border-2 border-[#0cd6ef] border-opacity-20">
                <CardContent className="p-8">
                  <h3 className="text-white dark:text-white text-gray-800 text-2xl font-bold mb-6">
                    Business Hours
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-[#12b8ca] dark:text-[#12b8ca] text-gray-600">Monday - Friday</span>
                      <span className="text-[#12b8ca] dark:text-[#12b8ca] text-gray-600">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#12b8ca] dark:text-[#12b8ca] text-gray-600">Saturday</span>
                      <span className="text-[#12b8ca] dark:text-[#12b8ca] text-gray-600">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#12b8ca] dark:text-[#12b8ca] text-gray-600">Sunday</span>
                      <span className="text-[#12b8ca] dark:text-[#12b8ca] text-gray-600">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-gradient-to-br from-[#0a2329] to-[#051a1f] dark:from-[#0a2329] dark:to-[#051a1f] from-gray-50 to-gray-100 border-2 border-[#0cd6ef] border-opacity-20">
              <CardContent className="p-8">
                <h3 className="text-white dark:text-white text-gray-800 text-2xl font-bold mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[#12b8ca] dark:text-[#12b8ca] text-gray-600 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg bg-[#0a2329] border-2 border-[#0cd6ef] border-opacity-20 text-white focus:border-[#0cd6ef] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[#12b8ca] dark:text-[#12b8ca] text-gray-600 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg bg-[#0a2329] border-2 border-[#0cd6ef] border-opacity-20 text-white focus:border-[#0cd6ef] focus:outline-none transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-[#12b8ca] dark:text-[#12b8ca] text-gray-600 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 rounded-lg bg-[#0a2329] border-2 border-[#0cd6ef] border-opacity-20 text-white focus:border-[#0cd6ef] focus:outline-none transition-colors"
                      placeholder="Message subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[#12b8ca] dark:text-[#12b8ca] text-gray-600 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-[#0a2329] border-2 border-[#0cd6ef] border-opacity-20 text-white focus:border-[#0cd6ef] focus:outline-none transition-colors resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#0cd6ef] text-[#04171d] px-6 py-3 rounded-lg font-semibold hover:bg-[#12b8ca] transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-[#0cd6ef] border-opacity-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img
                className="h-6 w-auto"
                alt="Pramana Logo"
                src="/frame-5.svg"
              />
              <span className="text-[#12b8ca] dark:text-[#12b8ca] text-gray-600 text-sm opacity-60">
                © 2025 Pramana. Preserving Roots, Building Future.
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-[#12b8ca] dark:text-[#12b8ca] text-gray-600 hover:text-[#0cd6ef] transition-colors text-sm">Privacy</a>
              <a href="#" className="text-[#12b8ca] dark:text-[#12b8ca] text-gray-600 hover:text-[#0cd6ef] transition-colors text-sm">Terms</a>
              <a href="#" className="text-[#12b8ca] dark:text-[#12b8ca] text-gray-600 hover:text-[#0cd6ef] transition-colors text-sm">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}; 