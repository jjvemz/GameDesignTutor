export interface ButtonConfig {
  redirectPage: string;
  label?: string | null;
}

export const navButtons: ButtonConfig[] = [
  { redirectPage: '/tutor', label: 'Tutor' },
  { redirectPage: '/about', label: 'About Us' },
  { redirectPage: '/pricing', label: 'Pricing' },
];

