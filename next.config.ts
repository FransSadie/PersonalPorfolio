import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...["about", "projects", "contact"].map((section) => ({ source: `/${section}`, destination: `/#${section}`, permanent: true })),
      { source: "/tools", destination: "/#skills", permanent: true },
      { source: "/skills", destination: "/#skills", permanent: true },
      { source: "/passions", destination: "/#outside", permanent: true },
      { source: "/projects/infinite-harmony-booking", destination: "/#projects", permanent: true },
      { source: "/projects/:slug", destination: "/#project-:slug", permanent: true },
      { source: "/notes/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
