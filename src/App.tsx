import { Header } from '@/components/Header';
import { Memo } from '@/components/Memo';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <Header />
      <Memo className="flex-1" />
      <Footer />
    </div>
  );
}

export default App;
