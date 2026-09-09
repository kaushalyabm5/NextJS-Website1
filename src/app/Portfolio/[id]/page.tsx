import React from 'react';
import ProjectDetailPage from '@/components/portfolio/ProjectDetailPage';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <main>
      <ProjectDetailPage id={id} />
    </main>
  );
}