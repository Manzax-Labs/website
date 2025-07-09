import { render, screen } from '@testing-library/react';
import { ThemeProvider, useTheme } from './ThemeContext';

// Test component that uses the theme context
function TestComponent() {
  const { currentTheme, themes } = useTheme();
  return (
    <div>
      <span data-testid="current-theme">{currentTheme.name}</span>
      <span data-testid="themes-count">{themes.length}</span>
    </div>
  );
}

describe('ThemeContext', () => {
  it('provides theme context to children', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('current-theme')).toHaveTextContent('Forest');
    expect(screen.getByTestId('themes-count')).toHaveTextContent('6');
  });

  it('throws error when useTheme is used outside ThemeProvider', () => {
    // Suppress console.error for this test
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => {
      render(<TestComponent />);
    }).toThrow('useTheme must be used within a ThemeProvider');
    
    consoleSpy.mockRestore();
  });
}); 