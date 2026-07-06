import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Settings, Play } from 'lucide-react';

export default function TestConfig() {
  const navigate = useNavigate();
  const [tema, setTema] = useState('0100');
  const [longitud, setLongitud] = useState(50);
  const [modo, setModo] = useState('oficial');

  const startTest = () => {
    navigate('/test', { state: { tema, longitud, modo } });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-panel">
      <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
        <Settings /> Configurar Test
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Tema</label>
          <select 
            style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid var(--glass-border)' }}
            value={tema} 
            onChange={(e) => setTema(e.target.value)}
          >
            <option value="0100" style={{ color: 'black' }}>Tema 0100 - Constitución Española</option>
            <option value="0500" style={{ color: 'black' }}>Tema 0500 - Unión Europea</option>
            <option value="0680" style={{ color: 'black' }}>Tema 0680 - Ley Municipios de Canarias</option>
            <option value="0800" style={{ color: 'black' }}>Tema 0800 - Estatuto de Canarias</option>
            <option value="0850" style={{ color: 'black' }}>Tema 0850 - Instituciones Estatutarias Canarias</option>
            <option value="1000" style={{ color: 'black' }}>Tema 1000 - Atención Ciudadana y Archivo</option>
            <option value="1300" style={{ color: 'black' }}>Tema 1300 - Ley de Contratos del Sector Público ⭐</option>
            <option value="1880" style={{ color: 'black' }}>Tema 1880 - Ley de Cabildos Insulares</option>
            <option value="2200" style={{ color: 'black' }}>Tema 2200 - Empleo Público (TREBEP) ⭐</option>
            <option value="2300" style={{ color: 'black' }}>Tema 2300 - Protección de Datos (RGPD)</option>
            <option value="2350" style={{ color: 'black' }}>Tema 2350 - Transparencia y Buen Gobierno</option>
            <option value="2600" style={{ color: 'black' }}>Tema 2600 - Jurisdicción Contencioso-Administrativa</option>
            <option value="2900" style={{ color: 'black' }}>Tema 2900 - Subvenciones (LGS y Decreto de Canarias)</option>
            <option value="3339" style={{ color: 'black' }}>Tema 3339 - Procedimiento Administrativo (Leyes 39 y 40/2015) ⭐⭐</option>
            <option value="4570" style={{ color: 'black' }}>Tema 4570 - Presupuestos y Hacienda Pública de Canarias</option>
            <option value="9900" style={{ color: 'black' }}>Tema 9900 - Igualdad de Género (LO 3/2007 y Ley Canaria 1/2010)</option>
            <option value="9950" style={{ color: 'black' }}>Tema 9950 - Discapacidad y Dependencia (RDL 1/2013 y Ley 39/2006)</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Modo de Simulación</label>
          <select 
            style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid var(--glass-border)' }}
            value={modo} 
            onChange={(e) => {
              setModo(e.target.value);
              if (e.target.value === 'oficial') setLongitud(50);
            }}
          >
            <option value="oficial" style={{ color: 'black' }}>Examen Oficial (50 preg / 100 min)</option>
            <option value="libre" style={{ color: 'black' }}>Modo Libre</option>
          </select>
        </div>

        {modo === 'libre' && (
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Número de Preguntas</label>
            <input 
              type="number" 
              style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid var(--glass-border)' }}
              value={longitud} 
              onChange={(e) => setLongitud(Number(e.target.value))}
              min="5" max="100"
            />
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>Cancelar</button>
        <button className="btn btn-primary" onClick={startTest}><Play size={18} /> Comenzar Test</button>
      </div>
    </motion.div>
  );
}
