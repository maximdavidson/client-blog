import path from 'path';
import { fileURLToPath } from 'url';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/constants': path.resolve(__dirname, 'src/constants'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/app': path.resolve(__dirname, 'src/app'),
      '@/data': path.resolve(__dirname, 'src/data'),
      '@/styles': path.resolve(__dirname, 'src/styles'),
      '@/UI': path.resolve(__dirname, 'src/UI'),
      '@/navigation': path.resolve(__dirname, 'src/navigation'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
    };
    return config;
  },
};

export default withNextIntl(nextConfig);
