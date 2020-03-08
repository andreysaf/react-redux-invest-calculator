import React, { useState, useEffect } from "react";
import { Card, Form, Button, Radio, Input, Label } from "semantic-ui-react";

const Invest = () => {
  const [startAmount, setStartAmount] = useState(0);
  const [startAmountError, setStartAmountError] = useState(false);

  const [years, setYears] = useState(0);
  const [yearsError, setYearsError] = useState(0);

  const [returnRate, setReturnRate] = useState(0);
  const [returnRateError, setReturnRateError] = useState(0);

  const [contribution, setContribution] = useState(0);
  const [contributionError, setContributionError] = useState(0);

  const [contributionFrq, setContributionFrq] = useState("week");

  const calculateInvestment = () => {};

  useEffect(() => {
    console.log(startAmount);
  }, [startAmount]);

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
              <Input
                labelPosition="right"
                type="text"
                placeholder="Amount"
                value={startAmount}
                error={startAmountError}
                onChange={(e, { name, value }) => {
                  if (!isNaN(value) || value > 0) {
                    setStartAmount(value);
                    setStartAmountError(false);
                  } else {
                    setStartAmountError(true);
                  }
                }}
              >
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
