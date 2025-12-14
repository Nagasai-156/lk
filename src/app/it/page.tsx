'use client';

import {
    Clock,
    CheckCircle,
    AlertCircle,
    Package,
    Monitor,
    Calendar,
    Briefcase,
    User
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ITDashboard() {
    const router = useRouter();

    const stats = [
        { label: 'Pending', value: '8', color: '#FFAB00', icon: Clock, bg: '#FFF8E1' },
        { label: 'In Progress', value: '5', color: '#0066FF', icon: Monitor, bg: '#E3F2FD' },
        { label: 'Completed', value: '12', color: '#00C853', icon: CheckCircle, bg: '#E8F5E9' },
        { label: 'Available Assets', value: '45', color: '#9C27B0', icon: Package, bg: '#F3E5F5' }
    ];

    const pendingRequests = [
        { id: 1, name: 'Sneha Sharma', position: 'QA Engineer', device: 'Laptop', joining: 'Dec 15, 2024', initials: 'SS' },
        { id: 2, name: 'Priya Patel', position: 'UI/UX Designer', device: 'MacBook Pro', joining: 'Dec 18, 2024', initials: 'PP' }
    ];

    const inProgressRequests = [
        { id: 1, name: 'Rohit Kumar', position: 'Frontend Developer', progress: 60 },
        { id: 2, name: 'Amit Singh', position: 'DevOps Engineer', progress: 40 }
    ];

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>IT Dashboard</h1>
                <p style={{ color: '#A3AED0' }}>Manage IT requests and asset allocation</p>
            </div>

            {/* Overview Stats */}
            <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674', marginBottom: '1.5rem' }}>Overview</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                    {stats.map((stat, i) => (
                        <div key={i} className="glass-panel" style={{
                            padding: '2rem 1.5rem',
                            background: stat.bg,
                            borderRadius: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid transparent'
                        }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: 'white',
                                border: `1px solid ${stat.color}40`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: stat.color,
                                marginBottom: '1rem'
                            }}>
                                <stat.icon size={24} />
                            </div>
                            <h3 style={{ fontSize: '2rem', fontWeight: 700, color: stat.color, lineHeight: 1, marginBottom: '0.5rem' }}>{stat.value}</h3>
                            <p style={{ fontSize: '0.875rem', color: '#4A5568', fontWeight: 500 }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pending Requests */}
            <div style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674' }}>Pending Requests</h3>
                    <span style={{ fontSize: '0.875rem', color: '#A3AED0' }}>{pendingRequests.length} requests</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {pendingRequests.map((request) => (
                        <div key={request.id} className="glass-panel" style={{
                            padding: '1.5rem',
                            background: 'white',
                            borderRadius: '16px',
                            border: '1px solid #E0E5F2',
                            display: 'grid',
                            gridTemplateColumns: '2fr 1.5fr 1fr 1fr 150px',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: '#FFAB00',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    fontSize: '0.875rem'
                                }}>{request.initials}</div>
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: '#A3AED0', marginBottom: '0.25rem' }}>Candidate Name</p>
                                    <p style={{ fontWeight: 700, color: '#2B3674' }}>{request.name}</p>
                                </div>
                            </div>

                            <div>
                                <p style={{ fontSize: '0.75rem', color: '#A3AED0', marginBottom: '0.25rem' }}>Position</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Briefcase size={14} color="#FFAB00" />
                                    <p style={{ fontWeight: 600, color: '#2B3674' }}>{request.position}</p>
                                </div>
                            </div>

                            <div>
                                <p style={{ fontSize: '0.75rem', color: '#A3AED0', marginBottom: '0.25rem' }}>Required Device</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Monitor size={14} color="#FFAB00" />
                                    <p style={{ fontWeight: 600, color: '#2B3674' }}>{request.device}</p>
                                </div>
                            </div>

                            <div>
                                <p style={{ fontSize: '0.75rem', color: '#A3AED0', marginBottom: '0.25rem' }}>Joining Date</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Calendar size={14} color="#FFAB00" />
                                    <p style={{ fontWeight: 600, color: '#2B3674' }}>{request.joining}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => router.push(`/it/requests/${request.id}`)}
                                style={{
                                    background: '#0066FF',
                                    color: 'white',
                                    border: 'none',
                                    padding: '0.75rem 1rem',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    fontSize: '0.875rem',
                                    cursor: 'pointer'
                                }}>
                                Start Processing
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* In Progress */}
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674' }}>In Progress</h3>
                    <span style={{ fontSize: '0.875rem', color: '#A3AED0' }}>{inProgressRequests.length} active</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {inProgressRequests.map((request) => (
                        <div key={request.id} className="glass-panel" style={{
                            padding: '1.5rem',
                            background: 'white',
                            borderRadius: '16px',
                            border: '1px solid #E0E5F2'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674', marginBottom: '0.25rem' }}>{request.name}</h4>
                                    <p style={{ fontSize: '0.875rem', color: '#A3AED0' }}>{request.position}</p>
                                </div>
                                <button style={{
                                    background: 'transparent',
                                    color: '#0066FF',
                                    border: '1px solid #0066FF',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    fontSize: '0.875rem',
                                    cursor: 'pointer'
                                }}>
                                    View Details
                                </button>
                            </div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '0.875rem', color: '#4A5568' }}>Progress</span>
                                    <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0066FF' }}>{request.progress}%</span>
                                </div>
                                <div style={{ width: '100%', height: '8px', background: '#F4F7FE', borderRadius: '4px' }}>
                                    <div style={{ width: `${request.progress}%`, height: '100%', background: '#0066FF', borderRadius: '4px' }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
