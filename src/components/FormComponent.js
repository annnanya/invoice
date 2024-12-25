import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./FormComponent.css";
import uploadImage from '../uploadlogo.png'

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
        comments: ""
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
        localStorage.setItem("form", JSON.stringify(values));
        alert("Invoice Saved Successfully!");
        let form = document.getElementById("invoice")
        form.reset();
    };

    return (
        <div className="invoice-form-container">
            <h2>Create New Invoice</h2>
            <div className="form-container">
                <div className="upload-section">
                    <div className="upload-box">
                        <p>Upload Your Invoice</p>
                        <p>To auto-populate fields and save time</p>
                        <img src={uploadImage} alt="logo" className="uploadImage" />
                        <button className="upload-button">Upload File </button>
                        <p> <a href="#">Click to upload</a> or Drag and drop </p>
                    </div>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ setFieldValue }) => (
                        <Form id="invoice" className="invoice-form">
                            {/* Vendor Details */}
                            <div className="form-section">
                                <div className="logo-text">
                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z" fill="#E8F3FC" />
                                        <path d="M27 27H22.2C21.0799 27 20.5198 27 20.092 27.218C19.7157 27.4097 19.4097 27.7157 19.218 28.092C19 28.5198 19 29.0799 19 30.2V37M37 37V22.2C37 21.0799 37 20.5198 36.782 20.092C36.5903 19.7157 36.2843 19.4097 35.908 19.218C35.4802 19 34.9201 19 33.8 19H30.2C29.0799 19 28.5198 19 28.092 19.218C27.7157 19.4097 27.4097 19.7157 27.218 20.092C27 20.5198 27 21.0799 27 22.2V37M38 37H18M30.5 23H33.5M30.5 27H33.5M30.5 31H33.5" stroke="#1787E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <h2>Vendor Details</h2>
                                </div>
                                <h3>Vendor Information</h3>
                                <div className="form-group">
                                    <label>Vendor <span>*</span></label>
                                    <Field as="select" name="vendor" className="form-control" onChange={(e) => setFieldValue('vendor', e.target.value)}>
                                        <option value="">Select Vendor</option>
                                        <option value="A-1 Exterminators">A - 1 Exterminators</option>
                                    </Field>
                                    <ErrorMessage name="vendor" component="div" className="error" />
                                    <p>550 Main St., Lynn</p>
                                </div>
                                <a href="#" className="link">View Vendor Details</a>
                            </div>

                            {/* Invoice Details */}
                            <div className="form-section">
                                <div className="logo-text">
                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z" fill="#E8F3FC" />
                                        <path d="M20 23.8C20 22.1198 20 21.2798 20.327 20.638C20.6146 20.0735 21.0735 19.6146 21.638 19.327C22.2798 19 23.1198 19 24.8 19H31.2C32.8802 19 33.7202 19 34.362 19.327C34.9265 19.6146 35.3854 20.0735 35.673 20.638C36 21.2798 36 22.1198 36 23.8V37L33.25 35L30.75 37L28 35L25.25 37L22.75 35L20 37V23.8Z" stroke="#1787E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <h2>Invoice Details</h2>
                                </div>
                                <h3>General Information</h3>

                                {/* General Information */}
                                <div className="form-group">
                                    <label>Purchase Order Number <span>*</span></label>
                                    <Field as="select" name="purchaseOrderNumber" className="form-control" onChange={(e) => setFieldValue('purchaseOrderNumber', e.target.value)}>
                                        <option value="">Select PO Number</option>
                                        <option value="123456789">123456789</option>
                                        <option value="987654321">987654321</option>
                                    </Field>
                                    <ErrorMessage name="purchaseOrderNumber" component="div" className="error" />

                                </div>

                                {/* Invoice Details */}
                                <h3>Invoice Details</h3>
                                <div className="two-column-layout">
                                    <div className="form-group">
                                        <label>Invoice Number  <span>*</span></label>
                                        <Field type="text" name="invoiceNumber" className="form-control" onChange={(e) => setFieldValue('invoiceNumber', e.target.value)} />
                                        <ErrorMessage name="invoiceNumber" component="div" className="error" />
                                    </div>
                                    <div className="form-group">
                                        <label>Invoice Date  <span>*</span></label>
                                        <Field type="date" name="invoiceDate" className="form-control" onChange={(e) => setFieldValue('invoiceDate', e.target.value)} />
                                        <ErrorMessage name="invoiceDate" component="div" className="error" />
                                    </div>
                                    <div className="form-group">
                                        <label>Total Amount  <span>*</span></label>
                                        <Field type="number" name="totalAmount" className="form-control" onChange={(e) => setFieldValue('totalAmount', e.target.value)} />
                                        <ErrorMessage name="totalAmount" component="div" className="error" />
                                    </div>
                                    <div className="form-group">
                                        <label>Payment Terms  <span>*</span></label>
                                        <Field as="select" name="paymentTerms" className="form-control" onChange={(e) => setFieldValue('paymentTerms', e.target.value)}>
                                            <option value="">Select</option>
                                            <option value="Net 30">Net 30</option>
                                        </Field>
                                        <ErrorMessage name="paymentTerms" component="div" className="error" />
                                    </div>
                                    <div className="form-group">
                                        <label>Invoice Due Date <span>*</span></label>
                                        <Field type="date" name="invoiceDueDate" className="form-control" onChange={(e) => setFieldValue('invoiceDueDate', e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>GL Post Date <span>*</span></label>
                                        <Field type="date" name="glPostDate" className="form-control" onChange={(e) => setFieldValue('glPostDate', e.target.value)} />
                                        <ErrorMessage name="glPostDate" component="div" className="error" />
                                    </div>
                                </div>
                                <div className="description">
                                    <div className="form-group">
                                        <label>Invoice Description <span>*</span></label>
                                        <Field type="text" name="invoiceDescription" className="form-control" onChange={(e) => setFieldValue('invoiceDescription', e.target.value)} />
                                        <ErrorMessage name="invoiceDescription" component="div" className="error" />
                                    </div>
                                </div>

                            </div>

                            {/* Expense Details */}
                            <div className="form-section">
                                <h2>Expense Details</h2>
                                <div className="two-column-layout">
                                    <div className="form-group">
                                        <label>Line Amount  <span>*</span></label>
                                        <Field type="number" name="lineAmount" className="form-control" onChange={(e) => setFieldValue('lineAmount', e.target.value)} />
                                        <ErrorMessage name="lineAmount" component="div" className="error" />
                                    </div>
                                    <div className="form-group">
                                        <label>Department  <span>*</span></label>
                                        <Field as="select" name="department" className="form-control" onChange={(e) => setFieldValue('department', e.target.value)}>
                                            <option value="">Select Department</option>
                                            <option value="HR">HR</option>
                                        </Field>
                                        <ErrorMessage name="department" component="div" className="error" />
                                    </div>
                                    <div className="form-group">
                                        <label>Account  <span>*</span></label>
                                        <Field as="select" name="account" className="form-control" onChange={(e) => setFieldValue('account', e.target.value)}>
                                            <option value="">Select Account</option>
                                            <option value="Account 1">Account 1</option>
                                        </Field>
                                        <ErrorMessage name="account" component="div" className="error" />
                                    </div>
                                    <div className="form-group">
                                        <label>Location  <span>*</span></label>
                                        <Field as="select" name="location" className="form-control" onChange={(e) => setFieldValue('location', e.target.value)}>
                                            <option value="">Select Location</option>
                                            <option value="New York">New York</option>
                                        </Field>
                                        <ErrorMessage name="location" component="div" className="error" />
                                    </div>
                                </div>
                                <div className="description">
                                    <div className="form-group">
                                        <label>Description  <span>*</span></label>
                                        <Field type="text" name="expenseDescription" className="form-control" onChange={(e) => setFieldValue('expenseDescription', e.target.value)} />
                                        <ErrorMessage name="expenseDescription" component="div" className="error" />
                                    </div>
                                </div>
                                <div className="add-actions">
                                    <button type="reset" className="btn-add">+ Add Expense Coding
                                    </button>
                                </div>
                            </div>

                            {/* Comments Section */}
                            <div className="comments-section">
                                <div className="logo-text">
                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z" fill="#E8F3FC" />
                                        <path d="M23 24.5H28M23 28H31M23 34V36.3355C23 36.8684 23 37.1348 23.1092 37.2716C23.2042 37.3906 23.3483 37.4599 23.5005 37.4597C23.6756 37.4595 23.8837 37.2931 24.2998 36.9602L26.6852 35.0518C27.1725 34.662 27.4162 34.4671 27.6875 34.3285C27.9282 34.2055 28.1844 34.1156 28.4492 34.0613C28.7477 34 29.0597 34 29.6837 34H32.2C33.8802 34 34.7202 34 35.362 33.673C35.9265 33.3854 36.3854 32.9265 36.673 32.362C37 31.7202 37 30.8802 37 29.2V23.8C37 22.1198 37 21.2798 36.673 20.638C36.3854 20.0735 35.9265 19.6146 35.362 19.327C34.7202 19 33.8802 19 32.2 19H23.8C22.1198 19 21.2798 19 20.638 19.327C20.0735 19.6146 19.6146 20.0735 19.327 20.638C19 21.2798 19 22.1198 19 23.8V30C19 30.93 19 31.395 19.1022 31.7765C19.3796 32.8117 20.1883 33.6204 21.2235 33.8978C21.605 34 22.07 34 23 34Z" stroke="#1787E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <h2>Comments</h2>
                                </div>
                                <div className="form-group">
                                    <Field type="text" name="comments" placeholder="Add comments and use @Name to tag someone" className="form-control" onChange={(e) => setFieldValue('comments', e.target.value)} />
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="form-actions">
                                <button type="reset" className="btn">⋮</button>
                                <button type="reset" className="btn-secondary">Save as Draft</button>
                                <button type="submit" className="btn-primary">Submit</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

        </div >
    );
};

export default FormComponent;