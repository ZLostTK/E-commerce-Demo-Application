import { useState, useEffect } from "react";
import { apiService, BusinessConfig } from "../services/api";

export const useBusinessConfig = () => {
  const [config, setConfig] = useState<BusinessConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        setLoading(true);
        const response = await apiService.getPublicConfig();
        setConfig(response.data);
      } catch (err) {
        console.error("Error fetching business config:", err);
        setError("Failed to load business configuration");
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return { config, loading, error };
};
