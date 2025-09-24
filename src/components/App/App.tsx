import { Header, Footer, CatsList } from '../../index';
import css from './App.module.css';

export default App;

//===============================================================

function App() {
  return (
    <div className={css.page}>
      <Header />
      <main className={`container ${css.main}`}>
        <CatsList />
      </main>
      <Footer />
    </div>
  );
}
