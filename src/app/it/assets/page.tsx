'use client';

import {
    Search,
    Plus,
    Package,
    Monitor,
    Edit,
    Filter,
    ArrowDown
} from 'lucide-react';
import { useState } from 'react';

export default function AssetManagementPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const stats = [
        { label: 'Total Assets', value: '6', icon: Package, color: '#4A5568', bg: '#F4F7FE' },
        { label: 'Available', value: '3', icon: Package, color: '#00C853', bg: '#E8F5E9' },
        { label: 'Assigned', value: '3', icon: Monitor, color: '#0066FF', bg: '#E3F2FD' },
        { label: 'Maintenance', value: '0', icon: Package, color: '#FFAB00', bg: '#FFF8E1' }
    ];

    const assets = [
        { id: 'A-1201', serial: 'XYZ123456', type: 'Laptop', brand: 'Dell Latitude 5420', status: 'Available', statusColor: '#00C853', statusBg: '#E8F5E9', assignedTo: null },
        { id: 'A-1202', serial: 'ABCF89012', type: 'Laptop', brand: 'HP EliteBook 840', status: 'Assigned', statusColor: '#0066FF', statusBg: '#E3F2FD', assignedTo: 'Rohit Kumar', assignedDate: 'Dec 7, 2024' },
        { id: 'A-1203', serial: 'DEF345678', type: 'Laptop', brand: 'Lenovo ThinkPad X1', status: 'Assigned', statusColor: '#0066FF', statusBg: '#E3F2FD', assignedTo: 'Rahul Verma', assignedDate: 'Dec 5, 2024' },
        { id: 'A-1204', serial: 'GH1S61234', type: 'Laptop', brand: 'Apple MacBook Pro 14"', status: 'Available', statusColor: '#00C853', statusBg: '#E8F5E9', assignedTo: null },
        { id: 'M-2001', serial: 'MON567898', type: 'Monitor', brand: 'Dell UltraSharp 27"', status: 'Available', statusColor: '#00C853', statusBg: '#E8F5E9', assignedTo: null },
        { id: 'M-2002', serial: 'MON123456', type: 'Monitor', brand: 'LG 27" 4K', status: 'Assigned', statusColor: '#0066FF', statusBg: '#E3F2FD', assignedTo: 'Rohit Kumar', assignedDate: 'Dec 7, 2024' }
    ];

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>Asset Management</h1>
                    <p style={{ color: '#A3AED0' }}>Manage company hardware and equipment</p>
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
                    <Plus size={18} /> Add Asset
                </button>
            </div>

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {stats.map((stat, i) => (
                    <div key={i} className="glass-panel" style={{
                        padding: '1.5rem',
                        background: stat.bg,
                        borderRadius: '16px',
                        border: '1px solid transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <div>
                            <p style={{ fontSize: '0.875rem', color: '#4A5568', marginBottom: '0.5rem' }}>{stat.label}</p>
                            <h3 style={{ fontSize: '2rem', fontWeight: 700, color: stat.color }}>{stat.value}</h3>
                        </div>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: stat.color
                        }}>
                            <stat.icon size={24} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Search and Filter */}
            <div style={{ background: 'white', padding: '1rem', borderRadius: '16px', border: '1px solid #E0E5F2', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
                    <Search size={16} color="#A3AED0" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                        type="text"
                        placeholder="Search by Asset ID, Serial Number, Brand, or Model..."
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
                    <button style={{ background: 'transparent', border: '1px solid #E0E5F2', padding: '0.75rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#4A5568', cursor: 'pointer' }}>
                        <Filter size={14} /> Filter
                    </button>
                    <button style={{ background: 'transparent', border: '1px solid #E0E5F2', padding: '0.75rem 1.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#4A5568', cursor: 'pointer', fontWeight: 500 }}>
                        All Status <ArrowDown size={14} />
                    </button>
                </div>
            </div>

            {/* Assets Table */}
            <div className="glass-panel" style={{ background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2', overflow: 'hidden' }}>
                <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #E0E5F2' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674' }}>All Assets</h3>
                </div>

                {/* Table Header */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.5fr 1fr 2fr 1fr 1.5fr 1fr',
                    padding: '1rem 1.5rem',
                    borderBottom: '1px solid #E0E5F2',
                    background: '#F9FAFB',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#A3AED0',
                    textTransform: 'uppercase'
                }}>
                    <div>Asset ID</div>
                    <div>Serial Number</div>
                    <div>Type</div>
                    <div>Brand & Model</div>
                    <div>Status</div>
                    <div>Assigned To</div>
                    <div style={{ textAlign: 'right' }}>Actions</div>
                </div>

                {/* Table Rows */}
                {assets.map((asset) => (
                    <div key={asset.id} style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1.5fr 1fr 2fr 1fr 1.5fr 1fr',
                        padding: '1.5rem',
                        borderBottom: '1px solid #E0E5F2',
                        alignItems: 'center',
                        fontSize: '0.875rem',
                        color: '#2B3674'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Monitor size={16} color="#4A5568" />
                            <span style={{ fontWeight: 700 }}>{asset.id}</span>
                        </div>
                        <div style={{ color: '#4A5568' }}>{asset.serial}</div>
                        <div>{asset.type}</div>
                        <div style={{ fontWeight: 600 }}>{asset.brand}</div>
                        <div>
                            <span style={{
                                padding: '0.25rem 0.75rem',
                                borderRadius: '12px',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                background: asset.statusBg,
                                color: asset.statusColor,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.25rem'
                            }}>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: asset.statusColor }}></div>
                                {asset.status}
                            </span>
                        </div>
                        <div>
                            {asset.assignedTo ? (
                                <div>
                                    <p style={{ fontWeight: 600, color: '#0066FF', marginBottom: '0.125rem' }}>{asset.assignedTo}</p>
                                    <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>Since {asset.assignedDate}</p>
                                </div>
                            ) : (
                                <span style={{ color: '#A3AED0' }}>-</span>
                            )}
                        </div>
                        <div style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                            <button style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#4A5568',
                                cursor: 'pointer',
                                padding: '0.25rem'
                            }}>
                                <Edit size={16} />
                            </button>
                            {asset.status === 'Available' && (
                                <button style={{
                                    background: '#0066FF',
                                    color: 'white',
                                    border: 'none',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '6px',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                }}>
                                    Assign
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
