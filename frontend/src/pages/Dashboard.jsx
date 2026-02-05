import React from 'react';
import { Landmark, Search, Bell, Settings, MessageCircle, FileText, CalendarCheck, TrendingUp, Download, MessageSquare, MessageSquarePlus, Upload, Video, CheckCircle, XCircle, ArrowUpCircle, MapPin, ArrowRight } from 'lucide-react';

const MavenDashboard = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-white min-h-screen">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark px-10 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-primary-500 dark:text-white">
            <div className="size-8 bg-primary-500 rounded-lg flex items-center justify-center text-white">
              <Landmark />
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Maven Tax Assistant</h2>
          </div>
          <label className="flex flex-col min-w-40 h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-gray-500 flex border-none bg-gray-100 dark:bg-gray-800 items-center justify-center pl-4 rounded-l-lg">
                <Search className="text-xl" />
              </div>
              <input
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-gray-100 dark:bg-gray-800 h-full placeholder:text-gray-500 px-4 rounded-l-none pl-2 text-base font-normal"
                placeholder="Search dashboard..."
                defaultValue=""
              />
            </div>
          </label>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a className="text-sm font-medium leading-normal hover:text-primary-500 transition-colors" href="#">
              Dashboard
            </a>
            <a className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary-500" href="#">
              Documents
            </a>
            <a className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary-500" href="#">
              Queries
            </a>
            <a className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary-500" href="#">
              Calendar
            </a>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 transition-colors">
              <Bell className="text-xl" />
            </button>
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 transition-colors">
              <Settings className="text-xl" />
            </button>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-gray-200"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQ-DtKb3v82yjE75edoaqmd2gHv3ritzBLH2KYHc5WXqskCgx_VzLRk73-tbaIrWcF7UCfdMXPHrtNIU9CvjJvZO9zGhvV4gAs_PIyus5KeeRZFN38_L20EihLfWVChl5ClULaitb7jJWJ53ZIFavZh7exaPkYfFVyw55_mZ_bJSTgnYu32g-SjARzp7jFS7iCLmdmamy_bsfczuqzYjrrTor7TC6MEiri-XlTm1usrBG2UWGoZrU9mh0mXr9EIc50ZW-G4LPaK0A")',
            }}
            alt="User profile avatar placeholder"
          ></div>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-10 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 shadow-sm">
            <div className="flex justify-between items-start">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Queries Remaining</p>
              <MessageCircle className="text-secondary-400" />
            </div>
            <p className="text-gray-900 dark:text-white tracking-light text-2xl font-bold">45 / 100</p>
            <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full mt-2 overflow-hidden">
              <div className="bg-secondary-400 h-full rounded-full" style={{ width: '45%' }}></div>
            </div>
            <p className="text-red-600 text-xs font-medium mt-1">-5% from last month</p>
          </div>

          <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 shadow-sm">
            <div className="flex justify-between items-start">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Docs Analyzed</p>
              <FileText className="text-secondary-400" />
            </div>
            <p className="text-gray-900 dark:text-white tracking-light text-2xl font-bold">12 files</p>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="text-green-600 text-sm" />
              <p className="text-green-600 text-xs font-medium">+12% increase</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 shadow-sm">
            <div className="flex justify-between items-start">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Calls Booked</p>
              <CalendarCheck className="text-secondary-400" />
            </div>
            <p className="text-gray-900 dark:text-white tracking-light text-2xl font-bold">2 scheduled</p>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="text-green-600 text-sm" />
              <p className="text-green-600 text-xs font-medium">+100% since last week</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Content */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Activity Feed */}
            <section className="bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-800 overflow-hidden shadow-sm">
              <h3 className="text-gray-900 dark:text-white text-xl font-bold p-6 border-b border-gray-200 dark:border-gray-800">
                Recent Activity
              </h3>
              <div className="p-6">
                <div className="grid grid-cols-[40px_1fr] gap-x-2">
                  <div className="flex flex-col items-center gap-1 pt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                      <Download className="text-lg" />
                    </div>
                    <div className="w-[2px] bg-gray-300 dark:bg-gray-800 h-10"></div>
                  </div>
                  <div className="flex flex-col pb-6">
                    <p className="text-gray-900 dark:text-white text-base font-semibold">Uploaded 1099-INT</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Interest income statement from Chase Bank</p>
                    <p className="text-gray-600 dark:text-gray-500 text-xs mt-1">2 hours ago</p>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                      <MessageSquare className="text-lg" />
                    </div>
                    <div className="w-[2px] bg-gray-300 dark:bg-gray-800 h-10"></div>
                  </div>
                  <div className="flex flex-col pb-6">
                    <p className="text-gray-900 dark:text-white text-base font-semibold">Query: Rental income deductions</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Analyzed potential write-offs for 2023 property tax</p>
                    <p className="text-gray-600 dark:text-gray-500 text-xs mt-1">5 hours ago</p>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-600">
                      <FileText className="text-lg" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-900 dark:text-white text-base font-semibold">Generated Tax Summary PDF</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Full Q1 preliminary tax report exported</p>
                    <p className="text-gray-600 dark:text-gray-500 text-xs mt-1">Yesterday at 4:30 PM</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Upcoming Calls Widget */}
            <section className="bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-800 overflow-hidden shadow-sm">
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-gray-900 dark:text-white text-xl font-bold">Upcoming Calls</h2>
                <button className="text-primary-500 dark:text-blue-400 text-sm font-semibold hover:underline">
                  View Calendar
                </button>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between p-4 bg-background-light dark:bg-gray-800/50 rounded-lg border border-transparent hover:border-primary-500/20 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-500 text-white p-2 rounded flex flex-col items-center min-w-[50px]">
                      <span className="text-xs uppercase font-bold">Oct</span>
                      <span className="text-xl font-bold leading-none">14</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">Tax Strategy Session</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">with Sarah Jenkins, CPA</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary-500 dark:text-blue-300">10:00 AM</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">45 mins • Zoom</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-background-light dark:bg-gray-800/50 rounded-lg border border-transparent hover:border-primary-500/20 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 p-2 rounded flex flex-col items-center min-w-[50px]">
                      <span className="text-xs uppercase font-bold">Oct</span>
                      <span className="text-xl font-bold leading-none">21</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">Document Review</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">with Michael Chen</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary-500 dark:text-blue-300">02:30 PM</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">30 mins • Phone</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar: Quick Actions & Subscription */}
          <aside className="w-full lg:w-80 flex flex-col gap-6">
            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-300 dark:border-gray-800 shadow-sm">
              <h4 className="text-primary-500 dark:text-gray-300 text-sm font-bold uppercase tracking-wider mb-4">
                Quick Actions
              </h4>
              <div className="flex flex-col gap-3">
                <button className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all">
                  <MessageSquarePlus className="text-xl" />
                  Start New Chat
                </button>
                <button className="w-full bg-primary-500/10 text-primary-500 dark:bg-primary-500/20 dark:text-blue-200 py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-500/20 transition-all">
                  <Upload className="text-xl" />
                  Upload Documents
                </button>
                <button className="w-full bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                  <Video className="text-xl" />
                  Book a Call
                </button>
              </div>
            </div>

            {/* Subscription Status */}
            <div className="bg-primary-500 dark:bg-gray-900 rounded-xl p-6 border border-primary-500 dark:border-gray-800 text-white shadow-lg overflow-hidden relative">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary-400/10 rounded-full blur-3xl"></div>
              <h4 className="text-secondary-400 text-xs font-bold uppercase tracking-widest mb-1">Your Plan</h4>
              <h3 className="text-xl font-bold mb-4">Maven Basic</h3>
              <div className="mb-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Monthly Usage</span>
                  <span className="font-medium">45%</span>
                </div>
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary-400 h-full rounded-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-[10px] text-gray-400">Next billing date: Nov 02, 2024</p>
              </div>
              <ul className="text-sm space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-secondary-400 text-lg" />
                  <span>Standard Tax AI Assistant</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-secondary-400 text-lg" />
                  <span>Up to 100 queries/mo</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <XCircle className="text-lg" />
                  <span className="italic">Priority expert access</span>
                </li>
              </ul>
              <button className="w-full bg-accent-500 hover:bg-red-500 text-white py-3 px-4 rounded-lg font-bold shadow-md transition-colors flex items-center justify-center gap-2">
                <ArrowUpCircle className="text-xl" />
                Upgrade to Pro
              </button>
            </div>

            {/* Help Widget */}
            <div className="bg-gray-100 dark:bg-gray-800/50 rounded-xl p-6 border border-transparent">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Need help?</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                Our support team is available 24/7 during tax season.
              </p>
              <a className="text-primary-500 dark:text-blue-300 text-sm font-bold hover:underline flex items-center gap-1" href="#">
                Contact Support
                <ArrowRight className="text-sm" />
              </a>
            </div>
          </aside>
        </div>
      </main>

      {/* Map/Location Footer Preview */}
      <footer className="max-w-[1280px] mx-auto px-10 pb-12">
        <div className="h-32 w-full rounded-xl overflow-hidden relative border border-gray-300 dark:border-gray-800">
          <div
            className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHCRrEEHKKvRVfAcepZ87FFKErm3XX9T_bSDmMlJpwvlTHHkI-3nDcRZG8a4zZOmfNDX6T3KtEuRN53Rk35vGkdrYli4pW7HY_Ci3mkOLHYwayKBfz-TBxbISwojupIcQ2oSFlkpm-XWJYFhTGg8pZDIRcO6i0ldJHyvvEEH3E8Blj3s6x71QfOSMJBkIQXIzOEvxyPbHZTakzi8xAngkXdkNYU_LC0SYQ3QpeuShOVpj6ahspZkDjG8kM4dEdUVa2FcV9lM_1pG8')",
            }}
          >
            <div className="bg-white/90 dark:bg-gray-900/90 px-4 py-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex items-center gap-2">
              <MapPin className="text-primary-500" />
              <span className="text-sm font-semibold">Maven HQ: Chicago, IL</span>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-500 gap-4">
          <p>© 2024 Maven Tax Assistant Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary-500" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary-500" href="#">
              Terms of Service
            </a>
            <a className="hover:text-primary-500" href="#">
              Help Center
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MavenDashboard;