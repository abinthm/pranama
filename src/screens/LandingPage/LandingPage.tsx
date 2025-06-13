import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { ThemeToggle } from "../../components/ui/theme-toggle";
import { ArrowRight, CheckCircle, Activity, Database, MessageSquare, Pill, BarChart3, Stethoscope, Brain } from "lucide-react";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-background text-foreground min-h-screen w-full transition-colors duration-300">
      {/* Header/Navigation */}
      <header className="w-full flex justify-between items-center fixed top-0 left-0 bg-background z-50 transition-colors duration-300 px-0 py-0 h-12" style={{boxShadow: 'none', borderBottom: 'none'}}>
        <div className="flex items-center space-x-4 pl-4">
          <img
            className="h-6 w-auto"
            alt="Pramana Logo"
            src="/frame-5.svg"
          />
        </div>
        <nav className="hidden md:flex items-center justify-center w-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center space-x-1 bg-muted/90 rounded-full px-2 py-0 shadow-lg backdrop-blur-md">
            <a href="#modules" className="text-muted-foreground font-light hover:font-bold transition-all px-2 py-0 rounded-full hover:text-primary focus:text-primary text-xs">Modules</a>
            <a href="#about" className="text-muted-foreground font-light hover:font-bold transition-all px-2 py-0 rounded-full hover:text-primary focus:text-primary text-xs">About</a>
            <a href="/contact" className="text-muted-foreground font-light hover:font-bold transition-all px-2 py-0 rounded-full hover:text-primary focus:text-primary text-xs">Contact</a>
            <a href="#pricing" className="text-muted-foreground font-light hover:font-bold transition-all px-2 py-0 rounded-full hover:text-primary focus:text-primary text-xs">Pricing</a>
            <span className="ml-1 flex items-center text-base"><ThemeToggle /></span>
          </div>
        </nav>
        <div className="flex items-center space-x-2 pr-4">
          <button className="bg-primary text-primary-foreground px-3 py-0.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-xs h-7">Get Started</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-8 py-20 mt-12">
        <Card className="bg-card dark:bg-card w-full max-w-4xl relative shadow-blue-glow dark:shadow-none">
          <CardContent className="p-8 text-center">
            {/* Main Logo */}
            <div className="mb-8">
              <img
                className="mx-auto h-20 w-auto"
                alt="Pramana Logo"
                src="/frame-5.svg"
              />
            </div>

            {/* Decorative Element */}
            <div className="flex justify-center mb-8">
              <div className="relative w-[41px] h-3.5">
                <div className="relative w-[39px] h-3 top-px left-px">
                  <img
                    className="absolute w-7 h-px top-1.5 left-1.5 object-cover"
                    alt="Connecting Line"
                    src="/vector-5.svg"
                  />
                  <div className="w-[7px] h-[7px] top-[3px] left-0 rounded-[3.5px] absolute bg-primary" />
                  <div className="w-[7px] h-[7px] top-[3px] left-8 rounded-[3.5px] absolute bg-primary" />
                  <div className="w-3 h-3 top-0 left-3.5 rounded-md absolute bg-primary" />
                </div>
              </div>
            </div>

            {/* Tagline */}
            <h1 className="[font-family:'MonktonMedium-Regular',Helvetica] font-normal text-foreground dark:text-foreground text-4xl md:text-5xl tracking-[0] leading-[normal] mb-6">
              Preserving Roots, Building Future
            </h1>

            {/* Hero Description */}
            <p className="text-muted-foreground text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-80">
              Bridging tradition with innovation to create sustainable healthcare solutions for tomorrow's challenges
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center group">
                Explore Our Modules
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Learn More
              </button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Modules Section */}
      <section id="modules" className="px-8 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-primary text-3xl md:text-4xl font-bold mb-6">
              MODULES
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* EHR Module */}
            <Card className="bg-card dark:from-[#0a2329] dark:to-[#051a1f] border-2 border-border dark:border-white hover:border-primary dark:hover:border-white hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-white/20 transition-all duration-500 group transform hover:-translate-y-2 hover:scale-105">
              <CardContent className="p-8 relative overflow-hidden h-64">
                <div className="absolute -top-4 -right-4 opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Activity className="h-24 w-24 text-primary dark:text-muted-foreground" fill="none" strokeWidth={2} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 border-2 border-primary dark:border-white flex items-center justify-center rounded-xl bg-primary dark:bg-white mr-4">
                      <Activity className="h-8 w-8 text-white dark:text-muted-foreground" fill="none" strokeWidth={2} />
                    </div>
                    <h3 className="text-card-foreground text-2xl font-bold uppercase">EHR</h3>
                  </div>
                  <p className="text-muted-foreground opacity-90 text-base leading-relaxed">
                    Digitized patient records for easier access and management. Streamline healthcare workflows with secure, comprehensive electronic health records.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>

            {/* CDSS Module */}
            <Card className="bg-card dark:from-[#0a2329] dark:to-[#051a1f] border-2 border-border dark:border-white hover:border-primary dark:hover:border-white hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-white/20 transition-all duration-500 group transform hover:-translate-y-2 hover:scale-105">
              <CardContent className="p-8 relative overflow-hidden h-64">
                <div className="absolute -top-4 -right-4 opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Brain className="h-24 w-24 text-primary dark:text-muted-foreground" fill="none" strokeWidth={2} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 border-2 border-primary dark:border-white flex items-center justify-center rounded-xl bg-primary dark:bg-white mr-4">
                      <Brain className="h-8 w-8 text-white dark:text-muted-foreground" fill="none" strokeWidth={2} />
                    </div>
                    <h3 className="text-card-foreground text-2xl font-bold uppercase">CDSS</h3>
                  </div>
                  <p className="text-muted-foreground opacity-90 text-base leading-relaxed">
                    Tools to assist healthcare providers in decision-making for diagnostics and treatment. AI-powered clinical decision support systems.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>

            {/* ChatBot Module */}
            <Card className="bg-card dark:from-[#0a2329] dark:to-[#051a1f] border-2 border-border dark:border-white hover:border-primary dark:hover:border-white hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-white/20 transition-all duration-500 group transform hover:-translate-y-2 hover:scale-105">
              <CardContent className="p-8 relative overflow-hidden h-64">
                <div className="absolute -top-4 -right-4 opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <MessageSquare className="h-24 w-24 text-primary dark:text-muted-foreground" fill="none" strokeWidth={2} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 border-2 border-primary dark:border-white flex items-center justify-center rounded-xl bg-primary dark:bg-white mr-4">
                      <MessageSquare className="h-8 w-8 text-white dark:text-muted-foreground" fill="none" strokeWidth={2} />
                    </div>
                    <h3 className="text-card-foreground text-2xl font-bold uppercase">ChatBot</h3>
                  </div>
                  <p className="text-muted-foreground opacity-90 text-base leading-relaxed">
                    AI-driven interfaces for patient interaction and support. Intelligent conversational agents for healthcare assistance and guidance.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>

            {/* Drug Recovery Module */}
            <Card className="bg-card dark:from-[#0a2329] dark:to-[#051a1f] border-2 border-border dark:border-white hover:border-primary dark:hover:border-white hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-white/20 transition-all duration-500 group transform hover:-translate-y-2 hover:scale-105">
              <CardContent className="p-8 relative overflow-hidden h-64">
                <div className="absolute -top-4 -right-4 opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Pill className="h-24 w-24 text-primary dark:text-muted-foreground" fill="none" strokeWidth={2} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 border-2 border-primary dark:border-white flex items-center justify-center rounded-xl bg-primary dark:bg-white mr-4">
                      <Pill className="h-8 w-8 text-white dark:text-muted-foreground" fill="none" strokeWidth={2} />
                    </div>
                    <h3 className="text-card-foreground text-2xl font-bold uppercase">Drug Recovery</h3>
                  </div>
                  <p className="text-muted-foreground opacity-90 text-base leading-relaxed">
                    Programs targeting substance addiction and rehabilitation. Comprehensive recovery solutions with personalized treatment plans.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>

            {/* Bio Informatics Module */}
            <Card className="bg-card dark:from-[#0a2329] dark:to-[#051a1f] border-2 border-border dark:border-white hover:border-primary dark:hover:border-white hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-white/20 transition-all duration-500 group transform hover:-translate-y-2 hover:scale-105">
              <CardContent className="p-8 relative overflow-hidden h-64">
                <div className="absolute -top-4 -right-4 opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Database className="h-24 w-24 text-primary dark:text-muted-foreground" fill="none" strokeWidth={2} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 border-2 border-primary dark:border-white flex items-center justify-center rounded-xl bg-primary dark:bg-white mr-4">
                      <Database className="h-8 w-8 text-white dark:text-muted-foreground" fill="none" strokeWidth={2} />
                    </div>
                    <h3 className="text-card-foreground text-2xl font-bold uppercase">Bio Informatics</h3>
                  </div>
                  <p className="text-muted-foreground opacity-90 text-base leading-relaxed">
                    Application of computer technology to manage and analyze biological data. Advanced genomic and molecular analysis tools.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>

            {/* Prakriti vrikriti Analysis Module */}
            <Card className="bg-card dark:from-[#0a2329] dark:to-[#051a1f] border-2 border-border dark:border-white hover:border-primary dark:hover:border-white hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-white/20 transition-all duration-500 group transform hover:-translate-y-2 hover:scale-105">
              <CardContent className="p-8 relative overflow-hidden h-64">
                <div className="absolute -top-4 -right-4 opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Stethoscope className="h-24 w-24 text-primary dark:text-muted-foreground" fill="none" strokeWidth={2} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 border-2 border-primary dark:border-white flex items-center justify-center rounded-xl bg-primary dark:bg-white mr-4">
                      <Stethoscope className="h-8 w-8 text-white dark:text-muted-foreground" fill="none" strokeWidth={2} />
                    </div>
                    <h3 className="text-card-foreground text-xl font-bold uppercase">Prakriti vrikriti Analysis</h3>
                  </div>
                  <p className="text-muted-foreground opacity-90 text-base leading-relaxed">
                    Assessing individual health based on constitutional types and imbalances. Traditional Ayurvedic analysis with modern insights.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>

            {/* Symptoms Analysis Module - Centered */}
            <Card className="bg-card dark:from-[#0a2329] dark:to-[#051a1f] border-2 border-border dark:border-white hover:border-primary dark:hover:border-white hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-white/20 transition-all duration-500 group transform hover:-translate-y-2 hover:scale-105 lg:col-start-2">
              <CardContent className="p-8 relative overflow-hidden h-64">
                <div className="absolute -top-4 -right-4 opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <BarChart3 className="h-24 w-24 text-primary dark:text-muted-foreground" fill="none" strokeWidth={2} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 border-2 border-primary dark:border-white flex items-center justify-center rounded-xl bg-primary dark:bg-white mr-4">
                      <BarChart3 className="h-8 w-8 text-white dark:text-muted-foreground" fill="none" strokeWidth={2} />
                    </div>
                    <h3 className="text-card-foreground text-2xl font-bold uppercase">Symptoms Analysis</h3>
                  </div>
                  <p className="text-muted-foreground opacity-90 text-base leading-relaxed">
                    Evaluating symptoms for better diagnosis and treatment planning. Advanced pattern recognition for accurate health assessment.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-8 py-32 bg-background max-w-7xl mx-auto">
        <div className="text-foreground">
          <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 text-center">
            Pramana: Tailored Healthcare
            <br />
            Technology Plans
          </h2>
          <p className="text-muted-foreground text-lg mb-16 text-center">
            Choose the plan that best fits your healthcare practice or institution's needs.
          </p>

          {/* Container for Starter and Enterprise cards */}
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-8 max-w-fit mx-auto">
            {/* Starter Plan Card */}
            <Card className="bg-card dark:bg-[#1C1C1C] rounded-xl p-8 flex flex-col justify-between border border-border w-full md:max-w-sm">
              <CardContent className="p-0">
                <h3 className="text-card-foreground text-2xl font-bold mb-4 text-center">Clinic Essentials</h3>
                <p className="text-muted-foreground text-sm mb-6 min-h-[40px] text-center">
                  Ideal for individual practitioners or small clinics looking to digitize core operations.
                </p>
                <div className="text-card-foreground text-4xl font-bold mb-2 text-center">
                  $39
                  <span className="text-muted-foreground text-base font-normal">/month</span>
                </div>
                <button className="w-full bg-transparent border border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors mb-6 text-center">
                  Get Started
                </button>
                <h4 className="text-card-foreground text-lg font-semibold mb-4 text-center">Features</h4>
                <ul className="text-muted-foreground text-left space-y-3">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" /> Basic EHR access and patient management</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" /> Secure data storage (up to 50 GB)</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" /> Standard technical support (email/chat)</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" /> Limited module access (EHR only)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Enterprise Plan Card */}
            <Card className="bg-card dark:bg-[#1C1C1C] rounded-xl p-8 flex flex-col justify-between border border-border w-full md:max-w-sm">
              <CardContent className="p-0">
                <h3 className="text-card-foreground text-2xl font-bold mb-4 text-center">Hospital Solutions</h3>
                <p className="text-muted-foreground text-sm mb-6 min-h-[40px] text-center">
                  Comprehensive features designed for large clinics, hospitals, and healthcare systems.
                </p>
                <div className="text-card-foreground text-4xl font-bold mb-2 text-center">
                  $99
                  <span className="text-muted-foreground text-base font-normal">/month</span>
                </div>
                <button className="w-full bg-transparent border border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors mb-6 text-center">
                  Get Started
                </button>
                <h4 className="text-card-foreground text-lg font-semibold mb-4 text-center">Features</h4>
                <ul className="text-muted-foreground text-left space-y-3">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" /> Unlimited EHR access and advanced patient management</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" /> Integration with all Pramana modules</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" /> Dedicated account manager and priority support</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" /> Customizable reporting and analytics</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" /> On-site training and implementation support</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Professional Plan Card */}
          <Card className="bg-card dark:bg-[#0A3D4A] rounded-xl p-8 flex flex-col justify-between items-center text-center border border-border shadow-lg shadow-primary/20 max-w-xl mx-auto">
            <CardContent className="p-0 w-full">
              <h3 className="text-card-foreground text-2xl font-bold mb-2">Tailored Healthcare Integration</h3>
              <p className="text-muted-foreground text-sm mb-6">
                For organizations with unique requirements, offering bespoke solutions and deep integration.
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-20 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-8">
            About Pramana
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl opacity-80 mb-8 leading-relaxed">
            Pramana represents the perfect harmony between honoring our past and embracing our future. 
            We believe that true progress comes from understanding our roots while fearlessly pursuing innovation in healthcare technology.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="text-left">
              <h3 className="text-primary text-xl font-semibold mb-4">Our Mission</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Preserve traditional healthcare wisdom through digital innovation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Bridge ancient and modern medical practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Create sustainable healthcare solutions for the future</span>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-primary text-xl font-semibold mb-4">Our Vision</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">A world where traditional and modern medicine coexist</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Healthcare providers empowered by comprehensive tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Technology that serves humanity's health and wellbeing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-8">
            Join Our Journey
          </h2>
          <p className="text-muted-foreground text-lg opacity-80 mb-8">
            Ready to be part of something meaningful? Let's build the future of healthcare together while honoring our past.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300">
              Get In Touch
            </button>
            <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img
                className="h-6 w-auto"
                alt="Pramana Logo"
                src="/frame-5.svg"
              />
              <span className="text-muted-foreground text-sm opacity-60">
                © 2025 Pramana. Preserving Roots, Building Future.
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};