import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<PersistGate loading="null" persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
);


