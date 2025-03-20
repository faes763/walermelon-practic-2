/** @type {import('next').NextConfig} */

const ngrokLink = "b9e9-176-212-188-21.ngrok-free.app";


const nextConfig = {
    env: {
        BASE_URL: "https://arbuz-backend.santej.space/api/",
        DEV_TOKEN: "",
    },
    experimental: {
        optimizePackageImports: ['lucide-react','date-fns'],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 't.me',
            },
            {
                protocol: "https",
                hostname: "arbuz-backend.santej.space"
            },
            {
                protocol: "http",
                hostname: "arbuz-backend.santej.space"
            },
            {
                protocol: 'https',
                hostname: ngrokLink,
            }
        ],
    }
};

export default nextConfig;