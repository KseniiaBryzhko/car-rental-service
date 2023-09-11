import Navigation from 'components/Navigation/Navigation';

const Header = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Navigation />
    </div>
  );
};

export default Header;
