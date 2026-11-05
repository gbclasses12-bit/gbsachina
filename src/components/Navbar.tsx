import React, { useState } from 'react';
import { Search, Send, ArrowLeft, Menu, X } from 'lucide-react';
import { TELEGRAM_URL, APP_LOGO } from './TelegramModal';

interface NavbarProps {
  currentView: 'home' | 'course' | 'player';
  onNavigateHome: () => void;
  onNavigateBack?: () => void;
  onOpenSearch: () => void;
  onOpenTelegram: () => void;
  courseTitle?: string;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigateHome,
  onNavigateBack,
  onOpenSearch,
  onOpenTelegram,
  selectedCategory,
  onSelectCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Zone 1: Brand / Back Button */}
          <div className="flex items-center gap-3 shrink-0">
            {currentView !== 'home' && (
              <button
                onClick={onNavigateBack || onNavigateHome}
                className="p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                aria-label="Back"
              >
                <ArrowLeft className="w-5 h-5 text-blue-600" />
                <span className="hidden sm:inline">Back</span>
              </button>
            )}

            <button
              onClick={onNavigateHome}
              className="flex items-center gap-3 text-left focus:outline-none group"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-sm ring-2 ring-blue-500/30 group-hover:ring-blue-500 transition-all shrink-0">
                <img
                  src={APP_LOGO}
                  alt="GB STUDY"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent whitespace-nowrap">
                  GB STUDY
                </span>
                <span className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase -mt-1">
                  Online Learning
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory?.('All');
              }}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap ${
                currentView === 'home' && (!selectedCategory || selectedCategory === 'All')
                  ? 'text-blue-600 font-bold border-b-2 border-blue-600 py-1'
                  : ''
              }`}
            >
              All Batches
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory?.('Live Classes');
              }}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                selectedCategory === 'Live Classes' ? 'text-blue-600 font-bold border-b-2 border-blue-600 py-1' : ''
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>Live Classes</span>
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory?.('CTET');
              }}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap ${
                selectedCategory === 'CTET' ? 'text-blue-600 font-bold border-b-2 border-blue-600 py-1' : ''
              }`}
            >
              CTET 2026
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory?.('BPSC TRE');
              }}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap ${
                selectedCategory === 'BPSC TRE' ? 'text-blue-600 font-bold border-b-2 border-blue-600 py-1' : ''
              }`}
            >
              BPSC TRE
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory?.('KVS/NVS');
              }}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap ${
                selectedCategory === 'KVS/NVS' ? 'text-blue-600 font-bold border-b-2 border-blue-600 py-1' : ''
              }`}
            >
              KVS / NVS
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory?.('UP SuperTET');
              }}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap ${
                selectedCategory === 'UP SuperTET' ? 'text-blue-600 font-bold border-b-2 border-blue-600 py-1' : ''
              }`}
            >
              SuperTET
            </button>
          </nav>

          {/* Zone 3: Actions (Search & Telegram CTA) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search batches and lectures"
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-500 hover:text-blue-600 bg-blue-50/50 hover:bg-blue-100/60 border border-blue-200 text-xs font-medium transition-colors"
            >
              <Search className="w-4 h-4 text-blue-600" />
              <span className="hidden lg:inline text-slate-500">Search batches...</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-white rounded-md border border-blue-200 text-slate-400">
                Ctrl+K
              </kbd>
            </button>

            {/* Telegram Button in Vibrant Blue */}
            <button
              onClick={onOpenTelegram}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-sm shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Join Telegram</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-blue-100 bg-white/98 px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top duration-150">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory?.('Live Classes');
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>Live Classes</span>
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory?.('All');
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl bg-blue-50 text-blue-700 text-center"
            >
              All Batches
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory?.('CTET');
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-center"
            >
              CTET 2026
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory?.('BPSC TRE');
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-center"
            >
              BPSC TRE
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory?.('KVS/NVS');
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-center"
            >
              KVS / NVS
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory?.('UP SuperTET');
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-center"
            >
              UP SuperTET
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory?.('State TET');
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-center"
            >
              State TET
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Join GB STUDY on Telegram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
