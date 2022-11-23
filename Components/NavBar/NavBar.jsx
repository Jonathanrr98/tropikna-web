import React from "react";
import {
  Navbar,
  Button,
  Text,
  Card,
  Spacer,
  Radio,
  useTheme,
} from "@nextui-org/react";

import Link from "next/link";
import { Layout } from "./Layout.js";
import Logo from "./Logo.js";
import { VariantsSelectorWrapper } from "./VariantsSelectorWrapper.js";

export default function NavBar() {
  const [variant, setVariant] = React.useState("default");
  const [activeColor, setActiveColor] = React.useState("primary");

  const { isDark } = useTheme();

  const variants = [
    "default",
    "highlight",
    "highlight-solid",
    "underline",
    "highlight-rounded",
    "highlight-solid-rounded",
    "underline-rounded",
  ];

  const colors = ["primary", "secondary", "success", "warning", "error"];

  return (
    <Layout>
      <Navbar isBordered={isDark} variant='sticky'>
        <Navbar.Brand>
          <Link href={"/"}>
            <Text b color='inherit' hideIn='xs'>
              Cub-Ita Tropikna
            </Text>
          </Link>
        </Navbar.Brand>
        <Navbar.Content activeColor={activeColor} hideIn='xs' variant={variant}>
          <Link href='/Ventas/ventas'>Venta</Link>
          <Link href='/Almacen/almacen'> Almacén </Link>
          <Link href='/IPV/ipv'> IPV </Link>
          <Link href='/Balance/balance'>Balance</Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color='inherit' href='#'>
            Iniciar sesión
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} color={activeColor} href='#'>
              Registrarse
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
