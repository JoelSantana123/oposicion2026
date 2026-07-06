import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StorageManager } from '../services/storageManager';
import { Play, BookOpen, BarChart2, AlertCircle, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    setStats(StorageManager.getStats());
  }, []);

  if (!stats) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel"
    >
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Oposiciones C2 CAC 2026</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Plataforma de Entrenamiento y Tests</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', background: 'rgba(59, 130, 246, 0.1)' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}>{stats.totalTests}</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Tests Realizados</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', background: 'rgba(16, 185, 129, 0.1)' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--success-color)' }}>
            {stats.averageScore.toFixed(2)} / 10
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Nota Media</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <button className="btn btn-primary" onClick={() => navigate('/config')}>
          <Play size={20} /> Iniciar Nuevo Test por Tema
        </button>
        <button 
          className="btn" 
          onClick={() => navigate('/simulacro')}
          style={{ 
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', 
            color: 'white', 
            fontWeight: 'bold',
            border: '1px solid #fbbf24',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '1rem',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)',
            transition: 'all 0.2s'
          }}
        >
          <Award size={20} /> 🏆 Simulacro Oficial / Examen Real (Multitema Ponderado ⭐⭐)
        </button>
        <button className="btn btn-secondary" onClick={() => alert('Próximamente: Repaso de fallos')}>
          <AlertCircle size={20} /> Repasar Fallos
        </button>
        <button className="btn btn-secondary" onClick={() => alert('Próximamente: Historial completo')}>
          <BarChart2 size={20} /> Ver Estadísticas Detalladas
        </button>
      </div>
    </motion.div>
  );
}
