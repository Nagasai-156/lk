import Link from 'next/link';
import { Shield, Users, User, Monitor, Building2 } from 'lucide-react';

export default function Home() {
  const roles = [
    {
      id: 'admin',
      title: 'Admin Portal',
      description: 'Manage system settings and user access',
      icon: Shield,
      color: '#0066FF', // Primary Blue
      class: 'admin'
    },
    {
      id: 'hr',
      title: 'HR Portal',
      description: 'Manage recruitment and onboarding',
      icon: Users,
      color: '#00C853', // Success Green
      class: 'hr'
    },
    {
      id: 'candidate',
      title: 'Candidate Portal',
      description: 'Track your application status',
      icon: User,
      color: '#FFAB00', // Warning Orange
      class: 'candidate'
    },
    {
      id: 'it',
      title: 'IT Team Portal',
      description: 'Technical support and infrastructure',
      icon: Monitor,
      color: '#FF1744', // Danger Red
      class: 'it'
    }
  ];

  return (
    <main className="container flex-center" style={{ minHeight: '100vh', flexDirection: 'column' }}>
      <div className="mb-8 flex-center" style={{ flexDirection: 'column' }}>
        <div style={{ padding: '1rem', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '16px', marginBottom: '1.5rem' }}>
          <Building2 size={48} color="var(--primary-color)" />
        </div>
        <h1 className="page-title">Welcome to LokaChakra</h1>
        <p className="page-subtitle">Select your role to access the portal</p>
      </div>

      <div className="grid-roles">
        {roles.map((role) => (
          <Link href={`/login/${role.id}`} key={role.id} className={`glass-panel role-card ${role.class}`}>
            <div style={{
              background: role.color,
              padding: '1rem',
              borderRadius: '12px',
              marginBottom: '1.5rem',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 8px 16px -4px ${role.color}40`
            }}>
              <role.icon size={32} />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{role.title}</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{role.description}</p>
          </Link>
        ))}
      </div>

      <footer style={{ marginTop: '4rem', padding: '2rem', color: 'var(--text-secondary)', fontSize: '0.875rem', opacity: 0.8 }}>
        <p>Need help? Contact support at support@lokachakra.com</p>
      </footer>
    </main>
  );
}
