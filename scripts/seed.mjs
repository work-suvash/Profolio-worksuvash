#!/usr/bin/env node
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

// NOTE: This is a placeholder configuration.
// For a real application, you would use your own Firebase project configuration.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const projectsData = [
  { id: 'p1', title: 'E-commerce Website', description: 'A full-featured e-commerce platform with a modern design.', category: 'Web Development', type: 'image', thumbnail: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx3ZWJzaXRlJTIwZGVzaWdufGVufDB8fHx8MTc2NjQxNjI2NXww&w=1080&h=720&q=80&fit=crop', src: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx3ZWJzaXRlJTIwZGVzaWdufGVufDB8fHx8MTc2NjQxNjI2NXww&w=1920&h=1080&q=80&fit=crop', views: 2500, likes: 120, comments: [] },
  { id: 'p2', title: 'Portfolio Showcase', description: 'A sleek and modern portfolio to showcase creative work.', category: 'Web Development', type: 'video', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhbmFseXRpY3N8ZW58MHx8fHwxNzY2NDc0MzEyfDA&w=1080&h=720&q=80&fit=crop', src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', views: 1800, likes: 250, comments: [] },
  { id: 'p3', title: 'Fitness Tracker App', description: 'A mobile app to track fitness goals and progress.', category: 'App Development', type: 'image', thumbnail: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxtb2JpbGUlMjBhcHB8ZW58MHx8fHwxNzY2NDMyOTMzfDA&w=1080&h=720&q=80&fit=crop', src: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxtb2JpbGUlMjBhcHB8ZW58MHx8fHwxNzY2NDMyOTMzfDA&w=1080&h=1200&q=80&fit=crop', views: 3200, likes: 450, comments: [] },
  { id: 'p4', title: 'Recipe App', description: 'An app for discovering and organizing recipes.', category: 'App Development', type: 'video', thumbnail: 'https://images.unsplash.com/photo-1602064172250-43f8909056c7?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx1c2VyJTIwaW50ZXJmYWNlfGVufDB8fHx8MTc2NjQyMzU0N3ww&w=1080&h=720&q=80&fit=crop', src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', views: 5000, likes: 890, comments: [] },
  { id: 'p5', title: 'Company Landing Page', description: 'A professional landing page for a startup.', category: 'Newly Added', type: 'image', thumbnail: 'https://images.unsplash.com/photo-1610466896927-699424f3c86d?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxhYnN0cmFjdCUyMGNvZGV8ZW58MHx8fHwxNzY2NDA2NTU3fDA&w=1080&h=720&q=80&fit=crop', src: 'https://images.unsplash.com/photo-1610466896927-699424f3c86d?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxhYnN0cmFjdCUyMGNvZGV8ZW58MHx8fHwxNzY2NDA2NTU3fDA&w=1920&h=1080&q=80&fit=crop', views: 800, likes: 90, comments: [] },
  { id: 'p6', title: 'SaaS Dashboard', description: 'An analytics dashboard for a SaaS application.', category: 'Web Development', type: 'image', thumbnail: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxkYXNoYm9hcmQlMjBjaGFydHxlbnwwfHx8fDE3NjY0NzQzMTN8MA&w=1080&h=720&q=80&fit=crop', src: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxkYXNoYm9hcmQlMjBjaGFydHxlbnwwfHx8fDE3NjY0NzQzMTN8MA&w=1920&h=1080&q=80&fit=crop', views: 4200, likes: 620, comments: [] },
  { id: 'p7', title: 'Black Summoner', description: 'A professional landing page for a startup.', category: 'Newly Added', type: 'image', thumbnail: 'https://images.unsplash.com/photo-1562887189-e5d8881f427f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', src: 'https://images.unsplash.com/photo-1562887189-e5d8881f427f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', views: 1500, likes: 300, comments: [] },
];

async function seedDatabase() {
  console.log('Initializing Firebase...');
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  try {
    console.log('Signing in anonymously...');
    await signInAnonymously(auth);
    console.log('Anonymous sign-in successful.');

    const projectsCollectionRef = collection(db, 'projects');
    const batch = writeBatch(db);

    console.log(`Preparing to seed ${projectsData.length} projects...`);
    projectsData.forEach((project) => {
      const docRef = projectsCollectionRef.doc(project.id);
      batch.set(docRef, {
        ...project,
        dateAdded: new Date().toISOString(),
      });
    });

    console.log('Committing batch write to Firestore...');
    await batch.commit();
    console.log('✅ Successfully seeded the database with project data.');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  } finally {
    // Firebase doesn't have a formal "close" or "disconnect" for the client SDK.
    // The process will exit naturally.
    console.log('Seed script finished.');
    process.exit(0);
  }
}

seedDatabase();
