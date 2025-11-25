import Hero from './components/Hero';
import Features from './components/Features';
import Capabilities from './components/Capabilities';
import UseCases from './components/UseCases';
import CodeExamples from './components/CodeExamples';
import Vision from './components/Vision';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-slate-950">
            <Hero />
            <Features />
            <Capabilities />
            <CodeExamples />
            <UseCases />
            <Vision />
            <Footer />
        </div>
    );
}

export default App;
