/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
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
                    <button><a href={data[selectProj].link} target='_blank'>More Details</a></button>
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
                    isSelected={selectProj === 'MyKAU'}
                    onSelect={() => handleSelection('MyKAU')}
                    >
                        MyKAU Alternative Design
                    </TabProj>
                    <TabProj 
                    isSelected={selectProj === 'MyWebsite'}
                    onSelect={() => handleSelection('MyWebsite')}
                    >
                        My Website
                    </TabProj>
                    <TabProj 
                    isSelected={selectProj === 'OdusPlus'}
                    onSelect={() => handleSelection('OdusPlus')}
                    >
                        OdusPlus Alternative Design
                    </TabProj>
                    <TabProj 
                    isSelected={selectProj === 'MostViews'}
                    onSelect={() => handleSelection('MostViews')}
                    >
                        Best Video Views
                    </TabProj>
                    <TabProj 
                    isSelected={selectProj === 'Excel'}
                    onSelect={() => handleSelection('Excel')}
                    >
                        Excel
                    </TabProj>
                    <TabProj 
                    isSelected={selectProj === 'PowerBI'}
                    onSelect={() => handleSelection('PowerBI')}
                    >
                        PowerBI
                    </TabProj>
                </div>
                {tabContent}
            </div>
        </div>
        </>
    )
}