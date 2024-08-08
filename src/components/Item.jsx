/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/prop-types
function Item({ item, selectProduct, changeQuantity }) {
  return (
    <>
      <div
        onClick={() => selectProduct(item.id)}
        className={`product ${item.isInBag ? "selected" : ""}`}
      >
        <div className="photo">
          <img src={"./img/" + item.photo} alt={item.name} />
        </div>
        <div className="description">
          <span className="name">{item.name}</span>
          <span className="price">$ {item.price.toFixed(2)}</span>

          {item.isInBag && (
            <div className="quantity-area">
              <button onClick={(e) => changeQuantity(e, item.id, -1)}>-</button>
              <span className="quantity">{item.quantity}</span>
              <button onClick={(e) => changeQuantity(e, item.id, 1)}>+</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Item;
