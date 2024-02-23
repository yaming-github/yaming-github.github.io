import React from 'react'
import { Divider } from 'antd'
import { Header } from './header'
import { Work } from './work'
import { Stack } from './techstack'
import { Edu } from './edu'
import { Pub } from './pub'
import { Hooks } from './hooks'

export const Page = () => {
  return (
    <>
      <Header />
      <Divider style={{ border: '1px solid' }} />
      <Work />
      <Stack />
      <Edu />
      <Pub />
      <Hooks />
    </>
  )
}
