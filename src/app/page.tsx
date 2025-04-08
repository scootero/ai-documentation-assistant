"use client";

import { dummyProjects } from "@/data/dummyProjects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-8 text-blue-400">
        AI Documentation Assistant
      </h1>

      <div className="space-y-6">
        {dummyProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
