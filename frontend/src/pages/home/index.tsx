import TrackCard from '@/components/card/TrackCard'
import { Button } from '@/components/ui/button'
import { useGetRequestQuery } from '@/contexts/api/soundtrackApiService'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
const Home: FC = () => {
  const navigate = useNavigate()

  const { data } = useGetRequestQuery('/testEndpoint')
  console.log('🚀 ~ testDAta:', data)
  return (
    <>
      <div className='flex justify-between items-center w-full max-w-screen-xl mx-auto mb-4 '>
        <h1>Home</h1>
        <Button onClick={() => navigate('/sign-in')}>Log In</Button>
      </div>
      <TrackCard />
    </>
  )
}

export default Home
