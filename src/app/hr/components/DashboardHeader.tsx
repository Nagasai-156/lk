'use client';

import { Search, Bell } from 'lucide-react';

export function DashboardHeader() {
    return (
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
            <div style={{
                background: 'white',
                borderRadius: '30px',
                padding: '0.5rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                width: '400px',
                border: '1px solid #E0E5F2'
            }}>
                <Search size={18} color="#A3AED0" style={{ marginRight: '0.5rem' }} />
                <input
                    type="text"
                    placeholder="Search candidates, documents, tasks..."
                    style={{
                        border: 'none',
                        outline: 'none',
                        width: '100%',
                        fontSize: '0.875rem',
                        color: '#2B3674'
                    }}
                />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div style={{ position: 'relative', cursor: 'pointer' }}>
                    <Bell size={20} color="#A3AED0" />
                    <span style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-5px',
                        background: '#FF1744',
                        color: 'white',
                        fontSize: '0.6rem',
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>2</span>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>Active Candidates</p>
                        <p style={{ fontSize: '1rem', fontWeight: 700, color: '#0066FF' }}>5</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>Pending Tasks</p>
                        <p style={{ fontSize: '1rem', fontWeight: 700, color: '#FFAB00' }}>3</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
