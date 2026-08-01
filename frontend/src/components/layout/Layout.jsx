import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import PageBackground from './PageBackground';

export default function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-themed">
      <PageBackground />
      <Navbar />
      <main className="relative z-10 flex-1 pt-24">
        <PageTransition />
      </main>
      <Footer />
    </div>
  );
}
