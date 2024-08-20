/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https', // or 'http' if that's how your images are served
          hostname: 'image.domain', // Replace 'image.domain' with your actual image domain
          port: '', // Specify the port if it's not the default (80 for HTTP, 443 for HTTPS)
          pathname: '/path-to-images/**', // Define the path or use '**' to match any path
        },
      ],
    },
  };

export default nextConfig;
