import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios';

function PaymentsTable() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    obtenerPagos();
  }, []);

  const obtenerPagos = async () => {
    try {
      const respuesta = await Axios.get('/'); 
      console.log(respuesta);
      console.log(respuesta.data.data);
      setPayments(respuesta.data.data[0].dataRes); 
    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    { title: 'ID de Pago', field: 'idPagoOK' },
    { title: 'ID de Orden', field: 'idOrdenOK' },
    { title: 'Método de Pago', field: 'metodoPagoBK' },
    { title: 'Monto', field: 'monto' },
    { title: 'Estado de Pago', field: 'estadoPago' },
    { title: 'Comentarios', field: 'comentarios' },
    { title: 'Fecha de Pago', field: 'fechaPagoReg' },
    { title: 'Nombre del Titular de la Tarjeta', field: 'detallesPago[0].nombreTitularTarjeta' },
    { title: 'Número de Tarjeta', field: 'detallesPago[0].numeroTarjeta' },
    { title: 'Fecha de Vencimiento de Tarjeta', field: 'detallesPago[0].fechaVencimientoTarjeta' },
    { title: 'Código CVV', field: 'detallesPago[0].codigoCVV' },
    { title: 'Calle de Facturación', field: 'detallesPago[0].direccionFacturacion[0].calle' },
    { title: 'Ciudad de Facturación', field: 'detallesPago[0].direccionFacturacion[0].ciudad' },
    { title: 'Estado de Facturación', field: 'detallesPago[0].direccionFacturacion[0].estado' },
    { title: 'Código Postal de Facturación', field: 'detallesPago[0].direccionFacturacion[0].codigoPostal' },
    { title: 'País de Facturación', field: 'detallesPago[0].direccionFacturacion[0].pais' },
    { title: 'ID de Transacción', field: 'datosTransaccion[0].idTransaccion' },
    { title: 'Código de Autorización', field: 'datosTransaccion[0].codigoAutorizacion' },
    { title: 'Respuesta de la Pasarela', field: 'datosTransaccion[0].respuestaPasarela' },
    // Agrega más columnas según sea necesario para mostrar los datos
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

        /*actions={[
          {
            icon: 'delete',
            tooltip: 'Eliminar',
           // onClick: (event, rowData) => eliminarPago(rowData.idPagoOK)
          },
          {
            icon: 'edit',
            tooltip: 'Editar',
            //onClick: (event, rowData) => editarPago(rowData.idPagoOK)
          }
        ]}
        */
      />
    </div>
  );
}

export default PaymentsTable;
