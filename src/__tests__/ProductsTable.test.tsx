import React from "react";
import { render, screen } from "@testing-library/react";

import { products } from "mocks/data/products";
import { server } from 'mocks/server'

import { queryClient } from 'libs/react-query/queryClient';
import { QueryClientProvider } from "react-query";

import ProductsTable from "components/tables/ProductsTable";


// Establish API mocking before all tests.
beforeAll(() => server.listen())

test("renders ProductsTable items when products fetch successfully", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ProductsTable />
    </QueryClientProvider>
  );

  for (let product of products) {
    //using findBy method for asyncronous code
    expect(screen.findByText(product.name)).toBeTruthy();
    expect(screen.findByText(product.ref)).toBeTruthy();
    expect(screen.findByText(product.price)).toBeTruthy();
  }
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())