import './Projects.css';
import { useState } from 'react';
import {data} from './ProjectData'
import TabProj from './TabProj';
export default function Projects(){
    const [selectProj , setSelectProj] = useState(0)

    function handleSelection(selectedButton){
        setSelectProj(selectedButton);
    }

    let tabContent = <p>Plz select a  project</p>;

    if (selectProj) {
        tabContent = (
            <div className='containerRow' id="tab-content">
                <img src={data[selectProj].img} alt='Image of Project' />
                <div className='Container tabDesc'>
                    <h2>{data[selectProj].title}</h2>
                    <p>{data[selectProj].content}</p>
                </div>
            </div>
        );
    }

    return(
        <>
        <div className='section projectsSection'>
            <div className='container' id='projects'>
                <h4 className='titlePorjects'>{`< My Projects />`}</h4>
                <div className='projButton'>
                    <TabProj 
                    isSelected={selectProj === 'hello'}
                    onSelect={() => handleSelection('hello')}
                    >
                        Hello Test
                    </TabProj>
                    <TabProj 
                    isSelected={selectProj === 'python'}
                    onSelect={() => handleSelection('python')}
                    >
                        python Test
                    </TabProj>
                </div>
                {tabContent}
            </div>
        </div>
        </>
    )
}