import React from "react";
import { AlertTriangle, Wifi, WifiOff } from "lucide-react";

interface DemoIndicatorProps {
  isDemoMode: boolean;
  backendStatus: "online" | "offline" | "checking";
}

const DemoIndicator: React.FC<DemoIndicatorProps> = ({
  isDemoMode,
  backendStatus,
}) => {
  if (!isDemoMode) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2">
        <AlertTriangle className="h-5 w-5" />
        <div className="flex items-center space-x-2">
          <span className="font-medium">Demo Mode</span>
          <div className="flex items-center space-x-1">
            {backendStatus === "online" ? (
              <Wifi className="h-4 w-4 text-green-600" />
            ) : backendStatus === "offline" ? (
              <WifiOff className="h-4 w-4 text-red-600" />
            ) : (
              <div className="h-4 w-4 border-2 border-yellow-600 border-t-transparent rounded-full animate-spin" />
            )}
            <span className="text-sm">
              {backendStatus === "online" && "Backend Online"}
              {backendStatus === "offline" && "Backend Offline"}
              {backendStatus === "checking" && "Checking..."}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoIndicator;
