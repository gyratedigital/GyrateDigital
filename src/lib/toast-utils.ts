import { toast } from "sonner";

export type ToastType = "success" | "error" | "info" | "warning";

interface ToastOptions {
    description?: string;
    duration?: number;
}

const toastStyles = {
    success: {
        background: "#0d2114",
        border: "1px solid #68BA7F",
        color: "#fff",
    },
    error: {
        background: "#210d0d",
        border: "1px solid #ef4444",
        color: "#fff",
    },
    warning: {
        background: "#211a0d",
        border: "1px solid #f59e0b",
        color: "#fff",
    },
    info: {
        background: "#0d1621",
        border: "1px solid #3b82f6",
        color: "#fff",
    },
};

export const showToast = (
    message: string,
    type: ToastType = "info",
    options?: ToastOptions
) => {
    const baseStyle = {
        ...toastStyles[type],
    };

    switch (type) {
        case "success":
            return toast.success(message, {
                description: options?.description,
                duration: options?.duration || 4000,
                style: baseStyle,
            });
        case "error":
            return toast.error(message, {
                description: options?.description,
                duration: options?.duration || 4000,
                style: baseStyle,
            });
        case "warning":
            return toast.warning(message, {
                description: options?.description,
                duration: options?.duration || 4000,
                style: baseStyle,
            });
        case "info":
        default:
            return toast.info(message, {
                description: options?.description,
                duration: options?.duration || 4000,
                style: baseStyle,
            });
    }
};
