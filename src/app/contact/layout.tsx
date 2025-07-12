import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | UA Legal | Premier Law Firm in India',
  description: 'Contact UA Legal for expert legal counsel. Our team of experienced attorneys is ready to assist with your legal needs across India.',
  keywords: 'contact law firm, legal consultation, Indian lawyers contact, UA Legal address, schedule legal consultation',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
