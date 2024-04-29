import MainDescription from "./Main/MainDescription"
import MainStats from "./Main/MainStats"
import MainWeather from "./Main/MainWeather"


const Main = () => {
  return (
    <div className='flex justify-around items-start'>
      <MainDescription/>
      <MainWeather/>  
      <MainStats/>
    </div>
  )
}

export default Main