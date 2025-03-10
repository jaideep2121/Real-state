module.exports = {
    theme: {
      extend: {
        animation: {
          'color-change': 'colorCycle 2s infinite',
        },
        keyframes: {
          colorCycle: {
            '0%': { color: '#ef4444' }, // Red-500
            '50%': { color: '#3b82f6' }, // Blue-500
            '100%': { color: '#10b981' }, // Green-500
          },
        },
      },
    },
  };
  