/** @type {import('next').NextConfig} */

const ngrokLink = "b9e9-176-212-188-21.ngrok-free.app";


const nextConfig = {
    env: {
        BASE_URL: "http://103.88.242.42/api/",
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
                protocol: "http",
                hostname: "103.88.242.42"
            },
            {
                protocol: 'https',
                hostname: ngrokLink,
            }
        ],
    }
};

export default nextConfig;