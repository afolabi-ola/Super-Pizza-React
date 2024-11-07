import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItemBtn from "./DeleteItemBtn";
import UpdateItemQuantity from "./UpdateItemQuantities";
import { getQuantityById } from "./cartslice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center sm:gap-6 justify-between">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItemBtn pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
