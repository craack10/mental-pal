"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaComments, FaSpa, FaHeart, FaHandsHelping } from 'react-icons/fa';

interface FeatureButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  icon: React.ReactNode;
}

function FeatureButton({ onClick, label, icon }: FeatureButtonProps) {
  return (
    <div className="transform transition-all duration-300 hover:scale-105">
      <button
        onClick={onClick}
        aria-label={label}
        className="flex flex-col items-center justify-center w-64 h-64 bg-white rounded-lg shadow-lg transition-shadow duration-300 text-gray-800 relative overflow-hidden hover:bg-gradient-to-r from-purple-200 to-pink-200 hover:text-white hover:shadow-xl"
      >
        <div className="bg-transparent rounded-full p-4 mb-4 transform transition-transform duration-200 hover:scale-110">
          <span className="text-5xl">{icon}</span>
        </div>
        <span className="text-lg font-semibold text-gray-700">{label}</span>
      </button>
    </div>
  );
}

function Features() {
  const router = useRouter();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative overflow-hidden"
      style={{
        backgroundImage: "url('/calm-background-pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-blue-50 opacity-80 z-10"></div>

      <header className="w-full flex justify-between items-center py-10 px-4 relative z-20">
        <div className="text-center w-full px-4">
          <h1 className="text-5xl font-bold text-gray-700">MentalPal.AI</h1>
          <p className="mt-2 text-lg text-gray-600">Feel calm, feel supported</p>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
          <FeatureButton onClick={() => router.push("/chat")} label="Chat Support" icon={<FaComments />} />
          <FeatureButton onClick={() => router.push("/Mindfulness")} label="Mindfulness" icon={<FaSpa />} />
          <FeatureButton onClick={() => router.push("/songs")} label="Songs" icon={<FaHeart />} />
          <FeatureButton onClick={() => router.push("./community")} label="Community" icon={<FaHandsHelping />} />
        </div>
      </main>

      <footer className="w-full text-center p-4 bg-gray-100 shadow-inner mt-10">
        <p className="text-gray-500">© 2024 MentalPal.AI. Empowering women every day.</p>
      </footer>

      <style jsx>{`
        @keyframes gradientBackground {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}

export default Features;
