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
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "secureedgesolution.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["media.istockphoto.com"], // ✅ your image domain
//   },
// };

// export default nextConfig; // ✅ ESM export

