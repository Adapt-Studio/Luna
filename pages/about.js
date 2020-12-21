import Layout from '../components/layout'
export default function About() {
  return (	
	<Layout>
		<div className="flex justify-evenly items-center w-4/5 mx-auto">
	  		<img className="w-8/12" src="/images/about.png" alt="About Image"/>
	  		<div className="max-width-4/6 flex flex-col justify-evenly items-start ml-12">
	  			<h2 className="font-serif text-3xl">About The Luna Collection...</h2>
	  			<p className="my-10">Amet eos sapiente nemo consectetur expedita quod! Aspernatur distinctio nesciunt fugiat soluta qui Fugiat deserunt exercitationem iusto maxime commodi Libero fuga quas totam non in eos excepturi? Suscipit libero assumenda.</p>
	  			<p className="mb-8">Amet eos sapiente nemo consectetur expedita quod! Aspernatur distinctio nesciunt fugiat soluta qui Fugiat deserunt exercitationem iusto maxime commodi Libero fuga quas totam non in eos excepturi? Suscipit libero assumenda.</p>
	  			<p>Tina x</p>
	  		</div>
	  	</div>
	</Layout>
  );
}
