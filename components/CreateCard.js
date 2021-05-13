import React from "react";
import { Text, View, ScrollView } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";

function CreateCard() {
  return (
    <ScrollView>
      <Card style={{ padding: 20, margin: 10, backgroundColor: "red" }}>
        <Card.Content>
          <Title>How to make a cake</Title>
          <Paragraph>you will learn how to make a cake</Paragraph>
        </Card.Content>

        <Card.Cover source={require("../img/cake1.jpg")} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

      <Card style={{ padding: 20, margin: 10, backgroundColor: "red" }}>
        <Card.Content>
          <Title>How to make a cake</Title>
          <Paragraph>you will learn how to make a cake</Paragraph>
        </Card.Content>

        <Card.Cover source={require("../img/cake1.jpg")} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>


      <Card style={{ padding: 20, margin: 10, backgroundColor: "red" }}>
        <Card.Content>
          <Title>How to make a cake</Title>
          <Paragraph>you will learn how to make a cake</Paragraph>
        </Card.Content>

        <Card.Cover source={require("../img/cake1.jpg")} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

export default CreateCard;
