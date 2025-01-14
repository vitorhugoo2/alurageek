import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold text-white">AluraGeek</span>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-100 hover:text-white">Quem somos</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Política de privacidade</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Programa de fidelidade</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Nossas lojas</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Fale conosco</h3>
            <form className="mt-4 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-100">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-100">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Desenvolvedor</h3>
            <p className="mt-4 text-blue-100">
              2024 Desenvolvido por Vitor Hugo - Curso ONE - Oracle Next Education<br />
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;