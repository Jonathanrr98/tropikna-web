import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const Card5 = () => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight='bold' transform='uppercase' color='#9E9E9E'>
          Your day your way
        </Text>
        <Text h3 color='white'>
          Your checklist for better sleep
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src='https://nextui.org/images/card-example-5.jpeg'
        objectFit='cover'
        width='100%'
        height='100%'
        alt='Relaxing app background'
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
              <Card.Image
                src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Fvector-premium%2Fsigno-reservado-mesa-restaurante-ilustracion-dibujos-animados-fecha-cena_11002300.htm&psig=AOvVaw3B45BjhfFGj1oFwkZfW_ee&ust=1669223330021000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOik_M-jwvsCFQAAAAAdAAAAABAJ'
                css={{ bg: "black", br: "50%" }}
                height={40}
                width={40}
                alt='Breathing app icon'
              />
            </Col>
            <Col>
              <Text color='#d1d1d1' size={12}>
                Breathing App
              </Text>
              <Text color='#d1d1d1' size={12}>
                Get a good night's sleep.
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify='flex-end'>
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight='bold'
                transform='uppercase'
              >
                Get App
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
