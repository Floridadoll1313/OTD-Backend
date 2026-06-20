export interface Lead {
  email: string;
  source?: string;
  metadata?: Record<string, any>;
}