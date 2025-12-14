'use client';

import { DollarSign, Calendar, Users, Download } from 'lucide-react';

export default function PayrollManagement() {

    const payrollData = [
        { name: 'Rahul Verma', empId: 'EMP001', role: 'Senior Developer', month: 'October 2024', amount: '₹1,25,000', status: 'Paid', statusColor: '#00C853', statusBg: '#E8F5E9', initials: 'R' },
        { name: 'Priya Singh', empId: 'EMP002', role: 'HR Manager', month: 'October 2024', amount: '₹95,000', status: 'Paid', statusColor: '#00C853', statusBg: '#E8F5E9', initials: 'P' },
        { name: 'Amit Kumar', empId: 'EMP003', role: 'DevOps Engineer', month: 'October 2024', amount: '₹1,10,000', status: 'Processing', statusColor: '#0066FF', statusBg: '#E3F2FD', initials: 'A' },
        { name: 'Sneha Gupta', empId: 'EMP008', role: 'UX Designer', month: 'October 2024', amount: '₹85,000', status: 'Pending', statusColor: '#FFAB00', statusBg: '#FFF8E1', initials: 'S' }
    ];

    const handleRunPayroll = () => {
        alert('Payroll processing initiated for 14 employees');
    };

    const handleDownloadReport = () => {
        alert('Downloading Salary Disbursement Report for October 2024');
    };

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>Payroll Management</h1>
                    <p style={{ color: '#A3AED0' }}>Process salaries and view payslips</p>
                </div>
                <button
                    onClick={handleRunPayroll}
                    style={{
                        background: '#0066FF',
                        color: 'white',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '8px',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer',
                        fontSize: '0.875rem'
                    }}>
                    <DollarSign size={18} /> Run Payroll
                </button>
            </div>

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div className="glass-panel" style={{ padding: '2rem', background: '#E8F5E9', borderRadius: '16px', border: '1px solid transparent' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <p style={{ fontSize: '0.875rem', color: '#4A5568', fontWeight: 600 }}>Total Payroll Cost</p>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#00C853'
                        }}>
                            <DollarSign size={22} />
                        </div>
                    </div>
                    <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#00C853', marginBottom: '0.5rem' }}>₹42,50,000</h3>
                    <p style={{ fontSize: '0.75rem', color: '#4A5568' }}>+12% vs last month</p>
                </div>

                <div className="glass-panel" style={{ padding: '2rem', background: '#E3F2FD', borderRadius: '16px', border: '1px solid transparent' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <p style={{ fontSize: '0.875rem', color: '#4A5568', fontWeight: 600 }}>Next Pay Date</p>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#0066FF'
                        }}>
                            <Calendar size={22} />
                        </div>
                    </div>
                    <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#0066FF', marginBottom: '0.5rem' }}>Nov 1, 2024</h3>
                    <p style={{ fontSize: '0.75rem', color: '#4A5568' }}>22 days remaining</p>
                </div>

                <div className="glass-panel" style={{ padding: '2rem', background: '#FFF8E1', borderRadius: '16px', border: '1px solid transparent' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <p style={{ fontSize: '0.875rem', color: '#4A5568', fontWeight: 600 }}>Pending Process</p>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFAB00'
                        }}>
                            <Users size={22} />
                        </div>
                    </div>
                    <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#FFAB00', marginBottom: '0.5rem' }}>14 Employees</h3>
                    <p style={{ fontSize: '0.75rem', color: '#4A5568' }}>Action required</p>
                </div>
            </div>

            {/* Salary Disbursement Table */}
            <div className="glass-panel" style={{ background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2', overflow: 'hidden' }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid #E0E5F2', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2B3674' }}>Salary Disbursement - Oct 2024</h3>
                    <button
                        onClick={handleDownloadReport}
                        style={{
                            background: 'transparent',
                            color: '#0066FF',
                            border: '1px solid #0066FF',
                            padding: '0.5rem 1rem',
                            borderRadius: '6px',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                        <Download size={16} /> Download Report
                    </button>
                </div>

                {/* Table Header */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1.5fr 1fr 1fr',
                    padding: '1rem 1.5rem',
                    borderBottom: '1px solid #E0E5F2',
                    background: '#F9FAFB',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#A3AED0',
                    textTransform: 'uppercase'
                }}>
                    <div>EMPLOYEE DETAILS</div>
                    <div>MONTH</div>
                    <div>AMOUNT</div>
                    <div>STATUS</div>
                    <div style={{ textAlign: 'right' }}>ACTIONS</div>
                </div>

                {/* Table Rows */}
                {payrollData.map((item, i) => (
                    <div key={i} style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr 1.5fr 1fr 1fr',
                        padding: '1.5rem',
                        borderBottom: i < payrollData.length - 1 ? '1px solid #E0E5F2' : 'none',
                        alignItems: 'center',
                        fontSize: '0.875rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: '#E3F2FD',
                                color: '#0066FF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                fontSize: '0.875rem'
                            }}>{item.initials}</div>
                            <div>
                                <p style={{ fontWeight: 700, color: '#2B3674', marginBottom: '0.125rem' }}>{item.name}</p>
                                <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>{item.empId} • {item.role}</p>
                            </div>
                        </div>

                        <div style={{ color: '#4A5568' }}>{item.month}</div>

                        <div style={{ fontWeight: 700, color: '#2B3674', fontSize: '1rem' }}>{item.amount}</div>

                        <div>
                            <span style={{
                                padding: '0.25rem 0.75rem',
                                borderRadius: '12px',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                background: item.statusBg,
                                color: item.statusColor
                            }}>{item.status}</span>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                            <button style={{
                                background: 'transparent',
                                color: '#A3AED0',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '1.25rem'
                            }}>
                                •••
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
