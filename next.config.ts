import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images:{
    remotePatterns:[
        {
            hostname:"maxbounty.com"
        }
    ]
}
};

export default nextConfig;
