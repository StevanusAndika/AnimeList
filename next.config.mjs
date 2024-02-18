/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            
            hostname: "cdn.myanimelist.net",
            
          },
          {
            protocol: "https",
            hostname: "avatars.githubusercontent.com"
          }

        
        ],
      },
    
};

export default nextConfig;
