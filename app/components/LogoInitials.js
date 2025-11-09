export default function LogoInitials({ size = 'medium' }) {
  const sizes = {
    small: { container: 32, text: '0.875rem' },
    medium: { container: 40, text: '1rem' },
    large: { container: 48, text: '1.25rem' }
  };

  const currentSize = sizes[size];

  return (
    <div 
      style={{
        width: `${currentSize.container}px`,
        height: `${currentSize.container}px`,
        background: 'var(--primary)',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // boxShadow: 'var(--shadow-md)',
        fontWeight: '800',
        fontSize: currentSize.text,
        color: 'white',
        letterSpacing: '-0.5px',
        fontFamily: 'var(--font-inter), sans-serif',
        flexShrink: 0,
        transition: 'var(--transition)'
      }}
    >
      FS
    </div>
  );
}
