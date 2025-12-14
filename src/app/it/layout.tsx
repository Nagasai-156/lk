'use client';

import {
    LayoutDashboard,
    FileText,
    Package,
    Settings,
    LogOut
} from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ITLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState('dashboard');

    useEffect(() => {
        if (pathname.includes('/it/requests')) setActiveTab('requests');
        else if (pathname.includes('/it/assets')) setActiveTab('assets');
        else if (pathname.includes('/it/settings')) setActiveTab('settings');
        else setActiveTab('dashboard');
    }, [pathname]);

    const handleNav = (path: string, tab: string) => {
        setActiveTab(tab);
        router.push(path);
    };

    const handleLogout = () => {
        router.push('/');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#F8FAFC' }}>
            {/* Sidebar */}
            <aside style={{
                width: '280px',
                background: '#FFFFFF',
                borderRight: '1px solid #E0E5F2',
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                height: '100vh',
                zIndex: 50
            }}>
                {/* Logo */}
                <div style={{ padding: '1.5rem', background: '#FF1744', color: 'white' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ background: 'white', borderRadius: '8px', padding: '6px', color: '#FF1744' }}>
                            <Package size={20} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1rem', fontWeight: 800, lineHeight: 1 }}>IT Portal</h2>
                            <p style={{ fontSize: '0.7rem', opacity: 0.8 }}>IT Administration</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav style={{ flex: 1, padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <NavItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => handleNav('/it', 'dashboard')} />
                    <NavItem icon={FileText} label="IT Requests" active={activeTab === 'requests'} onClick={() => handleNav('/it/requests', 'requests')} />
                    <NavItem icon={Package} label="Asset Management" active={activeTab === 'assets'} onClick={() => handleNav('/it/assets', 'assets')} />
                    <NavItem icon={Settings} label="Settings" active={activeTab === 'settings'} onClick={() => handleNav('/it/settings', 'settings')} />
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
                            background: '#E0E5F2',
                            color: '#1B2559',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.875rem',
                            fontWeight: 700
                        }}>IT</div>
                        <div style={{ flex: 1, overflow: 'hidden' }}>
                            <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1B2559' }}>IT Admin</p>
                            <p style={{ fontSize: '0.75rem', color: '#A3AED0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>it.admin@company.com</p>
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
                            color: '#4A5568',
                            background: '#F4F7FE',
                            border: '1px solid #E0E5F2',
                            padding: '0.75rem',
                            borderRadius: '8px',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                        }}>
                        <LogOut size={16} /> Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ marginLeft: '280px', flex: 1, padding: '2rem', maxWidth: 'calc(100vw - 280px)' }}>
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
                background: active ? '#FFEBEE' : 'transparent',
                color: active ? '#FF1744' : '#A3AED0',
                transition: 'all 0.2s',
                fontWeight: active ? 600 : 500,
                position: 'relative'
            }}>
            <Icon size={20} style={{ marginRight: '0.75rem', color: active ? '#FF1744' : '#A3AED0' }} />
            <span style={{ fontSize: '0.9rem' }}>{label}</span>
            {active && <div style={{
                position: 'absolute',
                left: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '4px',
                height: '24px',
                background: '#FF1744',
                borderTopRightRadius: '4px',
                borderBottomRightRadius: '4px'
            }}></div>}
        </div>
    );
}
