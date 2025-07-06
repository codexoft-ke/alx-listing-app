import React from 'react';
import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { UI_TEXT } from '../constants';

// Sample property data for demonstration
const sampleProperties = [
  {
    id: '1',
    title: 'Luxury Beachfront Villa',
    description: 'Beautiful villa with stunning ocean views, private beach access, and modern amenities.',
    price: 350,
    location: 'Malibu, California',
    imageUrl: '/next.svg', // Using Next.js logo as placeholder
    rating: 4.9,
  },
  {
    id: '2',
    title: 'Cozy Mountain Cabin',
    description: 'Perfect retreat in the mountains with fireplace, hiking trails, and peaceful surroundings.',
    price: 120,
    location: 'Aspen, Colorado',
    imageUrl: '/vercel.svg', // Using Vercel logo as placeholder
    rating: 4.7,
  },
  {
    id: '3',
    title: 'Modern City Apartment',
    description: 'Stylish apartment in the heart of downtown with skyline views and premium amenities.',
    price: 200,
    location: 'New York City, NY',
    imageUrl: '/next.svg',
    rating: 4.5,
  },
  {
    id: '4',
    title: 'Historic Countryside Estate',
    description: 'Charming estate with gardens, wine cellar, and rich history dating back centuries.',
    price: 280,
    location: 'Tuscany, Italy',
    imageUrl: '/vercel.svg',
    rating: 4.8,
  },
];

export default function Home() {
  const handleCardClick = (propertyId: string) => {
    console.log(`Clicked on property: ${propertyId}`);
    // Navigation to property details would go here
  };

  const handleBookNow = () => {
    console.log('Book now clicked');
    // Booking flow would go here
  };

  const handleSearch = () => {
    console.log('Search clicked');
    // Search functionality would go here
  };

  return (
    <>
      <Head>
        <title>{UI_TEXT.APP_NAME}</title>
        <meta name="description" content="Find your perfect stay with our Airbnb clone listing app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-red-500">
                  {UI_TEXT.APP_NAME}
                </h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Button variant="outline" size="small">
                  Sign In
                </Button>
                <Button variant="primary" size="small">
                  Sign Up
                </Button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              {UI_TEXT.TAGLINE}
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover unique places to stay around the world
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto bg-white rounded-full p-2 shadow-lg">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder={UI_TEXT.PLACEHOLDERS.SEARCH}
                  className="flex-1 px-6 py-3 text-gray-700 bg-transparent outline-none"
                />
                <Button onClick={handleSearch} className="rounded-full">
                  {UI_TEXT.BUTTONS.SEARCH}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Properties
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our hand-picked selection of exceptional accommodations
              </p>
            </div>

            {/* Property Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sampleProperties.map((property) => (
                <Card
                  key={property.id}
                  title={property.title}
                  description={property.description}
                  price={property.price}
                  location={property.location}
                  imageUrl={property.imageUrl}
                  rating={property.rating}
                  onClick={() => handleCardClick(property.id)}
                />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="outline" size="large">
                {UI_TEXT.BUTTONS.LOAD_MORE}
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to start your journey?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join millions of travelers who trust our platform
            </p>
            <Button onClick={handleBookNow} size="large">
              {UI_TEXT.BUTTONS.BOOK_NOW}
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-600">
              <p>&copy; 2025 {UI_TEXT.APP_NAME}. All rights reserved.</p>
              <p className="mt-2">Built with Next.js, TypeScript, and TailwindCSS</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
