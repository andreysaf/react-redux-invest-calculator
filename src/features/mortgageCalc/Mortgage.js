import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { storeValues } from './mortgageSlice';
import { Card, Form, Radio, Input, Label, Button } from "semantic-ui-react";
import styles from "./Mortgage.module.css";

const Invest = () => {
  // local state
  const [startAmount, setStartAmount] = useState(0);
  const [startAmountError, setStartAmountError] = useState(false);

  const [years, setYears] = useState(0);
  const [yearsError, setYearsError] = useState(false);

  const [returnRate, setReturnRate] = useState(0);
  const [returnRateError, setReturnRateError] = useState(false);

  const [contribution, setContribution] = useState(0);
  const [contributionError, setContributionError] = useState(false);

  const [contributionFrq, setContributionFrq] = useState("week");

  const [mortgageAmount, setMortgageAmount] = useState(0);

  const dispatch = useDispatch();

  const calculateMortgage = () => {
    let r = returnRate / 100 / 12;
    let p = startAmount - contribution;
    let n = 12;
    n = n * years;
    let amount = p * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    if (!isNaN(amount) || amount >= 0) {
      amount = contributionFrq === "month" ? amount : amount / 4;
      setMortgageAmount(amount);
    }
  };

  const compareWithInvestments = () => {
    dispatch(storeValues({ paymentAmount: Number(mortgageAmount) || 0, 
      frq: contributionFrq === "month" ? 12 : 48,  
      startAmount : Number(contribution) || 0,
      years : Number(years) || 0 }));
  }

  useEffect(() => {
    calculateMortgage();
  }, [startAmount, years, returnRate, contribution, contributionFrq]);

  return (
    <div className={styles.calculator}>
      <Card>
        <Card.Content>
          <Card.Header>Mortgage Calculator</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Form className="attached">
            <Form.Field>
              <label>Mortgage amount</label>
              <Input
                labelPosition="right"
                type="text"
                placeholder="Amount"
                value={startAmount}
                error={startAmountError}
                onChange={(e, { name, value }) => {
                  if (!isNaN(value) || value >= 0) {
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
              <label>Mortgage length (in years)</label>
              <Input
                type="text"
                placeholder="Years"
                value={years}
                error={yearsError}
                onChange={(e, { name, value }) => {
                  if (!isNaN(value) || value > 0) {
                    setYears(value);
                    setYearsError(false);
                  } else {
                    setYearsError(true);
                  }
                }}
              >
                <input />
              </Input>
            </Form.Field>
            <Form.Field>
              <label>Interest rate</label>
              <Input
                labelPosition="right"
                type="text"
                placeholder="Percent"
                value={returnRate}
                error={returnRateError}
                onChange={(e, { name, value }) => {
                  if (!isNaN(value) || value > 0) {
                    setReturnRate(value);
                    setReturnRateError(false);
                  } else {
                    setReturnRateError(true);
                  }
                }}
              >
                <Label basic>%</Label>
                <input />
                <Label>.00</Label>
              </Input>
            </Form.Field>
            <Form.Field>
              <label>Down Payment</label>
              <Input
                labelPosition="right"
                type="text"
                placeholder="Amount"
                value={contribution}
                error={contributionError}
                onChange={(e, { name, value }) => {
                  if (!isNaN(value) || value > 0) {
                    setContribution(value);
                    setContributionError(false);
                  } else {
                    setContributionError(true);
                  }
                }}
              >
                <Label basic>$</Label>
                <input />
                <Label>.00</Label>
              </Input>
            </Form.Field>
            <Form.Field>
              Payment Frequency: <b>{contributionFrq}</b>
            </Form.Field>
            <Form.Field>
              <Radio
                label="Weekly"
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
                label="Monthly"
                name="contributionRadioGroup"
                value="month"
                checked={contributionFrq === "month"}
                onChange={() => {
                  setContributionFrq("month");
                }}
              />
            </Form.Field>
          </Form>
        </Card.Content>
        <Card.Content className={styles.bottom}>
          <Card.Header>Payments</Card.Header>
          <div>
            Your payment is{" "}
            <b>
              {mortgageAmount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}{" "}
            </b>
            every {contributionFrq}.
          </div>
        </Card.Content>
        <Card.Content extra>
          <Button basic color="green" onClick={compareWithInvestments}>
            Compare to investments
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Invest;
