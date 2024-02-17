"use client"
import * as React from "react";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

function DefaultProvider({ children }: { children: React.ReactNode }) {
	return (
		// 2. wrap your app with `NextUIProvider` component
		<NextUIProvider>
			{children}
		</NextUIProvider>
	);
}

export { DefaultProvider }