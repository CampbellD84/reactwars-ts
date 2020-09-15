import React, { FC, useEffect, useState } from 'react';
import Character from './components/Character'
import { getChars } from './API'

const App: FC = () =>  {
  const [swChars, setSwChars] = useState<IChar[]>([])

  const fetchChars = (): void => {
    getChars()
      .then(({ data: { results } }: IChar[] | any) => setSwChars(results))
      .catch((err: Error) => console.log(err))
  }

  useEffect(() => {
    fetchChars()
  }, [])

  

  return (
    <div className="App">
      {swChars.map((swChar: IChar) => (
        <Character character={swChar} key={swChar.name}/>
      ))}
    </div>
  );
}

export default App;
