'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Mail, Lock } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
    const params = useParams();
    const role = params.role as string;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getRoleInfo = (r: string) => {
        switch (r) {
            case 'admin': return { title: 'Admin Portal', color: '#0066FF' };
            case 'hr': return { title: 'HR Portal', color: '#00C853' };
            case 'candidate': return { title: 'Candidate Portal', color: '#FFAB00' };
            case 'it': return { title: 'IT Team Portal', color: '#FF1744' };
            default: return { title: 'Portal Login', color: '#0066FF' };
        }
    };

    const roleInfo = getRoleInfo(role);

    const router = useRouter();

    const formattedRole = typeof role === 'string' ? role.toLowerCase() : '';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login delay
        const btn = e.currentTarget.querySelector('button');
        if (btn) btn.innerText = 'Signing in...';

        setTimeout(() => {
            // Ensure router.push is simulated for all roles but specifically tested for hr
            if (formattedRole === 'hr') {
                router.push('/hr');
            } else if (formattedRole === 'candidate') {
                router.push('/candidate');
            } else if (formattedRole === 'it') {
                router.push('/it');
            } else if (formattedRole === 'admin') {
                router.push('/admin');
            } else {
                router.push(`/dashboard/${formattedRole}`);
            }
        }, 1000);
    };

    return (
        <div className="container flex-center" style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, var(--bg-color), #ffffff)' }}>
            <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '420px', padding: '3rem 2.5rem' }}>
                <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}>
                    <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Back to Roles
                </Link>

                <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        background: `linear-gradient(135deg, ${roleInfo.color}, ${roleInfo.color}dd)`,
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem auto',
                        color: 'white',
                        boxShadow: `0 10px 20px -5px ${roleInfo.color}66`
                    }}>
                        <Lock size={32} />
                    </div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{roleInfo.title}</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Welcome back. Please sign in.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label className="input-label">Email Address</label>
                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', left: '14px', top: '14px', color: 'var(--text-secondary)' }} />
                            <input
                                type="email"
                                className="input-field"
                                style={{ paddingLeft: '2.75rem' }}
                                placeholder="name@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label className="input-label">Password</label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', left: '14px', top: '14px', color: 'var(--text-secondary)' }} />
                            <input
                                type="password"
                                className="input-field"
                                style={{ paddingLeft: '2.75rem' }}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{
                            marginTop: '1rem',
                            background: roleInfo.color,
                            padding: '1rem',
                            fontSize: '1rem',
                            boxShadow: `0 4px 12px ${roleInfo.color}40`
                        }}
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center" style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                    Don't have an account? <a href="#" style={{ color: roleInfo.color, fontWeight: 600 }}>Contact support</a>
                </p>
            </div>
        </div>
    );
}
