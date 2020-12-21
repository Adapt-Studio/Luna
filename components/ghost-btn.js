import Link from 'next/link'
export default function GhostBtn(props) {
	return (
	<Link href={`${props.url}`}><button className="px-8 py-1 bg-white border-solid border-2 border-black rounded-md">{props.text}</button></Link>	
	);
}
