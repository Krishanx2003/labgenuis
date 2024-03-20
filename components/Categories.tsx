import { useState, useEffect } from 'react';
import { groq } from 'next-sanity';
import { client } from '@/lib/createClient';
import Link from 'next/link';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await client.fetch(groq`
          *[_type == 'category'] {
            _id,
            title,
            'slug': slug.current
          }
        `);
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {categories.map((category) => (
        <Link key={category} href={`/blog?category=${encodeURIComponent(category)}`} className="text-gray-400 hover:text-gray-600">{category}
        </Link>
      ))}
    </div>
  );
};

export default Categories;