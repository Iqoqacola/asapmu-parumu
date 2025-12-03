const BASE_URL = import.meta.env.VITE_API_URL;

const getHeaders = () => {
    const token = localStorage.getItem("authToken");
    return {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
    };
};

export const api = {
    // Fungsi GET
    get: async (endpoint) => {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: "GET",
            headers: getHeaders(),
        });

        if (!response.ok) {
            if (response.status === 401) {
                console.warn("Sesi habis, logout otomatis...");
                localStorage.removeItem("authToken");
                window.location.href = "/masuk";
                return;
            }
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    },

    // Fungsi POST
    post: async (endpoint, body) => {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(body),
        });

        const contentType = response.headers.get("content-type");
        let data;
        if (contentType && contentType.indexOf("application/json") !== -1) {
            data = await response.json();
        } else {
            data = { message: await response.text() };
        }

        return { ok: response.ok, data };
    },
};