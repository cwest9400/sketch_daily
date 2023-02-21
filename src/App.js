import Header from "./components/header";
import Footer from "./components/footer";


function App() {
  return (
    <div className="bg-teal-900">
      <Header />
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
    </div>
      <Footer />
    </div>
  );
}

export default App;
