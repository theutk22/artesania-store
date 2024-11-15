import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import React from 'react'
import { formatPrice } from '../utils/format'

const Product = (props) => {
  return (
    <Card sx={{ minWidth: 200, width: '100%', mx: 2 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.image}
        title='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {props.name}
        </Typography>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          {props.description}
        </Typography>

        <Typography variant='h3' sx={{ color: 'text.secondary' }}>
          {formatPrice(props.price)}
        </Typography>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          Quedan {props.stock}
        </Typography>
      </CardContent>
      <CardActions>
        <Button disabled={props.stock == 0} size='small'>
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  )
}

export default Product
