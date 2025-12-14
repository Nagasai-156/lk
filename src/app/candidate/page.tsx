'use client';

import {
    FileText,
    Upload,
    User,
    Shield,
    Monitor,
    CheckCircle
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CandidateDashboard() {
    const router = useRouter();

    const steps = [
        { id: 1, label: 'Accept Offer', icon: FileText, status: 'active', path: '/candidate/accept-offer' },
        { id: 2, label: 'Upload Documents', icon: Upload, status: 'pending', path: '/candidate/upload-documents' },
        { id: 3, label: 'Personal Information', icon: User, status: 'pending', path: '/candidate/personal-info' },
        { id: 4, label: 'Policy Acceptance', icon: Shield, status: 'pending', path: '/candidate/policies' },
        { id: 5, label: 'Device Receipt', icon: Monitor, status: 'pending', path: '/candidate/device-receipt' }
    ];

    const currentStep = 1;
    const progress = 0;

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>Welcome, John!</h1>
                <p style={{ color: '#A3AED0' }}>Complete your onboarding steps to get started.</p>
            </div>

            {/* Progress Card */}
            <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674' }}>Overall Progress</h3>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0066FF' }}>{progress}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#F4F7FE', borderRadius: '4px', marginBottom: '1rem' }}>
                    <div style={{ width: `${progress}%`, height: '100%', background: '#0066FF', borderRadius: '4px' }}></div>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#A3AED0' }}>0 of 5 steps completed • Step {currentStep} of 5</p>
            </div>

            {/* Steps Visualizer */}
            <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', marginBottom: '2rem', overflowX: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', minWidth: '600px' }}>
                    {/* Connecting Line */}
                    <div style={{ position: 'absolute', top: '24px', left: '40px', right: '40px', height: '2px', background: '#F4F7FE', zIndex: 0 }}></div>

                    {steps.map((step, i) => (
                        <div key={step.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1, minWidth: '100px' }}>
                            <div
                                onClick={() => router.push(step.path)}
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: step.status === 'completed' ? '#00C853' : step.status === 'active' ? '#0066FF' : 'white',
                                    border: step.status === 'pending' ? '2px solid #E0E5F2' : 'none',
                                    color: step.status === 'pending' ? '#A3AED0' : 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    boxShadow: step.status === 'active' ? '0 4px 12px rgba(0, 102, 255, 0.3)' : 'none'
                                }}>
                                {step.status === 'completed' ? <CheckCircle size={24} /> : <step.icon size={20} />}
                            </div>
                            <span style={{
                                fontSize: '0.8rem',
                                fontWeight: step.status === 'active' ? 700 : 500,
                                color: step.status === 'active' ? '#0066FF' : '#A3AED0',
                                textAlign: 'center'
                            }}>
                                {step.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Current Step Action Card */}
            <div className="glass-panel" style={{ padding: '2.5rem', background: 'white', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: '#E3F2FD',
                    color: '#0066FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                }}>
                    <FileText size={40} />
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.75rem' }}>Step 1: Accept Offer</h2>
                <p style={{ color: '#A3AED0', maxWidth: '400px', marginBottom: '2rem' }}>Review your offer letter details and digitally sign to accept the offer and proceed with onboarding.</p>
                <button
                    onClick={() => router.push('/candidate/accept-offer')}
                    className="btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}>
                    Go to Offer Letter
                </button>
            </div>
        </div>
    );
}
