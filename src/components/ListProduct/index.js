import './index.css'
function ListProduct(){
  return(
    <table className='list-products' border='1'>
    <tbody>
          <tr>
            <th>Code</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>R$ A vista</th>
            <th>R$ A Prazo</th>
          </tr>
          <tr>
            <td>344</td>
            <td>SSD kingston</td>
            <td>Unidade de disco solido kingston tipo sta</td>
            <td>290,00</td>
            <td>350,00</td>
          </tr>
        </tbody>
    </table>

  );
}

export default ListProduct;
