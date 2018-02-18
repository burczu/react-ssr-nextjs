import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <div>
        <Link href="/about"><a>About</a></Link>
      </div>
      <hr />
      <div>Hello world!</div>
    </div>
  );
}

export default Index;
