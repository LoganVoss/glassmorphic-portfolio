"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main className="glassmorphic-body min-h-screen flex flex-col items-center justify-center text-gray-900 dark:text-gray-100 overflow-hidden relative">
      {/* Custom Cursor - Glowing Orb */}
      <div
        className="cursor-orb fixed w-8 h-8 rounded-full bg-indigo-500 opacity-50 pointer-events-none mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 z-50"
        style={{ left: `${springX.get()}px`, top: `${springY.get()}px` }}
      />
      {/* Gradient Overlay for Mouse Tracking */}
      <div
        className="gradient-overlay absolute inset-0 pointer-events-none z-[5] opacity-60"
        style={{
          background: isClient
            ? `radial-gradient(circle at ${springX.get()}px ${springY.get()}px, #4b0082 0%, transparent 50%)`
            : "transparent",
        }}
      />
      {/* Glassmorphic Container */}
      <div className="glassmorphic-container max-w-screen-2xl mx-auto p-6">
        {/* Main Card */}
        <div className="glassmorphic-card main-card text-center mb-24">
          <motion.h1
            className="name-title text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Logan Voss
          </motion.h1>
          <p className="subtitle text-2xl mt-2">Creative Engineer</p>
          <p className="description text-lg mt-4 max-w-2xl mx-auto">
          </p>
          <div className="social-links flex justify-center space-x-12 mt-6">
            <a href="https://github.com/LoganVoss" className="social-button contact" target="_blank" rel="noopener noreferrer"> GitHub</a>
            <a href="mailto:LoganVoss714@gmail.com" className="social-button contact">Contact</a>
            <a href="https://www.linkedin.com/in/loganvoss/" className="social-button" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        {/* Cards Row */}
        <div className="cards-row grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience Card */}
          <div className="glassmorphic-card info-card">
            <h2 className="text-3xl font-semibold mb-4 text-center">Experience</h2>
            <div className="job flex items-center">
              <img className="job-icon w-8 h-8 mr-4 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/GoDaddy_Logo_-_The_GO.svg/1200px-GoDaddy_Logo_-_The_GO.svg.png" alt="GoDaddy" />
              <div>
                <h3 className="text-2xl font-medium">GoDaddy</h3>
                <p className="text-lg font-medium">Creative Specialist</p>
                <span className="duration text-sm text-gray-600">July 2019 - June 2022</span>
              </div>
            </div>
          </div>
          {/* Portfolio Card */}
          <div className="glassmorphic-card info-card md:col-span-1">
            <h2 className="text-3xl font-semibold mb-4 text-center">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="app-item">
                <Link href="https://unsplash.com/@loganvoss" className="app-link flex items-center" target="_blank" rel="noopener noreferrer">
                  <img className="app-icon w-8 h-8 mr-8 rounded" src="https://cdn-icons-png.flaticon.com/512/5968/5968763.png" alt="Unsplash" />
                  <h3>Graphic Design</h3>
                </Link>
              </div>
              <div className="app-item">
                <Link href="https://www.pexels.com/@logan/" className="app-link flex items-center" target="_blank" rel="noopener noreferrer">
                  <img className="app-icon w-8 h-8 mr-8 rounded" src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/83/30/c5/8330c5e9-b0e0-bd3b-69c1-a2593e80330f/Placeholder.mill/400x400bb-75.webp" alt="Pexels" />
                  <h3>Video Production</h3>
                </Link>
              </div>
              <div className="app-item">
                <Link href="https://pixabay.com/users/deltax-music-34692063/" className="app-link flex items-center" target="_blank" rel="noopener noreferrer">
                  <img className="app-icon w-8 h-8 mr-8 rounded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Pixabay-logo-new.svg/200px-Pixabay-logo-new.svg.png" alt="Pixabay" />
                  <h3>Music Production</h3>
                </Link>
              </div>
              <div className="app-item">
                <Link href="https://apps.apple.com/us/developer/logan-voss/id1813258380" className="app-link flex items-center" target="_blank" rel="noopener noreferrer">
                  <img className="app-icon w-8 h-8 mr-8 rounded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/1024px-App_Store_%28iOS%29.svg.png" alt="Apple App Store" />
                  <h3>App Development</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}