import React from "react";
import { Link } from "react-router-dom";
import "./booking.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Bookingschema = Yup.object().shape({
  vehicle: Yup.string().required("Please select a vehicle"),
  pickUpDate: Yup.date().required("Please select a pick-up date"),
  dropOffDate: Yup.date().required("Please select a drop-off date"),
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  phone: Yup.string().required("Please enter your phone number"),
});

const Booking = () => {
  return (
    <div className="form-container">
      <h2>Book a Vehicle</h2>
      <Formik
        initialValues={{
          vehicle: "",
          pickUpDate: "",
          dropOffDate: "",
          name: "",
          email: "",
          phone: "",
        }}
        Bookingschema={Bookingschema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="form-group">
              <label htmlFor="vehicle">Vehicle</label>
              <Field as="select" name="vehicle">
                <option value="">Select a vehicle</option>
                <option value="Audi Q5">Audi Q5</option>
                <option value="BMW X3">BMW X3</option>
                <option value="Mercedes GLC">Mercedes GLC</option>
                <option value="Toyota RAV4">Toyota RAV4</option>
              </Field>
              <ErrorMessage name="vehicle" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="pickUpDate">Pick-Up Date</label>
              <Field type="date" name="pickUpDate" />
              <ErrorMessage
                name="pickUpDate"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dropOffDate">Drop-Off Date</label>
              <Field type="date" name="dropOffDate" />
              <ErrorMessage
                name="dropOffDate"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <Field type="text" name="phone" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Booking;
