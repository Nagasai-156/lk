'use client';

import {
    User,
    Phone,
    MapPin,
    AlertCircle,
    Users,
    Plus,
    Calendar,
    ArrowRight,
    ArrowLeft
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PersonalInfoPage() {
    const router = useRouter();

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>Personal Information</h1>
                <p style={{ color: '#A3AED0' }}>Complete your profile</p>
            </div>

            {/* Overall Progress for Step 3 */}
            <div className="glass-panel" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674' }}>Overall Progress</h3>
                    <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0066FF' }}>0%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: '#F4F7FE', borderRadius: '3px', marginBottom: '0.5rem' }}>
                    <div style={{ width: '0%', height: '100%', background: '#0066FF', borderRadius: '3px' }}></div>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>0 of 5 steps completed • Step 3 of 5</p>
            </div>

            {/* Form Container */}
            <form onSubmit={(e) => { e.preventDefault(); router.push('/candidate/policies'); }}>

                {/* Personal Details */}
                <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        <div style={{ background: '#F4F7FE', padding: '8px', borderRadius: '8px', color: '#0066FF' }}><User size={20} /></div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674' }}>Personal Details</h3>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div className="input-group">
                            <label className="input-label" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem', display: 'block' }}>Full Name *</label>
                            <input type="text" defaultValue="John Doe" className="input-field" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2' }} />
                        </div>
                        <div className="input-group">
                            <label className="input-label" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem', display: 'block' }}>Date of Birth *</label>
                            <div style={{ position: 'relative' }}>
                                <input type="date" className="input-field" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2' }} />
                            </div>
                        </div>
                        <div className="input-group">
                            <label className="input-label" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem', display: 'block' }}>Gender *</label>
                            <select className="input-field" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2' }}>
                                <option>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label className="input-label" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem', display: 'block' }}>Blood Group</label>
                            <select className="input-field" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2' }}>
                                <option>Select Blood Group</option>
                                <option>A+</option>
                                <option>O+</option>
                                <option>B+</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label className="input-label" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem', display: 'block' }}>Marital Status *</label>
                            <select className="input-field" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2' }}>
                                <option>Select Status</option>
                                <option>Single</option>
                                <option>Married</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label className="input-label" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem', display: 'block' }}>Nationality *</label>
                            <input type="text" placeholder="e.g. Indian, American" className="input-field" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2' }} />
                        </div>
                        <div className="input-group">
                            <label className="input-label" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem', display: 'block' }}>Visa Status</label>
                            <select className="input-field" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2' }}>
                                <option>Select Visa Status</option>
                                <option>Citizen</option>
                                <option>Work Visa</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Contact Details */}
                <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        <div style={{ background: '#F4F7FE', padding: '8px', borderRadius: '8px', color: '#0066FF' }}><Phone size={20} /></div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674' }}>Contact Details</h3>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div className="input-group">
                            <label className="input-label" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem', display: 'block' }}>Mobile Number *</label>
                            <input type="tel" placeholder="10-digit mobile number" className="input-field" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2' }} />
                        </div>
                        <div className="input-group">
                            <label className="input-label" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem', display: 'block' }}>Personal Email *</label>
                            <input type="email" placeholder="your.email@example.com" className="input-field" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2' }} />
                        </div>
                        <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                            <label className="input-label" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem', display: 'block' }}>Company Email</label>
                            <input type="email" value="candidate@lokachakra.com" disabled className="input-field" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', background: '#F4F7FE', color: '#A3AED0' }} />
                        </div>
                    </div>
                </div>

                {/* Current Address */}
                <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        <div style={{ background: '#F4F7FE', padding: '8px', borderRadius: '8px', color: '#0066FF' }}><MapPin size={20} /></div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674' }}>Current Address</h3>
                    </div>
                    <div>
                        <div className="input-group" style={{ marginBottom: '1.5rem' }}>
                            <label className="input-label" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem', display: 'block' }}>Street Address *</label>
                            <input type="text" className="input-field" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2' }} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                            <div className="input-group">
                                <label className="input-label" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem', display: 'block' }}>City *</label>
                                <input type="text" className="input-field" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2' }} />
                            </div>
                            <div className="input-group">
                                <label className="input-label" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem', display: 'block' }}>State *</label>
                                <input type="text" className="input-field" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2' }} />
                            </div>
                            <div className="input-group">
                                <label className="input-label" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem', display: 'block' }}>Pincode *</label>
                                <input type="text" placeholder="6-digit pincode" className="input-field" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2' }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Emergency Contact */}
                <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        <div style={{ background: '#FFF8E1', padding: '8px', borderRadius: '8px', color: '#FFAB00' }}><AlertCircle size={20} /></div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674' }}>Emergency Contact</h3>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                        <div className="input-group">
                            <label className="input-label" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem', display: 'block' }}>Contact Name *</label>
                            <input type="text" placeholder="Full name" className="input-field" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2' }} />
                        </div>
                        <div className="input-group">
                            <label className="input-label" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem', display: 'block' }}>Phone Number *</label>
                            <input type="tel" placeholder="10-digit number" className="input-field" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2' }} />
                        </div>
                        <div className="input-group">
                            <label className="input-label" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem', display: 'block' }}>Relationship *</label>
                            <input type="text" placeholder="e.g., Father, Mother, Spouse" className="input-field" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2' }} />
                        </div>
                    </div>
                </div>

                {/* Family Details */}
                <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ background: '#F4F7FE', padding: '8px', borderRadius: '8px', color: '#0066FF' }}><Users size={20} /></div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674' }}>Family Details</h3>
                                <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>Optional - Add family members</p>
                            </div>
                        </div>
                        <button type="button" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', border: '1px solid #FFAB00', color: '#FFAB00', borderRadius: '8px', background: 'white', fontWeight: 600, cursor: 'pointer', fontSize: '0.8rem' }}>
                            <Plus size={16} /> Add Member
                        </button>
                    </div>

                    <div style={{ padding: '1rem', border: '1px dashed #E0E5F2', borderRadius: '12px' }}>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#2B3674', marginBottom: '1rem' }}>Family Member 1</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1.5rem' }}>
                            <div className="input-group">
                                <label className="input-label" style={{ fontSize: '0.75rem', fontWeight: 600, color: '#A3AED0', marginBottom: '0.25rem', display: 'block' }}>Name</label>
                                <input type="text" placeholder="Full name" className="input-field" style={{ width: '100%', padding: '0.6rem', borderRadius: '8px', border: '1px solid #E0E5F2', fontSize: '0.875rem' }} />
                            </div>
                            <div className="input-group">
                                <label className="input-label" style={{ fontSize: '0.75rem', fontWeight: 600, color: '#A3AED0', marginBottom: '0.25rem', display: 'block' }}>Relationship</label>
                                <select className="input-field" style={{ width: '100%', padding: '0.6rem', borderRadius: '8px', border: '1px solid #E0E5F2', fontSize: '0.875rem' }}>
                                    <option>Select</option>
                                    <option>Spouse</option>
                                    <option>Child</option>
                                    <option>Parent</option>
                                    <option>Sibling</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label className="input-label" style={{ fontSize: '0.75rem', fontWeight: 600, color: '#A3AED0', marginBottom: '0.25rem', display: 'block' }}>Age</label>
                                <input type="number" placeholder="Age" className="input-field" style={{ width: '100%', padding: '0.6rem', borderRadius: '8px', border: '1px solid #E0E5F2', fontSize: '0.875rem' }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
                    <button
                        type="submit"
                        style={{
                            padding: '1rem 2rem',
                            background: '#FFAB00',
                            color: 'white',
                            borderRadius: '12px',
                            fontWeight: 700,
                            border: 'none',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(255, 171, 0, 0.3)'
                        }}
                    >
                        Save & Continue
                    </button>
                </div>
            </form>

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
                    onClick={() => router.push('/candidate/policies')}
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
