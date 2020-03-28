import React, { useState, useEffect } from "react";
import {
  Card,
  Form,
  Button,
  Radio,
  Input,
  Label,
  Message,
  Icon
} from "semantic-ui-react";

const Invest = () => {
  const [startAmount, setStartAmount] = useState(0);
  const [startAmountError, setStartAmountError] = useState(false);

  const [years, setYears] = useState(0);
  const [yearsError, setYearsError] = useState(false);

  const [returnRate, setReturnRate] = useState(0);
  const [returnRateError, setReturnRateError] = useState(false);

  const [contribution, setContribution] = useState(0);
  const [contributionError, setContributionError] = useState(false);

  const [contributionFrq, setContributionFrq] = useState("week");

  const [investAmount, setInvestAmount] = useState(0);

  const calculateInvestment = () => {
    let amount = 0;
    let P = startAmount;
    let PMT = contribution;
    let r = returnRate;
    let n = (contributionFrq === 'month' ? 12 : 24);
    let t = years;

    console.log(PMT);

    if (PMT === 0 || PMT === '') {
      amount = startAmount*(1+(returnRate/100*years));
    } else {
      var A = P * Math.pow(1 + r / 100 / n, n * t);
      var S = PMT * ((Math.pow(1 + r / 100 / n, n * t) - 1) / (r / 100 / n));
      amount = (A + S).toFixed(2);
    }

    if (!!isNaN(amount) || amount >= 0) {
      setInvestAmount(amount);
    }

    // document.getElementById("id01").innerHTML = (A + S).toFixed(2);
    // document.getElementById("id02").innerHTML = (PMT * t * 12).toFixed(2);
    // document.getElementById("id03").innerHTML = (A - P).toFixed(2);
    // document.getElementById("id04").innerHTML = (S - PMT * t * 12).toFixed(2);
    // document.getElementById("id05").innerHTML = (
    //   ((A - P + (S - PMT * t * 12)) / (A + S)) *
    //   100
    // ).toFixed(2);
  };

  useEffect(() => {
    calculateInvestment();
  }, [startAmount, years, returnRate, contribution, contributionFrq]);

  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>Investment Calculator</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Message attached="bottom" success>
            <Icon name="dollar" />
            You will have ${investAmount} within {years} years.
          </Message>
          <Form className="attached">
            <Form.Field>
              <label>Starting amount</label>
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
              <label>After (in years)</label>
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
              <label>Return rate</label>
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
              <label>Additional contribution</label>
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
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Invest;
