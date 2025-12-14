'use client';

import {
    Briefcase,
    Monitor,
    Users,
    CheckCircle,
    Clock,
    TrendingUp
} from 'lucide-react';

export default function TeamsOverview() {

    const hrActivities = [
        { action: 'Background verification completed for Priya Patel', time: '15 mins ago' },
        { action: 'Offer letter sent to Amit Singh', time: '1 hour ago' },
        { action: 'Interview scheduled for Sarah Johnson', time: '2 hours ago' },
        { action: 'Document review completed for Rahul Verma', time: '3 hours ago' }
    ];

    const itActivities = [
        { action: 'Laptop allocated to Rohit Kumar', time: '30 mins ago' },
        { action: 'Email account created for Rahul Verma', time: '2 hours ago' },
        { action: 'VPN access granted to Priya Patel', time: '3 hours ago' },
        { action: 'Software installed for Amit Singh', time: '4 hours ago' }
    ];

    const candidateStatuses = [
        { label: 'Pending Offer Acceptance', count: 5, color: '#FFAB00', bg: '#FFF8E1' },
        { label: 'Document Upload', count: 3, color: '#0066FF', bg: '#E3F2FD' },
        { label: 'IT Provisioning', count: 5, color: '#9C27B0', bg: '#F3E5F5' },
        { label: 'Completed Onboarding', count: 12, color: '#00C853', bg: '#E8F5E9' }
    ];

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>Teams Overview</h1>
                <p style={{ color: '#A3AED0' }}>Detailed view of all team activities and performance</p>
            </div>

            {/* HR Team Section */}
            <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FFEBEE', color: '#FFAB00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Briefcase size={24} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#2B3674' }}>HR Team</h3>
                            <p style={{ fontSize: '0.875rem', color: '#A3AED0' }}>5 team members</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '0.875rem', color: '#A3AED0', marginBottom: '0.25rem' }}>Completion Rate</p>
                        <h4 style={{ fontSize: '2rem', fontWeight: 700, color: '#00C853' }}>71%</h4>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                    <div style={{ textAlign: 'center', padding: '1.5rem', background: '#F9FAFB', borderRadius: '12px' }}>
                        <h4 style={{ fontSize: '2rem', fontWeight: 700, color: '#2B3674', marginBottom: '0.5rem' }}>45</h4>
                        <p style={{ fontSize: '0.875rem', color: '#A3AED0' }}>Total Tasks</p>
                    </div>
                    <div style={{ textAlign: 'center', padding: '1.5rem', background: '#E8F5E9', borderRadius: '12px' }}>
                        <h4 style={{ fontSize: '2rem', fontWeight: 700, color: '#00C853', marginBottom: '0.5rem' }}>32</h4>
                        <p style={{ fontSize: '0.875rem', color: '#00C853' }}>Completed</p>
                    </div>
                    <div style={{ textAlign: 'center', padding: '1.5rem', background: '#FFF8E1', borderRadius: '12px' }}>
                        <h4 style={{ fontSize: '2rem', fontWeight: 700, color: '#FFAB00', marginBottom: '0.5rem' }}>13</h4>
                        <p style={{ fontSize: '0.875rem', color: '#FFAB00' }}>Pending</p>
                    </div>
                    <div style={{ textAlign: 'center', padding: '1.5rem', background: '#E3F2FD', borderRadius: '12px' }}>
                        <h4 style={{ fontSize: '2rem', fontWeight: 700, color: '#0066FF', marginBottom: '0.5rem' }}>8</h4>
                        <p style={{ fontSize: '0.875rem', color: '#0066FF' }}>Active Candidates</p>
                    </div>
                </div>

                <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674', marginBottom: '1rem' }}>Recent Activities</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {hrActivities.map((activity, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', background: '#FFF8E1', borderRadius: '8px' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#FFAB00', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <CheckCircle size={14} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: '0.875rem', color: '#2B3674' }}>{activity.action}</p>
                                </div>
                                <span style={{ fontSize: '0.75rem', color: '#A3AED0' }}>{activity.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* IT Team Section */}
            <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F3E5F5', color: '#9C27B0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Monitor size={24} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#2B3674' }}>IT Team</h3>
                            <p style={{ fontSize: '0.875rem', color: '#A3AED0' }}>3 team members</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '0.875rem', color: '#A3AED0', marginBottom: '0.25rem' }}>Completion Rate</p>
                        <h4 style={{ fontSize: '2rem', fontWeight: 700, color: '#0066FF' }}>48%</h4>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                    <div style={{ textAlign: 'center', padding: '1.5rem', background: '#FFF8E1', borderRadius: '12px' }}>
                        <h4 style={{ fontSize: '2rem', fontWeight: 700, color: '#FFAB00', marginBottom: '0.5rem' }}>8</h4>
                        <p style={{ fontSize: '0.875rem', color: '#FFAB00' }}>Pending</p>
                    </div>
                    <div style={{ textAlign: 'center', padding: '1.5rem', background: '#E3F2FD', borderRadius: '12px' }}>
                        <h4 style={{ fontSize: '2rem', fontWeight: 700, color: '#0066FF', marginBottom: '0.5rem' }}>5</h4>
                        <p style={{ fontSize: '0.875rem', color: '#0066FF' }}>In Progress</p>
                    </div>
                    <div style={{ textAlign: 'center', padding: '1.5rem', background: '#E8F5E9', borderRadius: '12px' }}>
                        <h4 style={{ fontSize: '2rem', fontWeight: 700, color: '#00C853', marginBottom: '0.5rem' }}>12</h4>
                        <p style={{ fontSize: '0.875rem', color: '#00C853' }}>Completed</p>
                    </div>
                    <div style={{ textAlign: 'center', padding: '1.5rem', background: '#F3E5F5', borderRadius: '12px' }}>
                        <h4 style={{ fontSize: '2rem', fontWeight: 700, color: '#9C27B0', marginBottom: '0.5rem' }}>45</h4>
                        <p style={{ fontSize: '0.875rem', color: '#9C27B0' }}>Available Assets</p>
                    </div>
                </div>

                <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674', marginBottom: '1rem' }}>Recent Activities</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {itActivities.map((activity, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', background: '#F3E5F5', borderRadius: '8px' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#9C27B0', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <CheckCircle size={14} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: '0.875rem', color: '#2B3674' }}>{activity.action}</p>
                                </div>
                                <span style={{ fontSize: '0.75rem', color: '#A3AED0' }}>{activity.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Candidates Overview */}
            <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E3F2FD', color: '#0066FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Users size={24} />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#2B3674' }}>Candidates Overview</h3>
                        <p style={{ fontSize: '0.875rem', color: '#A3AED0' }}>25 total candidates</p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                    <div style={{ textAlign: 'center', padding: '1.5rem', background: '#E3F2FD', borderRadius: '12px' }}>
                        <h4 style={{ fontSize: '2rem', fontWeight: 700, color: '#0066FF', marginBottom: '0.5rem' }}>8</h4>
                        <p style={{ fontSize: '0.875rem', color: '#0066FF' }}>Active</p>
                    </div>
                    <div style={{ textAlign: 'center', padding: '1.5rem', background: '#FFF8E1', borderRadius: '12px' }}>
                        <h4 style={{ fontSize: '2rem', fontWeight: 700, color: '#FFAB00', marginBottom: '0.5rem' }}>5</h4>
                        <p style={{ fontSize: '0.875rem', color: '#FFAB00' }}>Pending</p>
                    </div>
                    <div style={{ textAlign: 'center', padding: '1.5rem', background: '#E8F5E9', borderRadius: '12px' }}>
                        <h4 style={{ fontSize: '2rem', fontWeight: 700, color: '#00C853', marginBottom: '0.5rem' }}>12</h4>
                        <p style={{ fontSize: '0.875rem', color: '#00C853' }}>Completed</p>
                    </div>
                    <div style={{ textAlign: 'center', padding: '1.5rem', background: '#F9FAFB', borderRadius: '12px' }}>
                        <h4 style={{ fontSize: '2rem', fontWeight: 700, color: '#2B3674', marginBottom: '0.5rem' }}>25</h4>
                        <p style={{ fontSize: '0.875rem', color: '#2B3674' }}>Total</p>
                    </div>
                </div>

                <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674', marginBottom: '1rem' }}>Status Breakdown</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {candidateStatuses.map((status, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: status.bg, borderRadius: '8px', border: `1px solid ${status.color}30` }}>
                                <span style={{ fontSize: '0.875rem', color: '#2B3674', fontWeight: 600 }}>{status.label}</span>
                                <span style={{
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '12px',
                                    fontSize: '0.875rem',
                                    fontWeight: 700,
                                    background: 'white',
                                    color: status.color
                                }}>{status.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
