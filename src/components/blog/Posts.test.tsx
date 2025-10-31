import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Posts } from "./Posts";

jest.mock("@/utils/utils", () => ({
  getPosts: () => [
    { slug: "post-1", metadata: { publishedAt: "2023-01-01" } },
    { slug: "post-2", metadata: { publishedAt: "2023-01-02" } },
    { slug: "post-3", metadata: { publishedAt: "2023-01-03" } },
    { slug: "post-4", metadata: { publishedAt: "2023-01-04" } },
    { slug: "post-5", metadata: { publishedAt: "2023-01-05" } },
  ],
}));

jest.mock("./Post", () => {
  return function DummyPost({ post }) {
    return <div data-testid={post.slug}>{post.slug}</div>;
  };
});

describe("Posts component", () => {
  test("displays all posts when no range is provided", () => {
    render(<Posts />);
    expect(screen.getByTestId("post-5")).toBeInTheDocument();
    expect(screen.getByTestId("post-4")).toBeInTheDocument();
    expect(screen.getByTestId("post-3")).toBeInTheDocument();
    expect(screen.getByTestId("post-2")).toBeInTheDocument();
    expect(screen.getByTestId("post-1")).toBeInTheDocument();
  });

  test("displays a slice of posts when a two-value range is provided", () => {
    render(<Posts range={[2, 4]} />);
    expect(screen.queryByTestId("post-5")).not.toBeInTheDocument();
    expect(screen.getByTestId("post-4")).toBeInTheDocument();
    expect(screen.getByTestId("post-3")).toBeInTheDocument();
    expect(screen.getByTestId("post-2")).toBeInTheDocument();
    expect(screen.queryByTestId("post-1")).not.toBeInTheDocument();
  });

  test("displays all posts from a starting point when a single-value range is provided", () => {
    render(<Posts range={[3]} />);
    expect(screen.getByTestId("post-5")).toBeInTheDocument();
    expect(screen.getByTestId("post-4")).toBeInTheDocument();
    expect(screen.getByTestId("post-3")).toBeInTheDocument();
    expect(screen.queryByTestId("post-2")).not.toBeInTheDocument();
    expect(screen.queryByTestId("post-1")).not.toBeInTheDocument();
  });
});
