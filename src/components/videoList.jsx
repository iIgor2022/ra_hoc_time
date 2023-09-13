import uniqid from 'uniqid'
import Video from './video'

export default function VideoList(props) {
  return props.list.map(item => <Video key={uniqid()} url={item.url} date={item.date}/>);
}