import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TodoLists from './components/TodoLists';
import Footer from './components/Footer';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div
        class="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
      >
        <Navbar />
        <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />
          <hr class="mt-4" />
          <TodoLists />
          <hr class="mt-4" />
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
