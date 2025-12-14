'use client';

import {
    LayoutDashboard,
    FileText,
    Upload,
    User,
    Shield,
    Monitor,
    LogOut
} from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CandidateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState('dashboard');

    useEffect(() => {
        if (pathname.includes('/candidate/accept-offer')) setActiveTab('accept-offer');
        else if (pathname.includes('/candidate/upload-documents')) setActiveTab('upload-documents');
        else if (pathname.includes('/candidate/personal-info')) setActiveTab('personal-info');
        else if (pathname.includes('/candidate/policies')) setActiveTab('policies');
        else if (pathname.includes('/candidate/device-receipt')) setActiveTab('device-receipt');
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

            {/* Sidebar - Fixed width */}
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
                {/* Logo Area */}
                <div style={{ padding: '1.5rem', background: '#0066FF', color: 'white' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ background: 'white', borderRadius: '8px', padding: '6px', color: '#0066FF' }}>
                            <FileText size={20} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1rem', fontWeight: 800, lineHeight: 1 }}>Candidate Portal</h2>
                            <p style={{ fontSize: '0.7rem', opacity: 0.8 }}>Onboarding</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav style={{ flex: 1, padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <NavItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => handleNav('/candidate', 'dashboard')} />
                    <NavItem icon={FileText} label="Accept Offer" active={activeTab === 'accept-offer'} onClick={() => handleNav('/candidate/accept-offer', 'accept-offer')} />
                    <NavItem icon={Upload} label="Upload Documents" active={activeTab === 'upload-documents'} onClick={() => handleNav('/candidate/upload-documents', 'upload-documents')} />
                    <NavItem icon={User} label="Personal Information" active={activeTab === 'personal-info'} onClick={() => handleNav('/candidate/personal-info', 'personal-info')} />
                    <NavItem icon={Shield} label="Policy Acceptance" active={activeTab === 'policies'} onClick={() => handleNav('/candidate/policies', 'policies')} />
                    <NavItem icon={Monitor} label="Device Receipt" active={activeTab === 'device-receipt'} onClick={() => handleNav('/candidate/device-receipt', 'device-receipt')} />
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
                        }}>JD</div>
                        <div style={{ flex: 1, overflow: 'hidden' }}>
                            <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1B2559' }}>John Doe</p>
                            <p style={{ fontSize: '0.75rem', color: '#A3AED0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>candidate@company.com</p>
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
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}>
                        <LogOut size={16} /> Logout
                    </button>
                </div>
            </aside>

            {/* Main Content Area Container */}
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
                background: active ? '#E3F2FD' : 'transparent',
                color: active ? '#0066FF' : '#A3AED0',
                transition: 'all 0.2s',
                fontWeight: active ? 600 : 500,
                position: 'relative'
            }}>
            <Icon size={20} style={{ marginRight: '0.75rem', color: active ? '#0066FF' : '#A3AED0' }} />
            <span style={{ fontSize: '0.9rem' }}>{label}</span>
            {active && <div style={{
                position: 'absolute',
                left: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '4px',
                height: '24px',
                background: '#0066FF',
                borderTopRightRadius: '4px',
                borderBottomRightRadius: '4px'
            }}></div>}
        </div>
    );
}
