"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    strokeWidth?: number | string;
}

// Custom brand icons to match Lucide's stroke style (since Lucide v1.0+ removed trademarked brand icons)
const LinkedInIcon = ({ size = 24, strokeWidth = 2, className, ...props }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const XIcon = ({ size = 24, strokeWidth = 2, className, ...props }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
    >
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768-6.768m2.46-2.46L20 4" />
    </svg>
);

const TelegramIcon = ({ size = 24, strokeWidth = 2, className, ...props }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
    >
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
    </svg>
);

const YouTubeIcon = ({ size = 24, strokeWidth = 2, className, ...props }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
    >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <polygon points="10 15 15 12 10 9" fill="currentColor" />
    </svg>
);

const GitHubIcon = ({ size = 24, strokeWidth = 2, className, ...props }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const companyLinks = [
    { label: "About", href: "#about" },
    { label: "Vision", href: "#hero" },
    { label: "Technology", href: "#services" },
    // { label: "Ecosystem", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const ecosystemLinks = [
    { label: "MST Blockchain", href: "https://mstblockchain.com/" },
    { label: "Whitepaper", href: "https://github.com/mst-chain/whitepaper/blob/main/WHITEPAPER.md" },
    { label: "Validator Portal", href: "https://mstblockchain.com/portal" },
    { label: "Developer Resources", href: "https://docs.mstblockchain.com/" },
];

const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/mstblockchain/", icon: LinkedInIcon },
    { label: "X (Twitter)", href: "https://x.com/MSTBlockchain", icon: XIcon },
    { label: "Telegram", href: "https://t.me/mstblockchainchat", icon: TelegramIcon },
    { label: "YouTube", href: "https://www.youtube.com/@MST_Blockchain", icon: YouTubeIcon },
    { label: "GitHub", href: "https://github.com/mst-chain/whitepaper/blob/main/WHITEPAPER.md", icon: GitHubIcon },
];

export default function Footer() {
    return (
        <footer
            className="relative bg-black border-t border-white/[0.06] overflow-hidden"
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/bg1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >

            {/* ── Background signature: oversized logo bleeding off the left edge ── */}
            <img
                src="/mst-logo.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute left-1/2 bottom-0 transform -translate-x-1/2 h-full w-auto object-contain opacity-[0.0]"
                style={{ filter: "grayscale(1) brightness(1.6)" }}
            />
            {/* soft red glow anchored behind the mark */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-red-700/[0.08] blur-[110px]"
            />

            <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                {/* ── Main row ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[3.5fr_1fr_1fr_1fr] gap-10 lg:gap-16 pt-12 lg:pt-16 pb-10 lg:pb-0 border-b border-white/[0.06]">

                    {/* Brand */}
                    <div className="max-w-sm col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
                        <Link href="/" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <img
                                src="/mst-logo.png"
                                alt="Masterstroke Logo"
                                className="w-full max-w-[280px] h-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Company */}
                    <div>
                        <p className="section-heading text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase mb-5">
                            Company
                        </p>
                        <ul className="space-y-3">
                            {companyLinks.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="body-text text-[13px] text-gray-400 hover:text-white transition-colors duration-150"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ecosystem */}
                    <div>
                        <p className="section-heading text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase mb-5">
                            Ecosystem
                        </p>
                        <ul className="space-y-3">
                            {ecosystemLinks.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="body-text text-[13px] text-gray-400 hover:text-white transition-colors duration-150"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <p className="section-heading text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase mb-5">
                            Community
                        </p>
                        <ul className="space-y-3">
                            {socialLinks.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="body-text text-[13px] text-gray-400 hover:text-red-500 transition-colors duration-150"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Stretched Social Icons */}
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 w-full py-5 sm:py-3 border-b border-white/[0.06]">
                    {socialLinks.map(({ label, href, icon: Icon }) => (
                        <Link
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/[0.08] text-gray-500 hover:text-white hover:border-red-600/60 hover:bg-red-600/[0.08] transition-colors duration-150"
                        >
                            <Icon size={18} strokeWidth={1.8} className="sm:w-[20px] sm:h-[20px]" />
                        </Link>
                    ))}
                </div>

                {/* ── Bottom bar ── */}
                <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-3 py-6">
                    <p className="body-text text-[12px] text-gray-600 text-center sm:text-left">
                        © {new Date().getFullYear()} Masterstroke Technosoft Pvt. Ltd. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="body-text text-[12px] text-gray-600">MST Blockchain</span>
                        <span className="w-px h-3 bg-white/10" />
                        <span className="body-text text-[12px] text-gray-600">Made in India</span>
                    </div>
                </div>

            </div>

            <style jsx>{`
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;700;800&family=Space+Grotesk:wght@400;500;700;800&display=swap');

              .section-heading {
                font-family: 'Manrope', sans-serif !important;
              }
              .body-text {
                font-family: 'Inter', sans-serif !important;
              }
            `}</style>
        </footer>
    );
}