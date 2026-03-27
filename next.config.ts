
import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/catalogue.pdf',
        destination: '/2026%20Linen%20Catalogue.pdf',
        permanent: true,
      },
      {
        source: '/en/process',
        destination: '/en/export-process',
        permanent: true,
      },
      {
        source: '/en/about',
        destination: '/en/about-us',
        permanent: true,
      },
      {
        source: '/en/quote',
        destination: '/en/request-quote',
        permanent: true,
      },
      {
        source: '/en/contact',
        destination: '/en/request-quote',
        permanent: true,
      },
      {
        source: '/en/products/terry-towels',
        destination: '/en/terry-towels',
        permanent: true,
      },
      {
        source: '/en/products/bed-linen',
        destination: '/en/bed-linen',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
