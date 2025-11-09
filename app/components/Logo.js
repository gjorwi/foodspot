import { UtensilsCrossed } from 'lucide-react';

export default function Logo({ size = 'medium', showText = true }) {
  const sizes = {
    small: { icon: 20, text: 'text-lg' },
    medium: { icon: 28, text: 'text-2xl' },
    large: { icon: 36, text: 'text-3xl' }
  };

  const currentSize = sizes[size];

  return (
    <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div 
        className="logo-icon"
        style={{
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
          borderRadius: 'var(--radius-md)',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-md)',
          transition: 'var(--transition)'
        }}
      >
        <UtensilsCrossed 
          size={currentSize.icon} 
          color="white" 
          strokeWidth={2.5}
        />
      </div>
      {showText && (
        <div className="logo-text">
          <h1 
            className={currentSize.text}
            style={{
              fontWeight: '700',
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: 0,
              lineHeight: 1
            }}
          >
            FoodSpot
          </h1>
          <p 
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              margin: 0,
              letterSpacing: '0.5px',
              fontWeight: '500'
            }}
          >
            Descubre Sabores
          </p>
        </div>
      )}
    </div>
  );
}
