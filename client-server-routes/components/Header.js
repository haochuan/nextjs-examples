import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/user">
      <a style={linkStyle}>User</a>
    </Link>
  </div>
);

export default Header;
