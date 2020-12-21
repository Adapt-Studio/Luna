import Link from 'next/link'
import GhostBtn from './ghost-btn'

export default function Product(props) {
	return (
	<div className="w-4/12 flex flex-col justify-evenly items-center space-y-1">
		<img className="w-72 h-72 bg-gray-500"src={props.img} alt={props.title}/>
		<h3 className="font-medium text-black">{props.title}</h3>
		<span>{props.price}</span>
		<GhostBtn url={props.url} text="Add to Bag"/>
	</div>
	);
}
