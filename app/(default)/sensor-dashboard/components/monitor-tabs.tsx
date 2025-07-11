"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RealtimeViewTab } from "./tabs/realtime-view-tab";
import { HistoricalDataTab } from "./tabs/historical-data-tab";
import { CorrelationsTab } from "./tabs/correlations-tab";
import { HardwareInfoTab } from "./tabs/hardware-info-tab";
import { SensorData } from "@/lib/types/sensor-types";


interface MonitorTabsProps {
  sensorData: SensorData[];
  isStreaming: boolean;
  chartType: 'area' | 'line';
}

export function MonitorTabs({ sensorData, isStreaming, chartType }: MonitorTabsProps) {
  return (
    <Tabs defaultValue="realtime" className="space-y-4">
      <div className="">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="realtime">Real-time View</TabsTrigger>
          <TabsTrigger value="historical">Historical Data</TabsTrigger>
          <TabsTrigger value="correlations">Correlations</TabsTrigger>
          <TabsTrigger value="hardware">Hardware Info</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="realtime">
        <RealtimeViewTab 
          sensorData={sensorData} 
          isStreaming={isStreaming} 
          chartType={chartType} 
        />
      </TabsContent>

      <TabsContent value="historical">
        <HistoricalDataTab />
      </TabsContent>

      <TabsContent value="correlations">
        <CorrelationsTab />
      </TabsContent>

      <TabsContent value="hardware">
        <HardwareInfoTab />
      </TabsContent>
    </Tabs>
  );
}
