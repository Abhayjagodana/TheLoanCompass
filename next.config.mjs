// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //     images: {
// //     domains: ["secureedgesolution.com"],
// //   },
// // };

// // export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "secureedgesolution.com",
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["media.istockphoto.com"], // ✅ your image domain
//   },
// };

// export default nextConfig; // ✅ ESM export

