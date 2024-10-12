import Link from "next/link";

export default function Home() {

  return (
    <div>
      <h1>Welcome to GLPI Ticketing System</h1>
      <p>Already have an account? <Link href={'/auth/login'}>login</Link></p>
      <p>If not, <Link href={'/auth/register'}>register here</Link></p>
      <p><Link href={'/tickets/dashboard'}>dashboard tickets</Link></p>
    </div>
  );
}
