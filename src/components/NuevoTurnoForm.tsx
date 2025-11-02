import { useState } from "react";

type Turno = {
  id: number;
  cliente: string;
  fecha: string;
  hora: string;
  servicio: string;
};

type Props = {
  agregarTurno: (nuevo: Turno) => void;
  siguienteId: number;
};

function NuevoTurnoForm({ agregarTurno, siguienteId }: Props) {
  const [cliente, setCliente] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [servicio, setServicio] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cliente || !fecha || !hora || !servicio) return;

    const nuevoTurno: Turno = {
      id: siguienteId,
      cliente,
      fecha,
      hora,
      servicio,
    };

    agregarTurno(nuevoTurno);

    // Limpiar campos
    setCliente("");
    setFecha("");
    setHora("");
    setServicio("");
  };

  return (
    <div className="container mt-4">
      <h2>Nuevo Turno</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Cliente</label>
          <input
            type="text"
            className="form-control"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            className="form-control"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Hora</label>
          <input
            type="time"
            className="form-control"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Servicio</label>
          <input
            type="text"
            className="form-control"
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Turno
        </button>
      </form>
    </div>
  );
}

export default NuevoTurnoForm;
