import React from 'react';
import {
  Bell, HelpCircle, CheckCircle, Download,
  AlertTriangle, Users, Key, Shield,
  Building2, User, Mail, Settings,
  Save, X, Eye, EyeOff, Lock,
  ChevronDown, Calendar, FileText,
  CreditCard, Globe, LogOut
} from 'lucide-react';

const MavenSettings = () => {
  return (
    <div className="light">
      <div className="bg-background-light dark:bg-background-dark font-sans text-custom-text-primary dark:text-white transition-colors duration-200">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            {/* TopNavBar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-10 py-3 bg-white dark:bg-background-dark sticky top-0 z-50">
              <div className="flex items-center gap-4 text-primary-500 dark:text-secondary-400">
                <div className="size-6">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                    <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                    <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                </div>
                <h2 className="text-primary-500 dark:text-white text-lg font-bold leading-tight tracking-tight">Maven</h2>
              </div>
              <div className="flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary-500 dark:hover:text-secondary-400" href="#">
                    Dashboard
                  </a>
                  <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary-500" href="#">
                    Projects
                  </a>
                  <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary-500" href="#">
                    Analytics
                  </a>
                  <a className="text-primary-500 dark:text-secondary-400 text-sm font-bold border-b-2 border-primary-500 dark:border-secondary-400 pb-1" href="#">
                    Settings
                  </a>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center justify-center rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-2.5 hover:bg-slate-200 dark:hover:bg-slate-700">
                    <Bell className="w-5 h-5" />
                  </button>
                  <button className="flex items-center justify-center rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-2.5 hover:bg-slate-200 dark:hover:bg-slate-700">
                    <HelpCircle className="w-5 h-5" />
                  </button>
                </div>
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-slate-200"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA52Ea8HnNWNamR8fLk9Qg2xmYXTG5nbRP5HgBB4X_rvA4xL_zzA9BKYNptHewBDfZQsohu02gqJnOGI8auGjiFE8VovIn72u2rAlpIKj_aRGwGWNDGufch6rV6zFr8N72ZNmyiQ5kt3tGlMn9Hg9LXQHma5nlxexzHzGOoXrLvtBkBAEI7OHr6Ur-EBKP1UhVWGvMaYOxfW69nrkKjERfgWz6gJciFdfJVhBwcC8q6ElRxCx0rOOJxAUnAEU3pdY-xFpPEUl_4VSw")',
                  }}
                  alt="User profile portrait"
                ></div>
              </div>
            </header>

            <main className="flex-1 px-4 md:px-20 lg:px-40 py-8">
              <div className="layout-content-container flex flex-col max-w-[1024px] mx-auto flex-1">
                {/* PageHeading */}
                <div className="flex flex-wrap justify-between items-end gap-4 p-4 mb-4">
                  <div className="flex min-w-72 flex-col gap-2">
                    <p className="text-primary-500 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                      Settings & Profile
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
                      Manage your business details, team, and security preferences.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-primary-500/10 dark:bg-primary-500/30 px-3 py-1.5 rounded-lg border border-primary-500/20">
                    <CheckCircle className="w-4 h-4 text-primary-500 dark:text-secondary-400" />
                    <span className="text-primary-500 dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
                      Business Tier
                    </span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="pb-6">
                  <div className="flex border-b border-slate-200 dark:border-slate-800 px-4 gap-8 overflow-x-auto">
                    <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary-500 dark:border-b-secondary-400 text-primary-500 dark:text-white pb-[13px] pt-4 whitespace-nowrap" href="#">
                      <p className="text-sm font-bold leading-normal tracking-[0.015em]">Business Info</p>
                    </a>
                    <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-slate-500 dark:text-slate-400 pb-[13px] pt-4 whitespace-nowrap hover:text-primary-500 dark:hover:text-slate-200" href="#">
                      <p className="text-sm font-bold leading-normal tracking-[0.015em]">Team</p>
                    </a>
                    <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-slate-500 dark:text-slate-400 pb-[13px] pt-4 whitespace-nowrap hover:text-primary-500 dark:hover:text-slate-200" href="#">
                      <p className="text-sm font-bold leading-normal tracking-[0.015em]">Notifications</p>
                    </a>
                    <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-slate-500 dark:text-slate-400 pb-[13px] pt-4 whitespace-nowrap hover:text-primary-500 dark:hover:text-slate-200" href="#">
                      <p className="text-sm font-bold leading-normal tracking-[0.015em]">API Keys</p>
                    </a>
                  </div>
                </div>

                {/* Main Form Section */}
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                  {/* SectionHeader */}
                  <div className="px-6 pt-6 pb-2">
                    <h2 className="text-primary-500 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
                      Business Information
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                      Basic identification and tax details for your organization.
                    </p>
                  </div>

                  {/* Form Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 p-6">
                    {/* Company Name (TextField) */}
                    <div className="flex flex-col gap-1 py-3">
                      <label className="flex flex-col flex-1">
                        <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold pb-2">Company Name</p>
                        <input
                          className="form-input flex w-full rounded-lg text-primary-500 dark:text-white focus:outline-0 focus:ring-2 focus:ring-secondary-400 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-12 placeholder:text-slate-400 p-[15px] text-base"
                          placeholder="Enter company name"
                          defaultValue="Acme Dynamics Inc."
                        />
                      </label>
                    </div>

                    {/* TIN (Tax Identification Number) */}
                    <div className="flex flex-col gap-1 py-3">
                      <label className="flex flex-col flex-1">
                        <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold pb-2">Tax ID Number (TIN)</p>
                        <input
                          className="form-input flex w-full rounded-lg text-primary-500 dark:text-white focus:outline-0 focus:ring-2 focus:ring-secondary-400 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-12 placeholder:text-slate-400 p-[15px] text-base font-mono"
                          placeholder="XX-XXXXXXX"
                          defaultValue="88-2349102"
                        />
                      </label>
                    </div>

                    {/* VAT Status */}
                    <div className="flex flex-col gap-1 py-3">
                      <label className="flex flex-col flex-1">
                        <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold pb-2">VAT Status</p>
                        <select className="form-select flex w-full rounded-lg text-primary-500 dark:text-white focus:outline-0 focus:ring-2 focus:ring-secondary-400 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-12 p-[10px] text-base leading-normal">
                          <option value="registered">VAT Registered</option>
                          <option value="exempt">VAT Exempt</option>
                          <option value="pending">Application Pending</option>
                        </select>
                      </label>
                    </div>

                    {/* Sector */}
                    <div className="flex flex-col gap-1 py-3">
                      <label className="flex flex-col flex-1">
                        <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold pb-2">Business Sector</p>
                        <select className="form-select flex w-full rounded-lg text-primary-500 dark:text-white focus:outline-0 focus:ring-2 focus:ring-secondary-400 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-12 p-[10px] text-base leading-normal">
                          <option value="tech">Technology & SaaS</option>
                          <option value="finance">Financial Services</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="other">Other Professional Services</option>
                        </select>
                      </label>
                    </div>
                  </div>

                  {/* Team Management Section (Brief Preview) */}
                  <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-primary-500 dark:text-white text-lg font-bold">Team Management</h3>
                      <button className="bg-primary-500 text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider hover:bg-slate-700">
                        Manage All Members
                      </button>
                    </div>
                    <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium uppercase text-xs">
                          <tr>
                            <th className="px-4 py-3">Member</th>
                            <th className="px-4 py-3">Role</th>
                            <th className="px-4 py-3">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                          <tr>
                            <td className="px-4 py-4 flex items-center gap-3">
                              <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                                <User className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                              </div>
                              <div>
                                <p className="font-bold text-primary-500 dark:text-white">Alex Johnson</p>
                                <p className="text-xs text-slate-500">alex@acmedynamics.com</p>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <span className="px-2 py-1 rounded bg-secondary-400/20 text-secondary-400 text-[10px] font-black uppercase">
                                Admin
                              </span>
                            </td>
                            <td className="px-4 py-4 text-emerald-500 font-medium">Active</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-4 flex items-center gap-3">
                              <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                                <User className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                              </div>
                              <div>
                                <p className="font-bold text-primary-500 dark:text-white">Sarah Miller</p>
                                <p className="text-xs text-slate-500">s.miller@acmedynamics.com</p>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <span className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-black uppercase">
                                Editor
                              </span>
                            </td>
                            <td className="px-4 py-4 text-emerald-500 font-medium">Active</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="px-6 py-6 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 items-center justify-between">
                    <button className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-bold text-sm hover:text-primary-500 dark:hover:text-secondary-400 transition-colors">
                      <Download className="w-4 h-4" />
                      Export All Data (CSV)
                    </button>
                    <div className="flex gap-3">
                      <button className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-all">
                        <X className="w-4 h-4 inline mr-1" />
                        Discard
                      </button>
                      <button className="px-8 py-2.5 rounded-lg bg-primary-500 text-white font-bold text-sm shadow-md hover:bg-slate-700 focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 transition-all">
                        <Save className="w-4 h-4 inline mr-1" />
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>

                {/* Security Alert */}
                <div className="mt-8 p-4 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 flex gap-4 items-start">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div>
                    <p className="text-orange-800 dark:text-orange-300 font-bold text-sm">Two-Factor Authentication</p>
                    <p className="text-orange-700 dark:text-orange-400 text-xs mt-1 leading-relaxed">
                      Your business account currently has 2FA disabled for some team members. We recommend enforcing 2FA for all Admin roles to ensure maximum security.
                    </p>
                    <button className="mt-2 text-orange-800 dark:text-orange-300 text-xs font-bold underline">
                      Review Security Settings
                    </button>
                  </div>
                </div>
              </div>
            </main>

            {/* Footer Small */}
            <footer className="py-10 px-10 border-t border-slate-200 dark:border-slate-800 text-center">
              <p className="text-slate-400 text-xs">
                © 2024 Maven Professional Services. All rights reserved.{' '}
                <a className="underline" href="#">
                  Privacy Policy
                </a>{' '}
                |{' '}
                <a className="underline" href="#">
                  Terms of Service
                </a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MavenSettings;