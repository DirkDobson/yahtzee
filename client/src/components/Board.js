import React from 'react'
import { Grid } from 'semantic-ui-react'
import Dice from './Dice'

const Board = () => (
  <Grid>
    <Grid.Row>
    <Dice value={1} />
    <Dice value={2} />
    <Dice value={3} />
    <Dice value={4} />
    <Dice value={5} />
    <Dice value={6} />
    </Grid.Row>
  </Grid>
)

export default Board