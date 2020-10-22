import React, {useState, useEffect} from 'react';
import LineUp from './LineUp';
import Logo from './Logo';
import Social from './Social';
import NavigationArea from './NavigationArea';
import CharacterName from './CharacterName';
import Avatar from './Avatar';
import Description from './Description';
import LineDown from './LineDown';
import LearMore from './LearnMore';
import Arrow from './Arrow';
import Portal from './Portal';


export default function GridContainer(){

    const URL = 'https://rickandmortyapi.com/api/character/'
    
    const [count, setCount] = useState(1);
    const [data, setData] = useState({});
    const [portal, setPortal] = useState('no-portal');

    function countUp(){
        setCount(count+1);
    }
    
    useEffect(() => {
        setPortal('portal');
        getData(`${URL}${count}`);
        console.log(portal)
    }, [count]);

    async function getData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPortal('no-portal');
            setData(data);
        } catch(e) {
          console.log(e);
        }
        }

    
    // console.log(data)
    // console.log(count)

    return(
        <div className="grid-container">
            <Portal state={portal} />
            <LineUp/>
            <Logo/>
            <Social/>
            <NavigationArea text="name"/>
            <CharacterName name={data.name}/>
            <Avatar image={data.image} name= {data.name}/>
            <NavigationArea text="about"/>
            <Description gender={data.gender} status={data.status} species={data.species}/>
            <LineDown/>
            <LearMore/>
            <Arrow countFn={countUp}/>
        </div>
    );
}