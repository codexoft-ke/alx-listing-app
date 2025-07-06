# Assets Directory

This directory contains all the static assets for the ALX Listing App including:

## Images
- `property-placeholder.jpg` - Default placeholder image for properties
- `default-avatar.png` - Default user avatar image
- `logo.svg` - Application logo

## Usage
Images should be imported and used through Next.js Image component for optimal performance:

```tsx
import Image from 'next/image';

<Image 
  src="/assets/property-placeholder.jpg" 
  alt="Property" 
  width={300} 
  height={200} 
/>
```

## Organization
- Keep images organized by type (properties, avatars, icons, etc.)
- Use descriptive filenames
- Optimize images for web (compress, use appropriate formats)
- Consider using WebP format for better compression
