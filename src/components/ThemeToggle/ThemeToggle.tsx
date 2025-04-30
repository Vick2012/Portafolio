import { useState, useEffect } from "react";

// Componente para alternar entre el tema claro y oscuro
const ThemeToggle: React.FC = () => {
  // Estado para gestionar el tema actual (claro o oscuro)
  const [theme, setTheme] = useState<"light" | "dark">(
    // Recupera el tema almacenado en localStorage, o usa "dark" por defecto
    (localStorage.getItem("theme") as "light" | "dark") || "dark",
  );

  // Función para actualizar los colores del tema en el DOM
  const updateThemeColors = (theme: "light" | "dark") => {
    const root = document.documentElement; // Accede al elemento raíz (<html>)
    root.setAttribute("data-theme", theme); // Establece el atributo 'data-theme' en el root

    // Define los colores para el texto, color primario y fondo de la tarjeta según el tema
    const textColor = theme === "light" ? "#003087" : "#66b0ff";
    const primaryColor = theme === "light" ? "#6200ea" : "#bb86fc";
    const cardBackground = theme === "light" ? "#f5f5f5" : "#1e1e1e";

    // Convierte los colores hexadecimales a valores RGB
    const primaryRgb = primaryColor
      .replace("#", "")
      .match(/.{1,2}/g)
      ?.map((val) => parseInt(val, 16)); // Convierte el color primario a RGB
    const cardRgb = cardBackground
      .replace("#", "")
      .match(/.{1,2}/g)
      ?.map((val) => parseInt(val, 16)); // Convierte el fondo de la tarjeta a RGB

    // Si los valores RGB son válidos, actualiza las variables CSS personalizadas
    if (primaryRgb && cardRgb) {
      root.style.setProperty("--text-color", textColor); // Establece el color del texto
      root.style.setProperty("--primary-color", primaryColor); // Establece el color primario
      root.style.setProperty("--card-background", cardBackground); // Establece el fondo de la tarjeta
      root.style.setProperty("--primary-color-rgb", primaryRgb.join(", ")); // Establece el color primario en formato RGB
      root.style.setProperty("--card-background-rgb", cardRgb.join(", ")); // Establece el fondo de la tarjeta en formato RGB
    }
  };

  // Función para alternar entre los temas claro y oscuro
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"; // Cambia el tema
    setTheme(newTheme); // Actualiza el estado con el nuevo tema
    localStorage.setItem("theme", newTheme); // Guarda el tema en localStorage
    updateThemeColors(newTheme); // Actualiza los colores del tema
  };

  // Hook useEffect para actualizar los colores del tema al cargar el componente o cuando cambia el tema
  useEffect(() => {
    updateThemeColors(theme); // Llama a la función para actualizar los colores
  }, [theme]); // Se ejecuta cada vez que el tema cambia

  return (
    // Botón para alternar entre el tema claro y oscuro
    <button onClick={toggleTheme} className="theme-toggle">
      {/* Muestra un texto diferente dependiendo del tema actual */}
      {theme === "dark" ? "🌙 Modo Oscuro" : "☀ Modo Claro"}
    </button>
  );
};

export default ThemeToggle;
