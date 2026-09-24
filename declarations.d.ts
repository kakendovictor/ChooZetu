// Ambient type definitions for Sanity and Next.js references

declare module 'sanity' {
  export function defineField(config: any): any;
  export function defineType(config: any): any;
  export function defineConfig(config: any): any;
  export interface Rule {
    required(): Rule;
    max(limit: number): Rule;
    min(limit: number): Rule;
    positive(): Rule;
    error(msg: string): Rule;
  }
}

declare module 'sanity/structure' {
  export function structureTool(config?: any): any;
}

declare module '@sanity/vision' {
  export function visionTool(config?: any): any;
}

declare module 'next' {
  export type Metadata = Record<string, any>;
}

declare module 'next/font/google' {
  export function Outfit(options?: any): { variable: string };
  export function Plus_Jakarta_Sans(options?: any): { variable: string };
}

declare module 'next/navigation' {
  export function notFound(): never;
}
