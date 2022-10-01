import { createRouter } from "../utils";
import exampleRouter from "./example";

export const appRouter = createRouter().merge("example.", exampleRouter);

export type IAppRouter = typeof appRouter;