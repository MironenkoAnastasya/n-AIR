import { httpSource } from "./http";
import { mockDataSource } from "./mock";
import { DataSource } from "./types";
import "server-only"

export const api: DataSource = process.env.DATA_SOURCE === "api" ? httpSource : mockDataSource;