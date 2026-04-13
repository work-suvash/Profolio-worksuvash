'use client';

import { useState, useEffect } from 'react';
import type { Project } from '@/types';
import { projectsData } from '@/lib/data';
import { db } from '@/lib/firebase/config';
import { collection, onSnapshot, query } from 'firebase/firestore';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Initial load from static data
    setProjects(projectsData.map(p => ({ ...p, views: p.views || 0, likes: p.likes || 0 })));
    setLoading(false);

    // Listen for real-time updates from Firestore
    const q = query(collection(db, 'projectStats'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const statsMap = new Map();
      snapshot.forEach((doc) => {
        statsMap.set(doc.id, doc.data());
      });

      setProjects(prev => prev.map(project => {
        const stats = statsMap.get(project.id);
        if (stats) {
          return {
            ...project,
            views: stats.views || project.views || 0,
            likes: stats.likes || project.likes || 0
          };
        }
        return project;
      }));
    }, (err) => {
      console.error("Firestore snapshot error:", err);
      // Fallback is already handled by initial load
    });

    return () => unsubscribe();
  }, []);

  return { projects, loading, error, setProjects };
}
