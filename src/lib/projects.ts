import { getCollection } from 'astro:content';

export interface ProjectRecord {
  _id: string;
  title: string;
  organization: string;
  role: string;
  employmentType?: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  description: string;
  details?: string;
  tasks?: string[];
  technologies?: string[];
  projectUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export async function fetchProjects(): Promise<ProjectRecord[]> {
  const entries = await getCollection('projects', ({ data }) => data.featured && !data.draft);

  return entries
    .sort((a, b) => {
      const orderDifference = a.data.order - b.data.order;
      if (orderDifference !== 0) return orderDifference;
      return b.data.startDate.getTime() - a.data.startDate.getTime();
    })
    .map(({ id, data }) => ({
      _id: id,
      title: data.title,
      organization: data.organization,
      role: data.role,
      employmentType: data.employmentType,
      startDate: data.startDate.toISOString().split('T')[0],
      endDate: data.endDate?.toISOString().split('T')[0],
      isCurrent: data.isCurrent,
      description: data.description,
      details: data.details,
      tasks: data.tasks,
      technologies: data.technologies,
      projectUrl: data.projectUrl || undefined,
      imageUrl: data.image?.src,
      imageAlt: data.image?.alt,
    }));
}
