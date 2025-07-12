import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Practice Areas | UA Legal | Premier Law Firm in India',
  description: 'Explore UA Legal\'s diverse practice areas including corporate law, litigation, intellectual property, and more. Expert legal counsel across India.',
  keywords: 'law firm India, legal services, corporate law, litigation, intellectual property, legal practice areas',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
