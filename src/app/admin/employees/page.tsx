'use client';

import { Search, Filter } from 'lucide-react';
import { useState } from 'react';

export default function EmployeesDirectory() {
    const [searchQuery, setSearchQuery] = useState('');

    const employees = [
        { id: 1, name: 'Rahul Verma', email: 'rahul.verma@lokachakra.com', role: 'Senior Developer', department: 'Engineering', status: 'Active', statusColor: '#00C853', statusBg: '#E8F5E9', empId: 'EMP001', initials: 'R' },
        { id: 2, name: 'Priya Singh', email: 'priya.singh@lokachakra.com', role: 'HR Manager', department: 'Human Resources', status: 'Active', statusColor: '#00C853', statusBg: '#E8F5E9', empId: 'EMP002', initials: 'P' },
        { id: 3, name: 'Ankit Kumar', email: 'ankit.k@lokachakra.com', role: 'Frontend Developer', department: 'Engineering', status: 'Onboarding', statusColor: '#FFAB00', statusBg: '#FFF8E1', empId: 'Not Assigned', initials: 'A' }
    ];

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>Employee Directory</h1>
                    <p style={{ color: '#A3AED0' }}>Manage employee records and activate new joiners</p>
                </div>
            </div>

            {/* Search and Filter Bar */}
            <div style={{ background: 'white', padding: '1rem', borderRadius: '16px', border: '1px solid #E0E5F2', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
                    <Search size={16} color="#A3AED0" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                        type="text"
                        placeholder="Search by name, email or ID"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.75rem 0.75rem 0.75rem 3rem',
                            background: '#F9FAFB',
                            border: '1px solid #E0E5F2',
                            borderRadius: '8px',
                            outline: 'none',
                            fontSize: '0.875rem'
                        }}
                    />
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <select style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none', fontSize: '0.875rem', cursor: 'pointer' }}>
                        <option>All Departments</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Operations</option>
                    </select>
                    <select style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none', fontSize: '0.875rem', cursor: 'pointer' }}>
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Onboarding</option>
                        <option>Inactive</option>
                    </select>
                </div>
            </div>

            {/* Employee Table */}
            <div className="glass-panel" style={{ background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2', overflow: 'hidden' }}>
                {/* Table Header */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 2fr 1fr 1.5fr 150px',
                    padding: '1rem 1.5rem',
                    borderBottom: '1px solid #E0E5F2',
                    background: '#F9FAFB',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#A3AED0',
                    textTransform: 'uppercase'
                }}>
                    <div>EMPLOYEE</div>
                    <div>DETAILS</div>
                    <div>STATUS</div>
                    <div>EMPLOYEE ID</div>
                    <div style={{ textAlign: 'right' }}>ACTIONS</div>
                </div>

                {/* Table Rows */}
                {employees.map((employee) => (
                    <div key={employee.id} style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 2fr 1fr 1.5fr 150px',
                        padding: '1.5rem',
                        borderBottom: '1px solid #E0E5F2',
                        alignItems: 'center',
                        fontSize: '0.875rem',
                        color: '#2B3674'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: '#E3F2FD',
                                color: '#0066FF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700
                            }}>{employee.initials}</div>
                            <div>
                                <p style={{ fontWeight: 700, color: '#2B3674', marginBottom: '0.125rem' }}>{employee.name}</p>
                                <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>{employee.email}</p>
                            </div>
                        </div>

                        <div>
                            <p style={{ fontWeight: 600, color: '#2B3674', marginBottom: '0.125rem' }}>{employee.role}</p>
                            <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>{employee.department}</p>
                        </div>

                        <div>
                            <span style={{
                                padding: '0.25rem 0.75rem',
                                borderRadius: '12px',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                background: employee.statusBg,
                                color: employee.statusColor
                            }}>{employee.status}</span>
                        </div>

                        <div style={{ fontWeight: 600, color: employee.empId === 'Not Assigned' ? '#A3AED0' : '#0066FF' }}>
                            {employee.empId}
                        </div>

                        <div style={{ textAlign: 'right' }}>
                            {employee.status === 'Onboarding' ? (
                                <button style={{
                                    background: '#0066FF',
                                    color: 'white',
                                    border: 'none',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '6px',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    Activate & Generate ID
                                </button>
                            ) : (
                                <button style={{
                                    background: 'transparent',
                                    color: '#A3AED0',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '1.25rem'
                                }}>
                                    •••
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
