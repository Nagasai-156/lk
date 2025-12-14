'use client';

import {
    FileText,
    Download,
    CheckCircle,
    Building,
    Calendar,
    DollarSign,
    User as UserIcon,
    ArrowRight,
    ArrowLeft
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AcceptOfferPage() {
    const router = useRouter();

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>Accept Offer</h1>
                <p style={{ color: '#A3AED0' }}>Review and accept your job offer</p>
            </div>

            {/* Offer Details Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className="glass-panel" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F4F7FE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0066FF' }}>
                        <UserIcon size={24} />
                    </div>
                    <div>
                        <p style={{ fontSize: '0.875rem', color: '#A3AED0', marginBottom: '0.25rem' }}>Candidate Name</p>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674' }}>Sarah Wilson</h3>
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FFF8E1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFAB00' }}>
                        <Building size={24} />
                    </div>
                    <div>
                        <p style={{ fontSize: '0.875rem', color: '#A3AED0', marginBottom: '0.25rem' }}>Position</p>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674' }}>Senior Frontend Engineer</h3>
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E3F2FD', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0066FF' }}>
                        <Building size={24} />
                    </div>
                    <div>
                        <p style={{ fontSize: '0.875rem', color: '#A3AED0', marginBottom: '0.25rem' }}>Department</p>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674' }}>Engineering</h3>
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00C853' }}>
                        <DollarSign size={24} />
                    </div>
                    <div>
                        <p style={{ fontSize: '0.875rem', color: '#A3AED0', marginBottom: '0.25rem' }}>Annual CTC</p>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674' }}>$120,000</h3>
                    </div>
                </div>
            </div>

            {/* Joining Date */}
            <div className="glass-panel" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FFF3E0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF9800' }}>
                    <Calendar size={24} />
                </div>
                <div>
                    <p style={{ fontSize: '0.875rem', color: '#A3AED0', marginBottom: '0.25rem' }}>Joining Date</p>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674' }}>February 1, 2025</h3>
                </div>
            </div>

            {/* Document Preview Area */}
            <div className="glass-panel" style={{
                padding: '4rem 2rem',
                background: 'white',
                borderRadius: '16px',
                marginBottom: '2rem',
                border: '1px dashed #E0E5F2',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#F4F7FE', color: '#A3AED0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <FileText size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#2B3674', marginBottom: '0.5rem' }}>Offer Letter Document</h3>
                <p style={{ color: '#A3AED0', marginBottom: '2rem' }}>Your official offer letter is ready for download</p>
                <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', borderRadius: '8px', border: '1px solid #FFAB00', color: '#FFAB00', fontWeight: 600, background: 'white', cursor: 'pointer' }}>
                    <Download size={18} /> Download PDF
                </button>
            </div>

            {/* Acceptance Action */}
            <div className="glass-panel" style={{ padding: '2rem', background: '#F0FDF4', borderRadius: '16px', border: '1px solid #DCFCE7', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ padding: '0.5rem', background: '#DCFCE7', borderRadius: '8px', color: '#16A34A' }}>
                        <CheckCircle size={24} />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#166534', marginBottom: '0.5rem' }}>Ready to Accept?</h3>
                        <p style={{ fontSize: '0.9rem', color: '#15803D', marginBottom: '1.5rem' }}>By accepting this offer, you confirm that you have reviewed all the details and agree to join LokaChakra.</p>
                        <button
                            onClick={() => router.push('/candidate/upload-documents')}
                            style={{
                                background: '#22C55E',
                                color: 'white',
                                border: 'none',
                                padding: '0.875rem 2rem',
                                borderRadius: '8px',
                                fontWeight: 700,
                                fontSize: '1rem',
                                cursor: 'pointer',
                                boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)'
                            }}>
                            Accept Offer & Continue
                        </button>
                    </div>
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
                    onClick={() => router.push('/candidate/upload-documents')}
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
