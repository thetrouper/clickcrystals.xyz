'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const SkeletonCard = () => (
  <Card className="w-full h-full rounded bg-gray-200 animate-pulse">
    <CardHeader className="space-y-2">
      <CardTitle className="h-6 bg-gray-300 rounded w-3/4"></CardTitle>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </CardHeader>
    <CardContent className="flex-1 space-y-4">
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      <div className="h-4 bg-gray-300 rounded w-4/6"></div>
      <div className="h-28 bg-gray-300 rounded"></div>
    </CardContent>
  </Card>
);

export default SkeletonCard;
