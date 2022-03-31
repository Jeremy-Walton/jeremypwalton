import { Link } from "remix";

export default function Index() {
  return (
    <div className='container margin-top-md'>
      <Link to='dashboard'>Dashboard</Link>
    </div>
  );
}
