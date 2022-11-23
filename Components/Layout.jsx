import React from "react";
import {
  Navbar,
  Button,
  Link,
  Text,
  Card,
  Radio,
  Container,
} from "@nextui-org/react";
import NavBar from "./NavBar/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>
        <Container> {children} </Container>
      </main>
    </>
  );
}
