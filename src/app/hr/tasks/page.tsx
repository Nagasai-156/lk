'use client';

import {
    Clock,
    CheckCircle,
    AlertCircle,
    CheckSquare,
    Plus,
    Calendar,
    Filter,
    ArrowDown,
    Search,
    X,
    User
} from 'lucide-react';
import { DashboardHeader } from '../components/DashboardHeader';
import { useState } from 'react';

export default function TasksPage() {
    interface Task {
        id: number;
        title: string;
        candidate: string;
        role: string;
        type: string;
        priority: string;
        dueDate: string;
        status: string;
        assigned: string;
        icon: any;
        color: string;
    }

    const initialTasks: Task[] = [
        { id: 1, title: 'Verify Educational Certificates', candidate: 'Rahul Sharma', role: 'Senior Software Engineer', type: 'Documentation', priority: 'High', dueDate: 'Dec 8, 2025', status: 'Pending', assigned: 'Unassigned', icon: CheckSquare, color: '#FFAB00' },
        { id: 2, title: 'IT Setup - Laptop & Access', candidate: 'Priya Patel', role: 'Product Manager', type: 'IT Setup', priority: 'High', dueDate: 'Dec 5, 2025', status: 'Completed', assigned: 'Unassigned', icon: CheckCircle, color: '#00C853' },
        { id: 3, title: 'Background Check Verification', candidate: 'Amit Kumar', role: 'UI/UX Designer', type: 'Background Check', priority: 'Medium', dueDate: 'Dec 12, 2025', status: 'In Progress', assigned: 'HR Admin', icon: Clock, color: '#0066FF' },
        { id: 4, title: 'Schedule Orientation', candidate: 'Vikram Singh', role: 'Software Engineer', type: 'Onboarding', priority: 'High', dueDate: 'Dec 1, 2025', status: 'Overdue', assigned: 'HR Admin', icon: AlertCircle, color: '#FF1744' }
    ];

    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTask, setNewTask] = useState({
        title: '',
        candidate: '',
        priority: 'Medium',
        dueDate: '',
        type: 'Onboarding'
    });

    const stats = [
        { label: 'Pending', value: tasks.filter(t => t.status === 'Pending').length.toString(), color: '#FFAB00', icon: Clock, bg: '#FFF8E1' },
        { label: 'In Progress', value: tasks.filter(t => t.status === 'In Progress').length.toString(), color: '#0066FF', icon: CheckSquare, bg: '#E3F2FD' },
        { label: 'Completed', value: tasks.filter(t => t.status === 'Completed').length.toString(), color: '#00C853', icon: CheckCircle, bg: '#E8F5E9' },
        { label: 'Overdue', value: tasks.filter(t => t.status === 'Overdue').length.toString(), color: '#FF1744', icon: AlertCircle, bg: '#FFEBEE' }
    ];

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        const task: Task = {
            id: tasks.length + 1,
            title: newTask.title,
            candidate: newTask.candidate,
            role: 'New Hire', // Mock role
            type: newTask.type,
            priority: newTask.priority,
            dueDate: new Date(newTask.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            status: 'Pending',
            assigned: 'HR Admin',
            icon: CheckSquare,
            color: '#FFAB00'
        };
        setTasks([task, ...tasks]);
        setIsModalOpen(false);
        setNewTask({ title: '', candidate: '', priority: 'Medium', dueDate: '', type: 'Onboarding' });
    };

    const handleComplete = (id: number) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, status: 'Completed', color: '#00C853', icon: CheckCircle } : t));
    };

    return (
        <div style={{ position: 'relative' }}>
            <DashboardHeader />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#2B3674', marginBottom: '0.5rem' }}>Tasks</h1>
                    <p style={{ color: '#A3AED0' }}>Manage onboarding tasks and assignments</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
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
                        cursor: 'pointer'
                    }}>
                    <Plus size={18} /> Create Task
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                {stats.map((stat, i) => (
                    <div key={i} className="glass-panel" style={{
                        padding: '2rem 1.5rem',
                        background: stat.bg,
                        borderRadius: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid transparent'
                    }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: 'white',
                            border: `1px solid ${stat.color}40`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: stat.color,
                            marginBottom: '1rem'
                        }}>
                            <stat.icon size={24} />
                        </div>
                        <h3 style={{ fontSize: '2rem', fontWeight: 700, color: stat.color, lineHeight: 1, marginBottom: '0.5rem' }}>{stat.value}</h3>
                        <p style={{ fontSize: '0.875rem', color: '#4A5568', fontWeight: 500 }}>{stat.label}</p>
                    </div>
                ))}
            </div>

            <div style={{ background: 'white', padding: '1rem', borderRadius: '16px', border: '1px solid #E0E5F2', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ position: 'relative', width: '300px' }}>
                    <Search size={16} color="#A3AED0" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                        type="text"
                        placeholder="Search tasks or candidates..."
                        style={{
                            width: '100%',
                            padding: '0.6rem 0.75rem 0.6rem 2.5rem',
                            background: '#F9FAFB',
                            border: '1px solid #E0E5F2',
                            borderRadius: '8px',
                            outline: 'none',
                            fontSize: '0.875rem'
                        }}
                    />
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button style={{ background: 'transparent', border: '1px solid #E0E5F2', padding: '0.5rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#4A5568', cursor: 'pointer' }}>
                        All Statuses <ArrowDown size={14} />
                    </button>
                    <button style={{ background: 'transparent', border: '1px solid #E0E5F2', padding: '0.5rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#4A5568', cursor: 'pointer' }}>
                        All Types <ArrowDown size={14} />
                    </button>
                </div>
            </div>

            <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E0E5F2', overflow: 'hidden' }}>
                <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #E0E5F2', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2B3674' }}>All Tasks <span style={{ marginLeft: '0.5rem', fontWeight: 700 }}>{tasks.length}</span></h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1.5fr 1fr 0.8fr 1fr 1fr 1fr 0.8fr', padding: '1rem 1.5rem', borderBottom: '1px solid #E0E5F2', background: '#F9FAFB', fontSize: '0.65rem', fontWeight: 700, color: '#A3AED0', textTransform: 'uppercase' }}>
                    <div>Task</div>
                    <div>Candidate</div>
                    <div>Type</div>
                    <div>Priority</div>
                    <div>Due Date</div>
                    <div>Status</div>
                    <div>Assigned To</div>
                    <div style={{ textAlign: 'right' }}>Actions</div>
                </div>

                {tasks.map((task) => (
                    <div key={task.id} style={{
                        display: 'grid',
                        gridTemplateColumns: '2.5fr 1.5fr 1fr 0.8fr 1fr 1fr 1fr 0.8fr',
                        padding: '1.5rem',
                        borderBottom: '1px solid #E0E5F2',
                        alignItems: 'center',
                        fontSize: '0.8rem',
                        color: '#2B3674'
                    }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '8px',
                                background: `${task.color}20`,
                                color: task.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <task.icon size={18} />
                            </div>
                            <div>
                                <p style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{task.title}</p>
                                <p style={{ fontSize: '0.75rem', color: '#A3AED0' }}>Review and verify submitted documents</p>
                            </div>
                        </div>

                        <div>
                            <p style={{ fontWeight: 600, color: '#0066FF' }}>{task.candidate}</p>
                            <p style={{ fontSize: '0.7rem', color: '#A3AED0' }}>{task.role}</p>
                        </div>

                        <div style={{ color: '#4A5568' }}>{task.type}</div>
                        <div style={{ fontWeight: 600 }}>{task.priority}</div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4A5568' }}>
                            <Calendar size={14} color={task.status === 'Overdue' ? '#FF1744' : '#A3AED0'} />
                            <span style={{ color: task.status === 'Overdue' ? '#FF1744' : 'inherit' }}>{task.dueDate}</span>
                            {task.status === 'Overdue' && <AlertCircle size={14} color="#FF1744" />}
                        </div>

                        <div style={{ fontWeight: 600, color: '#1B2559' }}>{task.status}</div>
                        <div style={{ color: '#A3AED0' }}>{task.assigned}</div>

                        <div style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                            {task.status !== 'Completed' && (
                                <button
                                    onClick={() => handleComplete(task.id)}
                                    style={{
                                        background: '#00C853',
                                        color: 'white',
                                        border: 'none',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '6px',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.25rem',
                                        cursor: 'pointer'
                                    }}>
                                    <CheckCircle size={12} /> Complete
                                </button>
                            )}
                            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#2B3674', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>Edit</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
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
                }}>
                    <div className="glass-panel" style={{
                        background: 'white',
                        padding: '2rem',
                        borderRadius: '16px',
                        width: '500px',
                        position: 'relative',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    }}>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            style={{ position: 'absolute', right: '1.5rem', top: '1.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}>
                            <X size={24} color="#A3AED0" />
                        </button>

                        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2B3674', marginBottom: '1.5rem' }}>Create New Task</h2>
                        <form onSubmit={handleAddTask} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem' }}>Task Title</label>
                                <input
                                    type="text"
                                    required
                                    value={newTask.title}
                                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                                    placeholder="e.g. Verify Documents"
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem' }}>For Candidate</label>
                                <input
                                    type="text"
                                    required
                                    value={newTask.candidate}
                                    onChange={(e) => setNewTask({ ...newTask, candidate: e.target.value })}
                                    placeholder="Enter candidate name"
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none' }}
                                />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem' }}>Type</label>
                                    <select
                                        value={newTask.type}
                                        onChange={(e) => setNewTask({ ...newTask, type: e.target.value })}
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none' }}>
                                        <option>Onboarding</option>
                                        <option>Documentation</option>
                                        <option>IT Setup</option>
                                        <option>Background Check</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem' }}>Priority</label>
                                    <select
                                        value={newTask.priority}
                                        onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none' }}>
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2B3674', marginBottom: '0.5rem' }}>Due Date</label>
                                <input
                                    type="date"
                                    required
                                    value={newTask.dueDate}
                                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E0E5F2', outline: 'none' }}
                                />
                            </div>
                            <button
                                type="submit"
                                style={{
                                    marginTop: '1rem',
                                    background: '#0066FF',
                                    color: 'white',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    fontWeight: 700,
                                    border: 'none',
                                    cursor: 'pointer'
                                }}>
                                Add Task
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
