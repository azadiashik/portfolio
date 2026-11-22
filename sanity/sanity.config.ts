import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schema";
export default defineConfig({ name: "portfolio", title: "Portfolio", projectId: "PASTE_PROJECT_ID", dataset: "production", plugins: [structureTool()], schema: { types: schemaTypes } });
