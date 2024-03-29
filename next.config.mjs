/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'development' ? '' : '/evbt',
    output: process.env.NODE_ENV === 'development' ? 'standalone' : 'export',
    assetPrefix: process.env.NODE_ENV === 'development' ? '' : '/evbt',
    images:{
        unoptimized: true
    },
};

export default nextConfig;
