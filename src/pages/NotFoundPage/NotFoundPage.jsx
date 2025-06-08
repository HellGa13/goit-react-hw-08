import { NavLink } from 'react-router';

export default function NotFoundPage() {
  return (
    <div>
      Sorry, nothing here, go <NavLink to="/"> Home</NavLink>
    </div>
  );
}