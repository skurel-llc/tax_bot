import React from 'react';
import {
  Bell, Download, FileText, CheckCircle,
  Circle, Receipt, CreditCard, Shield,
  HelpCircle, User, DollarSign, Briefcase,
  Building, FileCheck, Clock, AlertCircle,
  ExternalLink, ArrowRight
} from 'lucide-react';

const MavenPricing = () => {
  return (
    <div className="light">
      <div className="bg-background-light dark:bg-background-dark font-sans text-primary-500 transition-colors duration-300">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            {/* Top Navigation */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-custom-border-light dark:border-gray-800 px-10 py-3 bg-white dark:bg-background-dark sticky top-0 z-50">
              <div className="flex items-center gap-4 text-primary-500 dark:text-white">
                <div className="size-8 text-primary-500 dark:text-blue-400">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                    <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-bold leading-tight tracking-tight">Maven</h2>
              </div>
              <div className="flex flex-1 justify-end gap-8">
                <nav className="flex items-center gap-9">
                  <a className="text-primary-500/70 dark:text-gray-400 text-sm font-medium hover:text-primary-500 dark:hover:text-white transition-colors" href="#">
                    Dashboard
                  </a>
                  <a className="text-primary-500/70 dark:text-gray-400 text-sm font-medium hover:text-primary-500 dark:hover:text-white transition-colors" href="#">
                    Tax Filing
                  </a>
                  <a className="text-primary-500 dark:text-white text-sm font-bold border-b-2 border-primary-500" href="#">
                    Pricing
                  </a>
                  <a className="text-primary-500/70 dark:text-gray-400 text-sm font-medium hover:text-primary-500 dark:hover:text-white transition-colors" href="#">
                    Settings
                  </a>
                </nav>
                <div className="flex gap-2">
                  <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-gray-100 dark:bg-gray-800 text-primary-500 dark:text-gray-300 hover:bg-gray-200 transition-colors">
                    <Bell className="w-5 h-5" />
                  </button>
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-gray-200 dark:border-gray-700"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-RbtDyQi58VhVi2QVX7oqOLLXJNnuZR5jeDo9z_utNaZB09PH4qsvxxPFRl5JwluIvAyT5dZkUC80iKHIGXcWXEe-DWvtwPw-PgftdNRb7W1YvwStPACZigvZQror9hFyDDJUGce3lm8HqHhRWRTZi5PcZk8lrsimVyE7n6E3cQV5uSxetoW_yext0JWzFnYQ_o_UM2pNa79oyzizdVZsOOo8C2HUYeO7EDPwOo7vrGgK0xShoJE15WhYHRzv_cAUSB6UgPqXMtc")',
                    }}
                    alt="User profile avatar thumbnail"
                  ></div>
                </div>
              </div>
            </header>

            <main className="flex flex-1 justify-center py-10 px-4">
              <div className="layout-content-container flex flex-col max-w-[1120px] flex-1 gap-12">
                {/* Page Heading */}
                <div className="flex flex-col items-center text-center gap-4 py-8">
                  <div className="space-y-2">
                    <h1 className="text-primary-500 dark:text-white text-5xl font-black leading-tight tracking-tight">
                      Simple & Transparent Pricing
                    </h1>
                    <p className="text-primary-500/60 dark:text-gray-400 text-xl font-normal max-w-2xl mx-auto">
                      Choose the plan that fits your tax needs. All prices in Nigerian Naira (₦). No hidden fees.
                    </p>
                  </div>
                </div>

                {/* Pricing Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Free Plan */}
                  <div className="flex flex-col gap-6 rounded-xl border border-solid border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="space-y-1">
                      <h3 className="text-primary-500/60 dark:text-gray-400 text-sm font-bold uppercase tracking-wider">
                        Starter
                      </h3>
                      <div className="flex items-baseline gap-1 text-primary-500 dark:text-white">
                        <span className="text-4xl font-black tracking-tight">₦0</span>
                        <span className="text-base font-medium opacity-60">/month</span>
                      </div>
                      <p className="text-primary-500/70 dark:text-gray-400 text-sm">
                        Perfect for individuals just getting started.
                      </p>
                    </div>
                    <button className="w-full flex items-center justify-center rounded-lg h-12 px-4 bg-gray-100 dark:bg-gray-800 text-primary-500 dark:text-white text-sm font-bold hover:bg-gray-200 transition-colors">
                      Get Started
                    </button>
                    <hr className="border-gray-100 dark:border-gray-800" />
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3 text-primary-500 dark:text-gray-300 text-sm font-medium">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Basic tax filing
                      </div>
                      <div className="flex items-center gap-3 text-primary-500 dark:text-gray-300 text-sm font-medium">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Single user access
                      </div>
                      <div className="flex items-center gap-3 text-primary-500 dark:text-gray-300 text-sm font-medium">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Email support (48h)
                      </div>
                    </div>
                  </div>

                  {/* Pro Plan (Popular) */}
                  <div className="flex flex-col gap-6 rounded-xl border-2 border-primary-500 bg-white dark:bg-background-dark p-8 shadow-xl relative scale-105 z-10">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                      Most Popular
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-primary-500/60 dark:text-gray-400 text-sm font-bold uppercase tracking-wider">
                        Professional
                      </h3>
                      <div className="flex items-baseline gap-1 text-primary-500 dark:text-white">
                        <span className="text-4xl font-black tracking-tight">₦15,000</span>
                        <span className="text-base font-medium opacity-60">/month</span>
                      </div>
                      <p className="text-primary-500/70 dark:text-gray-400 text-sm">
                        Everything you need for a growing business.
                      </p>
                    </div>
                    <button className="w-full flex items-center justify-center rounded-lg h-12 px-4 bg-primary-500 text-white text-sm font-bold hover:opacity-90 transition-opacity">
                      Choose Pro
                    </button>
                    <hr className="border-gray-100 dark:border-gray-800" />
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3 text-primary-500 dark:text-gray-300 text-sm font-medium">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Automated VAT calculation
                      </div>
                      <div className="flex items-center gap-3 text-primary-500 dark:text-gray-300 text-sm font-medium">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Small business inventory tools
                      </div>
                      <div className="flex items-center gap-3 text-primary-500 dark:text-gray-300 text-sm font-medium">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Priority support (2h)
                      </div>
                      <div className="flex items-center gap-3 text-primary-500 dark:text-gray-300 text-sm font-medium">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Detailed audit logs
                      </div>
                    </div>
                  </div>

                  {/* Business Plan */}
                  <div className="flex flex-col gap-6 rounded-xl border border-solid border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="space-y-1">
                      <h3 className="text-primary-500/60 dark:text-gray-400 text-sm font-bold uppercase tracking-wider">
                        Enterprise
                      </h3>
                      <div className="flex items-baseline gap-1 text-primary-500 dark:text-white">
                        <span className="text-4xl font-black tracking-tight">₦45,000</span>
                        <span className="text-base font-medium opacity-60">/month</span>
                      </div>
                      <p className="text-primary-500/70 dark:text-gray-400 text-sm">
                        Advanced features for large scale operations.
                      </p>
                    </div>
                    <button className="w-full flex items-center justify-center rounded-lg h-12 px-4 bg-gray-100 dark:bg-gray-800 text-primary-500 dark:text-white text-sm font-bold hover:bg-gray-200 transition-colors">
                      Contact Sales
                    </button>
                    <hr className="border-gray-100 dark:border-gray-800" />
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3 text-primary-500 dark:text-gray-300 text-sm font-medium">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Audit protection guarantee
                      </div>
                      <div className="flex items-center gap-3 text-primary-500 dark:text-gray-300 text-sm font-medium">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Unlimited multi-user access
                      </div>
                      <div className="flex items-center gap-3 text-primary-500 dark:text-gray-300 text-sm font-medium">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Dedicated account manager
                      </div>
                      <div className="flex items-center gap-3 text-primary-500 dark:text-gray-300 text-sm font-medium">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Full API & Webhooks
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment History Section */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-primary-500 dark:text-white text-2xl font-bold leading-tight tracking-tight">
                      Payment History
                    </h2>
                    <button className="text-primary-500 text-sm font-bold flex items-center gap-1 hover:underline">
                      <Download className="w-5 h-5" />
                      Download All Statements
                    </button>
                  </div>
                  <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark shadow-sm">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800/50">
                          <th className="px-6 py-4 text-primary-500/70 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-4 text-primary-500/70 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
                            Invoice ID
                          </th>
                          <th className="px-6 py-4 text-primary-500/70 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
                            Description
                          </th>
                          <th className="px-6 py-4 text-primary-500/70 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-6 py-4 text-primary-500/70 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-4 text-primary-500/70 dark:text-gray-400 text-xs font-bold uppercase tracking-wider text-right">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {/* Row 1 */}
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                          <td className="px-6 py-4 text-primary-500 dark:text-gray-300 text-sm font-medium">
                            Oct 12, 2023
                          </td>
                          <td className="px-6 py-4 text-primary-500 dark:text-gray-300 text-sm font-medium">
                            INV-1092-A
                          </td>
                          <td className="px-6 py-4 text-primary-500/60 dark:text-gray-400 text-sm">
                            Pro Monthly Plan Subscription
                          </td>
                          <td className="px-6 py-4 text-primary-500 dark:text-white text-sm font-bold">
                            ₦15,000
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                              <Circle className="w-1 h-1 rounded-full bg-green-600" />
                              Paid
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-primary-500 dark:text-gray-300 hover:text-primary-500/70 flex items-center gap-1 ml-auto text-sm font-bold">
                              <FileText className="w-5 h-5" />
                              PDF
                            </button>
                          </td>
                        </tr>
                        {/* Row 2 */}
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                          <td className="px-6 py-4 text-primary-500 dark:text-gray-300 text-sm font-medium">
                            Sep 12, 2023
                          </td>
                          <td className="px-6 py-4 text-primary-500 dark:text-gray-300 text-sm font-medium">
                            INV-1045-B
                          </td>
                          <td className="px-6 py-4 text-primary-500/60 dark:text-gray-400 text-sm">
                            Pro Monthly Plan Subscription
                          </td>
                          <td className="px-6 py-4 text-primary-500 dark:text-white text-sm font-bold">
                            ₦15,000
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                              <Circle className="w-1 h-1 rounded-full bg-green-600" />
                              Paid
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-primary-500 dark:text-gray-300 hover:text-primary-500/70 flex items-center gap-1 ml-auto text-sm font-bold">
                              <FileText className="w-5 h-5" />
                              PDF
                            </button>
                          </td>
                        </tr>
                        {/* Row 3 */}
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                          <td className="px-6 py-4 text-primary-500 dark:text-gray-300 text-sm font-medium">
                            Aug 15, 2023
                          </td>
                          <td className="px-6 py-4 text-primary-500 dark:text-gray-300 text-sm font-medium">
                            INV-0988-C
                          </td>
                          <td className="px-6 py-4 text-primary-500/60 dark:text-gray-400 text-sm">
                            One-time Tax Audit Assistance
                          </td>
                          <td className="px-6 py-4 text-primary-500 dark:text-white text-sm font-bold">
                            ₦25,000
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400">
                              <Circle className="w-1 h-1 rounded-full bg-yellow-600" />
                              Pending
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-primary-500 dark:text-gray-300 hover:text-primary-500/70 flex items-center gap-1 ml-auto text-sm font-bold">
                              <Receipt className="w-5 h-5" />
                              View
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Invoice Preview (Mock Modal State) */}
                <div className="mt-12 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-10 shadow-lg max-w-4xl mx-auto hidden lg:block border-t-8 border-t-primary-500">
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <div className="flex items-center gap-2 text-primary-500 dark:text-white mb-4">
                        <div className="size-6">
                          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                            <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                          </svg>
                        </div>
                        <span className="text-xl font-black">MAVEN TAX SERVICES</span>
                      </div>
                      <div className="text-sm text-primary-500/60 dark:text-gray-400 space-y-1">
                        <p>12 Victoria Island Road</p>
                        <p>Lagos, Nigeria</p>
                        <p>RC 1029384</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h2 className="text-3xl font-black text-primary-500 dark:text-white mb-2">INVOICE</h2>
                      <p className="text-sm text-primary-500/60 dark:text-gray-400 font-bold uppercase">#INV-1092-A</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8 mb-12 border-b border-gray-100 dark:border-gray-800 pb-8">
                    <div>
                      <h4 className="text-xs font-black text-primary-500/40 dark:text-gray-500 uppercase tracking-widest mb-2">
                        Billed To
                      </h4>
                      <div className="text-sm text-primary-500 dark:text-gray-300 font-bold">
                        <p>Jane Doe Ventures Ltd.</p>
                        <p className="font-normal opacity-70">jane@example.com</p>
                        <p className="font-normal opacity-70">Lagos, Nigeria</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="text-xs font-black text-primary-500/40 dark:text-gray-500 uppercase tracking-widest mb-2">
                        Date Issued
                      </h4>
                      <p className="text-sm text-primary-500 dark:text-gray-300 font-bold">October 12, 2023</p>
                      <h4 className="text-xs font-black text-primary-500/40 dark:text-gray-500 uppercase tracking-widest mb-2 mt-4">
                        Due Date
                      </h4>
                      <p className="text-sm text-primary-500 dark:text-gray-300 font-bold">Upon Receipt</p>
                    </div>
                  </div>
                  <table className="w-full mb-8">
                    <thead>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <th className="py-3 text-left text-xs font-black text-primary-500/40 dark:text-gray-500 uppercase">
                          Service Description
                        </th>
                        <th className="py-3 text-right text-xs font-black text-primary-500/40 dark:text-gray-500 uppercase">
                          Rate
                        </th>
                        <th className="py-3 text-right text-xs font-black text-primary-500/40 dark:text-gray-500 uppercase">
                          Qty
                        </th>
                        <th className="py-3 text-right text-xs font-black text-primary-500/40 dark:text-gray-500 uppercase">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
                      <tr>
                        <td className="py-4 text-sm font-bold text-primary-500 dark:text-gray-300">
                          Maven Pro Monthly Subscription
                        </td>
                        <td className="py-4 text-right text-sm text-primary-500/70 dark:text-gray-400">₦13,953.49</td>
                        <td className="py-4 text-right text-sm text-primary-500/70 dark:text-gray-400">1</td>
                        <td className="py-4 text-right text-sm font-bold text-primary-500 dark:text-white">
                          ₦13,953.49
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex flex-col items-end gap-2 border-t border-gray-100 dark:border-gray-800 pt-6">
                    <div className="flex justify-between w-64 text-sm">
                      <span className="text-primary-500/60 dark:text-gray-400">Subtotal</span>
                      <span className="text-primary-500 dark:text-white font-medium">₦13,953.49</span>
                    </div>
                    <div className="flex justify-between w-64 text-sm">
                      <span className="text-primary-500/60 dark:text-gray-400">VAT (7.5%)</span>
                      <span className="text-primary-500 dark:text-white font-medium">₦1,046.51</span>
                    </div>
                    <div className="flex justify-between w-64 text-xl font-black mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <span className="text-primary-500 dark:text-white">Total</span>
                      <span className="text-primary-500 dark:text-white">₦15,000.00</span>
                    </div>
                  </div>
                  <div className="mt-12 bg-gray-50 dark:bg-gray-800/30 p-6 rounded-lg text-center">
                    <p className="text-xs text-primary-500/40 dark:text-gray-500 uppercase font-black tracking-widest mb-1">
                      Secure Payment Confirmation
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400 font-bold">
                      Paid via Flutterwave (TXN_092384729)
                    </p>
                  </div>
                </div>
              </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-200 dark:border-gray-800 py-10 px-10 bg-white dark:bg-background-dark">
              <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 opacity-60">
                  <span className="text-sm text-primary-500 dark:text-gray-400">
                    © 2023 Maven Tax Services. Secure Financial Infrastructure.
                  </span>
                </div>
                <div className="flex gap-6">
                  <a className="text-sm font-medium text-primary-500/60 hover:text-primary-500 dark:text-gray-400 dark:hover:text-white transition-colors" href="#">
                    Security
                  </a>
                  <a className="text-sm font-medium text-primary-500/60 hover:text-primary-500 dark:text-gray-400 dark:hover:text-white transition-colors" href="#">
                    Privacy Policy
                  </a>
                  <a className="text-sm font-medium text-primary-500/60 hover:text-primary-500 dark:text-gray-400 dark:hover:text-white transition-colors" href="#">
                    Terms of Service
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MavenPricing;