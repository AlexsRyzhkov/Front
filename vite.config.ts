import TanStackRouterVite from "@tanstack/router-plugin/vite";
import path from "node:path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		TanStackRouterVite({
			target: 'react',
			autoCodeSplitting: true,
			routesDirectory: path.join(__dirname, 'app/app/routes'),
			generatedRouteTree: path.join(__dirname, '/app/app/routes/gen/routeTree.gen.ts'),
			quoteStyle: 'single',
			routeFileIgnorePattern: 'gen',
		}),
		react(),
	],
	resolve: {
		alias: {
			// Список alias для компонентов основного приложения
			"@app": path.resolve(__dirname, 'app/app'),
			"@widget": path.resolve(__dirname, 'app/widgets'),
			"@features": path.resolve(__dirname, 'app/features'),
			"@entities": path.resolve(__dirname, 'app/entities'),
			"@pages": path.resolve(__dirname, 'app/pages'),
			"@shared": path.resolve(__dirname, 'app/shared'),

			// Список alias для библиотеки
			"@ui-kit": path.resolve(__dirname, 'libs/ui'),
			"@lib-store": path.resolve(__dirname, 'libs/store'),
			"@lib-enums": path.resolve(__dirname, 'libs/enums'),
		},
	},
});
