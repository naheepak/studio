/** @type {import('next').NextConfig} */
const nextConfig = {
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
