import React, { useState } from 'react';

import data from '../../data/data';
import List from '../List/List';
import './app.css';

export default function App() {
	const [list, setList] = useState(data);
	return (
		<List list={list} />
	);
}
