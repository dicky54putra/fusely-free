import React from 'react'

import Button from 'components/atoms/Button'
import Typography from 'components/atoms/Typography'

const home = () => {
  return (
    <>
    <div>home</div>
    <Button isLink href='/' />
    <Button isLink href='/' variant='outlined' />
    <Button isLink href='/' variant='white' />
    <Typography component='h1' variant='h1' className='okok' id="ookok" T='lk'>Children</Typography>
    <Typography component='h2' variant='h2'>Children</Typography>
    <Typography component='h3' variant='h3'>Children</Typography>
    <Typography component='h4' variant='h4'>Children</Typography>
    <Typography component='h5' variant='h5'>Children</Typography>
    <Typography component='h6' variant='h6'>Children</Typography>
    <Typography component='span' variant='body1'>Children</Typography>
    <Typography component='p' variant='body2'>Children</Typography>
    <Typography component='small' variant='body3'>Children</Typography>
    <Typography component='div' variant='body4'>Children</Typography>
    </>
  )
}

export default home