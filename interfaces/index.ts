// Interface for Card component props
export interface CardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  price?: number;
  location?: string;
  rating?: number;
  className?: string;
  onClick?: () => void;
}

// Interface for Button component props
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

// Interface for Property listing data
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  rating: number;
  reviews: number;
  amenities: string[];
  host: {
    name: string;
    avatar: string;
    isSuperhost: boolean;
  };
}
