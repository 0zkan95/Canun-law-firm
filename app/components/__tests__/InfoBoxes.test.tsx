import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoBoxes from '../InfoBoxes'; // Adjust path if necessary

// Mock react-icons if they cause issues in Jest environment (optional, but good practice)
jest.mock('react-icons/fa', () => ({
  FaBalanceScale: () => <svg data-testid="icon-balance" />,
  FaLock: () => <svg data-testid="icon-lock" />,
  FaHeadset: () => <svg data-testid="icon-headset" />,
}));

describe('InfoBoxes Component', () => {
  it('renders all three info box titles', () => {
    render(<InfoBoxes />);

    // Check for the titles
    expect(screen.getByText("Defending Your Rights")).toBeInTheDocument();
    expect(screen.getByText("Secure Management")).toBeInTheDocument();
    expect(screen.getByText("Full Time Support")).toBeInTheDocument();
  });

  it('renders all three icons (mocked)', () => {
    render(<InfoBoxes />);

    expect(screen.getByTestId("icon-balance")).toBeInTheDocument();
    expect(screen.getByTestId("icon-lock")).toBeInTheDocument();
    expect(screen.getByTestId("icon-headset")).toBeInTheDocument();
  });

  // You can add more tests, e.g., checking for descriptions
  it('renders descriptions for info boxes', () => {
    render(<InfoBoxes />);
    expect(screen.getByText(/Our dedicated legal team is committed/i)).toBeInTheDocument();
    expect(screen.getByText(/We uphold the strictest confidentiality/i)).toBeInTheDocument();
    expect(screen.getByText(/Legal matters don't always adhere/i)).toBeInTheDocument();
  });
});
