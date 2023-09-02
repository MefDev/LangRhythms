import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';

interface RenderWithRouterOptions {
  route?: string;
}


const renderWithRouter = (
  ui: ReactElement,
  options: RenderWithRouterOptions = {}
) => {
  window.history.pushState({}, 'Test page', options.route || '/');

  return {
    ...render(ui, { wrapper: BrowserRouter } as RenderOptions),
    user: userEvent,
  };
};

export { renderWithRouter };
