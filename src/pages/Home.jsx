import { Box } from '@mui/material'
import Product from '../components/Product'
import { useEffect } from 'react'
export default function Home() {
  useEffect(() => {
    fetch('http://localhost:3000/artesania')
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err))
  }, [])
  return (
    <>
      <Box
        sx={{
          border: 2,
          p: 5,
          borderColor: 'chile',
          backgroundColor: '#f8f8f8',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-around'
        }}
        component='div'
      >
        <Product
          name='frasco'
          image='https://img.freepik.com/fotos-premium/frutas-verduras-frescas_1121151-13610.jpg?w=1060'
          description='frasco de greda'
          price={10000}
          stock={10}
        />

        <Product
          name='frasco'
          image='https://img.freepik.com/fotos-premium/frutas-verduras-frescas_1121151-13610.jpg?w=1060'
          description='frasco de greda'
          price={15000}
          stock={10}
        />
        <Product
          name='frasco'
          image='https://img.freepik.com/fotos-premium/frutas-verduras-frescas_1121151-13610.jpg?w=1060'
          description='frasco de greda'
          price={20000}
          stock={0}
        />
      </Box>
    </>
  )
}
