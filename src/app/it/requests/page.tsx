'use client';

import {
    Search,
    ArrowDown,
    Eye
} from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ITRequestsPage() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const requests = [
        { id: 1, name: 'Sneha Sharma', initials: 'SS', position: 'QA Engineer', device: 'Laptop', joining: 'Dec 15, 2024', requestedBy: 'Harika (HR)', status: 'Pending', statusColor: '#FFAB00', statusBg: '#FFF8E1' },
        { id: 2, name: 'Rohit Kumar', initials: 'RK', position: 'Frontend Developer', device: 'Laptop + Monitor', joining: 'Dec 12, 2024', requestedBy: 'Priya (HR)', status: 'In Progress', statusColor: '#0066FF', statusBg: '#E3F2FD', progress: 60 },
        { id: 3, name: 'Rahul Verma', initials: 'RV', position: 'Backend Developer', device: 'Laptop', joining: 'Dec 10, 2024', requestedBy: 'Harika (HR)', status: 'Completed', statusColor: '#00C853', statusBg: '#E8F5E9' },
        { id: 4, name: 'Priya Patel', initials: 'PP', position: 'UI/UX Designer', device: 'MacBook Pro', joining: 'Dec 18, 2024', requestedBy: 'Amit (HR)', status: 'Pending', statusColor: '#FFAB00', statusBg: '#FFF8E1' },
        { id: 5, name: 'Amit Singh', initials: 'AS', position: 'DevOps Engineer', device: 'Laptop + Monitor', joining: 'Dec 14, 2024', requestedBy: 'Priya (HR)', status: 'In Progress', statusColor: '#0066FF', statusBg: '#E3F2FD', progress: 40 }
    ];

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>All IT Requests</h1>
                <p style={{ color: '#A3AED0' }}>Manage and track all IT provisioning requests</p>
            </div>

            {/* Search and Filter */}
            <div style={{ background: 'white', padding: '1rem', borderRadius: '16px', border: '1px solid #E0E5F2', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
                    <Search size={16} color="#A3AED0" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                        type="text"
                        placeholder="Search by candidate name or role..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.75rem 0.75rem 0.75rem 3rem',
                            background: '#F9FAFB',
                            border: '1px solid #E0E5F2',
                            borderRadius: '8px',
                            outline: 'none',
                            fontSize: '0.875rem'
                        }}
                    />
                </div>
                <div>
                    <button style={{ background: 'transparent', border: '1px solid #E0E5F2', padding: '0.75rem 1.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#4A5568', cursor: 'pointer', fontWeight: 500 }}>
                        All Status <ArrowDown size={14} />
                    </button>
                </div>
            </div>

            {/* Requests Count */}
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674', marginBottom: '1.5rem' }}>{requests.length} Requests Found</h3>

            {/* Requests List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {requests.map((request) => (
                    <div key={request.id} className="glass-panel" style={{
                        padding: '1.5rem',
                        background: 'white',
                        borderRadius: '16px',
                        border: '1px solid #E0E5F2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                background: request.statusColor,
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                fontSize: '1rem'
                            }}>{request.initials}</div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674' }}>{request.name}</h4>
                                    <span style={{
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '12px',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        background: request.statusBg,
                                        color: request.statusColor
                                    }}>{request.status}</span>
                                </div>
                                <p style={{ fontSize: '0.875rem', color: '#4A5568', marginBottom: '0.5rem' }}>{request.position} • {request.device}</p>
                                <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>
                                    Joining: {request.joining} • Requested by: {request.requestedBy}
                                </p>
                                {request.progress !== undefined && (
                                    <div style={{ marginTop: '0.75rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                            <span style={{ fontSize: '0.75rem', color: '#4A5568' }}>Progress</span>
                                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: request.statusColor }}>{request.progress}%</span>
                                        </div>
                                        <div style={{ width: '100%', height: '6px', background: '#F4F7FE', borderRadius: '3px' }}>
                                            <div style={{ width: `${request.progress}%`, height: '100%', background: request.statusColor, borderRadius: '3px' }}></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <button
                            onClick={() => router.push(`/it/requests/${request.id}`)}
                            style={{
                                background: request.status === 'Pending' ? '#0066FF' : 'white',
                                color: request.status === 'Pending' ? 'white' : '#0066FF',
                                border: request.status === 'Pending' ? 'none' : '1px solid #0066FF',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '8px',
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                            <Eye size={16} /> {request.status === 'Pending' ? 'Start' : 'View'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
