import { render, screen, fireEvent } from '@testing-library/react'
import Register from '../pages/register';
import '@testing-library/jest-dom'

describe('Register Page', () => {
  it('Espera ter um H1 com texto "Cadastrar ToDo"', () => {
    render(<Register />)

    const heading = screen.getByRole('heading', { name: /Cadastrar ToDo/i },{ level: 1 })

    expect(heading).toBeInTheDocument()
  })
  it('Testa se ao abrir a pagina o botão Salvar está desabilitado', () => {
    render(<Register />)

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  })
  it('Testa se ao clicar no checkbox ele faz a ação de checked', () => {
    render(<Register />)
    const dayPeriod = screen.getAllByTestId('day-of-the-week-id');
    dayPeriod.forEach((element) => {
      fireEvent.click(element);
    })
    
    dayPeriod.forEach((item) => {
      expect(item.checked).toEqual(true);
    })
  })
})