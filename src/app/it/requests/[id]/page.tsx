'use client';

import {
    ArrowLeft,
    Mail,
    Briefcase,
    Calendar,
    User,
    CheckCircle,
    Monitor,
    Key,
    MapPin,
    Truck,
    Save
} from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import { useState } from 'react';

export default function ITProvisioningPage() {
    const router = useRouter();
    const params = useParams();

    // Mock data - In real app, fetch based on params.id
    const candidate = {
        name: 'Sneha Sharma',
        initials: 'SS',
        position: 'QA Engineer',
        email: 'sneha.sharma@example.com',
        department: 'Engineering',
        joiningDate: 'Dec 15, 2024',
        hrContact: 'Harika (harika@lokachakra.com)',
        documentStatus: 'verified'
    };

    const [checklist, setChecklist] = useState({
        laptop: { completed: false, device: '', remarks: '' },
        email: { completed: false, emailAddress: '', tempPassword: '' },
        systemLogin: { completed: false, username: '' },
        accessTools: { completed: false, tools: { vpn: false, slack: false, github: false, portal: false, admin: false, email: false } },
        deskAllocation: { completed: false, type: 'office', building: '', floor: '', deskNumber: '' },
        shipment: { completed: false, trackingId: '', courier: '', expectedDelivery: '' }
    });

    const devices = ['Select a device', 'Dell Latitude 5420', 'HP EliteBook 840', 'Lenovo ThinkPad X1', 'Apple MacBook Pro 14"'];

    const totalTasks = 6;
    const completedTasks = Object.values(checklist).filter(task => task.completed).length;
    const progress = Math.round((completedTasks / totalTasks) * 100);

    const handleSaveProgress = () => {
        alert('Progress saved successfully!');
    };

    const handleMarkComplete = () => {
        if (progress === 100) {
            alert('IT Provisioning completed for ' + candidate.name);
            router.push('/it/requests');
        } else {
            alert('Please complete all required tasks before marking as complete.');
        }
    };

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <button
                    onClick={() => router.back()}
                    style={{ background: 'transparent', border: 'none', color: '#4A5568', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
                    <ArrowLeft size={16} /> Back
                </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>IT Provisioning</h1>
                    <p style={{ color: '#A3AED0' }}>Complete IT setup for {candidate.name}</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        onClick={handleSaveProgress}
                        style={{ background: 'white', color: '#0066FF', border: '1px solid #0066FF', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Save size={18} /> Save Progress
                    </button>
                    <button
                        onClick={handleMarkComplete}
                        style={{ background: progress === 100 ? '#00C853' : '#A3AED0', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', cursor: progress === 100 ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <CheckCircle size={18} /> Mark All Completed
                    </button>
                </div>
            </div>

            {/* Overall Progress */}
            <div className="glass-panel" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674' }}>Overall Progress</h3>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0066FF' }}>{progress}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#F4F7FE', borderRadius: '4px', marginBottom: '0.5rem' }}>
                    <div style={{ width: `${progress}%`, height: '100%', background: '#0066FF', borderRadius: '4px', transition: 'width 0.3s' }}></div>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#A3AED0' }}>{completedTasks} of {totalTasks} tasks completed</p>
            </div>

            {/* Two Column Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '2rem' }}>
                {/* Left Column - Candidate Information */}
                <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674', marginBottom: '1.5rem' }}>Candidate Information</h3>

                    <div className="glass-panel" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2' }}>
                        {/* Avatar and Name */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid #E0E5F2' }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '50%',
                                background: '#FFAB00',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                fontSize: '1.5rem',
                                marginBottom: '1rem'
                            }}>{candidate.initials}</div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674', marginBottom: '0.25rem' }}>{candidate.name}</h4>
                            <p style={{ fontSize: '0.875rem', color: '#A3AED0' }}>{candidate.position}</p>
                        </div>

                        {/* Info Items */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                                <Mail size={18} color="#A3AED0" style={{ marginTop: '2px' }} />
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: '#A3AED0', marginBottom: '0.25rem' }}>Email</p>
                                    <p style={{ fontSize: '0.875rem', color: '#2B3674', fontWeight: 600 }}>{candidate.email}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                                <Briefcase size={18} color="#A3AED0" style={{ marginTop: '2px' }} />
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: '#A3AED0', marginBottom: '0.25rem' }}>Department</p>
                                    <p style={{ fontSize: '0.875rem', color: '#2B3674', fontWeight: 600 }}>{candidate.department}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                                <Calendar size={18} color="#A3AED0" style={{ marginTop: '2px' }} />
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: '#A3AED0', marginBottom: '0.25rem' }}>Joining Date</p>
                                    <p style={{ fontSize: '0.875rem', color: '#2B3674', fontWeight: 600 }}>{candidate.joiningDate}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                                <User size={18} color="#A3AED0" style={{ marginTop: '2px' }} />
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: '#A3AED0', marginBottom: '0.25rem' }}>HR Contact</p>
                                    <p style={{ fontSize: '0.875rem', color: '#2B3674', fontWeight: 600 }}>{candidate.hrContact}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                                <CheckCircle size={18} color="#00C853" style={{ marginTop: '2px' }} />
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: '#A3AED0', marginBottom: '0.25rem' }}>Document Status</p>
                                    <span style={{
                                        display: 'inline-block',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '12px',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        background: '#E8F5E9',
                                        color: '#00C853',
                                        textTransform: 'capitalize'
                                    }}>{candidate.documentStatus}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - IT Provisioning Checklist */}
                <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674', marginBottom: '1.5rem' }}>IT Provisioning Checklist</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        {/* 1. Allocate Laptop */}
                        <div className="glass-panel" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', border: checklist.laptop.completed ? '2px solid #00C853' : '1px solid #E0E5F2' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '8px',
                                        background: checklist.laptop.completed ? '#E8F5E9' : '#E3F2FD',
                                        color: checklist.laptop.completed ? '#00C853' : '#0066FF',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Monitor size={18} />
                                    </div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674' }}>Allocate Laptop</h4>
                                    <span style={{ padding: '0.25rem 0.5rem', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 600, background: '#FFEBEE', color: '#FF1744' }}>Required</span>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={checklist.laptop.completed}
                                    onChange={(e) => setChecklist({ ...checklist, laptop: { ...checklist.laptop, completed: e.target.checked } })}
                                    style={{ width: '20px', height: '20px', accentColor: '#00C853', cursor: 'pointer' }}
                                />
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem' }}>Choose Device</label>
                                <select
                                    value={checklist.laptop.device}
                                    onChange={(e) => setChecklist({ ...checklist, laptop: { ...checklist.laptop, device: e.target.value } })}
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none', fontSize: '0.875rem' }}>
                                    {devices.map((device, i) => <option key={i} value={device}>{device}</option>)}
                                </select>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem' }}>Remarks (Optional)</label>
                                <textarea
                                    value={checklist.laptop.remarks}
                                    onChange={(e) => setChecklist({ ...checklist, laptop: { ...checklist.laptop, remarks: e.target.value } })}
                                    placeholder="Add any notes about the device allocation"
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none', fontSize: '0.875rem', minHeight: '80px', resize: 'vertical' }}
                                />
                            </div>
                        </div>

                        {/* 2. Create Email ID */}
                        <div className="glass-panel" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', border: checklist.email.completed ? '2px solid #00C853' : '1px solid #E0E5F2' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '8px',
                                        background: checklist.email.completed ? '#E8F5E9' : '#E3F2FD',
                                        color: checklist.email.completed ? '#00C853' : '#0066FF',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Mail size={18} />
                                    </div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674' }}>Create Email ID</h4>
                                    <span style={{ padding: '0.25rem 0.5rem', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 600, background: '#FFEBEE', color: '#FF1744' }}>Required</span>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={checklist.email.completed}
                                    onChange={(e) => setChecklist({ ...checklist, email: { ...checklist.email, completed: e.target.checked } })}
                                    style={{ width: '20px', height: '20px', accentColor: '#00C853', cursor: 'pointer' }}
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem' }}>Email Address</label>
                                    <input
                                        type="email"
                                        value={checklist.email.emailAddress}
                                        onChange={(e) => setChecklist({ ...checklist, email: { ...checklist.email, emailAddress: e.target.value } })}
                                        placeholder="e.g., sneha.sharma@lokachakra.com"
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none', fontSize: '0.875rem' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem' }}>Temporary Password</label>
                                    <input
                                        type="text"
                                        value={checklist.email.tempPassword}
                                        onChange={(e) => setChecklist({ ...checklist, email: { ...checklist.email, tempPassword: e.target.value } })}
                                        placeholder="Generate or set temporary password"
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none', fontSize: '0.875rem' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 3. Create System Login */}
                        <div className="glass-panel" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', border: checklist.systemLogin.completed ? '2px solid #00C853' : '1px solid #E0E5F2' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '8px',
                                        background: checklist.systemLogin.completed ? '#E8F5E9' : '#E3F2FD',
                                        color: checklist.systemLogin.completed ? '#00C853' : '#0066FF',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Key size={18} />
                                    </div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674' }}>Create System Login</h4>
                                    <span style={{ padding: '0.25rem 0.5rem', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 600, background: '#FFEBEE', color: '#FF1744' }}>Required</span>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={checklist.systemLogin.completed}
                                    onChange={(e) => setChecklist({ ...checklist, systemLogin: { ...checklist.systemLogin, completed: e.target.checked } })}
                                    style={{ width: '20px', height: '20px', accentColor: '#00C853', cursor: 'pointer' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem' }}>Username</label>
                                <input
                                    type="text"
                                    value={checklist.systemLogin.username}
                                    onChange={(e) => setChecklist({ ...checklist, systemLogin: { ...checklist.systemLogin, username: e.target.value } })}
                                    placeholder="e.g., sneha.sharma"
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none', fontSize: '0.875rem' }}
                                />
                            </div>
                        </div>

                        {/* 4. Assign Access Tools */}
                        <div className="glass-panel" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', border: checklist.accessTools.completed ? '2px solid #00C853' : '1px solid #E0E5F2' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '8px',
                                        background: checklist.accessTools.completed ? '#E8F5E9' : '#E3F2FD',
                                        color: checklist.accessTools.completed ? '#00C853' : '#0066FF',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Key size={18} />
                                    </div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674' }}>Assign Access Tools</h4>
                                    <span style={{ padding: '0.25rem 0.5rem', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 600, background: '#FFEBEE', color: '#FF1744' }}>Required</span>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={checklist.accessTools.completed}
                                    onChange={(e) => setChecklist({ ...checklist, accessTools: { ...checklist.accessTools, completed: e.target.checked } })}
                                    style={{ width: '20px', height: '20px', accentColor: '#00C853', cursor: 'pointer' }}
                                />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                {[
                                    { key: 'vpn', label: 'VPN Access' },
                                    { key: 'slack', label: 'Slack' },
                                    { key: 'github', label: 'GitHub' },
                                    { key: 'portal', label: 'Company Portal' },
                                    { key: 'admin', label: 'Admin Console' },
                                    { key: 'email', label: 'Email' }
                                ].map((tool) => (
                                    <label key={tool.key} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '0.5rem', borderRadius: '6px', border: '1px solid #E0E5F2' }}>
                                        <input
                                            type="checkbox"
                                            checked={(checklist.accessTools.tools as any)[tool.key]}
                                            onChange={(e) => setChecklist({
                                                ...checklist,
                                                accessTools: {
                                                    ...checklist.accessTools,
                                                    tools: { ...checklist.accessTools.tools, [tool.key]: e.target.checked }
                                                }
                                            })}
                                            style={{ accentColor: '#0066FF' }}
                                        />
                                        <span style={{ fontSize: '0.875rem', color: '#2B3674' }}>{tool.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* 5. Seat / Desk Allocation */}
                        <div className="glass-panel" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', border: checklist.deskAllocation.completed ? '2px solid #00C853' : '1px solid #E0E5F2' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '8px',
                                        background: checklist.deskAllocation.completed ? '#E8F5E9' : '#E3F2FD',
                                        color: checklist.deskAllocation.completed ? '#00C853' : '#0066FF',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <MapPin size={18} />
                                    </div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674' }}>Seat / Desk Allocation</h4>
                                    <span style={{ padding: '0.25rem 0.5rem', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 600, background: '#FFEBEE', color: '#FF1744' }}>Required</span>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={checklist.deskAllocation.completed}
                                    onChange={(e) => setChecklist({ ...checklist, deskAllocation: { ...checklist.deskAllocation, completed: e.target.checked } })}
                                    style={{ width: '20px', height: '20px', accentColor: '#00C853', cursor: 'pointer' }}
                                />
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input
                                            type="radio"
                                            checked={checklist.deskAllocation.type === 'office'}
                                            onChange={() => setChecklist({ ...checklist, deskAllocation: { ...checklist.deskAllocation, type: 'office' } })}
                                            style={{ accentColor: '#0066FF' }}
                                        />
                                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674' }}>Office Desk</span>
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input
                                            type="radio"
                                            checked={checklist.deskAllocation.type === 'remote'}
                                            onChange={() => setChecklist({ ...checklist, deskAllocation: { ...checklist.deskAllocation, type: 'remote' } })}
                                            style={{ accentColor: '#0066FF' }}
                                        />
                                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B3674' }}>Remote / WFH</span>
                                    </label>
                                </div>

                                {checklist.deskAllocation.type === 'office' && (
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#A3AED0', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Building</label>
                                            <select
                                                value={checklist.deskAllocation.building}
                                                onChange={(e) => setChecklist({ ...checklist, deskAllocation: { ...checklist.deskAllocation, building: e.target.value } })}
                                                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none', fontSize: '0.875rem' }}>
                                                <option>Select...</option>
                                                <option>Building A</option>
                                                <option>Building B</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#A3AED0', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Floor</label>
                                            <select
                                                value={checklist.deskAllocation.floor}
                                                onChange={(e) => setChecklist({ ...checklist, deskAllocation: { ...checklist.deskAllocation, floor: e.target.value } })}
                                                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none', fontSize: '0.875rem' }}>
                                                <option>Select...</option>
                                                <option>1st Floor</option>
                                                <option>2nd Floor</option>
                                                <option>3rd Floor</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#A3AED0', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Desk Allocation Number</label>
                                            <input
                                                type="text"
                                                value={checklist.deskAllocation.deskNumber}
                                                onChange={(e) => setChecklist({ ...checklist, deskAllocation: { ...checklist.deskAllocation, deskNumber: e.target.value } })}
                                                placeholder="e.g., A-304"
                                                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none', fontSize: '0.875rem' }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 6. Shipment / Delivery Details */}
                        <div className="glass-panel" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', border: checklist.shipment.completed ? '2px solid #00C853' : '1px solid #E0E5F2' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '8px',
                                        background: checklist.shipment.completed ? '#E8F5E9' : '#F4F7FE',
                                        color: checklist.shipment.completed ? '#00C853' : '#A3AED0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Truck size={18} />
                                    </div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674' }}>Shipment / Delivery Details</h4>
                                    <span style={{ padding: '0.25rem 0.5rem', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 600, background: '#F4F7FE', color: '#A3AED0' }}>Optional</span>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={checklist.shipment.completed}
                                    onChange={(e) => setChecklist({ ...checklist, shipment: { ...checklist.shipment, completed: e.target.checked } })}
                                    style={{ width: '20px', height: '20px', accentColor: '#00C853', cursor: 'pointer' }}
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem' }}>Tracking ID</label>
                                    <input
                                        type="text"
                                        value={checklist.shipment.trackingId}
                                        onChange={(e) => setChecklist({ ...checklist, shipment: { ...checklist.shipment, trackingId: e.target.value } })}
                                        placeholder="e.g., TR123ABC789"
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none', fontSize: '0.875rem' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem' }}>Courier Name</label>
                                    <input
                                        type="text"
                                        value={checklist.shipment.courier}
                                        onChange={(e) => setChecklist({ ...checklist, shipment: { ...checklist.shipment, courier: e.target.value } })}
                                        placeholder="e.g., FedEx, DHL, Blue Dart"
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none', fontSize: '0.875rem' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem' }}>Expected Delivery</label>
                                    <input
                                        type="date"
                                        value={checklist.shipment.expectedDelivery}
                                        onChange={(e) => setChecklist({ ...checklist, shipment: { ...checklist.shipment, expectedDelivery: e.target.value } })}
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none', fontSize: '0.875rem' }}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
