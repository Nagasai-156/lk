'use client';

import { Settings as SettingsIcon } from 'lucide-react';

export default function SettingsPage() {
    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>Settings</h1>
                <p style={{ color: '#A3AED0' }}>Configure admin portal preferences</p>
            </div>

            {/* Placeholder */}
            <div className="glass-panel" style={{
                padding: '4rem 2rem',
                background: 'white',
                borderRadius: '16px',
                border: '1px solid #E0E5F2',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: '#F4F7FE',
                    color: '#A3AED0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                }}>
                    <SettingsIcon size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#2B3674', marginBottom: '0.5rem' }}>Settings Coming Soon</h3>
                <p style={{ color: '#A3AED0' }}>Admin portal configuration options will be available here</p>
            </div>
        </div>
    );
}
