import { useState } from "react";
import Navbar from "./components/navbar";
import TurnosTable from "./components/TurnosTable";
import NuevoTurnoForm from "./components/NuevoTurnoForm";

type Turno = {
  id: number;
  cliente: string;
  fecha: string;
  hora: string;
  servicio: string;
};

function App() {
  const [turnos, setTurnos] = useState<Turno[]>([
    { id: 1, cliente: "Juan Pérez", fecha: "2025-11-01", hora: "10:00", servicio: "Corte" },
    { id: 2, cliente: "Ana López", fecha: "2025-11-01", hora: "11:00", servicio: "Barba" },
  ]);

  const agregarTurno = (nuevo: Turno) => {
    setTurnos([...turnos, nuevo]);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4 text-center">
        <h1>Sistema de Turnos - Barbería 💈</h1>
      </div>
      <NuevoTurnoForm agregarTurno={agregarTurno} siguienteId={turnos.length + 1} />
      <TurnosTable turnos={turnos} />
    </>
  );
}

export default App;
