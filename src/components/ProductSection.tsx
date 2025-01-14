import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface ProductSectionProps {
  title: string;
  viewAllLink: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, viewAllLink, products }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <Link
          to={viewAllLink}
          className="flex items-center text-blue-600 hover:text-blue-700"
        >
          Ver tudo
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            <Link to={`/produto/${product.id}`}>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-48 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {formatPrice(product.price)}
                </p>
                <span className="mt-2 text-blue-600 hover:text-blue-700">
                  Ver produto
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;