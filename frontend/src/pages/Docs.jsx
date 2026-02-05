import React from 'react';
import {
      Wallet, Search, Bell, Settings, Folder, FileText,
      Receipt, Briefcase, Upload, Download, Trash2, RefreshCw,
      ChevronLeft, ChevronRight, Image, X,  Circle, Check
} from 'lucide-react';

const MavenDocumentManager = () => {
  return (
    <div className="light">
      <div className="bg-background-light dark:bg-background-dark font-sans text-custom-text-primary dark:text-white transition-colors duration-200">
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          {/* Header / TopNavBar */}
          <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-custom-border-light dark:border-custom-dark-border bg-background-light dark:bg-background-dark px-10 py-3">
            <div className="flex items-center gap-4 text-primary-500 dark:text-white">
              <div className="size-6 flex items-center justify-center">
                <Wallet className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-tight">
                Maven Document Manager
              </h2>
            </div>
            <div className="flex flex-1 justify-end gap-6 items-center">
              <label className="flex flex-col min-w-40 h-10 max-w-md w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div className="text-custom-text-secondary flex border-none bg-custom-input-bg dark:bg-custom-dark-border items-center justify-center pl-4 rounded-l-lg">
                    <Search className="w-5 h-5" />
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 border-none bg-custom-input-bg dark:bg-custom-dark-border text-custom-text-primary dark:text-white focus:ring-0 focus:outline-none placeholder:text-custom-text-secondary px-4 rounded-r-lg text-sm"
                    placeholder="Search tax documents..."
                    defaultValue=""
                  />
                </div>
              </label>
              <div className="flex gap-2">
                <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-custom-input-bg dark:bg-custom-dark-border text-custom-text-primary dark:text-white hover:bg-custom-hover-bg dark:hover:bg-custom-darker-border">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-custom-input-bg dark:bg-custom-dark-border text-custom-text-primary dark:text-white hover:bg-custom-hover-bg dark:hover:bg-custom-darker-border">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-gray-200"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9FB8-aF3L2n_MuPO8ZO9MOf8LFZ0lHBxRhHbXBYKIBOmUlBUy19yZfAQ1FtiObebe-Y6bS5D-s66tKbjFMqOUJqRxiPE81LRHAYNKku0knlikQ0yHT07GxCtozyxe9E_zjTKLG9qRv9z_roQcOGB-i457IEkiHtM05-fVcUeuGMMN7AEwwHrYllIQQeAdo0IsPc-TH45HTbMzouFQUEZ8ERVOoSzJvyJ1pS1vkMZnjZu4IK-awItpjJyUC0RqfEJFYwD18epT0gI")',
                }}
                alt="User profile avatar"
              ></div>
            </div>
          </header>

          <div className="flex flex-1">
            {/* SideNavBar */}
            <aside className="w-64 flex flex-col border-r border-custom-border-light dark:border-custom-dark-border bg-background-light dark:bg-background-dark p-6 gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <h1 className="text-sm font-bold uppercase tracking-wider text-custom-text-secondary">
                    Filters
                  </h1>
                </div>
                <div className="flex flex-col gap-1">
                  <button className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary-500 text-white">
                    <Folder className="w-5 h-5" />
                    <span className="text-sm font-medium">All Documents</span>
                  </button>
                  <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-custom-text-primary dark:text-gray-300 hover:bg-custom-input-bg dark:hover:bg-custom-dark-border">
                    <Receipt className="w-5 h-5" />
                    <span className="text-sm font-medium">VAT Returns</span>
                  </button>
                  <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-custom-text-primary dark:text-gray-300 hover:bg-custom-input-bg dark:hover:bg-custom-dark-border">
                    <FileText className="w-5 h-5" />
                    <span className="text-sm font-medium">WHT Receipts</span>
                  </button>
                  <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-custom-text-primary dark:text-gray-300 hover:bg-custom-input-bg dark:hover:bg-custom-dark-border">
                    <Briefcase className="w-5 h-5" />
                    <span className="text-sm font-medium">Income Tax</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="text-sm font-bold uppercase tracking-wider text-custom-text-secondary">
                  Time Period
                </h1>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-gray-300 text-primary-500 focus:ring-primary-500 h-4 w-4"
                      type="checkbox"
                    />
                    <span className="text-sm dark:text-gray-300">Last 30 Days</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-gray-300 text-primary-500 focus:ring-primary-500 h-4 w-4"
                      type="checkbox"
                      defaultChecked
                    />
                    <span className="text-sm dark:text-gray-300">2023 Tax Year</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-gray-300 text-primary-500 focus:ring-primary-500 h-4 w-4"
                      type="checkbox"
                    />
                    <span className="text-sm dark:text-gray-300">2024 (Current)</span>
                  </label>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col p-8 gap-8 overflow-y-auto">
              {/* EmptyState / Upload Zone */}
              <div className="flex flex-col bg-white dark:bg-background-dark rounded-xl shadow-sm border border-custom-border-light dark:border-custom-dark-border overflow-hidden">
                <div 
                  className="nigerian-accent"
                  style={{
                    background: 'linear-gradient(90deg, #008751 0%, #008751 33%, #ffffff 33%, #ffffff 66%, #008751 66%, #008751 100%)',
                    height: '4px'
                  }}
                ></div>
                <div className="flex flex-col items-center gap-6 px-6 py-12 border-2 border-dashed border-custom-hover-bg dark:border-custom-darker-border m-4 rounded-lg bg-gray-50/50 dark:bg-white/5">
                  <div className="flex max-w-[520px] flex-col items-center gap-4">
                    <div className="size-16 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 dark:text-white">
                      <Upload className="w-8 h-8" />
                    </div>
                    <div className="text-center">
                      <p className="text-custom-text-primary dark:text-white text-xl font-bold">
                        Drag and drop tax documents here
                      </p>
                      <p className="text-custom-text-secondary text-sm font-normal mt-1">
                        Upload Nigerian VAT, WHT, or Income Tax documents for automated analysis.
                        <br />
                        <span className="text-xs italic opacity-75">
                          PDF, JPG, or PNG supported (Max 10MB)
                        </span>
                      </p>
                    </div>
                  </div>
                  <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-primary-500 text-white text-sm font-bold tracking-wide hover:bg-primary-500/90 transition-all">
                    <span className="truncate">Browse Files</span>
                  </button>
                </div>
              </div>

              {/* Toolbar & Table Container */}
              <div className="flex flex-col bg-white dark:bg-background-dark rounded-xl shadow-sm border border-custom-border-light dark:border-custom-dark-border">
                {/* ToolBar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-custom-border-light dark:border-custom-dark-border">
                  <div className="flex items-center gap-4">
                    <h3 className="text-base font-bold dark:text-white">Recent Documents</h3>
                    <span className="bg-primary-500/10 text-primary-500 dark:bg-primary-500/30 dark:text-white text-xs px-2.5 py-1 rounded-full font-semibold">
                      12 Files
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="p-2 text-custom-text-primary dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      title="Download Selected"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                    <button
                      className="p-2 text-custom-text-primary dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      title="Delete Selected"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <button
                      className="p-2 text-custom-text-primary dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      title="Refresh List"
                    >
                      <RefreshCw className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto overflow-y-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 dark:bg-custom-dark-bg border-b border-custom-border-light dark:border-custom-dark-border">
                      <tr>
                        <th className="px-6 py-4 w-12">
                          <input
                            className="rounded border-gray-300 text-primary-500 focus:ring-primary-500 h-4 w-4"
                            type="checkbox"
                          />
                        </th>
                        <th className="px-6 py-4 text-sm font-bold text-gray-600 dark:text-gray-300">
                          Document Name
                        </th>
                        <th className="px-6 py-4 text-sm font-bold text-gray-600 dark:text-gray-300">
                          Type
                        </th>
                        <th className="px-6 py-4 text-sm font-bold text-gray-600 dark:text-gray-300">
                          Date Uploaded
                        </th>
                        <th className="px-6 py-4 text-sm font-bold text-gray-600 dark:text-gray-300">
                          Status
                        </th>
                        <th className="px-6 py-4 text-sm font-bold text-gray-600 dark:text-gray-300 text-right">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-custom-border-light dark:divide-custom-dark-border">
                      {/* Row 1: Analyzed */}
                      <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-4">
                          <input
                            className="rounded border-gray-300 text-primary-500 focus:ring-primary-500 h-4 w-4"
                            type="checkbox"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-primary-500/60" />
                            <span className="text-sm font-medium dark:text-white">
                              FIRS_Receipt_Jan_2024.pdf
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                            VAT
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                          Oct 12, 2023
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5 text-custom-firs-green">
                            <Circle className="w-2 h-2 fill-current" />
                            <span className="text-xs font-bold uppercase">Analyzed</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-primary-500 hover:underline text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                            View Results
                          </button>
                        </td>
                      </tr>

                      {/* Row 2: Processing */}
                      <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-4">
                          <input
                            className="rounded border-gray-300 text-primary-500 focus:ring-primary-500 h-4 w-4"
                            type="checkbox"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <Image className="w-5 h-5 text-primary-500/60" />
                            <span className="text-sm font-medium dark:text-white">
                              WHT_Cert_Lagos_Store.jpg
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                            WHT
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                          Oct 11, 2023
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5 text-orange-500">
                            <Circle className="w-2 h-2 fill-current animate-pulse" />
                            <span className="text-xs font-bold uppercase">Processing</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-gray-400 text-sm font-bold cursor-not-allowed">
                            Wait...
                          </button>
                        </td>
                      </tr>

                      {/* Row 3: Error */}
                      <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-4">
                          <input
                            className="rounded border-gray-300 text-primary-500 focus:ring-primary-500 h-4 w-4"
                            type="checkbox"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-primary-500/60" />
                            <span className="text-sm font-medium dark:text-white">
                              Tax_Return_Final_Draft.pdf
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                            Income Tax
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                          Oct 10, 2023
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5 text-red-500">
                            <Circle className="w-2 h-2 fill-current" />
                            <span className="text-xs font-bold uppercase">Error</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-red-600 hover:underline text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                            Retry
                          </button>
                        </td>
                      </tr>

                      {/* Row 4: Analyzed */}
                      <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-4">
                          <input
                            className="rounded border-gray-300 text-primary-500 focus:ring-primary-500 h-4 w-4"
                            type="checkbox"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-primary-500/60" />
                            <span className="text-sm font-medium dark:text-white">
                              Company_Audit_2023.docx
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                            Audit
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                          Oct 09, 2023
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5 text-custom-firs-green">
                            <Circle className="w-2 h-2 fill-current" />
                            <span className="text-xs font-bold uppercase">Analyzed</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-primary-500 hover:underline text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                            View Results
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pagination / Footer */}
                <div className="flex items-center justify-between px-6 py-4 bg-gray-50 dark:bg-custom-dark-bg border-t border-custom-border-light dark:border-custom-dark-border rounded-b-xl">
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Showing 4 of 12 results
                  </span>
                  <div className="flex gap-2">
                    <button className="flex items-center justify-center rounded border border-custom-hover-bg dark:border-custom-darker-border h-8 w-8 bg-white dark:bg-background-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="flex items-center justify-center rounded border border-custom-hover-bg dark:border-custom-darker-border h-8 w-8 bg-white dark:bg-background-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Floating Batch Action Toast (Hidden by default, concept only) */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-primary-500 text-white px-6 py-3 rounded-full shadow-2xl z-50 invisible opacity-0">
          <span className="text-sm font-medium">3 documents selected</span>
          <div className="h-6 w-px bg-white/20"></div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm font-bold">
              <Download className="w-4 h-4" /> Download
            </button>
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm font-bold text-red-300">
              <Trash2 className="w-4 h-4" /> Delete
            </button>
          </div>
          <button className="hover:bg-white/10 rounded-full p-1 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MavenDocumentManager;