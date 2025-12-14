'use client';

import { UserCog, Plus, Search, Shield, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function UserManagementPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);
    const [newUser, setNewUser] = useState({ name: '', email: '', role: 'hr', status: 'active' });

    const users = [
        { id: 1, name: 'Admin User', email: 'admin@lokachakra.com', role: 'admin', status: 'Active', statusColor: '#00C853', statusBg: '#E8F5E9', initials: 'AD', lastActive: '2 mins ago' },
        { id: 2, name: 'Harika Sharma', email: 'harika@lokachakra.com', role: 'hr', status: 'Active', statusColor: '#00C853', statusBg: '#E8F5E9', initials: 'HS', lastActive: '5 mins ago' },
        { id: 3, name: 'Priya Reddy', email: 'priya@lokachakra.com', role: 'hr', status: 'Active', statusColor: '#00C853', statusBg: '#E8F5E9', initials: 'PR', lastActive: '1 hour ago' },
        { id: 4, name: 'Rajesh Kumar', email: 'rajesh@lokachakra.com', role: 'it', status: 'Active', statusColor: '#00C853', statusBg: '#E8F5E9', initials: 'RK', lastActive: '30 mins ago' },
        { id: 5, name: 'Amit Patel', email: 'amit@lokachakra.com', role: 'it', status: 'Active', statusColor: '#00C853', statusBg: '#E8F5E9', initials: 'AP', lastActive: '2 hours ago' },
        { id: 6, name: 'Sarah Johnson', email: 'sarah@lokachakra.com', role: 'hr', status: 'Inactive', statusColor: '#A3AED0', statusBg: '#F4F7FE', initials: 'SJ', lastActive: '5 days ago' }
    ];

    const roleInfo = {
        admin: { label: 'Admin', color: '#0066FF', bg: '#E3F2FD', permissions: 'Full System Access' },
        hr: { label: 'HR Team', color: '#FFAB00', bg: '#FFF8E1', permissions: 'Candidate & Document Management' },
        it: { label: 'IT Support', color: '#FF1744', bg: '#FFEBEE', permissions: 'Asset & Access Management' },
        candidate: { label: 'Candidate', color: '#00C853', bg: '#E8F5E9', permissions: 'Self Onboarding' }
    };

    const handleAddUser = () => {
        alert(`Adding new user: ${newUser.name} (${newUser.email}) as ${roleInfo[newUser.role as keyof typeof roleInfo].label}`);
        setNewUser({ name: '', email: '', role: 'hr', status: 'active' });
        setShowAddModal(false);
    };

    const handleDeleteUser = (user: any) => {
        if (confirm(`Are you sure you want to delete ${user.name}?`)) {
            alert(`User ${user.name} deleted successfully`);
        }
    };

    const handleToggleStatus = (user: any) => {
        const newStatus = user.status === 'Active' ? 'Inactive' : 'Active';
        alert(`User ${user.name} status changed to ${newStatus}`);
    };

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>User Management</h1>
                    <p style={{ color: '#A3AED0' }}>Manage user roles and permissions</p>
                </div>
                <button
                    onClick={() => setShowAddModal(true)}
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
                    <Plus size={18} /> Add User
                </button>
            </div>

            {/* Role Overview Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {Object.entries(roleInfo).map(([key, role]) => (
                    <div key={key} className="glass-panel" style={{
                        padding: '1.5rem',
                        background: role.bg,
                        borderRadius: '16px',
                        border: '1px solid transparent'
                    }}>
                        <div style={{ marginBottom: '1rem' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                background: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: role.color,
                                marginBottom: '1rem'
                            }}>
                                <Shield size={22} />
                            </div>
                        </div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674', marginBottom: '0.5rem' }}>{role.label}</h4>
                        <p style={{ fontSize: '0.75rem', color: '#A3AED0', marginBottom: '0.75rem' }}>{role.permissions}</p>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: role.color }}>
                            {users.filter(u => u.role === key && u.status === 'Active').length}
                        </div>
                        <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>Active Users</p>
                    </div>
                ))}
            </div>

            {/* Search Bar */}
            <div style={{ background: 'white', padding: '1rem', borderRadius: '16px', border: '1px solid #E0E5F2', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
                    <Search size={16} color="#A3AED0" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                        type="text"
                        placeholder="Search users by name or email..."
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
                        <option>All Roles</option>
                        <option>Admin</option>
                        <option>HR Team</option>
                        <option>IT Support</option>
                        <option>Candidate</option>
                    </select>
                    <select style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none', fontSize: '0.875rem', cursor: 'pointer' }}>
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>
            </div>

            {/* Users Table */}
            <div className="glass-panel" style={{ background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2', overflow: 'hidden' }}>
                <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #E0E5F2' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674' }}>All Users ({users.length})</h3>
                </div>

                {/* Table Header */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1.5fr 1fr 1fr 1fr',
                    padding: '1rem 1.5rem',
                    borderBottom: '1px solid #E0E5F2',
                    background: '#F9FAFB',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#A3AED0',
                    textTransform: 'uppercase'
                }}>
                    <div>USER</div>
                    <div>ROLE & PERMISSIONS</div>
                    <div>STATUS</div>
                    <div>LAST ACTIVE</div>
                    <div style={{ textAlign: 'right' }}>ACTIONS</div>
                </div>

                {/* Table Rows */}
                {users.map((user) => (
                    <div key={user.id} style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1.5fr 1fr 1fr 1fr',
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
                                background: roleInfo[user.role as keyof typeof roleInfo].bg,
                                color: roleInfo[user.role as keyof typeof roleInfo].color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700
                            }}>{user.initials}</div>
                            <div>
                                <p style={{ fontWeight: 700, color: '#2B3674', marginBottom: '0.125rem' }}>{user.name}</p>
                                <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>{user.email}</p>
                            </div>
                        </div>

                        <div>
                            <span style={{
                                padding: '0.25rem 0.75rem',
                                borderRadius: '12px',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                background: roleInfo[user.role as keyof typeof roleInfo].bg,
                                color: roleInfo[user.role as keyof typeof roleInfo].color,
                                display: 'inline-block',
                                marginBottom: '0.25rem'
                            }}>{roleInfo[user.role as keyof typeof roleInfo].label}</span>
                            <p style={{ fontSize: '0.7rem', color: '#A3AED0' }}>{roleInfo[user.role as keyof typeof roleInfo].permissions}</p>
                        </div>

                        <div>
                            <span style={{
                                padding: '0.25rem 0.75rem',
                                borderRadius: '12px',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                background: user.statusBg,
                                color: user.statusColor,
                                cursor: 'pointer'
                            }} onClick={() => handleToggleStatus(user)}>
                                {user.status}
                            </span>
                        </div>

                        <div style={{ fontSize: '0.875rem', color: '#A3AED0' }}>
                            {user.lastActive}
                        </div>

                        <div style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                            <button
                                onClick={() => alert(`Editing user: ${user.name}`)}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#0066FF',
                                    cursor: 'pointer',
                                    padding: '0.25rem'
                                }}>
                                <Edit size={16} />
                            </button>
                            {user.role !== 'admin' && (
                                <button
                                    onClick={() => handleDeleteUser(user)}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: '#FF1744',
                                        cursor: 'pointer',
                                        padding: '0.25rem'
                                    }}>
                                    <Trash2 size={16} />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Add User Modal */}
            {showAddModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                    backdropFilter: 'blur(5px)'
                }} onClick={() => setShowAddModal(false)}>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="glass-panel"
                        style={{
                            background: 'white',
                            padding: '2rem',
                            borderRadius: '16px',
                            width: '500px',
                            maxWidth: '90vw'
                        }}
                    >
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2B3674', marginBottom: '1.5rem' }}>Add New User</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem' }}>Full Name</label>
                                <input
                                    type="text"
                                    value={newUser.name}
                                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                    placeholder="Enter full name"
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none', fontSize: '0.875rem' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem' }}>Email Address</label>
                                <input
                                    type="email"
                                    value={newUser.email}
                                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                    placeholder="user@lokachakra.com"
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none', fontSize: '0.875rem' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem' }}>Role</label>
                                <select
                                    value={newUser.role}
                                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none', fontSize: '0.875rem', cursor: 'pointer' }}>
                                    <option value="hr">HR Team</option>
                                    <option value="it">IT Support</option>
                                    <option value="admin">Admin</option>
                                </select>
                                <p style={{ fontSize: '0.75rem', color: '#A3AED0', marginTop: '0.5rem' }}>
                                    {roleInfo[newUser.role as keyof typeof roleInfo].permissions}
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button
                                onClick={() => setShowAddModal(false)}
                                style={{
                                    flex: 1,
                                    padding: '0.75rem',
                                    background: 'white',
                                    border: '1px solid #E0E5F2',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                }}>
                                Cancel
                            </button>
                            <button
                                onClick={handleAddUser}
                                style={{
                                    flex: 1,
                                    padding: '0.75rem',
                                    background: '#0066FF',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                }}>
                                Add User
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
