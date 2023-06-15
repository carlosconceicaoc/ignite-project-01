import { Post } from "./Post";
import { Header } from "./components/Header";
import "./global.css";
import style from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header></Header>

      <div className={style.wrapper}>
        
        <Sidebar></Sidebar>

        <main>
          <Post author="Carlos Conceição" content="Primeiro post nessa rede" />
          <Post author="Eduardo Santiago" content="Segundo post nessa rede" />
        </main>
      </div>
    </div>
  );
}
