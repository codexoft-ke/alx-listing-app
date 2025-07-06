// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

// UI Text Constants
export const UI_TEXT = {
  APP_NAME: 'ALX Listing App',
  TAGLINE: 'Find your perfect stay',
  BUTTONS: {
    BOOK_NOW: 'Book Now',
    VIEW_DETAILS: 'View Details',
    SEARCH: 'Search',
    FILTER: 'Filter',
    LOAD_MORE: 'Load More',
  },
  PLACEHOLDERS: {
    SEARCH: 'Where are you going?',
    LOCATION: 'Enter location',
  },
  LABELS: {
    PRICE_PER_NIGHT: 'per night',
    GUEST_RATING: 'Guest rating',
    REVIEWS: 'reviews',
  },
};

// Image paths
export const IMAGES = {
  PLACEHOLDER_PROPERTY: '/assets/property-placeholder.jpg',
  DEFAULT_AVATAR: '/assets/default-avatar.png',
  LOGO: '/assets/logo.svg',
};

// Application Configuration
export const APP_CONFIG = {
  ITEMS_PER_PAGE: 12,
  MAX_RATING: 5,
  CURRENCY: 'USD',
  CURRENCY_SYMBOL: '$',
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
};
