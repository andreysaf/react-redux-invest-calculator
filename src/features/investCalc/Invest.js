import React, { useState } from "react";
import { Card, Form, Button, Radio, Input, Label } from "semantic-ui-react";

const Invest = () => {
  const [contributionFrq, setContributionFrq] = useState("week");

  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>Investment Calculator</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Form>
            <Form.Field>
              <label>Starting amount</label>
              <Input labelPosition="right" type="text" placeholder="Amount">
                <Label basic>$</Label>
                <input />
                <Label>.00</Label>
              </Input>
            </Form.Field>
            <Form.Field>
              <label>After (in years)</label>
              <input />
            </Form.Field>
            <Form.Field>
              <label>Return rate</label>
              <Input labelPosition="right" type="text" placeholder="Percent">
                <Label basic>%</Label>
                <input />
                <Label>.00</Label>
              </Input>
            </Form.Field>
            <Form.Field>
              <label>Additional contribution</label>
              <Input labelPosition="right" type="text" placeholder="Amount">
                <Label basic>$</Label>
                <input />
                <Label>.00</Label>
              </Input>
            </Form.Field>
            <Form.Field>
              Contribute at the end of each: <b>{contributionFrq}</b>
            </Form.Field>
            <Form.Field>
              <Radio
                label="Week"
                name="contributionRadioGroup"
                value="week"
                checked={contributionFrq === "week"}
                onChange={() => {
                  setContributionFrq("week");
                }}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="Month"
                name="contributionRadioGroup"
                value="month"
                checked={contributionFrq === "month"}
                onChange={() => {
                  setContributionFrq("month");
                }}
              />
            </Form.Field>
            <Button type="submit">Calculate</Button>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Invest;
