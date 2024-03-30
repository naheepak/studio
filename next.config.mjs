/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'development' ? '' : '/studio',
    output: process.env.NODE_ENV === 'development' ? 'standalone' : 'export',
    assetPrefix: process.env.NODE_ENV === 'development' ? '' : '/studio',
    images:{
        unoptimized: true
    },
};

export default nextConfig;
