import React from 'react';
import './Board.css';
import angular from './angular.svg';
import asd from './asd.svg';
import brown from './brown.svg';
import react from './react.svg';
import ember from './ember.svg';
import javascript from './javascript.svg';
import vue from './vue.svg';
import kiwi from './kiwi.svg';
import detail from './detail.jpg';



const Board=()=>{
	return(<div className='memory-game'>
		<div className='memory-card'>
		<img className='front-face' alt='detail' src={angular}/> 
		<img className='back-face' alt='angular' src={detail}/>
		</div>
		<div className='memory-card'>
		<img className='front-face' alt='detail' src={brown}/> 
		<img className='back-face' alt='brown' src={detail}/>
		</div>
		<div className='memory-card'>
		<img className='front-face' alt='detail' src={react}/> 
		<img className='back-face' alt='react' src={detail}/>
		</div>
		<div className='memory-card'>
		<img className='front-face' alt='detail' src={angular}/> 
		<img className='back-face' alt='angular' src={detail}/> 
		</div>
		<div className='memory-card'>
		<img className='front-face' alt='detail' src={brown}/> 
		<img className='back-face' alt='brown' src={detail}/>
		</div>
		<div className='memory-card'>
		<img className='front-face' alt='detail' src={react}/> 
		<img className='back-face' alt='react' src={detail}/> 
		</div>
		<div className='memory-card'>
		<img className='front-face' alt='detail' src={ember}/> 
		<img className='back-face' alt='ember' src={detail}/>
		</div>
		<div className='memory-card'>
		<img className='front-face' alt='detail' src={vue}/> 
		<img className='back-face' alt='brown' src={detail}/>
		</div>
		<div className='memory-card'>
		<img className='front-face' alt='detail' src={ember}/> 
		<img className='back-face' alt='ember' src={detail}/>
		</div>
		<div className='memory-card'>
		<img className='front-face' alt='detail' src={vue}/> 
		<img className='back-face' alt='brown' src={detail}/>
		</div>
		<div className='memory-card'>
		<img className='front-face' alt='detail' src={javascript}/> 
		<img className='back-face' alt='ember' src={detail}/>
		</div>
		<div className='memory-card'>
		<img className='front-face' alt='detail' src={asd}/> 
		<img className='back-face' alt='ember' src={detail}/>
		</div>
		<div className='memory-card'>
		<img className='front-face' alt='detail' src={javascript}/> 
		<img className='back-face' alt='' src={detail}/> 
		</div>
		<div className='memory-card'>
		<img className='front-face' alt='detail' src={kiwi}/> 
		<img className='back-face' alt='ember' src={detail}/>
		</div>
		<div className='memory-card'>
		<img className='front-face' alt='detail' src={kiwi}/> 
		<img className='back-face' alt='ember' src={detail}/>
		</div>
		<div className='memory-card'>
		<img className='front-face' alt='detail' src={asd}/> 
		<img className='back-face' alt='ember' src={detail}/>
		</div>

		</div>
	);
}

export default Board;