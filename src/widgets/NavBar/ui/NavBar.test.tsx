import {render, screen} from '@testing-library/react';
import {NavBar} from 'widgets/NavBar';
import {BrowserRouter} from 'react-router-dom';


describe('NavBar test', () => {
   test('Render test', () => {
      render(<NavBar/>, {wrapper: BrowserRouter});
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
   });

});
