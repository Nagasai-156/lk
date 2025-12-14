'use client';

import {
    TrendingUp,
    Users,
    Clock,
    CheckCircle,
    Target,
    Calendar
} from 'lucide-react';

export default function AnalyticsPage() {

    const monthlyData = [
        { month: 'Jan', candidates: 8, completed: 6, pending: 2 },
        { month: 'Feb', candidates: 12, completed: 9, pending: 3 },
        { month: 'Mar', candidates: 10, completed: 8, pending: 2 },
        { month: 'Apr', candidates: 15, completed: 11, pending: 4 },
        { month: 'May', candidates: 18, completed: 14, pending: 4 },
        { month: 'Jun', candidates: 20, completed: 16, pending: 4 },
        { month: 'Jul', candidates: 22, completed: 18, pending: 4 },
        { month: 'Aug', candidates: 25, completed: 20, pending: 5 },
        { month: 'Sep', candidates: 28, completed: 22, pending: 6 },
        { month: 'Oct', candidates: 25, completed: 20, pending: 5 }
    ];

    const maxCandidates = Math.max(...monthlyData.map(d => d.candidates));

    const departmentStats = [
        { name: 'Engineering', total: 45, onboarding: 8, completed: 37, rate: 82, color: '#0066FF' },
        { name: 'Sales & Marketing', total: 28, onboarding: 5, completed: 23, rate: 82, color: '#9C27B0' },
        { name: 'Human Resources', total: 15, onboarding: 2, completed: 13, rate: 87, color: '#FFAB00' },
        { name: 'Operations', total: 22, onboarding: 3, completed: 19, rate: 86, color: '#00C853' }
    ];

    const performanceMetrics = [
        { metric: 'Average Time to Onboard', value: '14 days', change: '-5%', trend: 'down', Icon: Clock, color: '#00C853', bg: '#E8F5E9' },
        { metric: 'Completion Rate', value: '85%', change: '+8%', trend: 'up', Icon: CheckCircle, color: '#0066FF', bg: '#E3F2FD' },
        { metric: 'Active Candidates', value: '18', change: '+12%', trend: 'up', Icon: Users, color: '#FFAB00', bg: '#FFF8E1' },
        { metric: 'Monthly Target', value: '92%', change: '+3%', trend: 'up', Icon: Target, color: '#9C27B0', bg: '#F3E5F5' }
    ];

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>Analytics Dashboard</h1>
                <p style={{ color: '#A3AED0' }}>Detailed analytics and insights</p>
            </div>

            {/* Performance Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                {performanceMetrics.map((item, i) => (
                    <div key={i} className="glass-panel" style={{
                        padding: '1.5rem',
                        background: item.bg,
                        borderRadius: '16px',
                        border: '1px solid transparent'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                background: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: item.color
                            }}>
                                <item.Icon size={22} />
                            </div>
                            <span style={{
                                padding: '0.25rem 0.5rem',
                                borderRadius: '6px',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                background: item.trend === 'up' ? '#E8F5E9' : '#FFEBEE',
                                color: item.trend === 'up' ? '#00C853' : '#FF1744'
                            }}>
                                {item.change}
                            </span>
                        </div>
                        <h3 style={{ fontSize: '2rem', fontWeight: 700, color: item.color, marginBottom: '0.5rem' }}>{item.value}</h3>
                        <p style={{ fontSize: '0.875rem', color: '#4A5568', fontWeight: 600 }}>{item.metric}</p>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>

                {/* Monthly Onboarding Trend */}
                <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674', marginBottom: '0.25rem' }}>Monthly Onboarding Trend</h3>
                        <p style={{ fontSize: '0.875rem', color: '#A3AED0' }}>Candidate onboarding over the last 10 months</p>
                    </div>

                    {/* Simple Bar Chart */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '250px', gap: '0.5rem' }}>
                        {monthlyData.map((data, i) => (
                            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
                                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
                                    {/* Completed Bar */}
                                    <div style={{
                                        width: '100%',
                                        height: `${(data.completed / maxCandidates) * 100}%`,
                                        background: '#0066FF',
                                        borderRadius: '4px 4px 0 0',
                                        position: 'relative',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {data.completed > 0 && (
                                            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'white' }}>{data.completed}</span>
                                        )}
                                    </div>
                                    {/* Pending Bar */}
                                    {data.pending > 0 && (
                                        <div style={{
                                            width: '100%',
                                            height: `${(data.pending / maxCandidates) * 100}%`,
                                            background: '#FFAB00',
                                            borderRadius: '4px 4px 0 0',
                                            marginTop: '2px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'white' }}>{data.pending}</span>
                                        </div>
                                    )}
                                </div>
                                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#A3AED0', marginTop: '0.5rem' }}>{data.month}</span>
                            </div>
                        ))}
                    </div>

                    {/* Legend */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#0066FF' }}></div>
                            <span style={{ fontSize: '0.875rem', color: '#4A5568' }}>Completed</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#FFAB00' }}></div>
                            <span style={{ fontSize: '0.875rem', color: '#4A5568' }}>Pending</span>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674', marginBottom: '0.25rem' }}>Quick Stats</h3>
                        <p style={{ fontSize: '0.875rem', color: '#A3AED0' }}>This month overview</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ textAlign: 'center', padding: '1.5rem', background: '#E3F2FD', borderRadius: '12px' }}>
                            <h4 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#0066FF', marginBottom: '0.5rem' }}>25</h4>
                            <p style={{ fontSize: '0.875rem', color: '#0066FF', fontWeight: 600 }}>Total Candidates</p>
                        </div>

                        <div style={{ textAlign: 'center', padding: '1.5rem', background: '#E8F5E9', borderRadius: '12px' }}>
                            <h4 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#00C853', marginBottom: '0.5rem' }}>20</h4>
                            <p style={{ fontSize: '0.875rem', color: '#00C853', fontWeight: 600 }}>Completed</p>
                        </div>

                        <div style={{ textAlign: 'center', padding: '1.5rem', background: '#FFF8E1', borderRadius: '12px' }}>
                            <h4 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FFAB00', marginBottom: '0.5rem' }}>5</h4>
                            <p style={{ fontSize: '0.875rem', color: '#FFAB00', fontWeight: 600 }}>In Progress</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Department-wise Performance */}
            <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674', marginBottom: '0.25rem' }}>Department-wise Performance</h3>
                    <p style={{ fontSize: '0.875rem', color: '#A3AED0' }}>Onboarding statistics by department</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {departmentStats.map((dept, i) => (
                        <div key={i} style={{ padding: '1.5rem', background: '#F9FAFB', borderRadius: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674', marginBottom: '0.25rem' }}>{dept.name}</h4>
                                    <p style={{ fontSize: '0.875rem', color: '#A3AED0' }}>{dept.total} total candidates</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: dept.color }}>{dept.rate}%</h4>
                                    <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>Success Rate</p>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                                <div style={{ padding: '1rem', background: 'white', borderRadius: '8px', textAlign: 'center' }}>
                                    <h5 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFAB00', marginBottom: '0.25rem' }}>{dept.onboarding}</h5>
                                    <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>Onboarding</p>
                                </div>
                                <div style={{ padding: '1rem', background: 'white', borderRadius: '8px', textAlign: 'center' }}>
                                    <h5 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#00C853', marginBottom: '0.25rem' }}>{dept.completed}</h5>
                                    <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>Completed</p>
                                </div>
                            </div>

                            <div style={{ marginTop: '1rem' }}>
                                <div style={{ width: '100%', height: '8px', background: '#E0E5F2', borderRadius: '4px' }}>
                                    <div style={{ width: `${dept.rate}%`, height: '100%', background: dept.color, borderRadius: '4px' }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
