import './App.css'
import VideoList from './components/videoList'
import { videoList } from './data/videoList'

export default function App() {
  return (
    <VideoList list={videoList}/>
  )
}