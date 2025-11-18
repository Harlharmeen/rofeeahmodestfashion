import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Cloudinary uses HTTPS
        hostname: 'res.cloudinary.com',
        // Optional: specify a pathname if you only want to allow specific paths
        // pathname: '/my-cloud-name/**', 
      },
    ],
  },
};

export default nextConfig;
