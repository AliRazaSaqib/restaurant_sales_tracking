import { useLocation, useNavigate } from "react-router-dom";
import CreateMenuForm from "./CreateMenuForm";
import { MenuItem, ROUTE_QUERY_PARAMS } from "../../types/CommonTypes";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/storeHooks";
import { initialValues } from "../../utils/commonUtils";

export const Form = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [values, setValues] = useState<MenuItem>();
  const itemList = useAppSelector((state) => state.items.items);

  const searchParams = new URLSearchParams(location.search);
  const itemId = searchParams.get(ROUTE_QUERY_PARAMS.ITEM_ID);

  useEffect(() => {
    const itemToEdit = itemList.find((item) => item.id === itemId);
    setValues(itemToEdit);

    itemList.length === 0 && itemId !== null && navigate("/");
  }, [itemId]);

  return (
    <div>
      <CreateMenuForm
        initialValues={values !== undefined ? values : initialValues}
        isItemUpdate={itemId === null ? false : true}
      />
    </div>
  );
};
