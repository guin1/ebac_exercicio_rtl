import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
  test('Deve renderizar o componente corretamente', () => {
    render(<PostComment />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
  });

  test('Deve adicionar dois comentários corretamente', () => {
    render(<Post />);
      
    // Procurar o textarea pelo data-testid
    const textarea = screen.getByTestId('post-comments-form-textarea');

    // Envio do primeiro comentário
    fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
    fireEvent.submit(screen.getByTestId('post-comments-form'));

    // Segundo comentário
    fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
    fireEvent.submit(screen.getByTestId('post-comments-form'));

    // Chamar a renderização dos comentários
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
  });
});
