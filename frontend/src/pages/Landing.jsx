import React from 'react';

const MavenLandingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 px-4 md:px-16 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#33455D] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-[#33455D]">Maven</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#33455D] hover:text-[#4ECDC4] font-medium">Product</a>
            <a href="#" className="text-[#33455D] hover:text-[#4ECDC4] font-medium">Pricing</a>
            <a href="#" className="text-[#33455D] hover:text-[#4ECDC4] font-medium">Learn</a>
            <button className="px-4 py-2 text-[#33455D] font-medium hover:bg-gray-100 rounded-lg">
              Login
            </button>
            <button className="px-6 py-2 bg-[#4ECDC4] text-[#33455D] font-bold rounded-lg hover:bg-[#3ebbb3] transition-colors">
              Sign Up Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#33455D]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 md:px-16 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#4ECDC4] font-bold text-sm uppercase tracking-wider">Fintech for Nigeria</span>
              <h1 className="text-4xl md:text-6xl font-black text-[#33455D] mt-4 mb-6 leading-tight">
                Your AI Tax Assistant for <span className="text-[#4ECDC4]">Nigerian</span> Businesses
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Navigate FIRS regulations, calculate liabilities, and automate your tax compliance with Maven's AI-powered precision. Built specifically for the Finance Act.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-[#33455D] text-white font-bold rounded-lg hover:bg-[#2a384e] transition-colors shadow-lg">
                  Start Free Trial
                </button>
                <button className="px-8 py-3 bg-[#4ECDC4] text-[#33455D] font-bold rounded-lg hover:bg-[#3ebbb3] transition-colors shadow-md">
                  Chat Now
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#33455D] to-[#4ECDC4] rounded-2xl p-1 shadow-2xl">
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF6B6B]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#4ECDC4]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#33455D]"></div>
                    </div>
                    <div className="text-sm font-medium text-[#33455D]">AI Tax Dashboard</div>
                  </div>
                  
                  {/* Mock Dashboard Content */}
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm font-medium text-[#33455D]">VAT Liability</div>
                        <div className="text-lg font-bold text-[#4ECDC4]">₦124,500</div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#4ECDC4] w-3/4"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600">WHT Due</div>
                        <div className="text-xl font-bold text-[#33455D]">₦45,200</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600">CIT Projection</div>
                        <div className="text-xl font-bold text-[#33455D]">₦289,100</div>
                      </div>
                    </div>
                    
                    <div className="bg-[#33455D] rounded-lg p-4">
                      <div className="text-white text-sm font-medium mb-2">Compliance Score</div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-white">92%</div>
                        <div className="text-xs text-[#4ECDC4]">+12% this month</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-4 md:px-16 py-8 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-500 text-sm font-bold uppercase tracking-wider mb-6">
            Trusted by 500+ Nigerian businesses
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {['Lagos Tech Hub', 'Abuja Enterprises', 'Port Harcourt Inc', 'Kano Group'].map((company, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#33455D] rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-lg">{company.charAt(0)}</span>
                </div>
                <span className="text-sm font-medium text-[#33455D]">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-16 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#33455D] mb-4">
              Streamline Your Tax Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to stay compliant with Nigerian tax laws, automated by AI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                title: "Instant Answers",
                description: "Get immediate clarity on complex tax queries with our AI trained on recent FIRS circulars.",
                color: "text-[#4ECDC4]",
                bgColor: "bg-[#4ECDC4]/10"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Legal Citations",
                description: "Every answer comes with direct references to the Nigerian Finance Act and specific tax laws.",
                color: "text-[#33455D]",
                bgColor: "bg-[#33455D]/10"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "Document Analysis",
                description: "Upload assessment notices or audit queries and let Maven extract key data and suggest responses.",
                color: "text-[#FF6B6B]",
                bgColor: "bg-[#FF6B6B]/10"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className={`${feature.bgColor} ${feature.color} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#33455D] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-16 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#33455D] to-[#2a384e] rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#4ECDC4]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#FF6B6B]/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                Ready to simplify your taxes?
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Join hundreds of forward-thinking Nigerian businesses using Maven to stay ahead of compliance.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-10 py-4 bg-white text-[#33455D] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
                  Start Free Trial
                </button>
                <button className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Book a Demo
                </button>
              </div>
              
              <p className="mt-8 text-white/60 text-sm">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-16 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#33455D] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-[#33455D]">Maven</span>
              <span className="text-gray-500 text-sm ml-4">© 2024 Maven Technologies. All rights reserved.</span>
            </div>
            
            <div className="flex gap-8 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-[#4ECDC4] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#4ECDC4] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#4ECDC4] transition-colors">Contact Us</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>Maven AI is built specifically for Nigerian tax compliance, following the Finance Act and FIRS guidelines.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MavenLandingPage;