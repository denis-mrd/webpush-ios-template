/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_MAGICBELL_API_KEY: process.env.NEXT_PUBLIC_MAGICBELL_API_KEY,
  },
  webpack: (config, { isServer }) => {
    // Логирование API-ключа для проверки
    if (!isServer) {
      console.log('MagicBell API Key:', process.env.NEXT_PUBLIC_MAGICBELL_API_KEY);
    }

    return config;
  },
};

module.exports = nextConfig;