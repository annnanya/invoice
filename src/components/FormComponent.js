import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./FormComponent.css";

const FormComponent = () => {
    const initialValues = {
        vendor: "",
        purchaseOrderNumber: "",
        invoiceNumber: "",
        invoiceDate: "",
        totalAmount: "",
        paymentTerms: "",
        invoiceDueDate: "",
        glPostDate: "",
        invoiceDescription: "",
        lineAmount: "",
        account: "",
        department: "",
        location: "",
        expenseDescription: "",
    };

    const validationSchema = Yup.object({
        vendor: Yup.string().required("Vendor is required"),
        purchaseOrderNumber: Yup.string(),
        invoiceNumber: Yup.string().required("Invoice Number is required"),
        invoiceDate: Yup.date().required("Invoice Date is required"),
        totalAmount: Yup.number().required("Total Amount is required").positive(),
        paymentTerms: Yup.string().required("Payment Terms are required"),
        invoiceDueDate: Yup.date().required("Invoice Due Date is required"),
        glPostDate: Yup.date().required("GL Post Date is required"),
        invoiceDescription: Yup.string().required("Description is required"),
        lineAmount: Yup.number().required("Line Amount is required").positive(),
        account: Yup.string().required("Account is required"),
        department: Yup.string().required("Department is required"),
        location: Yup.string().required("Location is required"),
        expenseDescription: Yup.string().required("Expense Description is required"),
    });

    const onSubmit = (values) => {
        console.log("Form Submitted", values);
        alert("Invoice Saved Successfully!");
    };

    return (
        <div className="form-container">
            <h2>Create New Invoice</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <div className="form-group">
                        <label>Vendor</label>
                        <Field as="select" name="vendor">
                            <option value="">Select Vendor</option>
                            <option value="Vendor A">A - Exterminators</option>
                            <option value="Vendor B">B - Supplies</option>
                        </Field>
                        <ErrorMessage name="vendor" component="div" className="error" />
                    </div>
                    <div className="form-group">
                        <label>Purchase Order Number</label>
                        <Field type="text" name="purchaseOrderNumber" />
                    </div>
                    <div className="form-group">
                        <label>Invoice Number</label>
                        <Field type="text" name="invoiceNumber" />
                        <ErrorMessage name="invoiceNumber" component="div" className="error" />
                    </div>
                    <div className="form-group">
                        <label>Invoice Date</label>
                        <Field type="date" name="invoiceDate" />
                        <ErrorMessage name="invoiceDate" component="div" className="error" />
                    </div>
                    <div className="form-group">
                        <label>Total Amount</label>
                        <Field type="number" name="totalAmount" />
                        <ErrorMessage name="totalAmount" component="div" className="error" />
                    </div>
                    <div className="form-group">
                        <label>Payment Terms</label>
                        <Field as="select" name="paymentTerms">
                            <option value="">Select Terms</option>
                            <option value="Net 15">Net 15</option>
                            <option value="Net 30">Net 30</option>
                            <option value="Net 45">Net 45</option>
                        </Field>
                        <ErrorMessage name="paymentTerms" component="div" className="error" />
                    </div>
                    <div className="form-group">
                        <label>Invoice Due Date</label>
                        <Field type="date" name="invoiceDueDate" />
                        <ErrorMessage name="invoiceDueDate" component="div" className="error" />
                    </div>
                    <div className="form-group">
                        <label>GL Post Date</label>
                        <Field type="date" name="glPostDate" />
                        <ErrorMessage name="glPostDate" component="div" className="error" />
                    </div>
                    <div className="form-group">
                        <label>Invoice Description</label>
                        <Field as="textarea" name="invoiceDescription" />
                        <ErrorMessage name="invoiceDescription" component="div" className="error" />
                    </div>
                    <div className="form-group expense-group">
                        <h3>Expense Details</h3>
                        <label>Line Amount</label>
                        <Field type="number" name="lineAmount" />
                        <ErrorMessage name="lineAmount" component="div" className="error" />
                    </div>
                    <div className="form-group">
                        <label>Account</label>
                        <Field as="select" name="account">
                            <option value="">Select Account</option>
                            <option value="Account 1">Account 1</option>
                            <option value="Account 2">Account 2</option>
                        </Field>
                        <ErrorMessage name="account" component="div" className="error" />
                    </div>
                    <div className="form-group">
                        <label>Department</label>
                        <Field as="select" name="department">
                            <option value="">Select Department</option>
                            <option value="HR">HR</option>
                            <option value="Finance">Finance</option>
                        </Field>
                        <ErrorMessage name="department" component="div" className="error" />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <Field as="select" name="location">
                            <option value="">Select Location</option>
                            <option value="New York">New York</option>
                            <option value="San Francisco">San Francisco</option>
                        </Field>
                        <ErrorMessage name="location" component="div" className="error" />
                    </div>
                    <div className="form-group">
                        <label>Expense Description</label>
                        <Field as="textarea" name="expenseDescription" />
                        <ErrorMessage
                            name="expenseDescription"
                            component="div"
                            className="error"
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit">Save Invoice</button>
                        <button type="reset">Reset</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default FormComponent;
