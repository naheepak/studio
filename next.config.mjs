/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
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
