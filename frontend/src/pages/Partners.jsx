import React from 'react';
import {
  ShieldCheck, Search, MapPin, ChevronDown, Star, Calendar,
  FileText, Globe, Mail, Share2, LogIn, UserPlus,
  Building2, Users, DollarSign, PieChart, TrendingUp,
  Briefcase, FileCheck, Calculator, Landmark, Home,
  ChevronRight, CheckCircle
} from 'lucide-react';

const MavenPartnerDirectory = () => {
  return (
    <div className="light">
      <div className="bg-background-light dark:bg-background-dark font-sans min-h-screen text-custom-text-primary dark:text-white">
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-primary-500/10 bg-white dark:bg-background-dark px-10 py-3 sticky top-0 z-50">
              <div className="flex items-center gap-4 text-primary-500 dark:text-white">
                <div className="size-6">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                    <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                  Maven Partner Directory
                </h2>
              </div>
              <div className="flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <a className="text-sm font-medium leading-normal hover:text-primary-500/70 transition-colors" href="#">
                    Directory
                  </a>
                  <a className="text-sm font-medium leading-normal hover:text-primary-500/70 transition-colors" href="#">
                    Services
                  </a>
                  <a className="text-sm font-medium leading-normal hover:text-primary-500/70 transition-colors" href="#">
                    About Us
                  </a>
                  <a className="text-sm font-medium leading-normal hover:text-primary-500/70 transition-colors" href="#">
                    Pricing
                  </a>
                </div>
                <div className="flex gap-2">
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary-500 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary-500/90 transition-all">
                    <LogIn className="w-4 h-4 mr-1" />
                    <span className="truncate">Sign In</span>
                  </button>
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary-500/10 text-primary-500 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary-500/20 transition-all">
                    <UserPlus className="w-4 h-4 mr-1" />
                    <span className="truncate">Join as Partner</span>
                  </button>
                </div>
              </div>
            </header>

            <main className="flex flex-1 justify-center py-10 px-4 md:px-10">
              <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                {/* Page Heading */}
                <div className="flex flex-wrap justify-between gap-3 mb-8">
                  <div className="flex min-w-72 flex-col gap-2">
                    <p className="text-4xl font-black leading-tight tracking-[-0.033em]">
                      Verified Tax Partners in Nigeria
                    </p>
                    <p className="text-primary-500/60 dark:text-white/60 text-lg font-normal leading-normal">
                      Connect with 150+ licensed tax firms and expert consultants across all 36 states.
                    </p>
                  </div>
                </div>

                {/* Search & Filter Controls */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white dark:bg-background-dark p-4 rounded-xl border border-primary-500/5 shadow-sm">
                  <div className="flex-1">
                    <label className="flex flex-col min-w-40 h-12 w-full">
                      <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden border border-primary-500/10 focus-within:border-primary-500 transition-all">
                        <div className="text-primary-500/50 flex bg-primary-500/5 items-center justify-center pl-4 pr-1">
                          <Search className="w-5 h-5" />
                        </div>
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none border-none bg-primary-500/5 focus:outline-0 focus:ring-0 text-base font-normal leading-normal px-3 placeholder:text-primary-500/40"
                          placeholder="Search by firm name, service, or keyword (e.g. Audit, VAT Filing)"
                        />
                      </div>
                    </label>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="relative min-w-[200px]">
                      <button className="flex w-full h-12 items-center justify-between gap-x-2 rounded-lg border border-primary-500/10 bg-primary-500/5 px-4 text-sm font-medium hover:border-primary-500 transition-all">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-primary-500/60" />
                          <span className="text-primary-500 dark:text-white">All States</span>
                        </div>
                        <ChevronDown className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* State Quick Filter Chips */}
                <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary-500 text-white px-5 text-sm font-semibold">
                    All Regions
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-background-dark border border-primary-500/10 hover:border-primary-500 hover:bg-primary-500/5 px-5 text-sm font-medium transition-all">
                    Lagos
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-background-dark border border-primary-500/10 hover:border-primary-500 hover:bg-primary-500/5 px-5 text-sm font-medium transition-all">
                    Abuja (FCT)
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-background-dark border border-primary-500/10 hover:border-primary-500 hover:bg-primary-500/5 px-5 text-sm font-medium transition-all">
                    Rivers
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-background-dark border border-primary-500/10 hover:border-primary-500 hover:bg-primary-500/5 px-5 text-sm font-medium transition-all">
                    Kano
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-background-dark border border-primary-500/10 hover:border-primary-500 hover:bg-primary-500/5 px-5 text-sm font-medium transition-all">
                    Oyo
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-background-dark border border-primary-500/10 hover:border-primary-500 hover:bg-primary-500/5 px-5 text-sm font-medium transition-all">
                    Ogun
                  </button>
                </div>

                {/* Partner Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Partner Card 1 */}
                  <div className="group bg-white dark:bg-background-dark rounded-xl border border-primary-500/5 shadow-sm hover:shadow-md hover:border-primary-500/20 transition-all flex flex-col">
                    <div className="relative p-6 pb-0">
                      <div
                        className="w-full h-48 bg-center bg-no-repeat bg-cover rounded-lg mb-4"
                        style={{
                          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZZKfWtxv7RpGOVCuZatOUCbePgI9fzNFY0HOEroakL4HDlaVdkMXtvHqT0OH4lCvvj_sZa0S8auwr99TTVF42fXScLiw0hogPC0PNztGVM6b3KGdtz_N17gmCXS5nBAEh4TTgjgEgFS5_R27MtgK0avKmu2QQzoP1caBa6hTwIGl6nnIUe21wfdpyYRxlHtUoG0um7_emZTQQWfQqyhvxKpUdHnezlykxhy-Xe4JGQYi--wlo1JbfAnguI2rHQlaylIVmuSwO534")',
                        }}
                        alt="Office building of a tax consultancy firm in Lagos"
                      ></div>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <h3 className="text-lg font-bold text-primary-500 dark:text-white leading-none">
                              Olukoya & Co.
                            </h3>
                            <CheckCircle className="w-5 h-5 text-green-500 fill-current" title="Verified Partner" />
                          </div>
                          <div className="flex items-center gap-1 text-primary-500/60 dark:text-white/60 text-sm font-medium">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span>4.9</span>
                            <span className="mx-1">•</span>
                            <span>Lagos State</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 pt-4 flex-1">
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        <span className="px-2.5 py-1 bg-primary-500/5 text-primary-500/80 dark:text-white/80 text-[11px] font-bold uppercase tracking-wider rounded">
                          Corporate Tax
                        </span>
                        <span className="px-2.5 py-1 bg-primary-500/5 text-primary-500/80 dark:text-white/80 text-[11px] font-bold uppercase tracking-wider rounded">
                          VAT Filing
                        </span>
                        <span className="px-2.5 py-1 bg-primary-500/5 text-primary-500/80 dark:text-white/80 text-[11px] font-bold uppercase tracking-wider rounded">
                          Audit
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 h-10 bg-primary-500 text-white text-xs font-bold rounded-lg hover:bg-primary-500/90 transition-all">
                          Book Consultation
                        </button>
                        <button className="flex-1 h-10 border border-primary-500/10 text-primary-500 dark:text-white text-xs font-bold rounded-lg hover:bg-primary-500/5 transition-all">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Partner Card 2 */}
                  <div className="group bg-white dark:bg-background-dark rounded-xl border border-primary-500/5 shadow-sm hover:shadow-md hover:border-primary-500/20 transition-all flex flex-col">
                    <div className="relative p-6 pb-0">
                      <div
                        className="w-full h-48 bg-center bg-no-repeat bg-cover rounded-lg mb-4"
                        style={{
                          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD79tdksUYKDS29qMI_UQ74Q8sqPl3Z2nH3rsb8XPwq1rrkyJwcPO93BmcJ52pdm1lcetzvEEdivGfwnBpLXf9bwXKYs0wGmErC6QmqInaIy671HNuGWxxLbHpSO7YG_zmIA476Q3TUZbuv7Oza3tAOR7oI7o0XDMhAkhTcZfobbI-R8l_Lg0MRG5iWakdMIz1jGhtj2sNlTcujM8zW5ZseBv9Frw9i8tzXr0isGzRxVP_XWcYihqB6CL0TniK4-tjHx8bbi4Kqdkc")',
                        }}
                        alt="Modern professional workspace interior in Abuja"
                      ></div>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <h3 className="text-lg font-bold text-primary-500 dark:text-white leading-none">
                              Ade & Partners
                            </h3>
                            <CheckCircle className="w-5 h-5 text-green-500 fill-current" title="Verified Partner" />
                          </div>
                          <div className="flex items-center gap-1 text-primary-500/60 dark:text-white/60 text-sm font-medium">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span>4.7</span>
                            <span className="mx-1">•</span>
                            <span>Abuja (FCT)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 pt-4 flex-1">
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        <span className="px-2.5 py-1 bg-primary-500/5 text-primary-500/80 dark:text-white/80 text-[11px] font-bold uppercase tracking-wider rounded">
                          PIT Management
                        </span>
                        <span className="px-2.5 py-1 bg-primary-500/5 text-primary-500/80 dark:text-white/80 text-[11px] font-bold uppercase tracking-wider rounded">
                          Advisory
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 h-10 bg-primary-500 text-white text-xs font-bold rounded-lg hover:bg-primary-500/90 transition-all">
                          Book Consultation
                        </button>
                        <button className="flex-1 h-10 border border-primary-500/10 text-primary-500 dark:text-white text-xs font-bold rounded-lg hover:bg-primary-500/5 transition-all">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Partner Card 3 */}
                  <div className="group bg-white dark:bg-background-dark rounded-xl border border-primary-500/5 shadow-sm hover:shadow-md hover:border-primary-500/20 transition-all flex flex-col">
                    <div className="relative p-6 pb-0">
                      <div
                        className="w-full h-48 bg-center bg-no-repeat bg-cover rounded-lg mb-4"
                        style={{
                          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0usHujrijBRiq9MQtbKieGJR_2LpbPAz5ECLaIwdKg345_Z15Czmc-Y8efqgJBENbCY_-cp-9GOZO1vCpxHCQ3-jRZArAYiraS2ay3dcClWk94yocHf8NwdPZJWGmjVJwaYml5psxHORa_LNziDxA6fldaJp6tf7xD-fDp5_R8yO4Gf1z3XGOrLkZXPUReglX8Vrnkdlbk56WGn756tRvmn6_I0pqskfjjrqLwTXvqGOjf9XipW9KW7WztjXT3HPbS_RKIiAwTUc")',
                        }}
                        alt="Conference room setting in Kano tax office"
                      ></div>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <h3 className="text-lg font-bold text-primary-500 dark:text-white leading-none">
                              Northern Tax Consultants
                            </h3>
                            <CheckCircle className="w-5 h-5 text-green-500 fill-current" title="Verified Partner" />
                          </div>
                          <div className="flex items-center gap-1 text-primary-500/60 dark:text-white/60 text-sm font-medium">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span>4.8</span>
                            <span className="mx-1">•</span>
                            <span>Kano State</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 pt-4 flex-1">
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        <span className="px-2.5 py-1 bg-primary-500/5 text-primary-500/80 dark:text-white/80 text-[11px] font-bold uppercase tracking-wider rounded">
                          SME Tax
                        </span>
                        <span className="px-2.5 py-1 bg-primary-500/5 text-primary-500/80 dark:text-white/80 text-[11px] font-bold uppercase tracking-wider rounded">
                          Corporate Filing
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 h-10 bg-primary-500 text-white text-xs font-bold rounded-lg hover:bg-primary-500/90 transition-all">
                          Book Consultation
                        </button>
                        <button className="flex-1 h-10 border border-primary-500/10 text-primary-500 dark:text-white text-xs font-bold rounded-lg hover:bg-primary-500/5 transition-all">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Partner Card 4 */}
                  <div className="group bg-white dark:bg-background-dark rounded-xl border border-primary-500/5 shadow-sm hover:shadow-md hover:border-primary-500/20 transition-all flex flex-col">
                    <div className="relative p-6 pb-0">
                      <div
                        className="w-full h-48 bg-center bg-no-repeat bg-cover rounded-lg mb-4"
                        style={{
                          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvMZ8VwS_cTQ31JZ34gHuCKXmQZdjYRsR-2P3J9Ifsn87EIxPcQyYATB_H-Bc82bWOXTH2kM5lF6hRje32JC7UMl7Dfe-PyR8T8PfActWgx3iR1_jBx38zz4EzsXsEwODrCa_DZfxkxI8HaZ3od0cpJ9XUkXA0EJBshOmwDW9nnIkY8Q8GtLTF02qBIj4bTHO3EFRKZHR1c1UnBfq103l5ZoatXlK7PfeXzVuBThQ-OXpfBAshM4fN_fHfayUFwj4rLbkMFw4fMGc")',
                        }}
                        alt="Executive board room for financial services"
                      ></div>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <h3 className="text-lg font-bold text-primary-500 dark:text-white leading-none">
                              Lagos Audit Group
                            </h3>
                            <CheckCircle className="w-5 h-5 text-green-500 fill-current" title="Verified Partner" />
                          </div>
                          <div className="flex items-center gap-1 text-primary-500/60 dark:text-white/60 text-sm font-medium">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span>4.6</span>
                            <span className="mx-1">•</span>
                            <span>Lagos State</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 pt-4 flex-1">
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        <span className="px-2.5 py-1 bg-primary-500/5 text-primary-500/80 dark:text-white/80 text-[11px] font-bold uppercase tracking-wider rounded">
                          Statutory Audit
                        </span>
                        <span className="px-2.5 py-1 bg-primary-500/5 text-primary-500/80 dark:text-white/80 text-[11px] font-bold uppercase tracking-wider rounded">
                          Tax Planning
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 h-10 bg-primary-500 text-white text-xs font-bold rounded-lg hover:bg-primary-500/90 transition-all">
                          Book Consultation
                        </button>
                        <button className="flex-1 h-10 border border-primary-500/10 text-primary-500 dark:text-white text-xs font-bold rounded-lg hover:bg-primary-500/5 transition-all">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Partner Card 5 */}
                  <div className="group bg-white dark:bg-background-dark rounded-xl border border-primary-500/5 shadow-sm hover:shadow-md hover:border-primary-500/20 transition-all flex flex-col">
                    <div className="relative p-6 pb-0">
                      <div
                        className="w-full h-48 bg-center bg-no-repeat bg-cover rounded-lg mb-4"
                        style={{
                          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdnkUStnyq70pkP7equs0XCjeI9XsLWpm6qIScJzyrh6fl27de7mrhJCAKKEH0dGl2k_TNO2Sz57GMYDaxNAVeLf0K0YcCfPTOAnU4b_JqVK6vSEwxGJfLOQm4X0CSEveNKF5oMdEK2I0eilWV5JcX_9sC6yA5NZ7srzrl6HtF16B45EIrFwScNaLv08K1gFscXxrf520n3c0LwBpija_x1FiV-KBuwO6SyfEgwdMbqmkuPcBqwSNzZFQN2_GBtmipygnq7odacd8")',
                        }}
                        alt="Office lobby in Port Harcourt"
                      ></div>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <h3 className="text-lg font-bold text-primary-500 dark:text-white leading-none">
                              Delta Financial
                            </h3>
                            <CheckCircle className="w-5 h-5 text-green-500 fill-current" title="Verified Partner" />
                          </div>
                          <div className="flex items-center gap-1 text-primary-500/60 dark:text-white/60 text-sm font-medium">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span>4.5</span>
                            <span className="mx-1">•</span>
                            <span>Delta State</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 pt-4 flex-1">
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        <span className="px-2.5 py-1 bg-primary-500/5 text-primary-500/80 dark:text-white/80 text-[11px] font-bold uppercase tracking-wider rounded">
                          Oil & Gas Tax
                        </span>
                        <span className="px-2.5 py-1 bg-primary-500/5 text-primary-500/80 dark:text-white/80 text-[11px] font-bold uppercase tracking-wider rounded">
                          Consultancy
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 h-10 bg-primary-500 text-white text-xs font-bold rounded-lg hover:bg-primary-500/90 transition-all">
                          Book Consultation
                        </button>
                        <button className="flex-1 h-10 border border-primary-500/10 text-primary-500 dark:text-white text-xs font-bold rounded-lg hover:bg-primary-500/5 transition-all">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Partner Card 6 */}
                  <div className="group bg-white dark:bg-background-dark rounded-xl border border-primary-500/5 shadow-sm hover:shadow-md hover:border-primary-500/20 transition-all flex flex-col">
                    <div className="relative p-6 pb-0">
                      <div
                        className="w-full h-48 bg-center bg-no-repeat bg-cover rounded-lg mb-4"
                        style={{
                          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1KRnknuIpkGzcymm6Dil6-nscrXmb2hXriZqfzEr2_q5Y3xpcWL7iqF7PM-cetUP-OPI_GV33FCB-gq5z-De8EJtVBlQpYwcjAxDo97_2nFiDHz3n_DFX2Cs5iI0C3h-02IXKbSD1_JBxZkGbc3pB3JmyQH_OY8GF3ZHRL9cSCyXjOMBdoAiXZvaX5jwPwK1i9C3wN0-0FdFScwxgvKm-K8vBTJuYb-wu6swaH2Ftn67bdzED4hOuCMVBhn992tYOwzOnlznyOcs")',
                        }}
                        alt="Modern high-rise office architecture"
                      ></div>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <h3 className="text-lg font-bold text-primary-500 dark:text-white leading-none">
                              Ibadan Tax Hub
                            </h3>
                            <CheckCircle className="w-5 h-5 text-green-500 fill-current" title="Verified Partner" />
                          </div>
                          <div className="flex items-center gap-1 text-primary-500/60 dark:text-white/60 text-sm font-medium">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span>4.9</span>
                            <span className="mx-1">•</span>
                            <span>Oyo State</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 pt-4 flex-1">
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        <span className="px-2.5 py-1 bg-primary-500/5 text-primary-500/80 dark:text-white/80 text-[11px] font-bold uppercase tracking-wider rounded">
                          Personal Income
                        </span>
                        <span className="px-2.5 py-1 bg-primary-500/5 text-primary-500/80 dark:text-white/80 text-[11px] font-bold uppercase tracking-wider rounded">
                          WHT Filing
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 h-10 bg-primary-500 text-white text-xs font-bold rounded-lg hover:bg-primary-500/90 transition-all">
                          Book Consultation
                        </button>
                        <button className="flex-1 h-10 border border-primary-500/10 text-primary-500 dark:text-white text-xs font-bold rounded-lg hover:bg-primary-500/5 transition-all">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-primary-500/5 bg-white dark:bg-background-dark px-10 py-12">
              <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2 text-primary-500 dark:text-white mb-4">
                    <div className="size-5">
                      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                        <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg">Maven Partner Directory</h3>
                  </div>
                  <p className="text-sm text-primary-500/60 dark:text-white/60 max-w-xs leading-relaxed">
                    Connecting Nigerian businesses with the highest standard of tax and financial advisory professionals.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-sm">Quick Links</h4>
                  <ul className="space-y-2 text-sm text-primary-500/60 dark:text-white/60">
                    <li>
                      <a className="hover:text-primary-500 transition-colors flex items-center gap-1" href="#">
                        <Calendar className="w-3 h-3" />
                        Tax Calendar
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-primary-500 transition-colors flex items-center gap-1" href="#">
                        <FileText className="w-3 h-3" />
                        Resources
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-primary-500 transition-colors flex items-center gap-1" href="#">
                        <Landmark className="w-3 h-3" />
                        FIRS Regulations
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-primary-500 transition-colors flex items-center gap-1" href="#">
                        <Home className="w-3 h-3" />
                        States BIR
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-sm">Legal</h4>
                  <ul className="space-y-2 text-sm text-primary-500/60 dark:text-white/60">
                    <li>
                      <a className="hover:text-primary-500 transition-colors flex items-center gap-1" href="#">
                        <ShieldCheck className="w-3 h-3" />
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-primary-500 transition-colors flex items-center gap-1" href="#">
                        <FileText className="w-3 h-3" />
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-primary-500 transition-colors flex items-center gap-1" href="#">
                        <CheckCircle className="w-3 h-3" />
                        Partner Standards
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-primary-500/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-primary-500/40 dark:text-white/40">
                  © 2024 Maven Financial Network. All rights reserved.
                </p>
                <div className="flex gap-4">
                  <Globe className="w-5 h-5 text-primary-500/40 cursor-pointer hover:text-primary-500 transition-colors" />
                  <Mail className="w-5 h-5 text-primary-500/40 cursor-pointer hover:text-primary-500 transition-colors" />
                  <Share2 className="w-5 h-5 text-primary-500/40 cursor-pointer hover:text-primary-500 transition-colors" />
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MavenPartnerDirectory;