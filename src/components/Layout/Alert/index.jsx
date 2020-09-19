import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

function Alert() {
    const alert = useSelector((state) => state.alerts);
    switch (alert.type) {
        case "success":
            toast.success(alert.message);
            break;
        case "warning":
            toast.warn(alert.message);
            break;
        case "error":
            toast.error(alert.message);
            break;
        default:
            break;
    }
    return <ToastContainer autoClose={2000} />;
}

export default Alert;
