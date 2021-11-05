import React, { Component } from 'react';
import { Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
const Item = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default class App extends Component {
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  pad(str) {
    return str.padEnd(3);
  }

  createEquation(a0, b0, num, m, y) {
    var empty = "___"

    var x0 = [];
    for (var x = 0; x < num; x++) {
      var m0 = m;
      var y0 = y;
      var ai = this.getRandomInt(a0.length);
      var bi = this.getRandomInt(b0.length);

      var a = a0[ai];
      var b = b0[bi];
      var c = a * b;
      if (y0 === undefined) {
        y0 = this.getRandomInt(3);
      }
      if (m0 === undefined) {
        m0 = this.getRandomInt(2);
      }
      if (m0 === 1) {
        x0.push(`${this.pad(y0 === 0 ? empty : a.toString())} x ${this.pad(y0 === 1 ? empty : b.toString())} = ${this.pad(y0 === 2 ? empty : c.toString())}`);
      }
      else {
        x0.push(`${y0 === 0 ? empty : c.toString().padEnd(3)} ÷ ${y0 === 1 ? empty : b.toString().padEnd(3)} = ${y0 === 2 ? empty : a.toString().padEnd(3)}`);
      }
    }
    return x0;
  }

  render() {
    var a0 = [6, 7];
    var b0 = [1, 2, 3, 4, 5, 7, 8, 9, 10];
    var data = this.createEquation(a0, b0, 40, undefined, 2);
    return <Container maxWidth="md"><Grid spacing={2} alignItems="center" justifyContent="center" container>
      {
        data.map((z, i) => <Grid key={i} item xs={3}><Item><Typography variant="h5"><span>{z}</span></Typography></Item></Grid>)
      }
    </Grid></Container>;
  }
}
