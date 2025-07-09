import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import { ThemeProvider } from '../../contexts/ThemeContext';

describe('Layout', () => {
  it('renders header and footer', () => {
    render(
      <ThemeProvider>
        <Layout>
          <div>Test content</div>
        </Layout>
      </ThemeProvider>
    );
    
    // Header should be rendered
    expect(screen.getByText('Manzax')).toBeInTheDocument();
    
    // Test content should be rendered
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <ThemeProvider>
        <Layout>
          <h1>Custom Content</h1>
          <p>This is a test</p>
        </Layout>
      </ThemeProvider>
    );
    
    expect(screen.getByText('Custom Content')).toBeInTheDocument();
    expect(screen.getByText('This is a test')).toBeInTheDocument();
  });
}); 