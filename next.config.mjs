/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'https://cloudinary.com'], // Only include the hostname
  },
};

export default nextConfig;
