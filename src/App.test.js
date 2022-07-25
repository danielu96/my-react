 import React from 'react'
import { render, screen } from '@testing-library/react';
   import Test from './test';
test('renders learn react text', () => {
   render(<Test/>);  
   const Element = screen.getByText(/HALKO/);
   expect(Element).toBeInTheDocument();
});
  