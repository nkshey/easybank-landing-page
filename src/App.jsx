import Articles from "./components/Articles";
import Features from "./components/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Articles />
      </main>

      <Footer />
    </>
  );
}

export default App;
