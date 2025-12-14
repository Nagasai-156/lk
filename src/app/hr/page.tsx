'use client';

import {
    Users,
    FileText,
    CheckSquare,
    Calendar,
    Search,
    Bell,
    ChevronRight,
    Eye,
    Clock,
    CheckCircle,
    AlertCircle,
    FileCheck
} from 'lucide-react';
import React from 'react';

import { DashboardHeader } from './components/DashboardHeader';

export default function HRDashboard() {
    const stats = [
        { label: 'Total Candidates', value: '5', sub: 'Active onboarding', color: '#0066FF', icon: Users },
        { label: 'Pending Verification', value: '1', sub: 'Requires attention', color: '#FFAB00', icon: Clock },
        { label: 'Completed', value: '1', sub: 'Successfully onboarded', color: '#00C853', icon: CheckCircle },
        { label: 'Pending Tasks', value: '3', sub: 'Action required', color: '#FF1744', icon: AlertCircle }
    ];

    const recentCandidates = [
        { id: 1, name: 'Rahul Sharma', role: 'Senior Software Engineer', date: 'Joining: Dec 15, 2025', status: 'Pending Verification', color: '#FFAB00', initials: 'RS' },
        { id: 2, name: 'Priya Patel', role: 'Product Manager', date: 'Joining: Dec 10, 2025', status: 'Orientation Scheduled', color: '#0066FF', initials: 'PP' },
        { id: 3, name: 'Amit Kumar', role: 'UI/UX Designer', date: 'Joining: Dec 20, 2025', status: 'Documents Verified', color: '#00C853', initials: 'AK' },
        { id: 4, name: 'Sneha Reddy', role: 'Marketing Manager', date: 'Joining: Nov 30, 2025', status: 'Onboarding Complete', color: '#2b3674', initials: 'SR' },
        { id: 5, name: 'Vikram Singh', role: 'Software Engineer', date: 'Joining: Dec 18, 2025', status: 'IT Setup Pending', color: '#FF1744', initials: 'VS' },
    ];

    const activities = [
        { type: 'completed', title: 'Task Completed', desc: 'IT Setup - Laptop & Access completed', sub: 'Candidate: Priya Patel', date: 'Dec 4, 2025', icon: CheckCircle, color: '#00C853' },
        { type: 'info', title: 'Document Verified', desc: 'Bank Details verified successfully', sub: 'Candidate: Amit Kumar', date: 'Dec 3, 2025', icon: FileCheck, color: '#0066FF' },
        { type: 'info', title: 'Documents Uploaded', desc: 'Educational Certificates uploaded', sub: 'Candidate: Rahul Sharma', date: 'Dec 3, 2025', icon: FileText, color: '#0066FF' },
        { type: 'action', title: 'Task Started', desc: 'IT Setup - System Access in progress', sub: 'Candidate: Vikram Singh', date: 'Dec 3, 2025', icon: Clock, color: '#00C853' },
        { type: 'event', title: 'Orientation Scheduled', desc: 'Orientation scheduled for Dec 9, 2025 at 10:00 AM', sub: 'Candidate: Priya Patel', date: 'Dec 2, 2025', icon: Calendar, color: '#FF1744' },
    ];

    return (
        <>
            <DashboardHeader />

            {/* Dashboard Title & Welcome */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>Dashboard</h1>
                <p style={{ color: '#A3AED0' }}>Welcome back! Here&apos;s an overview of your onboarding pipeline.</p>
            </div>

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {stats.map((stat, i) => (
                    <div key={i} className="glass-panel" style={{
                        padding: '1.5rem',
                        background: stat.color,
                        color: 'white',
                        borderRadius: '16px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>{stat.label}</p>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>{stat.value}</h3>
                            <p style={{ fontSize: '0.75rem', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                <stat.icon size={12} /> {stat.sub}
                            </p>
                        </div>
                        <div style={{
                            position: 'absolute',
                            right: '1rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255,255,255,0.2)',
                            borderRadius: '12px',
                            padding: '0.75rem'
                        }}>
                            <stat.icon size={24} color="white" />
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '2rem' }}>
                {/* Left Column (Candidates List) */}
                <div style={{ flex: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#2B3674' }}>Recent Candidates</h3>
                        <button style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#0066FF',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}>
                            View All <ChevronRight size={16} />
                        </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                        {recentCandidates.map((c) => (
                            <div key={c.id} className="glass-panel" style={{
                                padding: '1.25rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                background: 'white'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        background: c.color,
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 700,
                                        fontSize: '1rem'
                                    }}>
                                        {c.initials}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674' }}>{c.name}</h4>
                                        <p style={{ fontSize: '0.875rem', color: '#A3AED0' }}>{c.role}</p>
                                        <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>{c.date}</p>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{
                                        display: 'inline-block',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '20px',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        color: '#2B3674',
                                        background: '#F4F7FE'
                                    }}>
                                        {c.status}
                                    </span>
                                    <div style={{ marginTop: '0.5rem' }}>
                                        <Eye size={18} color="#A3AED0" style={{ cursor: 'pointer' }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Activity Feed */}
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#2B3674', marginBottom: '1.5rem' }}>Recent Activity</h3>
                    <div style={{ background: 'white', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 4px 20px 0 rgba(0,0,0,0.05)' }}>
                        {activities.map((act, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                gap: '1rem',
                                marginBottom: i === activities.length - 1 ? 0 : '1.5rem',
                                position: 'relative'
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{
                                        background: `${act.color}20`,
                                        padding: '8px',
                                        borderRadius: '50%',
                                        color: act.color
                                    }}>
                                        <act.icon size={16} />
                                    </div>
                                    {i !== activities.length - 1 && (
                                        <div style={{ width: '2px', background: '#E0E5F2', flex: 1, marginTop: '0.5rem' }}></div>
                                    )}
                                </div>
                                <div style={{ paddingBottom: '1rem', flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                        <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#2B3674' }}>{act.title}</h5>
                                        <span style={{ fontSize: '0.75rem', color: '#A3AED0' }}>{act.date}</span>
                                    </div>
                                    <p style={{ fontSize: '0.875rem', color: '#4A5568', marginBottom: '0.25rem' }}>{act.desc}</p>
                                    <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>{act.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column (Actions & Widgets) */}
                <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#2B3674', marginBottom: '1.5rem' }}>Quick Actions</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                        <button className="btn-outline" style={quickBtnStyle}>
                            <FileText size={18} /> Review Documents (3)
                        </button>
                        <button className="btn-outline" style={quickBtnStyle}>
                            <CheckSquare size={18} /> View Pending Tasks (3)
                        </button>
                        <button className="btn-outline" style={quickBtnStyle}>
                            <Calendar size={18} /> Schedule Orientation
                        </button>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#2B3674', marginBottom: '1.5rem' }}>Upcoming Orientations</h3>
                    <div style={{ background: '#E3F2FD', borderRadius: '16px', padding: '1.5rem', border: '1px solid #BBDEFB' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{
                                background: '#0066FF',
                                color: 'white',
                                borderRadius: '12px',
                                width: '48px',
                                height: '48px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Calendar size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1B2559' }}>Priya Patel</h4>
                                <p style={{ fontSize: '0.875rem', color: '#4A5568', marginBottom: '0.25rem' }}>Dec 9, 2025 at 10:00</p>
                                <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>Conference Room A</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const quickBtnStyle = {
    background: 'white',
    border: '1px solid #0066FF',
    color: '#0066FF',
    padding: '1rem',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontWeight: 600,
    cursor: 'pointer',
    width: '100%',
    transition: 'all 0.2s'
} as const;
