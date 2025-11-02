type Turno = {
  id: number;
  cliente: string;
  fecha: string;
  hora: string;
  servicio: string;
};

type Props = {
  turnos: Turno[];
};

function TurnosTable({ turnos }: Props) {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Turnos Agendados</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Servicio</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno) => (
            <tr key={turno.id}>
              <td>{turno.id}</td>
              <td>{turno.cliente}</td>
              <td>{turno.fecha}</td>
              <td>{turno.hora}</td>
              <td>{turno.servicio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TurnosTable;
