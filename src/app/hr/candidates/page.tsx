'use client';

import {
    Search,
    Plus,
    Filter,
    Download,
    MoreHorizontal,
    Eye,
    Calendar,
} from 'lucide-react';
import { DashboardHeader } from '../components/DashboardHeader';

export default function CandidatesPage() {
    const candidates = [
        { id: 1, name: 'Rahul Sharma', email: 'rahul.sharma@company.com', role: 'Senior Software Engineer', dept: 'Engineering', date: 'Dec 15, 2025', status: 'Pending Verification', docs: { done: 3, total: 3 }, tasks: { done: 1, total: 1 }, color: '#0066FF', initials: 'RS' },
        { id: 2, name: 'Priya Patel', email: 'priya.patel@company.com', role: 'Product Manager', dept: 'Product', date: 'Dec 10, 2025', status: 'Orientation Scheduled', docs: { done: 2, total: 3 }, tasks: { done: 1, total: 1 }, color: '#0066FF', initials: 'PP' },
        { id: 3, name: 'Amit Kumar', email: 'amit.kumar@company.com', role: 'UI/UX Designer', dept: 'Design', date: 'Dec 20, 2025', status: 'Documents Verified', docs: { done: 3, total: 3 }, tasks: { done: 1, total: 1 }, color: '#0066FF', initials: 'AK' },
        { id: 4, name: 'Sneha Reddy', email: 'sneha.reddy@company.com', role: 'Marketing Manager', dept: 'Marketing', date: 'Nov 30, 2025', status: 'Onboarding Complete', docs: { done: 1, total: 1 }, tasks: { done: 0, total: 0 }, color: '#0066FF', initials: 'SR' },
        { id: 5, name: 'Vikram Singh', email: 'vikram.singh@company.com', role: 'Software Engineer', dept: 'Engineering', date: 'Dec 18, 2025', status: 'IT Setup Pending', docs: { done: 2, total: 3 }, tasks: { done: 1, total: 1 }, color: '#0066FF', initials: 'VS' },
    ];

    return (
        <div>
            <DashboardHeader />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>Candidates</h1>
                    <p style={{ color: '#A3AED0' }}>Manage and track all onboarding candidates</p>
                </div>
                <button style={{
                    background: '#0066FF',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer'
                }}>
                    <Plus size={18} /> Add New Candidate
                </button>
            </div>

            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #E0E5F2', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <Search size={18} color="#A3AED0" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                            type="text"
                            placeholder="Search by name, email, or position..."
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem 0.75rem 3rem',
                                background: '#F9FAFB',
                                border: '1px solid #E0E5F2',
                                borderRadius: '8px',
                                outline: 'none'
                            }}
                        />
                    </div>
                    <select style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', color: '#2B3674', minWidth: '150px' }}>
                        <option>All Statuses</option>
                        <option>Pending</option>
                        <option>Completed</option>
                    </select>
                    <select style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', color: '#2B3674', minWidth: '150px' }}>
                        <option>All Departments</option>
                        <option>Engineering</option>
                        <option>Design</option>
                        <option>Product</option>
                    </select>
                </div>
            </div>

            <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2', overflow: 'hidden' }}>
                {/* Table Header */}
                <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #E0E5F2', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674' }}>All Candidates <span style={{ marginLeft: '0.5rem', color: '#A3AED0', fontSize: '0.875rem' }}>5</span></h3>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button style={{ background: 'transparent', border: 'none', color: '#4A5568', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>
                            <Filter size={16} /> More Filters
                        </button>
                        <button style={{ background: 'transparent', border: 'none', color: '#4A5568', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>
                            <Download size={16} /> Export
                        </button>
                    </div>
                </div>

                {/* Table Head */}
                <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1.5fr 1fr 1fr 1.5fr 0.8fr 0.8fr 0.8fr', padding: '1rem 1.5rem', borderBottom: '1px solid #E0E5F2', background: '#F9FAFB', fontSize: '0.75rem', fontWeight: 700, color: '#A3AED0', textTransform: 'uppercase' }}>
                    <div>Candidate</div>
                    <div>Position</div>
                    <div>Department</div>
                    <div>Joining Date</div>
                    <div>Status</div>
                    <div style={{ textAlign: 'center' }}>Docs</div>
                    <div style={{ textAlign: 'center' }}>Tasks</div>
                    <div style={{ textAlign: 'right' }}>Actions</div>
                </div>

                {/* Table Body */}
                <div>
                    {candidates.map((c) => (
                        <div key={c.id} style={{
                            display: 'grid',
                            gridTemplateColumns: '2.5fr 1.5fr 1fr 1fr 1.5fr 0.8fr 0.8fr 0.8fr',
                            padding: '1.25rem 1.5rem',
                            borderBottom: '1px solid #E0E5F2',
                            alignItems: 'center',
                            fontSize: '0.875rem',
                            color: '#2B3674',
                            transition: 'background 0.2s',
                            cursor: 'pointer'
                        }}
                            className="hover:bg-gray-50"
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: '#0066FF',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.875rem',
                                    fontWeight: 700
                                }}>
                                    {c.initials}
                                </div>
                                <div>
                                    <p style={{ fontWeight: 700, color: '#1B2559' }}>{c.name}</p>
                                    <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>{c.email}</p>
                                </div>
                            </div>
                            <div style={{ fontWeight: 600 }}>{c.role}</div>
                            <div>{c.dept}</div>
                            <div style={{ color: '#4A5568', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={14} color="#A3AED0" /> {c.date}
                            </div>
                            <div>
                                <span style={{
                                    color: '#1B2559',
                                    fontWeight: 500
                                }}>
                                    {c.status}
                                </span>
                            </div>
                            <div style={{ textAlign: 'center', fontWeight: 700 }}>
                                {c.docs.done} <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: c.docs.done === c.docs.total ? '#00C853' : '#FFAB00', display: 'inline-block', marginLeft: '4px' }}></span>
                            </div>
                            <div style={{ textAlign: 'center', fontWeight: 700 }}>
                                <div style={{ fontSize: '0.75rem', color: '#1B2559' }}>{c.tasks.done}</div>
                                <div style={{ fontSize: '0.65rem', color: '#A3AED0' }}>pending</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <button style={{ background: 'transparent', border: 'none', color: '#4A5568', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                                    <Eye size={16} /> View
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
