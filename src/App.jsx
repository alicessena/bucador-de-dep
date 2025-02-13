import { useState } from "react";
import { Search, LoaderCircle,  MapPinHouse } from "lucide-react";
import "./style.css";
import { toast } from 'react-toastify';
import api from "./service/api";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});
  const [loading, setLoading] = useState(false);

  const notify = (msg, toastType) => toast(msg, {type: toastType});

  async function handleSearch() {
    if (input === "") {
      notify("Informe o CEP!", "warning");
      return;
    }

    try { 
      setLoading(true)
      const response = await api.get(
        `${input}/json` 
      ); 
      setLoading(false);
      if(response.data.erro){
        notify(
          "Ops erro ao buscar", "error"
        );
        return;
      }
      setCep(response.data);
      setInput(""); 
      notify("CEP encontrado com sucesso!", "success")
    } catch {
      setLoading(true)
      notify(
        "Ops erro ao buscar", "error"
      ); 
      setInput("");
    }
  }

  return (
    <div className="container">

      < MapPinHouse color="#E8476A" size={"32px"}/> 
      
      <h1 className="title">Buscador De CEP </h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite Um CEP..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <Search /> 
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          {loading ? < LoaderCircle className="svg" color="#E8476A"/> : 
          <>
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro} <br /></span>
          <span> Complemento: {cep.complemento} <br /> </span> 
          <span> Bairro: {cep.bairro} <br /> </span> 
          <span>{cep.localidade} <br /> </span> 
          <span> Estado: {cep.uf} </span>
          </>
          }
        </main>
      )}
    </div>
  );
}

export default App;