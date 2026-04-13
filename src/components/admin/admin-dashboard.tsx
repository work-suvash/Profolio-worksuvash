'use client';

import { useState } from 'react';
import { MessageSquare, User, Layers, Info, FolderOpen, LogOut, ChevronRight, LayoutDashboard } from 'lucide-react';
import MessagesTab from './messages-tab';
import HeroTab from './hero-tab';
import ServicesTab from './services-tab';
import AboutTab from './about-tab';
import ProjectsTab from './projects-tab';
import DashboardTab from './dashboard-tab';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
  { id: 'hero', label: 'Hero & Profile', icon: User },
  { id: 'services', label: 'Services', icon: Layers },
  { id: 'about', label: 'About', icon: Info },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
];

export default function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background flex">
      <aside className="w-16 md:w-64 bg-card border-r border-border/50 flex flex-col shrink-0 sticky top-0 h-screen">
        <div className="p-4 border-b border-border/50 flex items-center gap-3">
          <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-red-500 shrink-0">WS</div>
          <div className="hidden md:block">
            <p className="text-sm font-bold text-foreground leading-tight">Admin Panel</p>
            <p className="text-xs text-muted-foreground">Portfolio Manager</p>
          </div>
        </div>

        <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-medium group ${
                  active
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="hidden md:block flex-1 text-left">{tab.label}</span>
                {active && <ChevronRight className="h-4 w-4 hidden md:block shrink-0" />}
              </button>
            );
          })}
        </nav>

        <div className="p-2 border-t border-border/50">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors text-sm font-medium"
          >
            <LogOut className="h-5 w-5 shrink-0" />
            <span className="hidden md:block">Logout</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto min-h-screen">
        {activeTab === 'dashboard' && <DashboardTab />}
        {activeTab === 'messages' && <MessagesTab />}
        {activeTab === 'hero' && <HeroTab />}
        {activeTab === 'services' && <ServicesTab />}
        {activeTab === 'about' && <AboutTab />}
        {activeTab === 'projects' && <ProjectsTab />}
      </main>
    </div>
  );
}
