import { useState, useEffect } from "react";
import config from "../config";

export type BackendStatus = "online" | "offline" | "checking";

export const useBackendStatus = () => {
  const [status, setStatus] = useState<BackendStatus>("checking");
  const [isDemoMode, setIsDemoMode] = useState(false);

  useEffect(() => {
    const checkBackendStatus = async () => {
      try {
        // Verificar si estamos en modo demo por configuración
        const demoMode = import.meta.env.VITE_DEMO_MODE === "true";
        setIsDemoMode(demoMode);

        if (demoMode) {
          setStatus("offline");
          return;
        }

        // Intentar hacer una petición al backend
        const response = await fetch(`${config.API_URL}/config/public`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // Timeout de 5 segundos
          signal: AbortSignal.timeout(5000),
        });

        if (response.ok) {
          setStatus("online");
        } else {
          setStatus("offline");
        }
      } catch (error) {
        console.log("Backend not available, using demo mode");
        setStatus("offline");
      }
    };

    checkBackendStatus();

    // Verificar cada 30 segundos
    const interval = setInterval(checkBackendStatus, 30000);

    return () => clearInterval(interval);
  }, []);

  return {
    status,
    isDemoMode: isDemoMode || status === "offline",
    isOnline: status === "online",
    isOffline: status === "offline",
    isChecking: status === "checking",
  };
};
