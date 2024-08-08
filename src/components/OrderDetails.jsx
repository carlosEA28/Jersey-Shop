/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function OrderDetails({ itemsInBag }) {
  function calculateTotal() {
    let orderTotal = 0;
    itemsInBag.forEach((item) => (orderTotal += item.price * item.quantity));
    return orderTotal;
  }

  return (
    <>
      <section className="summary">
        <strong>Order Details</strong>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {itemsInBag.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.quantity} x {item.name}
                </td>
                <td>$ {(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}

            <tr>
              <th>Total</th>
              <th>$ {calculateTotal().toFixed(2)}</th>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default OrderDetails;
