/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: '/nahee-2024',
    images:{
        unoptimized: true
    },
    redirects: async () => {
        return [{
            source: '/',
            destination: '/list',
            permanent: true
        }]
    },
};

export default nextConfig;
