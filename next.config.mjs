// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const config = {
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
};

export default config;
