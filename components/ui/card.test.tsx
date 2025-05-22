import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './card'; // Adjust the import path as necessary

describe('Card Components', () => {
  describe('Card', () => {
    it('should render children correctly', () => {
      render(<Card><div>Child Content</div></Card>);
      expect(screen.getByText('Child Content')).toBeInTheDocument();
    });

    it('should apply className prop', () => {
      const { container } = render(<Card className="custom-card">Test</Card>);
      expect(container.firstChild).toHaveClass('custom-card');
    });

    it('should have the default card classes', () => {
      const { container } = render(<Card>Test</Card>);
      expect(container.firstChild).toHaveClass('rounded-lg border bg-card text-card-foreground shadow-sm');
    });
  });

  describe('CardHeader', () => {
    it('should render children correctly', () => {
      render(<CardHeader><div>Header Content</div></CardHeader>);
      expect(screen.getByText('Header Content')).toBeInTheDocument();
    });

    it('should apply className prop', () => {
      const { container } = render(<CardHeader className="custom-header">Test</CardHeader>);
      expect(container.firstChild).toHaveClass('custom-header');
    });

    it('should have the default card header classes', () => {
      const { container } = render(<CardHeader>Test</CardHeader>);
      expect(container.firstChild).toHaveClass('flex flex-col space-y-1.5 p-6');
    });
  });

  describe('CardTitle', () => {
    it('should render text content correctly', () => {
      render(<CardTitle>My Title</CardTitle>);
      expect(screen.getByText('My Title')).toBeInTheDocument();
    });

    it('should apply className prop', () => {
      render(<CardTitle className="custom-title">My Title</CardTitle>);
      expect(screen.getByText('My Title')).toHaveClass('custom-title');
    });

    it('should have the default card title classes', () => {
      render(<CardTitle>My Title</CardTitle>);
      expect(screen.getByText('My Title')).toHaveClass('text-2xl font-semibold leading-none tracking-tight');
    });

    it('should render as div by default', () => { // Changed from h3 to div
      const { container } = render(<CardTitle>My Title</CardTitle>);
      expect(container.querySelector('div')).toBeInTheDocument(); // Check for div
      // Optionally, verify the text is still there within this div
      expect(screen.getByText('My Title').tagName).toBe('DIV');
    });
  });

  describe('CardDescription', () => {
    it('should render text content correctly', () => {
      render(<CardDescription>My Description</CardDescription>);
      expect(screen.getByText('My Description')).toBeInTheDocument();
    });

    it('should apply className prop', () => {
      render(<CardDescription className="custom-description">My Description</CardDescription>);
      expect(screen.getByText('My Description')).toHaveClass('custom-description');
    });

    it('should have the default card description classes', () => {
      render(<CardDescription>My Description</CardDescription>);
      expect(screen.getByText('My Description')).toHaveClass('text-sm text-muted-foreground');
    });

    it('should render as div by default', () => { // Changed from p to div
      const { container } = render(<CardDescription>My Description</CardDescription>);
      expect(container.querySelector('div')).toBeInTheDocument(); // Check for div
      // Optionally, verify the text is still there within this div
      expect(screen.getByText('My Description').tagName).toBe('DIV');
    });
  });

  describe('CardContent', () => {
    it('should render children correctly', () => {
      render(<CardContent><div>Content Area</div></CardContent>);
      expect(screen.getByText('Content Area')).toBeInTheDocument();
    });

    it('should apply className prop', () => {
      const { container } = render(<CardContent className="custom-content">Test</CardContent>);
      expect(container.firstChild).toHaveClass('custom-content');
    });

    it('should have the default card content classes', () => {
      const { container } = render(<CardContent>Test</CardContent>);
      expect(container.firstChild).toHaveClass('p-6 pt-0');
    });
  });

  describe('CardFooter', () => {
    it('should render children correctly', () => {
      render(<CardFooter><div>Footer Content</div></CardFooter>);
      expect(screen.getByText('Footer Content')).toBeInTheDocument();
    });

    it('should apply className prop', () => {
      const { container } = render(<CardFooter className="custom-footer">Test</CardFooter>);
      expect(container.firstChild).toHaveClass('custom-footer');
    });

    it('should have the default card footer classes', () => {
      const { container } = render(<CardFooter>Test</CardFooter>);
      expect(container.firstChild).toHaveClass('flex items-center p-6 pt-0');
    });
  });

  describe('Composite Card Structure', () => {
    it('should render a full card structure correctly', () => {
      render(
        <Card data-testid="composite-card">
          <CardHeader data-testid="composite-header">
            <CardTitle data-testid="composite-title">Card Title Here</CardTitle>
            <CardDescription data-testid="composite-description">Card Description Here</CardDescription>
          </CardHeader>
          <CardContent data-testid="composite-content">
            <p>This is the main content of the card.</p>
          </CardContent>
          <CardFooter data-testid="composite-footer">
            <p>Footer actions or text.</p>
          </CardFooter>
        </Card>
      );

      expect(screen.getByTestId('composite-card')).toBeInTheDocument();
      expect(screen.getByTestId('composite-header')).toBeInTheDocument();
      expect(screen.getByTestId('composite-title')).toHaveTextContent('Card Title Here');
      expect(screen.getByTestId('composite-description')).toHaveTextContent('Card Description Here');
      expect(screen.getByTestId('composite-content')).toHaveTextContent('This is the main content of the card.');
      expect(screen.getByTestId('composite-footer')).toHaveTextContent('Footer actions or text.');
    });
  });
});
