function Header(props) {
  return(
    <div>
      <h1>header, {props.name}</h1>
      <ul>
        
        {props.list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>

    </div>

  );
}
export default Header;