import React from 'react';

export default function () {
	return (
		<div className='settings-bar' >
			<div className='checkboxes'>
				<div className='checkbox'>
					<label for='sndAlert'>Sound Alert</label>
						<input type='checkbox' id='sndAlert' value='soundAlert' />
					
				</div>
				<div className='checkbox'>
					<label for='ppUp'>Popup</label>
						<input type='checkbox' id='ppUp' value='popUp' />
					
				</div>
				<div className='checkbox'>
					<label for='rpt'>Repeat</label>
						<input type='checkbox' id='rpt' value='repeat' />
					
				</div>
				<div className='checkbox'>
					<label for='bgMusic'>Background Music</label>
						<input type='checkbox' id='bgMusic' value='backgroundMusic' />
					
				</div>
				<div className='checkbox'>
					<label for='bgImage'>Background Image</label>
						<input type='checkbox' id='bgImage' value='backgroundImage' />
					
				</div>
			</div>


			<div className='drop-down'>
				<div>
					<label>Music</label>
				</div>

				<div>
					<select id = "myMusic">
		               <option value = "Birds">Birds</option>
		               <option value = "Classical">Classical</option>
		               <option value = "Waterfall">Waterfall</option>
		               <option value = "Thunder">Thunder</option>
		               <option value = "Rain">Rain</option>
		               <option value = "Whales">Whales</option>
	             	</select>
				</div>
			</div>
			
			<div className='drop-down'>
				<div>
					<label>Image</label>
				</div>

				<div>
					<select id = "myImage">
		               <option value = "Birds">Birds</option>
		               <option value = "Classical">Classical</option>
		               <option value = "Waterfall">Waterfall</option>
		               <option value = "Thunder">Thunder</option>
		               <option value = "Rain">Rain</option>
		               <option value = "Whales">Whales</option>
	             	</select>
				</div>
			</div>
             
			
		</div>
	)
}