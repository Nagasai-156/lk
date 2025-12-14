'use client';

import {
    LayoutDashboard,
    Users,
    FileText,
    CheckSquare,
    Calendar,
    Settings,
    LogOut
} from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function HRLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState('dashboard');

    useEffect(() => {
        if (pathname.includes('/hr/candidates')) setActiveTab('candidates');
        else if (pathname.includes('/hr/documents')) setActiveTab('documents');
        else if (pathname.includes('/hr/tasks')) setActiveTab('tasks');
        else if (pathname.includes('/hr/orientations')) setActiveTab('orientations');
        else if (pathname.includes('/hr/settings')) setActiveTab('settings');
        else setActiveTab('dashboard');
    }, [pathname]);

    const handleNav = (path: string, tab: string) => {
        setActiveTab(tab);
        if (tab === 'dashboard') router.push('/hr');
        else router.push(`/hr/${tab}`);
    };

    const handleLogout = () => {
        router.push('/');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#F8FAFC' }}>

            {/* Sidebar - Fixed width */}
            <aside style={{
                width: '260px',
                background: '#FFFFFF',
                borderRight: '1px solid #E0E5F2',
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                height: '100vh',
                zIndex: 50
            }}>
                {/* Logo Area */}
                <div style={{ padding: '1.5rem', background: '#0066FF', color: 'white' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ background: 'white', borderRadius: '8px', padding: '6px', color: '#0066FF' }}>
                            <Users size={20} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1rem', fontWeight: 800, lineHeight: 1 }}>HR Portal</h2>
                            <p style={{ fontSize: '0.7rem', opacity: 0.8 }}>Onboarding Management</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav style={{ flex: 1, padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <NavItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => handleNav('/hr', 'dashboard')} />
                    <NavItem icon={Users} label="Candidates" active={activeTab === 'candidates'} onClick={() => handleNav('/hr/candidates', 'candidates')} />
                    <NavItem icon={FileText} label="Documents" active={activeTab === 'documents'} onClick={() => handleNav('/hr/documents', 'documents')} />
                    <NavItem icon={CheckSquare} label="Tasks" active={activeTab === 'tasks'} onClick={() => handleNav('/hr/tasks', 'tasks')} />
                    <NavItem icon={Calendar} label="Orientations" active={activeTab === 'orientations'} onClick={() => handleNav('/hr/orientations', 'orientations')} />
                    <NavItem icon={Settings} label="Settings" active={activeTab === 'settings'} onClick={() => handleNav('/hr/settings', 'settings')} />
                </nav>

                {/* User Profile */}
                <div style={{ padding: '1.5rem', borderTop: '1px solid #E0E5F2' }}>
                    <div style={{
                        background: '#F4F7FE',
                        borderRadius: '12px',
                        padding: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '1rem'
                    }}>
                        <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: '#0066FF',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.875rem',
                            fontWeight: 700
                        }}>HR</div>
                        <div style={{ flex: 1, overflow: 'hidden' }}>
                            <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1B2559' }}>HR Admin</p>
                            <p style={{ fontSize: '0.75rem', color: '#A3AED0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>admin@company.com</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            color: '#FF1744',
                            background: 'transparent',
                            border: 'none',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                        }}>
                        <LogOut size={16} /> Logout
                    </button>
                </div>
            </aside>

            {/* Main Content Area Container from Layout */}
            <main style={{ marginLeft: '260px', flex: 1, padding: '2rem', maxWidth: 'calc(100vw - 260px)' }}>
                {children}
            </main>
        </div>
    );
}

function NavItem({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) {
    return (
        <div
            onClick={onClick}
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                background: active ? '#E3F2FD' : 'transparent',
                color: active ? '#0066FF' : '#A3AED0',
                transition: 'all 0.2s',
                fontWeight: active ? 700 : 500,
                position: 'relative'
            }}>
            <Icon size={20} style={{ marginRight: '0.75rem', color: active ? '#0066FF' : '#A3AED0' }} />
            <span>{label}</span>
            {active && <div style={{
                position: 'absolute',
                right: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '4px',
                height: '24px',
                background: '#0066FF',
                borderTopLeftRadius: '4px',
                borderBottomLeftRadius: '4px'
            }}></div>}
        </div>
    );
}
