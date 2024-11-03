'use client';
import React from "react";
import Link from "next/link";

export default function Mindfulness() {
  return (
    <div className="bg-gray-200 flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full flex justify-center items-center py-10 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <h1 className="text-8xl max-md:text-5xl font-extrabold">Mindfulness</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Exercices de Yoga</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Yoga Exercise Cards */}
            <ExerciseCard
              imageSrc="https://asanas.fr/wp-content/uploads/2022/12/vrksasana.jpg"
              title="Posture de l'Arbre"
              description="Améliore l'équilibre et la concentration."
              altText="Person in Tree Pose yoga position"
            />
            <ExerciseCard
              imageSrc="https://asanas.fr/wp-content/uploads/2020/10/adho-mukha-svanasana.jpg"
              title="Posture du Chien Tête en Bas"
              description="Étire la colonne vertébrale et renforce les bras."
              altText="Person in Downward Dog Pose yoga position"
            />
            <ExerciseCard
              imageSrc="https://asanas.fr/wp-content/uploads/2022/12/bhujangasana-2.jpg"
              title="Posture du Cobra"
              description="Renforce le dos et étire la poitrine."
              altText="Person in Cobra Pose yoga position"
            />
            <ExerciseCard
              imageSrc="https://asanas.fr/wp-content/uploads/2022/12/virabhadrasana-1.jpg"
              title="Posture du Guerrier"
              description="Améliore la force et la concentration."
              altText="Person in Warrior Pose yoga position"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

// Exercise Card Component
const ExerciseCard = ({ imageSrc, title, description, altText }: any) => {
  return (
    <Link href="/features"> {/* Use Link for navigation */}
      <div
        className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 cursor-pointer"
      >
        <img src={imageSrc} alt={altText} className="w-full h-48 object-contain" />
        <div className="p-4">
          <h3 className="font-semibold text-xl mb-2 text-gray-700">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};
