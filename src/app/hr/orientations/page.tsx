'use client';

import {
    Calendar,
    TrendingUp,
    CheckCircle,
    MapPin,
    Clock,
    MoreVertical,
    User,
    Check,
    Plus
} from 'lucide-react';
import { DashboardHeader } from '../components/DashboardHeader';

export default function OrientationsPage() {
    const stats = [
        { label: 'Scheduled', value: '1', sub: 'Scheduled', color: '#0066FF', icon: Calendar, bg: '#E3F2FD' },
        { label: 'Upcoming (7 days)', value: '0', sub: 'Upcoming (7 days)', color: '#FFAB00', icon: TrendingUp, bg: '#FFF8E1' },
        { label: 'Completed', value: '1', sub: 'Completed', color: '#00C853', icon: CheckCircle, bg: '#E8F5E9' }
    ];

    return (
        <div>
            <DashboardHeader />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>Orientations</h1>
                    <p style={{ color: '#A3AED0' }}>Schedule and manage candidate orientations</p>
                </div>
                <button style={{
                    background: '#0066FF',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer'
                }}>
                    <PlusIcon /> Schedule Orientation
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {stats.map((stat, i) => (
                    <div key={i} className="glass-panel" style={{
                        padding: '2rem 1.5rem',
                        background: stat.bg,
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        border: '1px solid transparent' // No border as per image looks flat/clean
                    }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: 'rgba(255,255,255,0.6)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1rem',
                            color: stat.color
                        }}>
                            <stat.icon size={24} />
                        </div>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#2B3674', marginBottom: '0.25rem', lineHeight: 1 }}>{stat.value}</h3>
                        <p style={{ fontSize: '0.75rem', color: '#4A5568' }}>{stat.sub}</p>
                    </div>
                ))}
            </div>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={20} color="#0066FF" /> Upcoming Orientations
            </h3>

            {/* Detailed Card View for Upcoming */}
            <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2', padding: '1.5rem', marginBottom: '2.5rem', maxWidth: '600px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: '#0066FF',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700
                        }}>PP</div>
                        <div>
                            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1B2559' }}>Priya Patel</h4>
                            <p style={{ fontSize: '0.75rem', color: '#A3AED0', marginBottom: '0.25rem' }}>Product Manager</p>
                            <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674' }}>Product</p>
                        </div>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#4A5568' }}>Scheduled</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', background: '#F9FAFB', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <div style={{ width: '36px', height: '36px', background: '#E3F2FD', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0066FF' }}>
                            <Calendar size={18} />
                        </div>
                        <div>
                            <p style={{ fontSize: '0.7rem', color: '#A3AED0' }}>Date</p>
                            <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1B2559' }}>Dec 9, 2025</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <div style={{ width: '36px', height: '36px', background: '#E3F2FD', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0066FF' }}>
                            <Clock size={18} />
                        </div>
                        <div>
                            <p style={{ fontSize: '0.7rem', color: '#A3AED0' }}>Time</p>
                            <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1B2559' }}>10:00 AM</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', gridColumn: 'span 2' }}>
                        <div style={{ width: '36px', height: '36px', background: '#FFF8E1', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFAB00' }}>
                            <MapPin size={18} />
                        </div>
                        <div>
                            <p style={{ fontSize: '0.7rem', color: '#A3AED0' }}>Location</p>
                            <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1B2559' }}>Conference Room A</p>
                        </div>
                    </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#A3AED0', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FileTextIcon /> Agenda
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {['Company Overview', 'Team Introduction', 'Policies & Benefits', 'Q&A Session'].map((item, i) => (
                            <div key={i} style={{ fontSize: '0.75rem', color: '#4A5568', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#0066FF' }}></div>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button style={{
                        flex: 1,
                        background: '#0066FF',
                        color: 'white',
                        border: 'none',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                    }}>
                        <CheckCircle size={16} /> Mark Complete
                    </button>
                    <button style={{
                        background: '#F4F7FE',
                        color: '#2B3674',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '8px',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        cursor: 'pointer'
                    }}>
                        Edit
                    </button>
                </div>
            </div>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={20} color="#00C853" /> Completed Orientations
            </h3>

            <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2', padding: '1.5rem', maxWidth: '600px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: '#00C853',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700
                        }}>SR</div>
                        <div>
                            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1B2559' }}>Sneha Reddy</h4>
                            <p style={{ fontSize: '0.75rem', color: '#A3AED0', marginBottom: '0.25rem' }}>Marketing Manager</p>
                            <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674' }}>Marketing</p>
                        </div>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#4A5568' }}>Completed</span>
                </div>

                <div style={{ display: 'flex', gap: '2rem', fontSize: '0.75rem', color: '#A3AED0', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #F4F7FE' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={14} /> Nov 29, 2025</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={14} /> 2:00 PM</span>
                </div>

                <div style={{ background: '#E8F5E9', padding: '1rem', borderRadius: '12px', border: '1px solid #C8E6C9' }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2E7D32', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <CheckCircle size={14} /> Feedback
                    </p>
                    <p style={{ fontSize: '0.75rem', color: '#1B5E20' }}>Great session, very informative!</p>
                </div>

                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#2B3674', cursor: 'pointer' }}>View Details</span>
                </div>
            </div>

        </div>
    );
}

function PlusIcon() {
    return <Plus size={18} />
}

function FileTextIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
    )
}
