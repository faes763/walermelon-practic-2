/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL: ""
    },
    experimental: {
        optimizePackageImports: ['lucide-react','date-fns'],
    },
};

export default nextConfig;