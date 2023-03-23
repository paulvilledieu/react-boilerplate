import { render, screen } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  it('should render the App', () => {
    const { container } = render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /Welcome Paul!/i,
        level: 1,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/Welcome Paul!/i)).toBeInTheDocument();

    expect(container.firstChild).toBeInTheDocument();
  });
});
