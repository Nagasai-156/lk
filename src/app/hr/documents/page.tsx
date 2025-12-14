'use client';

import {
    FileText,
    Clock,
    CheckCircle,
    XCircle,
    Search,
    Eye,
    Download,
    MoreVertical,
    Check,
    X,
    CreditCard,
    File,
    User,
    Book
} from 'lucide-react';
import { DashboardHeader } from '../components/DashboardHeader';
import { useState } from 'react';

export default function DocumentsPage() {
    const [selectedCandidate, setSelectedCandidate] = useState('All Candidates');
    const [docs, setDocs] = useState([
        { id: 1, name: 'Offer Letter - Rahul Sharma.pdf', type: 'Offer Letter', candidate: 'Rahul Sharma', uploaded: 'Dec 1, 2025, 03:30 PM', status: 'Verified', icon: FileText, color: '#0066FF' },
        { id: 2, name: 'Aadhaar Card.pdf', type: 'Id Proof', candidate: 'Rahul Sharma', uploaded: 'Dec 3, 2025, 02:45 PM', status: 'Pending Review', icon: CreditCard, color: '#FFAB00' },
        { id: 3, name: 'Degree Certificate.pdf', type: 'Educational Certificates', candidate: 'Rahul Sharma', uploaded: 'Dec 3, 2025, 02:50 PM', status: 'Pending Review', icon: Book, color: '#FFAB00' },
        { id: 4, name: 'Offer Letter - Priya Patel.pdf', type: 'Offer Letter', candidate: 'Priya Patel', uploaded: 'Nov 28, 2025, 03:30 PM', status: 'Verified', icon: FileText, color: '#0066FF' },
        { id: 5, name: 'PAN Card.pdf', type: 'Id Proof', candidate: 'Priya Patel', uploaded: 'Nov 28, 2025, 03:35 PM', status: 'Verified', icon: CreditCard, color: '#00C853' },
        { id: 6, name: 'Offer Letter - Amit Kumar.pdf', type: 'Offer Letter', candidate: 'Amit Kumar', uploaded: 'Dec 2, 2025, 03:30 PM', status: 'Verified', icon: FileText, color: '#0066FF' },
        { id: 7, name: 'Driving License.pdf', type: 'Id Proof', candidate: 'Amit Kumar', uploaded: 'Dec 2, 2025, 03:35 PM', status: 'Verified', icon: CreditCard, color: '#00C853' },
        { id: 8, name: 'Bank Passbook.pdf', type: 'Bank Details', candidate: 'Amit Kumar', uploaded: 'Dec 2, 2025, 03:40 PM', status: 'Verified', icon: FileText, color: '#00C853' },
        { id: 9, name: 'Offer Letter - Sneha Reddy.pdf', type: 'Offer Letter', candidate: 'Sneha Reddy', uploaded: 'Nov 20, 2025, 03:30 PM', status: 'Verified', icon: FileText, color: '#0066FF' },
        { id: 10, name: 'Offer Letter - Vikram Singh.pdf', type: 'Offer Letter', candidate: 'Vikram Singh', uploaded: 'Dec 1, 2025, 03:30 PM', status: 'Verified', icon: FileText, color: '#0066FF' },
        { id: 11, name: 'Passport.pdf', type: 'Id Proof', candidate: 'Vikram Singh', uploaded: 'Dec 1, 2025, 03:35 PM', status: 'Verified', icon: CreditCard, color: '#00C853' },
    ]);

    const stats = [
        { label: 'Total Documents', value: docs.length.toString(), color: '#0066FF', icon: FileText, bg: '#E3F2FD' },
        { label: 'Pending Review', value: docs.filter(d => d.status === 'Pending Review').length.toString(), color: '#FFAB00', icon: Eye, bg: '#FFF8E1' },
        { label: 'Verified', value: docs.filter(d => d.status === 'Verified').length.toString(), color: '#00C853', icon: CheckCircle, bg: '#E8F5E9' },
        { label: 'Rejected', value: docs.filter(d => d.status === 'Rejected').length.toString(), color: '#FF1744', icon: XCircle, bg: '#FFEBEE' }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Verified': return '#00C853';
            case 'Pending Review': return '#FFAB00';
            case 'Rejected': return '#FF1744';
            default: return '#A3AED0';
        }
    };

    const handleAccept = (id: number) => {
        setDocs(docs.map(doc => doc.id === id ? { ...doc, status: 'Verified' } : doc));
    };

    const handleReject = (id: number) => {
        setDocs(docs.map(doc => doc.id === id ? { ...doc, status: 'Rejected' } : doc));
    };

    const filteredDocs = selectedCandidate === 'All Candidates'
        ? docs
        : docs.filter(d => d.candidate === selectedCandidate);

    return (
        <div>
            <DashboardHeader />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>Document Management</h1>
                    <p style={{ color: '#A3AED0' }}>Review, verify, and manage candidate documentation</p>
                </div>
                <button style={{
                    background: 'white',
                    color: '#0066FF',
                    border: '1px solid #0066FF',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer'
                }}>
                    <Download size={18} /> Export Report
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                {stats.map((stat, i) => (
                    <div key={i} className="glass-panel" style={{
                        padding: '1.5rem',
                        background: 'white',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderLeft: `4px solid ${stat.color}`
                    }}>
                        <div>
                            <p style={{ fontSize: '0.75rem', color: '#A3AED0', marginBottom: '0.25rem' }}>{stat.label}</p>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#2B3674' }}>{stat.value}</h3>
                        </div>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '8px',
                            background: stat.bg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: stat.color
                        }}>
                            <stat.icon size={20} />
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '2rem' }}>
                {/* Candidates List Filter */}
                <div style={{ width: '280px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674', marginBottom: '1rem' }}>Candidates</h3>
                    <div style={{ background: 'white', borderRadius: '16px', padding: '1rem', border: '1px solid #E0E5F2' }}>
                        <div style={{ position: 'relative', marginBottom: '1rem' }}>
                            <Search size={16} color="#A3AED0" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="text"
                                placeholder="Search candidates..."
                                style={{
                                    width: '100%',
                                    padding: '0.6rem 0.75rem 0.6rem 2.5rem',
                                    borderRadius: '8px',
                                    border: '1px solid #E0E5F2',
                                    outline: 'none',
                                    fontSize: '0.875rem'
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <div
                                onClick={() => setSelectedCandidate('All Candidates')}
                                style={{
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    background: selectedCandidate === 'All Candidates' ? '#0066FF' : 'transparent',
                                    color: selectedCandidate === 'All Candidates' ? 'white' : '#2B3674',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}>
                                <span>All Candidates</span>
                                <span>11</span>
                            </div>
                            {['Rahul Sharma', 'Priya Patel', 'Amit Kumar', 'Sneha Reddy', 'Vikram Singh'].map((name, i) => (
                                <div key={i}
                                    onClick={() => setSelectedCandidate(name)}
                                    style={{
                                        padding: '0.75rem',
                                        borderRadius: '8px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        fontSize: '0.875rem',
                                        color: selectedCandidate === name ? 'white' : '#2B3674',
                                        background: selectedCandidate === name ? '#0066FF' : 'transparent',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s'
                                    }} className={selectedCandidate !== name ? "hover:bg-gray-50" : ""}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div style={{
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            background: selectedCandidate === name ? 'rgba(255,255,255,0.2)' : '#F4F7FE',
                                            color: selectedCandidate === name ? 'white' : '#A3AED0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '0.7rem',
                                            fontWeight: 700
                                        }}>{name.charAt(0)}</div>
                                        <span>{name}</span>
                                    </div>
                                    <span style={{ color: selectedCandidate === name ? 'white' : '#A3AED0' }}>{
                                        docs.filter(d => d.candidate === name).length
                                    }</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Documents Table */}
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674' }}>{selectedCandidate === 'All Candidates' ? 'All Documents' : `${selectedCandidate}'s Documents`} <span style={{ color: '#A3AED0', fontWeight: 500 }}>{filteredDocs.length}</span></h3>
                        <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>Showing all documents</p>
                    </div>

                    <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2', overflow: 'hidden' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1.5fr 1fr 1fr', padding: '1rem 1.5rem', borderBottom: '1px solid #E0E5F2', background: '#F9FAFB', fontSize: '0.65rem', fontWeight: 700, color: '#A3AED0', textTransform: 'uppercase' }}>
                            <div>Document Name</div>
                            <div>Candidate</div>
                            <div>Type</div>
                            <div>Uploaded</div>
                            <div>Status</div>
                            <div style={{ textAlign: 'center' }}>Actions</div>
                        </div>

                        {filteredDocs.map((doc) => (
                            <div key={doc.id} style={{
                                display: 'grid',
                                gridTemplateColumns: '2fr 1.5fr 1fr 1.5fr 1fr 1fr',
                                padding: '1.25rem 1.5rem',
                                borderBottom: '1px solid #E0E5F2',
                                alignItems: 'center',
                                fontSize: '0.8rem',
                                color: '#2B3674'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '6px',
                                        background: 'transparent',
                                        border: '1px solid #E0E5F2',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#00C853'
                                    }}>
                                        <doc.icon size={16} />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 600 }}>{doc.name}</p>
                                        <p style={{ fontSize: '0.7rem', color: '#A3AED0' }}>{doc.type}</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <div style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        background: '#F4F7FE',
                                        color: '#A3AED0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.6rem',
                                        fontWeight: 700
                                    }}>{doc.candidate.charAt(0)}</div>
                                    <span>{doc.candidate}</span>
                                </div>
                                <div style={{ color: '#4A5568' }}>{doc.type}</div>
                                <div style={{ color: '#A3AED0', fontSize: '0.75rem' }}>
                                    {doc.uploaded.split(',')[0]}<br />
                                    <span style={{ fontSize: '0.7rem' }}>{doc.uploaded.split(',')[1]}</span>
                                </div>
                                <div style={{ fontWeight: 700, color: getStatusColor(doc.status) }}>
                                    {doc.status}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                    {doc.status === 'Pending Review' ? (
                                        <>
                                            <button
                                                onClick={() => handleAccept(doc.id)}
                                                style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid #00C853', background: 'transparent', color: '#00C853', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                                <Check size={14} />
                                            </button>
                                            <button
                                                onClick={() => handleReject(doc.id)}
                                                style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid #FF1744', background: 'transparent', color: '#FF1744', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                                <X size={14} />
                                            </button>
                                        </>
                                    ) : (
                                        <span style={{ color: '#A3AED0', fontSize: '0.75rem' }}>Processed</span>
                                    )}
                                    <button style={{ background: 'transparent', border: 'none', color: '#A3AED0', cursor: 'pointer' }}><Eye size={16} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
