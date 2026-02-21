export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  year: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface GeneratedImageResponse {
  imageUrl: string | null;
  error?: string;
}
