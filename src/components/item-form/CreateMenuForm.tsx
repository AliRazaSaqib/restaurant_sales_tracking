import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./form.module.css";
import commonStyles from "../../index.module.css";
import { useAppDispatch } from "../../hooks/storeHooks";
import { addDataThunk, editDataThunk } from "../../store/items/itemThunk";
import { MenuItem } from "../../types/CommonTypes";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router";

interface iItems {
  initialValues: MenuItem;
  isItemUpdate: boolean;
}

const validationSchema = Yup.object().shape({
  category: Yup.string().required("Category is required"),
  name: Yup.string().required("Name is required"),
  price: Yup.number()
    .required("Price is required")
    .min(0, "Price must be greater than or equal to 0"),
  cost: Yup.number()
    .required("Cost is required")
    .min(0, "Cost must be greater than or equal to 0"),
  stock: Yup.number()
    .required("Stock is required")
    .min(0, "Stock must be greater than or equal to 0"),
});

const CreateMenuForm: FC<iItems> = ({ initialValues, isItemUpdate }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      isItemUpdate
        ? dispatch(editDataThunk(values))
        : dispatch(addDataThunk(values));
      formik.resetForm();
      navigate("/");
    },
  });

  useEffect(() => {
    if (isItemUpdate) {
      formik.setValues(initialValues);
    }
  }, [initialValues]);

  return (
    <div className={styles.form_container}>
      <h2>Create Menu</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            onChange={formik.handleChange}
            value={formik.values.category}
          />
          {formik.errors.category && formik.touched.category && (
            <div className={styles.error}>{formik.errors.category}</div>
          )}
        </div>

        <div className={styles.form_group}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <div className={styles.error}>{formik.errors.name}</div>
          )}
        </div>

        <div className={styles.form_group}>
          <label htmlFor="options">Options</label>
          <select
            id="options"
            name="options"
            onChange={formik.handleChange}
            value={formik.values.options}>
            <option value="">Select option</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.errors.price && formik.touched.price && (
            <div className={styles.error}>{formik.errors.price}</div>
          )}
        </div>

        <div className={styles.form_group}>
          <label htmlFor="cost">Cost</label>
          <input
            type="number"
            id="cost"
            name="cost"
            onChange={formik.handleChange}
            value={formik.values.cost}
          />
          {formik.errors.cost && formik.touched.cost && (
            <div className={styles.error}>{formik.errors.cost}</div>
          )}
        </div>

        <div className={styles.form_group}>
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            onChange={formik.handleChange}
            value={formik.values.stock}
          />
          {formik.errors.stock && formik.touched.stock && (
            <div className={styles.error}>{formik.errors.stock}</div>
          )}
        </div>

        <button type="submit" className={commonStyles.button}>
          {isItemUpdate ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CreateMenuForm;
