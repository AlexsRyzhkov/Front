import { defineConfig } from 'vite';
import TanStackRouterVite from "@tanstack/router-plugin/vite";
import path from "node:path";
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

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
		svgr(),
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
			"@ui-hooks": path.resolve(__dirname, 'libs/hooks'),
			"@lib-store": path.resolve(__dirname, 'libs/store'),
			"@lib-enums": path.resolve(__dirname, 'libs/enums'),
		},
	},
});
