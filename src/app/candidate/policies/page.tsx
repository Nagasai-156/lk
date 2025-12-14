'use client';

import {
    Shield,
    FileText,
    AlertCircle,
    CheckCircle,
    ArrowRight,
    ArrowLeft,
    Briefcase,
    Clipboard,
    Monitor,
    Umbrella,
    Lock
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PoliciesPage() {
    const router = useRouter();
    const [accepted, setAccepted] = useState(false);

    const policies = [
        { title: 'Work Policy', icon: Briefcase, color: '#FFAB00', bg: '#FFF8E1' },
        { title: 'Code of Conduct', icon: Clipboard, color: '#0066FF', bg: '#E3F2FD' },
        { title: 'IT Policy', icon: Monitor, color: '#00C853', bg: '#E8F5E9' },
        { title: 'Leave Policy', icon: Umbrella, color: '#FF1744', bg: '#FFEBEE' },
        { title: 'Confidentiality Clause', icon: Lock, color: '#FF9800', bg: '#FFF3E0' }
    ];

    const [selectedPolicy, setSelectedPolicy] = useState<{ title: string; content: string } | null>(null);

    const policyContent: Record<string, string> = {
        'Work Policy': 'This policy outlines the standard working hours, remote work guidelines, and expectations for professional conduct...',
        'Code of Conduct': 'Our Code of Conduct sets the standard for ethical behavior, respect, and integrity in the workplace...',
        'IT Policy': 'The IT Policy governs the use of company-issued devices, software, and network security protocols...',
        'Leave Policy': 'This policy details the types of leave available (Casual, Sick, Earned), the application process, and approval workflows...',
        'Confidentiality Clause': 'Employees must maintain the confidentiality of all proprietary information, trade secrets, and client data...'
    };

    const handlePolicyClick = (title: string) => {
        setSelectedPolicy({
            title,
            content: policyContent[title] || 'Policy content not available.'
        });
    };

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>Policy Acceptance</h1>
                <p style={{ color: '#A3AED0' }}>Review and accept policies</p>
            </div>

            {/* Overall Progress for Step 4 */}
            <div className="glass-panel" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674' }}>Overall Progress</h3>
                    <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0066FF' }}>0%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: '#F4F7FE', borderRadius: '3px', marginBottom: '0.5rem' }}>
                    <div style={{ width: '0%', height: '100%', background: '#0066FF', borderRadius: '3px' }}></div>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>0 of 5 steps completed • Step 4 of 5</p>
            </div>

            {/* Important Notice */}
            <div style={{
                background: '#FFF8E1',
                border: '1px solid #FFE0B2',
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem'
            }}>
                <AlertCircle size={24} color="#FF9800" />
                <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#E65100', marginBottom: '0.25rem' }}>Important</h4>
                    <p style={{ fontSize: '0.875rem', color: '#BF360C' }}>All policies are mandatory. Please read each policy carefully before accepting.</p>
                </div>
            </div>

            {/* Policies Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                {policies.map((policy, index) => (
                    <div
                        key={index}
                        className="glass-panel"
                        onClick={() => handlePolicyClick(policy.title)}
                        style={{
                            padding: '1.5rem',
                            background: 'white',
                            borderRadius: '12px',
                            border: '1px solid #E0E5F2',
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            height: '100%'
                        }}
                    >
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '8px',
                            background: policy.bg,
                            color: policy.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1rem'
                        }}>
                            <policy.icon size={20} />
                        </div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674', marginBottom: '0.5rem' }}>{policy.title}</h3>
                        <p style={{ fontSize: '0.8rem', color: '#A3AED0' }}>Click to view policy</p>
                    </div>
                ))}
            </div>

            {/* Policy Modal */}
            {selectedPolicy && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                    backdropFilter: 'blur(5px)'
                }} onClick={() => setSelectedPolicy(null)}>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="glass-panel"
                        style={{
                            background: 'white',
                            padding: '2rem',
                            borderRadius: '16px',
                            width: '600px',
                            maxWidth: '90vw',
                            maxHeight: '80vh',
                            overflowY: 'auto',
                            position: 'relative'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2B3674' }}>{selectedPolicy.title}</h2>
                            <button
                                onClick={() => setSelectedPolicy(null)}
                                style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#A3AED0' }}
                            >
                                &times;
                            </button>
                        </div>
                        <p style={{ lineHeight: 1.6, color: '#4A5568' }}>{selectedPolicy.content}</p>
                        <button
                            onClick={() => setSelectedPolicy(null)}
                            className="btn-primary"
                            style={{ marginTop: '2rem', width: '100%', padding: '0.75rem' }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Acceptance Box */}
            <div style={{
                background: '#F0FDF4',
                border: '1px solid #DCFCE7',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '2rem'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ padding: '0.5rem', background: '#DCFCE7', borderRadius: '8px', color: '#16A34A' }}>
                        <Shield size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674' }}>Policy Acceptance</h3>
                </div>

                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                    <input
                        type="checkbox"
                        checked={accepted}
                        onChange={(e) => setAccepted(e.target.checked)}
                        style={{ width: '20px', height: '20px', accentColor: '#00C853' }}
                    />
                    <span style={{ fontSize: '0.9rem', color: '#4A5568' }}>I have read and understood all the company policies mentioned above. I agree to comply with all the terms and conditions outlined in these policies.</span>
                </label>

                <div style={{ textAlign: 'right', marginTop: '1.5rem' }}>
                    <button
                        disabled={!accepted}
                        onClick={() => router.push('/candidate/device-receipt')}
                        style={{
                            padding: '0.875rem 2rem',
                            background: accepted ? '#00C853' : '#A3AED0',
                            color: 'white',
                            borderRadius: '12px',
                            fontWeight: 700,
                            border: 'none',
                            cursor: accepted ? 'pointer' : 'not-allowed',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'background 0.2s',
                            boxShadow: accepted ? '0 4px 12px rgba(0, 200, 83, 0.3)' : 'none'
                        }}
                    >
                        <CheckCircle size={18} /> Accept & Continue
                    </button>
                </div>
            </div>

            {/* Navigation Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                <button
                    onClick={() => router.back()}
                    style={{
                        flex: 1,
                        padding: '1rem',
                        background: 'white',
                        border: '1px solid #E0E5F2',
                        borderRadius: '12px',
                        color: '#A3AED0',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                    }}>
                    <ArrowLeft size={18} /> Previous
                </button>
                <button
                    onClick={() => router.push('/candidate/device-receipt')}
                    style={{
                        flex: 1,
                        padding: '1rem',
                        background: '#FFAB00',
                        border: 'none',
                        borderRadius: '12px',
                        color: 'white',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 4px 12px rgba(255, 171, 0, 0.3)'
                    }}>
                    Next <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
}
