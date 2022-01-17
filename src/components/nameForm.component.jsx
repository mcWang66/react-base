import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',article:'请撰写一篇关于你喜欢的 DOM 元素的文章.'};

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange=(event)=>{
    if  (event.target.name === 'name') {
      this.setState({name: event.target.value});
    } 
    if  (event.target.name === 'article') {
      this.setState({article: event.target.value});
    } 
  }

  handleSubmit=(event)=> {
    alert('提交的名字: ' + this.state.name + '\n' + '提交的文章: ' + this.state.article);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type="text"  name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        
        <label>
          文章:
          <textarea value={this.state.article} name="article" onChange={this.handleChange} />
          
        </label>
        <input type="file" />
        <input type="submit" value="提交" />
        

      </form>
    );
  }
}

export default NameForm;