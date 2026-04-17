import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, HardHat, Clock, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import heroVideo from '../assets/WhatsApp Video 2026-04-10 at 4.54.59 AM (1).mp4';

export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showTapToStart, setShowTapToStart] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Attempt autoplay with sound on load
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsMuted(false);
            setShowTapToStart(false);
          })
          .catch(() => {
            // Autoplay with sound usually blocked by browsers without interaction
            setShowTapToStart(true);
            setIsPlaying(false);
            if (videoRef.current) videoRef.current.pause();
          });
      }
    }
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => console.error("Playback failed"));
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleTapToStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsMuted(false);
          setShowTapToStart(false);
        });
    }
  };

  // Allow tapping anywhere on the video (when tap-to-start is gone) to toggle play/pause on mobile
  const handleScreenTap = () => {
    if (!showTapToStart && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true));
      }
    }
  }

  return (
    <section className="relative pt-7 md:pt-26 lg:pt-40 pb-20 lg:pb-32 overflow-hidden bg-brand-dark">
      {/* Clean background */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-brand-blue/30 border border-brand-blue/50 text-white text-xs md:text-sm font-semibold mb-6 tracking-wide backdrop-blur-md shadow-sm">
                Australia's First Digital Networking Platform For Builders & Tradies
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Connecting Builders to <span className="text-brand-yellow relative inline-block">Quality Trades
                  {/* Subtle underline SVG */}
                  <svg className="absolute -bottom-2 left-0 w-full text-brand-yellow/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed text-balance">
                Simplify your workflow and hire reliable, verified Tradiepeople in minutes. Build with confidence, scale your projects, and meet your deadlines.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-brand-yellow hover:bg-yellow-400 text-brand-dark font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(241,179,47,0.3)] hover:shadow-[0_0_30px_rgba(241,179,47,0.5)] transform hover:-translate-y-1">
                  Sign In
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-md transform hover:-translate-y-1 hover:shadow-lg">
                  Sign Up
                </button>
              </div>

              {/* Trust highlights */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-blue/30 backdrop-blur-sm rounded-lg text-brand-yellow shadow-inner">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <div className="text-white font-bold leading-tight">Build Your Network</div>
                    <div className="text-gray-400 text-xs mt-0.5">Vetted professionals</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-blue/30 backdrop-blur-sm rounded-lg text-brand-yellow shadow-inner">
                    <Clock size={22} />
                  </div>
                  <div>
                    <div className="text-white font-bold leading-tight">Manage Projects In One Place</div>
                    <div className="text-gray-400 text-xs mt-0.5">Connect in minutes</div>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-3">
                  <div className="p-2.5 bg-brand-blue/30 backdrop-blur-sm rounded-lg text-brand-yellow shadow-inner">
                    <HardHat size={22} />
                  </div>
                  <div>
                    <div className="text-white font-bold leading-tight">Get More Jobs</div>
                    <div className="text-gray-400 text-xs mt-0.5">Ready to work</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Video inside Premium Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-[300px] sm:max-w-[320px] lg:max-w-[340px] mx-auto relative mt-6 lg:mt-0"
          >
            {/* Device shadow - constrained */}
            <div className="absolute inset-0 bg-brand-blue/20 rounded-[3rem] blur-xl opacity-50 pointer-events-none"></div>
            
            {/* The Phone Chassis */}
            <div className="relative rounded-[3rem] bg-gray-900 border-[2px] border-gray-800 p-[8px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] translate-z-0">
              
              {/* Volume & Power Button Accents */}
              <div className="absolute -left-[3px] top-24 w-[3px] h-10 bg-gray-600 rounded-l-md"></div>
              <div className="absolute -left-[3px] top-36 w-[3px] h-16 bg-gray-600 rounded-l-md"></div>
              <div className="absolute -left-[3px] top-56 w-[3px] h-16 bg-gray-600 rounded-l-md"></div>
              <div className="absolute -right-[3px] top-32 w-[3px] h-20 bg-gray-600 rounded-r-md"></div>

              {/* The Screen */}
              <div className="relative rounded-[2.5rem] overflow-hidden bg-black aspect-[9/16] w-full isolate group cursor-pointer" onClick={handleScreenTap}>
                
                {/* Dynamic Island / Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[35%] h-[30px] bg-black rounded-full z-40 flex items-center justify-between px-3 pointer-events-none">
                  {/* Camera lens reflection */}
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-900/40 relative overflow-hidden ml-auto">
                    <div className="absolute inset-0 bg-blue-400/20 shadow-inner"></div>
                  </div>
                </div>

                <video 
                  ref={videoRef}
                  src={heroVideo}
                  playsInline
                  onEnded={() => setIsPlaying(false)}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Subtitle dark gradient for UI controls */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none transition-opacity duration-300 z-10 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`} />

                <AnimatePresence>
                  {showTapToStart && (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }} 
                      className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    >
                      <button 
                        onClick={handleTapToStart}
                        className="flex flex-col items-center group/btn"
                      >
                        <div className="w-16 h-16 flex items-center justify-center bg-brand-yellow text-brand-dark rounded-full shadow-[0_0_20px_rgba(241,179,47,0.5)] transition-transform group-hover/btn:scale-110 mb-4">
                          <Play fill="currentColor" size={28} className="translate-x-[2px]" />
                        </div>
                        <span className="text-white font-semibold tracking-wide shadow-black drop-shadow-md">Tap to Start</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* App-like UI Controls */}
                {!showTapToStart && (
                  <div 
                    className={`absolute bottom-6 left-0 right-0 px-6 flex justify-between items-center z-30 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
                  >
                    <button 
                      onClick={togglePlay}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/20 hover:bg-white/30 text-white shadow-lg transition-transform hover:scale-105"
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="translate-x-[1px]" />}
                    </button>

                    <button 
                      onClick={toggleMute}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/20 hover:bg-white/30 text-white shadow-lg transition-transform hover:scale-105"
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                  </div>
                )}
                
                {/* Screen Gloss/Reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none rounded-[2.5rem] opacity-50 z-20"></div>

                {/* Inner Bezel subtle shadow */}
                <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_0_10px_rgba(0,0,0,0.9)] pointer-events-none z-20 ring-1 ring-white/5 inset-ring"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
