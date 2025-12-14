'use client';

import { useState } from 'react';
import {
    Upload,
    FileText,
    Info,
    CheckCircle,
    ArrowRight,
    ArrowLeft
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function UploadDocumentsPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('id-proof');

    const tabs = [
        { id: 'id-proof', label: 'ID Proof' },
        { id: 'education', label: 'Education Proof' },
        { id: 'experience', label: 'Experience Letters' },
        { id: 'bank', label: 'Bank & Tax Information' }
    ];

    const documents = {
        'id-proof': [
            { name: 'Aadhaar Card', required: true },
            { name: 'PAN Card', required: true },
            { name: 'Passport', required: false }
        ],
        'education': [
            { name: '10th Mark Sheet', required: true },
            { name: '12th Mark Sheet', required: true },
            { name: 'Degree Certificate', required: true },
            { name: 'Transcripts', required: false }
        ],
        'experience': [
            { name: 'Previous Employment Letter', required: false },
            { name: 'Experience Certificate', required: false }
        ],
        'bank': [
            { name: 'Bank Passbook/Statement', required: true },
            { name: 'Cancelled Cheque', required: true }
        ]
    };

    const [uploadedFiles, setUploadedFiles] = useState<Record<string, string>>({});

    const handleUploadClick = (docName: string) => {
        const fileInput = document.getElementById(`file-input-${docName}`);
        fileInput?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, docName: string) => {
        if (e.target.files && e.target.files[0]) {
            setUploadedFiles(prev => ({
                ...prev,
                [docName]: e.target.files![0].name
            }));
        }
    };

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>Upload Documents</h1>
                <p style={{ color: '#A3AED0' }}>Submit required documents</p>
            </div>

            {/* Overall Progress for Step 2 */}
            <div className="glass-panel" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674' }}>Overall Progress</h3>
                    <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0066FF' }}>
                        {Math.round((Object.keys(uploadedFiles).length / 11) * 100)}%
                    </span>
                </div>
                <div style={{ width: '100%', height: '6px', background: '#F4F7FE', borderRadius: '3px', marginBottom: '0.5rem' }}>
                    <div style={{ width: `${(Object.keys(uploadedFiles).length / 11) * 100}%`, height: '100%', background: '#0066FF', borderRadius: '3px' }}></div>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>0 of 5 steps completed • Step 2 of 5</p>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid #E0E5F2', marginBottom: '2rem' }}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            padding: '1rem 1.5rem',
                            background: 'transparent',
                            border: 'none',
                            borderBottom: activeTab === tab.id ? '3px solid #FFAB00' : '3px solid transparent',
                            color: activeTab === tab.id ? '#FFAB00' : '#A3AED0',
                            fontWeight: activeTab === tab.id ? 700 : 500,
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            transition: 'all 0.2s'
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Documents List */}
            <div className="glass-panel" style={{ padding: '2rem', background: 'white', borderRadius: '16px', marginBottom: '2rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674', marginBottom: '0.5rem' }}>{tabs.find(t => t.id === activeTab)?.label}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#A3AED0' }}>
                        {documents[activeTab as keyof typeof documents].filter(d => d.required).length} required documents
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {documents[activeTab as keyof typeof documents].map((doc, index) => (
                        <div key={index} style={{
                            padding: '1.5rem',
                            border: '1px solid #E0E5F2',
                            borderRadius: '12px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: '#FFFFFF'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '8px',
                                    background: uploadedFiles[doc.name] ? '#E8F5E9' : '#F4F7FE',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: uploadedFiles[doc.name] ? '#00C853' : '#A3AED0'
                                }}>
                                    {uploadedFiles[doc.name] ? <CheckCircle size={20} /> : <Upload size={20} />}
                                </div>
                                <div>
                                    <span style={{ fontWeight: 600, color: '#2B3674', display: 'block' }}>
                                        {doc.name} {doc.required && !uploadedFiles[doc.name] && <span style={{ color: '#FF1744', fontSize: '0.75rem', marginLeft: '0.25rem' }}>*Required</span>}
                                    </span>
                                    {uploadedFiles[doc.name] && <span style={{ fontSize: '0.75rem', color: '#00C853' }}>{uploadedFiles[doc.name]}</span>}
                                </div>
                            </div>

                            <input
                                type="file"
                                id={`file-input-${doc.name}`}
                                style={{ display: 'none' }}
                                onChange={(e) => handleFileChange(e, doc.name)}
                            />

                            <button
                                onClick={() => handleUploadClick(doc.name)}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.25rem',
                                    background: uploadedFiles[doc.name] ? 'white' : '#FFAB00',
                                    color: uploadedFiles[doc.name] ? '#00C853' : 'white',
                                    border: uploadedFiles[doc.name] ? '1px solid #00C853' : 'none',
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '8px',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    minWidth: '80px'
                                }}>
                                {uploadedFiles[doc.name] ? <CheckCircle size={16} /> : <Upload size={16} />}
                                {uploadedFiles[doc.name] ? 'Uploaded' : 'Upload'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Upload Guidelines */}
                <div style={{ marginTop: '2rem', padding: '1rem', background: '#E3F2FD', borderRadius: '8px', border: '1px solid #BBDEFB', display: 'flex', gap: '0.75rem' }}>
                    <Info size={20} color="#0066FF" style={{ marginTop: '2px' }} />
                    <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0066FF', marginBottom: '0.25rem' }}>Upload Guidelines:</h4>
                        <p style={{ fontSize: '0.8rem', color: '#1E3A8A' }}>Accepted formats: PDF, JPEG, PNG • Maximum file size: 10MB per file</p>
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
                <button
                    onClick={() => router.push('/candidate/personal-info')}
                    style={{
                        padding: '1rem 2rem',
                        background: '#FFAB00',
                        color: 'white',
                        borderRadius: '12px',
                        fontWeight: 700,
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(255, 171, 0, 0.3)'
                    }}>
                    Save & Continue
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
                    onClick={() => router.push('/candidate/personal-info')}
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
        </div >
    );
}
