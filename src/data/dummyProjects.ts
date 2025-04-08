import { Project } from '@/types/project';
import { v4 as uuid } from 'uuid';

export const dummyProjects: Project[] = [
  {
    id: uuid(),
    name: 'Marketing Website Docs',
    description: 'Documentation and copy for the main marketing website.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    blocks: [
      {
        id: uuid(),
        type: 'heading',
        content: 'Homepage Copy',
        level: 1,
      },
      {
        id: uuid(),
        type: 'paragraph',
        content: 'Our product helps users organize information faster using AI-powered workflows.',
        formatting: { bold: true },
      },
      {
        id: uuid(),
        type: 'image',
        imageUrl: 'https://via.placeholder.com/600x300',
        altText: 'Placeholder website screenshot',
        caption: 'Screenshot of our homepage hero section',
        alignment: 'center',
        width: '100%',
      },
    ],
  },
  {
    id: uuid(),
    name: 'Internal Engineering Docs',
    description: 'Technical documentation for internal systems and services.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    blocks: [
      {
        id: uuid(),
        type: 'heading',
        content: 'Authentication Service',
        level: 2,
      },
      {
        id: uuid(),
        type: 'paragraph',
        content: 'Handles login, registration, and JWT token lifecycle.',
      },
      {
        id: uuid(),
        type: 'code',
        content: `POST /api/auth/login\n{\n  "username": "user",\n  "password": "pass"\n}`,
        codeLanguage: 'json',
        showLineNumbers: true,
        copyButton: true,
        theme: 'dark',
      },
    ],
  },
];
