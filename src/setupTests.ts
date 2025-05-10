import "@testing-library/jest-dom/vitest";
import { server } from "./vinyl/mocks/node";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
