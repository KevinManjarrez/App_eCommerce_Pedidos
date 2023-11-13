import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Debes configurar el elemento raíz de tu aplicación

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  background: '#fff',
  border: '1px solid #ccc',
  padding: '20px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  margin: '5px 0',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonStyle = {
  margin: '10px',
  padding: '8px 16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

function PaymentsTable() {
  const [payments, setPayments] = useState([]);
  const [editingPayment, setEditingPayment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    obtenerPagos();
  }, []);

  const obtenerPagos = async () => {
    try {
      const respuesta = await Axios.get('/'); // Reemplaza esto con la URL de tu API
      console.log(respuesta);
      console.log(respuesta.data.data);
      setPayments(respuesta.data.data[0].dataRes);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = (rowData) => {
    setEditingPayment(rowData);
    setEditedData({ ...rowData });
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    try {
      const response = await Axios.put(`/actualizar/${editingPayment.idPagoOK}`, editedData);
      console.log(response);
      obtenerPagos();
      setEditingPayment(null);
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setEditingPayment(null);
    setIsModalOpen(false);
  };

  const columns = [
    { title: 'ID de Pago', field: 'idPagoOK' },
    { title: 'ID de Orden', field: 'idOrdenOK' },
    { title: 'Método de Pago', field: 'metodoPagoBK' },
    { title: 'Monto', field: 'monto' },
    { title: 'Estado de Pago', field: 'estadoPago' },
    { title: 'Comentarios', field: 'comentarios' },
    { title: 'Fecha de Pago', field: 'fechaPagoReg' },
    {
      title: 'Acciones',
      render: (rowData) => <button onClick={() => handleEditClick(rowData)}>Editar</button>,
    },
  ];

  return (
    <div className='container'>
      <MaterialTable
        title="Lista de Pagos"
        columns={columns}
        data={payments}
        options={{
          search: true,
        }}
      />

      <Modal isOpen={isModalOpen} onRequestClose={handleCancel} style={{ content: modalStyle }}>
        <div className='edit-form'>
          <div>
            <label>ID de Pago</label>
            <input
              type="text"
              value={editedData.idPagoOK}
              onChange={(e) => setEditedData({ ...editedData, idPagoOK: e.target.value })}
              style={inputStyle}
            />
          </div>
          <div>
            <label>ID de Orden</label>
            <input
              type="text"
              value={editedData.idOrdenOK}
              onChange={(e) => setEditedData({ ...editedData, idOrdenOK: e.target.value })}
              style={inputStyle}
            />
          </div>
          <div>
            <label>Método de Pago</label>
            <input
              type="text"
              value={editedData.metodoPagoBK}
              onChange={(e) => setEditedData({ ...editedData, metodoPagoBK: e.target.value })}
              style={inputStyle}
            />
          </div>
          <div>
            <label>Monto</label>
            <input
              type="text"
              value={editedData.monto}
              onChange={(e) => setEditedData({ ...editedData, monto: e.target.value })}
              style={inputStyle}
            />
          </div>
          <div>
            <label>Estado de Pago</label>
            <input
              type="text"
              value={editedData.estadoPago}
              onChange={(e) => setEditedData({ ...editedData, estadoPago: e.target.value })}
              style={inputStyle}
            />
          </div>
          <div>
            <label>Comentarios</label>
            <input
              type="text"
              value={editedData.comentarios}
              onChange={(e) => setEditedData({ ...editedData, comentarios: e.target.value })}
              style={inputStyle}
            />
          </div>
          {/* Agrega más campos de edición aquí con el estilo apropiado */}
          <button onClick={handleSave} style={buttonStyle}>Guardar</button>
          <button onClick={handleCancel} style={buttonStyle}>Cancelar</button>
        </div>
      </Modal>
    </div>
  );
}

export default PaymentsTable;
