'use client';

import {
    Users,
    CheckCircle,
    FileText,
    Monitor,
    TrendingUp,
    Clock
} from 'lucide-react';

export default function AdminDashboard() {

    const keyMetrics = [
        { label: 'Total Candidates', value: '25', subtext: '8 active in system', icon: Users, color: '#0066FF', bg: '#E3F2FD' },
        { label: 'Onboarding Complete', value: '12', subtext: 'Successfully onboarded', icon: CheckCircle, color: '#00C853', bg: '#E8F5E9' },
        { label: 'Pending HR Tasks', value: '13', subtext: 'out of 45 total', icon: FileText, color: '#FFAB00', bg: '#FFF8E1' },
        { label: 'Pending IT Requests', value: '8', subtext: '5 in progress', icon: Monitor, color: '#0066FF', bg: '#E3F2FD' }
    ];

    const activeCandidates = [
        { name: 'Sneha Sharma', role: 'QA Engineer', department: 'HR', progress: 20, color: '#FFAB00', initials: 'SS', initialsColor: '#FFAB00' },
        { name: 'Priya Patel', role: 'UI/UX Designer', department: 'HR', progress: 65, color: '#0066FF', initials: 'PP', initialsColor: '#0066FF' },
        { name: 'Rohit Kumar', role: 'Frontend Developer', department: 'IT', progress: 80, color: '#0066FF', initials: 'RK', initialsColor: '#0066FF' },
        { name: 'Amit Singh', role: 'DevOps Engineer', department: 'IT', progress: 40, color: '#FFAB00', initials: 'AS', initialsColor: '#FFAB00' },
        { name: 'Rahul Verma', role: 'Backend Developer', department: 'HR', progress: 100, color: '#00C853', initials: 'RV', initialsColor: '#00C853' }
    ];

    const recentActivities = [
        { action: 'Document uploaded by Sneha Sharma', time: '5 mins ago', icon: FileText, color: '#FFAB00', bg: '#FFF8E1' },
        { action: 'Background verification completed for Priya Patel', time: '15 mins ago', icon: CheckCircle, color: '#FFAB00', bg: '#FFF8E1' },
        { action: 'Laptop allocated to Rohit Kumar', time: '30 mins ago', icon: Monitor, color: '#9C27B0', bg: '#F3E5F5' },
        { action: 'Offer letter sent to Amit Singh', time: '1 hour ago', icon: FileText, color: '#FFAB00', bg: '#FFF8E1' },
        { action: 'Email account created for Rahul Verma', time: '2 hours ago', icon: CheckCircle, color: '#9C27B0', bg: '#F3E5F5' }
    ];

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>Admin Dashboard</h1>
                <p style={{ color: '#A3AED0' }}>Overview of all teams and activities</p>
            </div>

            {/* Key Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                {keyMetrics.map((metric, i) => (
                    <div key={i} className="glass-panel" style={{
                        padding: '1.5rem',
                        background: metric.bg,
                        borderRadius: '16px',
                        border: '1px solid transparent'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                background: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: metric.color
                            }}>
                                <metric.icon size={22} />
                            </div>
                        </div>
                        <h3 style={{ fontSize: '2rem', fontWeight: 700, color: metric.color, marginBottom: '0.5rem' }}>{metric.value}</h3>
                        <p style={{ fontSize: '0.875rem', color: '#4A5568', fontWeight: 600, marginBottom: '0.25rem' }}>{metric.label}</p>
                        <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>{metric.subtext}</p>
                    </div>
                ))}
            </div>

            {/* Team Performance Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>

                {/* HR Team Performance */}
                <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674', marginBottom: '1rem' }}>HR Team Performance</h3>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '0.875rem', color: '#4A5568' }}>Task Completion Rate</span>
                            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#00C853' }}>71%</span>
                        </div>
                        <div style={{ width: '100%', height: '8px', background: '#F4F7FE', borderRadius: '4px' }}>
                            <div style={{ width: '71%', height: '100%', background: '#00C853', borderRadius: '4px' }}></div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                        <div style={{ textAlign: 'center', padding: '1rem', background: '#F9FAFB', borderRadius: '12px' }}>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2B3674', marginBottom: '0.25rem' }}>45</h4>
                            <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>Total Tasks</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '1rem', background: '#E8F5E9', borderRadius: '12px' }}>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#00C853', marginBottom: '0.25rem' }}>32</h4>
                            <p style={{ fontSize: '0.75rem', color: '#00C853' }}>Completed</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '1rem', background: '#FFF8E1', borderRadius: '12px' }}>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFAB00', marginBottom: '0.25rem' }}>13</h4>
                            <p style={{ fontSize: '0.75rem', color: '#FFAB00' }}>Pending</p>
                        </div>
                    </div>
                </div>

                {/* IT Team Performance */}
                <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674', marginBottom: '1rem' }}>IT Team Performance</h3>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '0.875rem', color: '#4A5568' }}>Request Fulfillment Rate</span>
                            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0066FF' }}>48%</span>
                        </div>
                        <div style={{ width: '100%', height: '8px', background: '#F4F7FE', borderRadius: '4px' }}>
                            <div style={{ width: '48%', height: '100%', background: '#0066FF', borderRadius: '4px' }}></div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                        <div style={{ textAlign: 'center', padding: '1rem', background: '#FFF8E1', borderRadius: '12px' }}>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFAB00', marginBottom: '0.25rem' }}>8</h4>
                            <p style={{ fontSize: '0.75rem', color: '#FFAB00' }}>Pending</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '1rem', background: '#E3F2FD', borderRadius: '12px' }}>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0066FF', marginBottom: '0.25rem' }}>5</h4>
                            <p style={{ fontSize: '0.75rem', color: '#0066FF' }}>In Progress</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '1rem', background: '#E8F5E9', borderRadius: '12px' }}>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#00C853', marginBottom: '0.25rem' }}>12</h4>
                            <p style={{ fontSize: '0.75rem', color: '#00C853' }}>Completed</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Two Column Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.5rem' }}>

                {/* Active Candidates */}
                <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674', marginBottom: '0.25rem' }}>Active Candidates</h3>
                        <p style={{ fontSize: '0.875rem', color: '#A3AED0' }}>Current onboarding status</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {activeCandidates.map((candidate, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: candidate.initialsColor,
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    fontSize: '0.875rem'
                                }}>{candidate.initials}</div>

                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                        <div>
                                            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#2B3674' }}>{candidate.name}</h4>
                                            <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>{candidate.role}</p>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <span style={{
                                                padding: '0.25rem 0.5rem',
                                                borderRadius: '6px',
                                                fontSize: '0.7rem',
                                                fontWeight: 600,
                                                background: candidate.department === 'HR' ? '#FFEBEE' : '#E3F2FD',
                                                color: candidate.department === 'HR' ? '#FFAB00' : '#0066FF'
                                            }}>{candidate.department}</span>
                                            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: candidate.color }}>{candidate.progress}%</span>
                                        </div>
                                    </div>
                                    <div style={{ width: '100%', height: '6px', background: '#F4F7FE', borderRadius: '3px' }}>
                                        <div style={{ width: `${candidate.progress}%`, height: '100%', background: candidate.color, borderRadius: '3px' }}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activities */}
                <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674', marginBottom: '0.25rem' }}>Recent Activities</h3>
                        <p style={{ fontSize: '0.875rem', color: '#A3AED0' }}>Latest actions across all teams</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {recentActivities.map((activity, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '1rem', padding: '1rem', background: activity.bg, borderRadius: '12px', border: `1px solid ${activity.color}20` }}>
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '8px',
                                    background: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: activity.color
                                }}>
                                    <activity.icon size={16} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: '0.875rem', color: '#2B3674', fontWeight: 500, marginBottom: '0.25rem' }}>{activity.action}</p>
                                    <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
