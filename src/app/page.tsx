import Link from "next/link";

export default function Home() {

  return (
    <div className="container">
      <div className="col">
        <h1>Welcome to GLPI Ticketing System</h1>
      </div>
      
      <p>Already have an account? <Link href={'/auth/login'}>login</Link></p>
      <p>If not, <Link href={'/auth/register'}>register here</Link></p>
      <p><Link href={'/tickets/dashboard'}>dashboard tickets</Link></p>
    </div>
  );
}
