import React from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import {
  Scale, Search, Bell, Settings, FileText, Briefcase,
  User, Upload, Printer, Share, Mic, Send, Paperclip,
  History, Bookmark, BarChart3, MessageSquare,
  ChevronDown, Gavel, Lightbulb, MoreHorizontal,
  CheckCircle, Circle
} from 'lucide-react';

const MavenAIChat = () => {
  return (
    <div className="light">
      <div className="bg-background-light dark:bg-background-dark text-custom-text-primary dark:text-white h-screen flex flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-custom-border-light dark:border-gray-700 bg-white dark:bg-custom-dark-bg px-6 py-3 h-16 shrink-0">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="size-8 bg-primary-500 rounded flex items-center justify-center text-white">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="text-custom-text-primary dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                Maven AI
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a className="text-primary-500 text-sm font-semibold leading-normal border-b-2 border-primary-500 pb-1" href="#">
                Consultation
              </a>
              <a className="text-custom-text-secondary dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary-500" href="#">
                Tax Library
              </a>
              <a className="text-custom-text-secondary dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary-500" href="#">
                Analytics
              </a>
            </div>
          </div>
          <div className="flex flex-1 justify-end gap-4 items-center">
            <label className="flex flex-col min-w-40 h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-custom-text-secondary flex border-none bg-background-light dark:bg-gray-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-custom-text-primary dark:text-white focus:outline-0 focus:ring-0 border-none bg-background-light dark:bg-gray-800 focus:border-none h-full placeholder:text-custom-text-secondary px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal"
                  placeholder="Search regulations..."
                  defaultValue=""
                />
              </div>
            </label>
            <div className="flex gap-2">
              <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-background-light dark:bg-gray-800 text-custom-text-primary dark:text-white border border-transparent hover:border-gray-300">
                <Bell className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-background-light dark:bg-gray-800 text-custom-text-primary dark:text-white border border-transparent hover:border-gray-300">
                <Settings className="w-5 h-5" />
              </button>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary-500/20"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFjWbDsVDhVcyLyJO0uhMeL8eG4YyYIYYMRC3wBIasiL7jdbNKU8Spg0P9A6fVQ62sxavbYnxJ21F3eBXWeUahsgypZsjv2Ejp_f6bIvvEnPgoRXwyo6ifkl9Pep_uNDL7VUCMYZ31JcbJZn5RSuF4cc7B09UlvDkWHy1ru7q9c2g8G80vyEk1UEh1oFG51ZvauYVMX5SjU5-Qc6kcH8yjNfPUbS3wlNAluuP9Q4IKWEQyjX5y3qBCVz09rH-POwuk6Wk4H-QZJoE")',
              }}
              alt="User profile avatar"
            ></div>
          </div>
        </header>

        <main className="flex flex-1 overflow-hidden">
          {/* Resource Side (40%) */}
          <aside className="w-[40%] flex flex-col border-r border-custom-border-light dark:border-gray-700 bg-white dark:bg-custom-dark-bg overflow-y-auto">
            <div className="p-6 space-y-6">
              <div>
                <h2 className="text-primary-500 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">
                  Tax Resources
                </h2>
                {/* Accordions */}
                <div className="flex flex-col gap-2">
                  <details className="flex flex-col rounded-lg bg-background-light dark:bg-gray-800/50 px-4 py-1 group" open>
                    <summary className="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-primary-500 dark:text-primary-300" />
                        <p className="text-custom-text-primary dark:text-white text-sm font-semibold">
                          VAT (Value Added Tax)
                        </p>
                      </div>
                      <ChevronDown className="w-5 h-5 text-custom-text-secondary group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="pb-3 pl-9 space-y-2">
                      <a className="block text-sm text-custom-text-secondary dark:text-gray-400 hover:text-primary-500" href="#">
                        Article 14: Digital Services
                      </a>
                      <a className="block text-sm text-custom-text-secondary dark:text-gray-400 hover:text-primary-500" href="#">
                        Export Exemptions 2024
                      </a>
                      <a className="block text-sm text-custom-text-secondary dark:text-gray-400 hover:text-primary-500" href="#">
                        Reporting Deadlines
                      </a>
                    </div>
                  </details>

                  <details className="flex flex-col rounded-lg bg-background-light dark:bg-gray-800/50 px-4 py-1 group">
                    <summary className="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                      <div className="flex items-center gap-3">
                        <Briefcase className="w-5 h-5 text-primary-500 dark:text-primary-300" />
                        <p className="text-custom-text-primary dark:text-white text-sm font-semibold">
                          CIT (Corporate Income Tax)
                        </p>
                      </div>
                      <ChevronDown className="w-5 h-5 text-custom-text-secondary group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="pb-3 pl-9">
                      <p className="text-sm text-custom-text-secondary dark:text-gray-400">
                        Corporate tax filings and deductions.
                      </p>
                    </div>
                  </details>

                  <details className="flex flex-col rounded-lg bg-background-light dark:bg-gray-800/50 px-4 py-1 group">
                    <summary className="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                      <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-primary-500 dark:text-primary-300" />
                        <p className="text-custom-text-primary dark:text-white text-sm font-semibold">
                          PITA (Personal Income Tax Act)
                        </p>
                      </div>
                      <ChevronDown className="w-5 h-5 text-custom-text-secondary group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="pb-3 pl-9">
                      <p className="text-sm text-custom-text-secondary dark:text-gray-400">
                        Individual income and capital gains.
                      </p>
                    </div>
                  </details>
                </div>
              </div>

              {/* Document Upload Dropzone */}
              <div className="flex flex-col">
                <div className="flex flex-col items-center gap-4 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-background-light/50 dark:bg-gray-800/30 px-6 py-8 hover:bg-white dark:hover:bg-gray-800 transition-colors">
                  <div className="size-12 bg-primary-500/10 text-primary-500 rounded-full flex items-center justify-center">
                    <Upload className="w-6 h-6" />
                  </div>
                  <div className="flex max-w-[320px] flex-col items-center gap-1">
                    <p className="text-custom-text-primary dark:text-white text-base font-bold text-center">
                      Analyze Documents
                    </p>
                    <p className="text-custom-text-secondary dark:text-gray-400 text-xs font-normal text-center">
                      Drag and drop tax files (PDF, XLSX) for Maven AI to audit.
                    </p>
                  </div>
                  <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary-500 text-white text-xs font-bold leading-normal tracking-[0.015em]">
                    Browse Files
                  </button>
                </div>
              </div>

              {/* Compliance Widget */}
              <div className="bg-primary-500/5 dark:bg-primary-500/10 rounded-xl p-5 border border-primary-500/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-primary-500 dark:text-primary-300 font-bold text-sm uppercase tracking-wider">
                    Compliance Status
                  </h3>
                  <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-custom-text-secondary dark:text-gray-300">
                      EU Data Residency
                    </span>
                    <span className="text-xs font-bold text-primary-500">Compliant</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary-500 h-full w-[94%]"></div>
                  </div>
                  <p className="text-[11px] text-custom-text-secondary dark:text-gray-400 leading-relaxed">
                    Your profile is 94% complete for the Q4 Tax Reporting Cycle.{' '}
                    <a className="text-primary-500 underline font-medium" href="#">
                      Finalize now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Chat Window (60%) */}
          <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark relative">
            {/* Chat Header */}
            <div className="px-6 py-4 bg-white dark:bg-custom-dark-bg border-b border-custom-border-light dark:border-gray-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-3 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-bold text-custom-text-primary dark:text-white">
                    Maven AI Consultant
                  </p>
                  <p className="text-[11px] text-custom-text-secondary dark:text-gray-400 font-medium uppercase tracking-tight">
                    Active Consultation #2948
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-custom-text-secondary hover:text-primary-500">
                  <Printer className="w-5 h-5" />
                </button>
                <button className="text-custom-text-secondary hover:text-primary-500">
                  <Share className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="max-w-[80%] bg-primary-500 text-white rounded-xl rounded-tr-none px-4 py-3 shadow-sm">
                  <p className="text-sm leading-relaxed">
                    Could you clarify the VAT treatment for cross-border SaaS subscriptions sold to non-EU businesses?
                  </p>
                  <p className="text-[10px] mt-1 text-primary-200 text-right">10:42 AM</p>
                </div>
              </div>

              {/* AI Message */}
              <div className="flex justify-start gap-3">
                <div className="size-8 rounded bg-primary-500 flex items-center justify-center text-white shrink-0">
                  <Scale className="w-4 h-4" />
                </div>
                <div className="max-w-[85%] space-y-3">
                  <div className="bg-white dark:bg-custom-dark-border border border-custom-border-light dark:border-gray-700 rounded-xl rounded-tl-none px-5 py-4 shadow-sm">
                    <p className="text-sm leading-relaxed text-custom-text-primary dark:text-gray-200">
                      For B2B sales of SaaS to non-EU entities, the transaction is generally <strong>outside the scope</strong> of EU VAT. The "Place of Supply" is where the customer is established.
                    </p>
                    
                    {/* Expandable Legal Section */}
                    <div className="mt-4 space-y-2">
                      <details className="group bg-background-light dark:bg-gray-800 rounded-lg overflow-hidden border border-transparent hover:border-primary-500/20 transition-all">
                        <summary className="flex items-center justify-between px-4 py-2 cursor-pointer list-none">
                          <div className="flex items-center gap-2">
                            <Gavel className="w-4 h-4 text-primary-500" />
                            <span className="text-xs font-bold text-primary-500 dark:text-primary-300">
                              Legal Basis
                            </span>
                          </div>
                          <ChevronDown className="w-4 h-4 text-sm text-primary-500 group-open:rotate-180" />
                        </summary>
                        <div className="px-4 pb-3 pt-1">
                          <p className="text-xs text-custom-text-secondary dark:text-gray-400 italic">
                            Council Directive 2006/112/EC, Article 59. The reverse charge mechanism may apply if the service is used and enjoyed within the EU despite the entity's location.
                          </p>
                        </div>
                      </details>

                      <details className="group bg-background-light dark:bg-gray-800 rounded-lg overflow-hidden border border-transparent hover:border-primary-500/20 transition-all">
                        <summary className="flex items-center justify-between px-4 py-2 cursor-pointer list-none">
                          <div className="flex items-center gap-2">
                            <Lightbulb className="w-4 h-4 text-primary-500" />
                            <span className="text-xs font-bold text-primary-500 dark:text-primary-300">
                              Practical Example
                            </span>
                          </div>
                          <ChevronDown className="w-4 h-4 text-sm text-primary-500 group-open:rotate-180" />
                        </summary>
                        <div className="px-4 pb-3 pt-1">
                          <p className="text-xs text-custom-text-secondary dark:text-gray-400">
                            If a French company sells software access to a US-based firm, no VAT is charged on the invoice. You must obtain proof of the client's business status (e.g., Certificate of Incorporation).
                          </p>
                        </div>
                      </details>
                    </div>
                    <p className="text-[10px] mt-3 text-custom-text-secondary dark:text-gray-400">
                      10:43 AM · Maven AI v4.2
                    </p>
                  </div>
                </div>
              </div>

              {/* Empty State/Analysing indicator */}
              <div className="flex justify-start gap-3 opacity-60">
                <div className="size-8 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 shrink-0">
                  <MoreHorizontal className="w-4 h-4 animate-pulse" />
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2">
                  <p className="text-xs font-medium italic">
                    Maven is analyzing recent CIT legislation updates...
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Input Area */}
            <div className="p-6 bg-white dark:bg-custom-dark-bg border-t border-custom-border-light dark:border-gray-700">
              <div className="flex items-end gap-3 bg-background-light dark:bg-gray-800 rounded-xl p-2 border border-transparent focus-within:border-primary-500/50 transition-all">
                <button className="p-2 text-custom-text-secondary hover:text-primary-500">
                  <Paperclip className="w-5 h-5" />
                </button>
                <textarea
                  className="form-input flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 resize-none placeholder:text-custom-text-secondary"
                  placeholder="Ask Maven about CIT compliance..."
                  rows="1"
                ></textarea>
                <div className="flex gap-1 pb-1 pr-1">
                  <button className="size-9 bg-primary-500 text-white rounded-lg flex items-center justify-center hover:bg-primary-500/90">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <p className="text-[10px] text-center text-custom-text-secondary dark:text-gray-500 mt-3">
                Maven AI can make mistakes. Please verify important legal citations with official tax gazettes.
              </p>
            </div>
          </div>

          {/* History Sidebar Toggle (Far Right) */}
          <aside className="w-12 border-l border-custom-border-light dark:border-gray-700 bg-white dark:bg-custom-dark-bg flex flex-col items-center py-4 gap-6 shrink-0">
            <button className="text-primary-500" title="History">
              <History className="w-5 h-5" />
            </button>
            <button className="text-custom-text-secondary hover:text-primary-500" title="Bookmarked">
              <Bookmark className="w-5 h-5" />
            </button>
            <div className="w-6 h-[1px] bg-custom-border-light dark:bg-gray-700"></div>
            <button className="text-custom-text-secondary hover:text-primary-500" title="Reports">
              <BarChart3 className="w-5 h-5" />
            </button>
            <button className="text-custom-text-secondary hover:text-primary-500" title="Community">
              <MessageSquare className="w-5 h-5" />
            </button>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default MavenAIChat;