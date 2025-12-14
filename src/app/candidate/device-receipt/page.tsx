'use client';

import {
    Monitor,
    Smartphone,
    AlertCircle,
    CheckSquare,
    CheckCircle,
    ArrowLeft,
    ArrowRight
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DeviceReceiptPage() {
    const router = useRouter();
    const [checklist, setChecklist] = useState({
        received: false,
        verified: false,
        noDamage: false
    });

    const devices = [
        {
            name: 'MacBook Pro 16"',
            desc: 'Apple • M3 Pro, 32GB RAM, 1TB SSD',
            serial: 'FVFGWTH0P3XY',
            provider: 'IT Department',
            date: 'Jan 15, 2025',
            condition: 'New',
            accessories: 'Includes 96W USB-C Power Adapter and USB-C to MagSafe 3 Cable',
            icon: Monitor,
            color: '#FFAB00',
            bg: '#FFF8E1'
        },
        {
            name: 'iPhone 15 Pro',
            desc: 'Apple • 256GB, Titanium Blue',
            serial: 'G6TY7U8I9O0P',
            provider: 'IT Department',
            date: 'Jan 15, 2025',
            condition: 'New',
            accessories: 'Includes USB-C Charge Cable',
            icon: Smartphone,
            color: '#FFAB00',
            bg: '#FFF8E1'
        }
    ];

    const allChecked = checklist.received && checklist.verified && checklist.noDamage;

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>Device Receipt</h1>
                <p style={{ color: '#A3AED0' }}>Acknowledge IT assets</p>
            </div>

            {/* Overall Progress for Step 5 */}
            <div className="glass-panel" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674' }}>Overall Progress</h3>
                    <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0066FF' }}>0%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: '#F4F7FE', borderRadius: '3px', marginBottom: '0.5rem' }}>
                    <div style={{ width: '0%', height: '100%', background: '#0066FF', borderRadius: '3px' }}></div>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>0 of 5 steps completed • Step 5 of 5</p>
            </div>

            {/* Important Notice */}
            <div style={{
                background: '#FFF3E0',
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
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#E65100', marginBottom: '0.25rem' }}>Important Notice</h4>
                    <p style={{ fontSize: '0.875rem', color: '#BF360C' }}>Please verify all devices and accessories before acknowledging. Report any damage or missing items to the IT team immediately.</p>
                </div>
            </div>

            {/* Devices Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                {devices.map((device, index) => (
                    <div key={index} className="glass-panel" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: device.bg, color: device.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <device.icon size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674', marginBottom: '0.25rem' }}>{device.name}</h3>
                                <p style={{ fontSize: '0.8rem', color: '#A3AED0' }}>{device.desc}</p>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gap: '0.5rem', fontSize: '0.8rem', color: '#4A5568', marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#A3AED0' }}>Serial:</span> {device.serial}</div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#A3AED0' }}>Allocated by:</span> {device.provider}</div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#A3AED0' }}>Date:</span> {device.date}</div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#A3AED0' }}>Condition:</span> {device.condition}</div>
                        </div>
                        <div style={{ padding: '0.75rem', background: '#F4F7FE', borderRadius: '8px', border: '1px solid #E3F2FD', fontSize: '0.75rem', color: '#0066FF' }}>
                            {device.accessories}
                        </div>
                    </div>
                ))}
            </div>

            {/* Checklist */}
            <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ padding: '0.5rem', background: '#FFF8E1', borderRadius: '8px', color: '#FFAB00' }}>
                        <CheckSquare size={20} />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674' }}>Acknowledgment Checklist</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', border: '1px solid #E0E5F2', borderRadius: '12px', cursor: 'pointer' }}>
                        <input type="checkbox" checked={checklist.received} onChange={(e) => setChecklist({ ...checklist, received: e.target.checked })} style={{ marginTop: '4px', width: '20px', height: '20px', accentColor: '#FFAB00' }} />
                        <div>
                            <span style={{ display: 'block', fontWeight: 700, color: '#2B3674', fontSize: '0.9rem' }}>Device Received</span>
                            <span style={{ fontSize: '0.8rem', color: '#A3AED0' }}>I confirm that I have received all the devices mentioned above</span>
                        </div>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', border: '1px solid #E0E5F2', borderRadius: '12px', cursor: 'pointer' }}>
                        <input type="checkbox" checked={checklist.verified} onChange={(e) => setChecklist({ ...checklist, verified: e.target.checked })} style={{ marginTop: '4px', width: '20px', height: '20px', accentColor: '#FFAB00' }} />
                        <div>
                            <span style={{ display: 'block', fontWeight: 700, color: '#2B3674', fontSize: '0.9rem' }}>Accessories Verified</span>
                            <span style={{ fontSize: '0.8rem', color: '#A3AED0' }}>I have verified that all accessories are included</span>
                        </div>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', border: '1px solid #E0E5F2', borderRadius: '12px', cursor: 'pointer' }}>
                        <input type="checkbox" checked={checklist.noDamage} onChange={(e) => setChecklist({ ...checklist, noDamage: e.target.checked })} style={{ marginTop: '4px', width: '20px', height: '20px', accentColor: '#FFAB00' }} />
                        <div>
                            <span style={{ display: 'block', fontWeight: 700, color: '#2B3674', fontSize: '0.9rem' }}>No Physical Damage</span>
                            <span style={{ fontSize: '0.8rem', color: '#A3AED0' }}>I confirm that all devices are in good condition with no physical damage</span>
                        </div>
                    </label>
                </div>
            </div>

            {/* Responsibility Notice */}
            <div style={{ background: '#FFFDE7', border: '1px solid #FFF59D', padding: '1rem', borderRadius: '12px', marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <AlertCircle size={20} color="#FBC02D" />
                <div>
                    <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#F57F17', marginBottom: '0.25rem' }}>Responsibility Notice</h4>
                    <p style={{ fontSize: '0.75rem', color: '#F9A825' }}>You are responsible for the care and security of all allocated devices. Any loss, theft, or damage must be reported immediately to the IT team.</p>
                </div>
            </div>

            {/* Completion Action */}
            <div style={{ textAlign: 'right', marginBottom: '2rem' }}>
                <button
                    disabled={!allChecked}
                    onClick={() => alert('Onboarding Completed!')}
                    style={{
                        padding: '1rem 2rem',
                        background: allChecked ? '#FFAB00' : '#E0E5F2',
                        color: allChecked ? 'white' : '#A3AED0',
                        borderRadius: '12px',
                        fontWeight: 700,
                        border: 'none',
                        cursor: allChecked ? 'pointer' : 'not-allowed',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.2s',
                        boxShadow: allChecked ? '0 4px 12px rgba(255, 171, 0, 0.3)' : 'none'
                    }}
                >
                    <CheckCircle size={18} /> Acknowledge & Complete
                </button>
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
