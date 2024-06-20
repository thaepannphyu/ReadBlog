export const fetchCsrfToken = async () => {
    await fetch('http://127.0.0.1:8000/sanctum/csrf-cookie');
  };