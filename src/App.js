import Home from "./pages/home/home";
import AddArticle from "./pages/add.Article/addArticle";
import About from "./pages/about/about";
import Article from "./pages/Article/Article";
import Editarticle from "./pages/editArticle/editArticle";
import {BrowserRouter, Routes,Route} from "react-router-dom";


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/addArticle" element={<AddArticle/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/Article/:articleid" element={<Article/>} />
      <Route path="/editArticle/:articleid" element={<Editarticle/>} />
    </Routes>

    
    </BrowserRouter>
    
  );
}

export default App;
